import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { SearchModal } from './index';

// helper that sets up global.fetch responses based on URL
function mockFetch(responses: Record<string, any>) {
    vi.stubGlobal('fetch', vi.fn((input: RequestInfo) => {
        const url = typeof input === 'string' ? input : input.url;
        for (const key of Object.keys(responses)) {
            if (url.includes(key)) {
                const body = responses[key];
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(body),
                });
            }
        }
        return Promise.reject(new Error(`unhandled request: ${url}`));
    }));
}

describe('SearchModal component', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('does not render when modalState is false', () => {
        const { container } = render(
            <SearchModal modalState={false} setModalState={() => { }} />
        );
        expect(container).toBeEmptyDOMElement();
    });

    it('shows suggestions and then weather after selection', async () => {
        // prepare a two-part fetch stub: quick search response and a delayed
        // forecast response so the loader has time to render.
        vi.stubGlobal('fetch', vi.fn((input: RequestInfo) => {
            const url = typeof input === 'string' ? input : input.url;
            if (url.includes('/v1/search')) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ results: [{ id: 1, name: 'Testville', latitude: 10, longitude: 20 }] }),
                });
            }
            if (url.includes('/v1/forecast')) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            ok: true,
                            json: () => Promise.resolve({ current_weather: { temperature: 42 } }),
                        });
                    }, 100); // small delay
                });
            }
            return Promise.reject(new Error(`unhandled request: ${url}`));
        }));

        render(<SearchModal modalState={true} setModalState={() => { }} />);

        const input = screen.getByTestId('search-input') as HTMLInputElement;
        await userEvent.clear(input);
        await userEvent.type(input, 'Tes');

        await new Promise((r) => setTimeout(r, 350));

        await waitFor(() => {
            expect(screen.getByText('Testville')).toBeInTheDocument();
        });
        const suggestion = screen.getByText('Testville');

        await userEvent.click(suggestion);

        // loader should appear because forecast call is delayed
        expect(screen.getByTestId('loader')).toBeInTheDocument();

        // wait until the weather text updates to the temperature
        await waitFor(() => {
            expect(screen.getByTestId('weather-result')).toHaveTextContent(
                'Current temperature: 42°C'
            );
        });
    });
});
