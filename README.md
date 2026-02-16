# Saudi Founding Day - Interactive Web App

## Setup
1. Install dependencies: `npm install`
2. No API Key required for MS Edge TTS.
3. Run development server: `npm run dev`

## Features
- **Hero Section**: Animated introduction with audio welcome.
- **Timeline**: Interactive historical journey with MS Edge TTS audio.
- **Cultural Icons**: Grid of cultural symbols with details and audio.
- **Gallery**: Photo gallery with placeholders.
- **Events**: List of events.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS v4
- MS Edge TTS (via `edge-tts` package)
- Framer Motion

## Deployment on Wasmer Edge

1. Ensure you have the [Wasmer CLI](https://docs.wasmer.io/install) installed.
2. Run the build command:
   ```bash
   npm run build
   ```
   This will create a standalone build in `dist/standalone`.
3. Deploy to Wasmer:
   ```bash
   wasmer deploy
   ```
   The `wasmer.toml` configuration is set up to deploy the standalone server and map the static assets correctly.
