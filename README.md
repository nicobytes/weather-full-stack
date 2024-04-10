![capture](/images/weather.jpg)

# Weather App Overview

This is a weather app to display the current weather for a given city. The app is built with Angular and uses the TaildwindCSS library for styling, in the backend side it uses NestJS to fetch the data from the OpenWeatherMap API.

## 🚀 Services

![capture](/images/services.png)

- Backend: https://weather-api-nestjs-8447e2d5502a.herokuapp.com/docs
- Frontend: https://weather.nicobytes.com/
- Weather API: https://openweathermap.org/

## 🧱 Stack

- Frontend
  - Framework: [Angular](https://angular.dev/)
  - Styling: [Tailwind CSS](https://tailwindcss.com/)
  - Headless component primitives: [Angular CDK](https://material.angular.io)
- Backend: 
  - API: [NestJS](https://nestjs.com/)

## 🚀 Quickstart

### 1. Fork and Clone repo

Fork the repo to your Github account, then run the following command to clone the repo:

```
git clone git@github.com/nicobytes/weather-full-stack
```

### 2. Install dependencies

```
cd apps/website
npm i

cd apps/api
npm i
```

### 5. Run app locally

```
cd apps/website
npm run start

cd apps/api
npm run start:Dev
```

## 🚀 Backend

The backend is built with NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. The backend is responsible for fetching the data from the OpenWeatherMap API.

![capture](/images/weather_docs.jpg)

In several endpoints, the backend will fetch the data from the OpenWeatherMap API and proccess the data to return the desired information for the frontend app and store the OpenWeatherMap KEY to not expose this key in the frontend.

## 🚀 Frontend

The frontend is built with Angular, a platform and framework for building web applications using HTML, CSS and TypeScript. The frontend is responsible for displaying the current weather for a given city.


### Dark and light mode support

The app supports dark and light mode, the user can switch between the two modes by clicking the toggle button in the top right corner of the app.

![capture](/images/weather_dark.jpg)

### Search for a city

The user can search for a city by typing the city name in the search bar, and autocomplete suggestions help the user select the desired city.

![capture](/images/weather_search.jpg)

### Track the user's location

The app can track the user's location and display the current weather for the user's location each 5 minutes.

### Using Angular Signals

The application uses Angular signals like a reactive pattern to communicate between components, services, and directives.

## 🚀 Deployment

The project has automatic deployment to Heroku for the API, the frontend in Cloudflare pages. This process is done by Github actions, and run lint and build the project before deploying.

![capture](/images/weather_deployment.jpg)

