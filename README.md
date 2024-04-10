# Weather App Overview

This is a weather app to display the current weather for a given city. The app is built with Angular and uses the TaildwindCSS library for styling, in the backend side it uses NestJS to fetch the data from the OpenWeatherMap API.

![capture](/public/capture-240404_blk.png)

## 🔍 Overview

- 🧱 [Stack](#-stack)
- 🚀 [Quickstart](#-quickstart)
- 🌐 [Deploy](#-deploy)

## 🧱 Stack

- Website: [Angular](https://nextjs.org/)
- API: [NestJS](https://sdk.vercel.ai/docs)
- Native App: [Ionic](https://sdk.vercel.ai/docs)
- Generative Model: [OpenAI](https://openai.com/)
- Search API: [Tavily AI](https://tavily.com/)
- Component library: [Angular](https://ui.shadcn.com/)
- Headless component primitives: [Angular CDK](https://www.radix-ui.com/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Quickstart

### 1. Fork and Clone repo

Fork the repo to your Github account, then run the following command to clone the repo:

```
git clone git@github.com:[YOUR_GITHUB_ACCOUNT]/morphic.git
```

### 2. Install dependencies

```
cd morphic
bun i
```

### 3. Fill out secrets

```
cp .env.local.example .env.local
```

Your .env.local file should look like this:

```
# OpenAI API key retrieved here: https://platform.openai.com/api-keys
OPENAI_API_KEY=[YOUR_OPENAI_API_KEY]

# Tavily API Key retrieved here: https://app.tavily.com/home
TAVILY_API_KEY=[YOUR_TAVILY_API_KEY]
```

### 4. Run app locally

```
bun dev
```

You can now visit http://localhost:3000.

## 🌐 Deploy

Host your own live version of Morphic with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiurla%2Fmorphic&env=OPENAI_API_KEY,TAVILY_API_KEY)
