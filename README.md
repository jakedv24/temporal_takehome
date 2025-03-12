## Temporal Take-Home Assignment

Time-boxed ~2 hrs.

## Implementation Details

I decided to write a React application with next.js and Typescript. This is my first time using next.js, I wanted to try and learn something new and give myself a little challenge. I'm quite sure there is plenty of improvement around routing and project structure / server-side rendering improvements to be made here as a result of that.

I have successfully implemented:

1. Search input with debouncing
2. Unrequested / error / empty / success / retry (with a button) states in the pokemon list
3. Selectable pokemon that route to a details page (just fed with query params since the API docs didn't have more details than the search endpoints)
4. Pagination auto-handling.

## Running Locally

Install dependencies:

```
npm install
```

Run Next.js server:

```
npm run dev
```
