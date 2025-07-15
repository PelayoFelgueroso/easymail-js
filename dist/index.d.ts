export interface UpsendJSOptions {
    templateId: string;
    to: string;
    variables?: Record<string, any>;
}
export declare class UpsendJS {
    private apiKey;
    private secretKey;
    private readonly baseURL;
    constructor(apiKey: string, secretKey: string, baseURL?: string);
    send(options: UpsendJSOptions): Promise<any>;
}
