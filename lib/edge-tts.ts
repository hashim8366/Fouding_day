import { Buffer } from "node:buffer";
import { WebSocket } from "ws";
import { randomUUID } from "node:crypto";

function uuid() {
  return randomUUID().replaceAll("-", "");
}

export async function synthesizeSpeech(text: string): Promise<Buffer> {
  const voice = 'ar-SA-ZariyahNeural';
  const volume = '+0%';
  const rate = '+0%';
  const pitch = '+0Hz';

  return new Promise((resolve, reject) => {
    const baseUrl = "speech.platform.bing.com/consumer/speech/synthesize/readaloud";
    const token = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
    const webSocketURL = `wss://${baseUrl}/edge/v1?TrustedClientToken=${token}&ConnectionId=${uuid()}`;

    const ws = new WebSocket(webSocketURL, {
      host: "speech.platform.bing.com",
      origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.66 Safari/537.36 Edg/103.0.1264.44"
      }
    });

    const audioData: Buffer[] = [];

    ws.on("message", (rawData, isBinary) => {
      if (!isBinary) {
        const dataStr = rawData.toString("utf8");
        if (dataStr.includes("turn.end")) {
          ws.close();
          resolve(Buffer.concat(audioData));
        }
        return;
      }

      const data = rawData as Buffer;
      const separator = "Path:audio\r\n";
      const separatorIndex = data.indexOf(separator);
      if (separatorIndex !== -1) {
        const content = data.subarray(separatorIndex + separator.length);
        audioData.push(content);
      }
    });

    ws.on("error", (err) => {
      ws.close();
      reject(err);
    });

    ws.on("open", () => {
      const speechConfig = JSON.stringify({
        context: {
          synthesis: {
            audio: {
              metadataoptions: { sentenceBoundaryEnabled: false, wordBoundaryEnabled: false },
              outputFormat: "audio-24khz-48kbitrate-mono-mp3"
            }
          }
        }
      });

      const configMessage = `X-Timestamp:${new Date().toString()}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n${speechConfig}`;

      ws.send(configMessage, { compress: true }, (configError) => {
        if (configError) {
          ws.close();
          reject(configError);
          return;
        }

        const ssmlMessage = `X-RequestId:${uuid()}\r\nContent-Type:application/ssml+xml\r\n` +
                            `X-Timestamp:${new Date().toISOString()}\r\nPath:ssml\r\n\r\n` +
                            `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>` +
                            `<voice name='${voice}'><prosody pitch='${pitch}' rate='${rate}' volume='${volume}'>` +
                            `${text}</prosody></voice></speak>`;

        ws.send(ssmlMessage, { compress: true }, (ssmlError) => {
          if (ssmlError) {
            ws.close();
            reject(ssmlError);
          }
        });
      });
    });
  });
}
