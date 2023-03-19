// src/config.ts
export function getApiKey(): string {
    const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;
    if (!apiKey) {
      throw new Error('Missing API key: Please set REACT_APP_ALCHEMY_API_KEY in the .env file');
    }
    return apiKey;
  }
  