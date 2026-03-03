import React, { useState, useEffect } from "react";
import {
    StyledForm,
    StyledFormInnerContainer,
    StyledFormInput,
    StyledFormTitle,
    StyledModalCloseButton,
    StyledFormOuterContainer,
    SuggestionsContainer,
    SuggestionItem,
    WeatherResult,
    Loader
} from "./style";
import { fetchLocations, fetchWeather } from "../../API/search";
import type { Location } from "../../API/search";

interface modalProps {
    modalState: boolean;
    setModalState: (modalState: boolean) => void;
}

/**
 * Handler for closing/hiding the modal.
 */
const CloseModalButton = ({ modalState, setModalState }: modalProps) => {
    const closeModalHandler = () => {
        if (modalState) {
            setModalState(false);
        }
    };

    return (
        <StyledModalCloseButton onClick={closeModalHandler}>X</StyledModalCloseButton>
    );
};

/**
 * The form that lives inside the modal.  Most of the application state
 * (query text, suggestions list, loading flags, etc.) is managed here.
 */
const ModalForm = ({ modalState, setModalState }: modalProps) => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<Location[]>([]);
    const [suggestionsLoading, setSuggestionsLoading] = useState(false);
    const [selected, setSelected] = useState<Location | null>(null);
    const [weather, setWeather] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // clear state whenever the modal is closed so that the next time it opens
    // the user sees an empty search box.  We schedule the reset asynchronously
    // to avoid React's "setState in effect" warning.
    useEffect(() => {
        if (!modalState) {
            const id = window.setTimeout(() => {
                setQuery("");
                setSuggestions([]);
                setSelected(null);
                setWeather(null);
                setLoading(false);
                setError(null);
            }, 0);
            return () => window.clearTimeout(id);
        }
    }, [modalState]);

    // perform a debounced lookup for places as the user types
    useEffect(() => {
        if (query.trim().length === 0) {
            return;
        }

        const handler = setTimeout(() => {
            setSuggestionsLoading(true);
            fetchLocations(query)
                .then((places) => {
                    setSuggestions(places);
                    setError(null);
                })
                .catch(() => {
                    setError("Unable to load places");
                    setSuggestions([]);
                })
                .finally(() => {
                    setSuggestionsLoading(false);
                });
        }, 300);

        return () => clearTimeout(handler);
    }, [query]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setQuery(text);
        if (text.trim().length === 0) {
            setSuggestions([]);
            setSuggestionsLoading(false);
        }
        // fresh query should forget about previously selected location / weather
        setSelected(null);
        setWeather(null);
        setError(null);
    };

    const handleSuggestionClick = (loc: Location) => {
        // update the text box so the user sees the full name they chose
        setQuery(loc.name);
        // clear the dropdown so the selection is obvious
        setSuggestions([]);

        // immediately highlight and fetch the weather for the chosen location
        setSelected(loc);
        setWeather(null);
        setError(null);
        setLoading(true);

        fetchWeather(loc.latitude, loc.longitude)
            .then((res) => {
                setWeather(res.temperature);
            })
            .catch(() => {
                setError("Unable to fetch weather");
            })
            .finally(() => setLoading(false));
    };

    if (!modalState) return null;

    return (
        <StyledFormOuterContainer>
            <StyledFormInnerContainer>
                <CloseModalButton modalState={modalState} setModalState={setModalState} />
                <StyledFormTitle>Search Location 🌐</StyledFormTitle>
                <StyledForm
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <StyledFormInput
                        data-testid="search-input"
                        className="form-input"
                        name="query"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Type a city or address..."
                    />
                </StyledForm>

                {/* suggestion dropdown or loading message */}
                {suggestionsLoading && <WeatherResult>Searching…</WeatherResult>}
                {suggestions.length > 0 && (
                    <SuggestionsContainer>
                        {suggestions.map((loc) => (
                            <SuggestionItem
                                key={loc.id}
                                data-testid={`suggestion-${loc.id}`}
                                highlighted={selected?.id === loc.id}
                                onClick={() => handleSuggestionClick(loc)}
                            >
                                {loc.name}
                                {loc.country_code ? `, ${loc.country_code}` : ""}
                            </SuggestionItem>
                        ))}
                    </SuggestionsContainer>
                )}

                {/* loading spinner with message */}
                {loading && (
                    <>
                        <Loader data-testid="loader" />
                        <WeatherResult data-testid="weather-result">Fetching weather…</WeatherResult>
                    </>
                )}

                {/* error message */}
                {error && <WeatherResult data-testid="weather-result">{error}</WeatherResult>}

                {/* display temperature when available */}
                {weather !== null && !loading && (
                    <WeatherResult data-testid="weather-result">Current temperature: {weather}°C</WeatherResult>
                )}
            </StyledFormInnerContainer>
        </StyledFormOuterContainer>
    );
};

export const SearchModal = ({ modalState, setModalState }: modalProps) => {
    return <ModalForm modalState={modalState} setModalState={setModalState} />;
};
