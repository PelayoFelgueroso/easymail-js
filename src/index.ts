export interface EasyMailJSOptions {
  templateId: string;
  to: string;
  variables?: Record<string, any>;
}

export class EasyMailJS {
  private apiKey: string;
  private secretKey: string;
  private baseURL: string;

  constructor(
    apiKey: string,
    secretKey: string,
    baseURL = "https://easymailjs.com/api"
  ) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.baseURL = baseURL;
  }

  async send(options: EasyMailJSOptions) {
    const res = await fetch(`${this.baseURL}/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "x-secret-key": this.secretKey,
      },
      body: JSON.stringify(options),
    });

    if (!res.ok) throw new Error(`Error al enviar el email: ${res.status}`);
    return await res.json();
  }
}
