## Weather APP

Simple weather APP with a form where you can search a location and check the current weather (temperature).

[Initial Layout](./src/assets/app-initial-layout.png)

## How to run

- Clone the repo
- Run `$ npm install`
- Run `$ npm run dev`

## Useful docs:

- https://react.dev/learn/typescript
- https://react.dev/learn/build-a-react-app-from-scratch
- https://react.dev/reference/react-dom/components/form

## Features

The application now:

- Uses the free Open‑Meteo geocoding and weather APIs to retrieve real data.
- Performs live autocomplete as the user types a location (with a small "Searching…" message while results load).
- Displays a dropdown of matching places and highlights the chosen one.
- Fetches current temperature on item selection (with a spinner while loading).
- Updates results in the same dialog and allows repeated searches without
  reloading the page.

Feel free to try new queries in the search modal and see the temperature update.

## Running the test suite

Unit tests are written with **Vitest** and **React Testing Library**. To execute them:

```bash
npm run test         # interactive/watch mode
npm run test:ci      # run once with coverage
```

Tests currently cover the search modal behaviour and the modal opener button, ensuring suggestions, loading states and weather display work as expected.
