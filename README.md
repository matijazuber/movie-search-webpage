# FlickFind

Movie search app built with **React** and **Vite**, powered by the [TMDB API](https://www.themoviedb.org/).

## Features

Search for any movie by title
Displays movie poster, release date, rating, and overview
Filters out results with no poster image
Responsive layout for mobile and desktop

![FlickFind Cover](./readme-cover.png)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/flickfind.git
cd flickfind
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root based on `.env.example`:

```bash
cp .env.example .env
```

Then add your TMDB API key. You can get one for free at [themoviedb.org](https://www.themoviedb.org/settings/api).

```
VITE_TMDB_API_KEY=your_api_key_here
```

### 4. Run the app

```bash
npm run dev
```

## Preview

Search for a movie and instantly see results with posters, ratings, and descriptions.
