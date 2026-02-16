import { tts } from 'edge-tts';

export async function synthesizeSpeech(text: string): Promise<ArrayBuffer> {
  // Using an Arabic voice, e.g., 'ar-SA-ZariyahNeural' (Female) or 'ar-SA-HamedNeural' (Male)
  const voice = 'ar-SA-ZariyahNeural';

  try {
    const buffer = await tts(text, {
      voice: voice,
    });
    return buffer.buffer as ArrayBuffer;
  } catch (error) {
    console.error('Edge TTS Error:', error);
    throw new Error('Failed to synthesize speech using Edge TTS');
  }
}
