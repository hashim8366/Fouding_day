# Saudi Founding Day - Interactive Web App

## Setup
1. Install dependencies: `npm install`
2. Configure Azure Speech Service in `.env.local`:
   ```
   AZURE_SPEECH_KEY=your_key
   AZURE_SPEECH_REGION=your_region
   ```
3. Run development server: `npm run dev`

## Features
- **Hero Section**: Animated introduction with audio welcome.
- **Timeline**: Interactive historical journey with Azure TTS audio.
- **Cultural Icons**: Grid of cultural symbols with details and audio.
- **Gallery**: Photo gallery with placeholders.
- **Events**: List of events.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS v4
- Azure Cognitive Services Speech SDK
- Framer Motion
