# Mini Analytics Portal (React + TypeScript)

## Setup

Install dependencies:

npm install

Run app:

npm run dev

---

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- Zustand (Auth State)
- TanStack Query (Server State Simulation)
- Recharts (Visualization)
- Tailwind CSS (UI)
- Dayjs (Date utilities)

---

## Authentication

- Mock authentication implemented using Zustand.
- Credentials:
  editor@demo.com / password123
- Auth state persisted using localStorage via Zustand persist middleware.
- Protected routes redirect unauthenticated users to login.

---

## URL State Handling

- Filters (project, date range, event, breakdown) are synced with URL search params.
- Implemented using React Router useSearchParams.
- Enables shareable dashboard views and state persistence on refresh.

---

## Data Simulation (No Backend)

- Analytics data generated locally using deterministic seeded functions.
- Artificial network latency simulated using async delay.
- Error simulation added with configurable probability (default 10%).

---

## Performance Optimizations

- Memoized Chart and Table components.
- React Query caching avoids redundant computations.
- Filter-driven refetching via stable query keys.

---

## CSV Export

- Top N table can be exported as CSV.
- Exported file exactly matches current visible table state.

---

## Tradeoffs & Assumptions

- Authentication is simplified for demo purposes.
- Real backend integration would use secure token storage and APIs.
- Dataset size kept small for performance and demo clarity.

---

## Time Spent

Approx: 10–12 hours

---

## Next Improvements

- Add pagination for Top N table
- Add skeleton loaders
- Add unit tests
- Add advanced date range picker
- Add dark mode

---

## AI Assistance Disclosure

Used AI assistance for architectural guidance and code optimization.
