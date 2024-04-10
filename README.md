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

### 3. Run app locally

```
cd apps/website
npm run start:dev
# check the app in http://localhost:4200

cd apps/api
npm run start:dev
# check the app in http://localhost:3100/docs
```

## 🚀 Backend

The backend is built with NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. The backend is responsible for fetching the data from the OpenWeatherMap API.

![capture](/images/weather_docs.jpg)

In several endpoints, the backend will fetch the data from the OpenWeatherMap API and proccess the data to return the desired information for the frontend app and store the OpenWeatherMap KEY to not expose this key in the frontend.

### Folder structure

The backend app is organized in the following folder structure:

```sh
.
├── app.module.ts
├── config.ts
├── main.ts
├── models
│   └── api.interface.ts
└── weather
    ├── weather.controller.ts
    ├── weather.module.ts
    └── weather.service.ts
```

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

### Folder structure

The frontend app is organized in the following folder structure:

```sh
.
├── _routes.json
├── app
│   ├── app.component.ts
│   ├── app.config.server.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── components
│   │   ├── card-forecast
│   │   ├── card-humidity
│   │   ├── card-pressure
│   │   ├── card-simple
│   │   ├── card-sys
│   │   ├── card-visibility
│   │   ├── card-wind-speed
│   │   ├── pollution
│   │   ├── search
│   │   ├── theme-btn
│   │   └── weather
│   ├── models
│   │   └── api.interface.ts
│   ├── pages
│   │   └── home
│   └── services
│       ├── api.service.ts
│       └── ui.service.ts
├── assets
├── environments
│   ├── environment.development.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.server.ts
├── main.ts
└── styles.css
```

## 🚀 Deployment

This project was structured as a monorepo, with the frontend and backend in the same repository, and with Github actions to detect changes in the code and deploy the app to the cloud. As part of CI/CD, the project has a linter and build step before deploying the app. The project has automatic deployment to Heroku for the API, the frontend in Cloudflare pages.

![capture](/images/weather_deployment.jpg)

