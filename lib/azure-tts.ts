import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

export const getTTSConfig = () => {
  // If keys are not present, we should handle gracefully or mock in development if needed.
  // For now, we assume they are present as per instructions.
  const speechKey = process.env.AZURE_SPEECH_KEY;
  const speechRegion = process.env.AZURE_SPEECH_REGION;

  if (!speechKey || !speechRegion) {
      throw new Error("Azure Speech Key or Region not configured");
  }

  const speechConfig = sdk.SpeechConfig.fromSubscription(
    speechKey,
    speechRegion
  );

  // Using a natural Saudi Arabic voice
  speechConfig.speechSynthesisVoiceName = "ar-SA-ZariyahNeural"; // Female voice
  // or
  // speechConfig.speechSynthesisVoiceName = "ar-SA-HamedNeural"; // Male voice

  return speechConfig;
};

export const synthesizeSpeech = async (text: string): Promise<ArrayBuffer> => {
  const speechConfig = getTTSConfig();
  // We don't need audio output config here as we are getting the data in memory
  const synthesizer = new sdk.SpeechSynthesizer(speechConfig, undefined);

  return new Promise((resolve, reject) => {
    synthesizer.speakTextAsync(
      text,
      (result) => {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          resolve(result.audioData);
        } else {
          reject(new Error('Speech synthesis failed: ' + result.errorDetails));
        }
        synthesizer.close();
      },
      (error) => {
        synthesizer.close();
        reject(error);
      }
    );
  });
};
