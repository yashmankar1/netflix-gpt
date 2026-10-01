# 🎬 Netflix GPT

An **AI-powered Netflix-style movie discovery application** built with React. Browse movies, watch trailers, explore recommendations, and use AI-powered search to discover movies using natural-language prompts.

💻 **GitHub:** [yashmankar1/netflix-gpt](https://github.com/yashmankar1/netflix-gpt)

---

## ✨ Features

* 🔐 **Firebase Authentication** — User sign-up, login, and logout
* 🎬 **Netflix-style UI** — Browse movies through a modern responsive interface
* 🔥 **Movie Recommendations** — Discover trending and recommended movies
* 🎞️ **Movie Trailers** — Watch trailers with dynamic background playback
* 🤖 **AI Movie Search** — Use natural-language prompts to discover movies
* 🔎 **Gemini Integration** — AI-powered movie recommendations using Google Gemini
* 📱 **Responsive Design** — Optimized for different screen sizes
* 🔄 **Redux Toolkit** — Global state management
* 🧭 **React Router** — Client-side navigation
* ⚡ **Loading States** — Improved user experience while fetching data

---

## 🛠️ Tech Stack

### Frontend

* **React 19**
* **Vite**
* **Redux Toolkit**
* **React Router**
* **Tailwind CSS**
* **React Icons**

### APIs & Services

* **TMDB API** — Movie data and metadata
* **Google Gemini API** — AI-powered movie recommendations
* **Firebase Authentication** — User authentication

---

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │     React + Vite     │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       ┌────────────┐   ┌────────────┐   ┌────────────┐
       │  Firebase  │   │  TMDB API  │   │ Gemini API │
       │    Auth    │   │   Movies   │   │     AI     │
       └────────────┘   └────────────┘   └────────────┘
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                       ┌──────────────┐
                       │    Redux     │
                       │    Toolkit   │
                       └──────────────┘
```

---

## 🤖 AI Movie Search

The application integrates the **Google Gemini API** to provide AI-powered movie recommendations.

Users can enter natural-language prompts such as:

```text
"Recommend some mind-bending science fiction movies"
```

The application sends the prompt to Gemini and uses the AI-generated response to discover relevant movies through the movie search workflow.

This allows users to search for movies based on **what they want to watch**, rather than only entering a movie title.

---

## 🎬 Movie Experience

Movie information is fetched using the **TMDB API**.

The application provides:

* Trending movies
* Movie recommendations
* Movie posters
* Movie information
* Movie trailers
* Dynamic movie sections
* Background trailer playback

A custom `useMovieTrailer` hook is used to manage trailer-related data and playback.

---

## 🔐 Authentication

**Firebase Authentication** is used to manage user authentication.

The application supports:

* User sign-up
* User login
* User logout
* Authentication state management

The authenticated user is also managed through **Redux Toolkit**.

---

## 🚀 Run Locally

### Prerequisites

* Node.js 20+
* Firebase project
* TMDB API key
* Google Gemini API key

### Clone the repository

```bash
git clone https://github.com/yashmankar1/netflix-gpt.git
cd netflix-gpt
```

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your credentials.

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Use the exact environment variable names required by your implementation.

**Never commit API keys or other sensitive credentials to GitHub.**

### Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📚 What I Learned

* Building a modern React application with Vite
* Managing global state using Redux Toolkit
* Implementing authentication with Firebase
* Working with external REST APIs
* Integrating TMDB movie data
* Integrating the Google Gemini API
* Using prompt engineering for AI-powered recommendations
* Creating reusable React components and custom hooks
* Managing authentication and application state
* Building responsive interfaces with Tailwind CSS
* Managing API credentials using environment variables
* Structuring and deploying a React application

---

## 👨‍💻 Author

**Yash Mankar**

[GitHub](https://github.com/yashmankar1)

> Inspired by the Netflix-style application from the Namaste React learning journey, with custom UI improvements and AI-powered movie recommendations using Google Gemini.

⭐ **If you like the project, consider giving the repository a star!**
