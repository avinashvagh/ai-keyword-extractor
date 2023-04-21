# AI Keyword Extractor

This is a simple tool built with React and Chakra UI that uses the Open AI [chat completion API](https://platform.openai.com/docs/guides/completion) to extract the best keywords from any given text.

## Live Demo: https://ai-keyword-extractor-av.vercel.app

<div style="text-align:center">
<img src="./src/assets/screenshot.png" width="500">
</div>

## Technology Stack
- Frontend: React, Vite, Chakra-UI, Open AI API

## Features
- Intuitive User Interface: Enjoy a user-friendly experience while extracting keywords from any text.
- AI-Powered Extraction: Harness the power of OpenAI for high-quality keyword extraction.
- Seamless Setup: Easily set up and configure the tool with minimal steps.
- Customizable Settings: Personalize environment variables using the provided .env file.


## How to use

Install dependencies:

```bash
npm install
```

Rename `.env.example` to `.env` and add your API key. You can get your key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

```bash
VITE_OPENAI_API_KEY='ADD_YOUR_KEY_HERE'
```

Important: Your API key is not secure as there is no backend. If you decide to use this tool in production, you should add a backend to it and store the API key there.

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build for production:

```bash
npm run build
```

## License

MIT License
