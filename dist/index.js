export class UpsendJS {
    constructor(apiKey, secretKey, baseURL = "https://wwww.upsend.dev/api") {
        this.apiKey = apiKey;
        this.secretKey = secretKey;
        this.baseURL = baseURL;
    }
    async send(options) {
        const res = await fetch(`${this.baseURL}/email/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
                "x-secret-key": this.secretKey,
            },
            body: JSON.stringify(options),
        });
        if (!res.ok)
            throw new Error(`Error al enviar el email: ${res.status}`);
        return await res.json();
    }
}
