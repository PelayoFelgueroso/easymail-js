export interface EasyMailJSOptions {
    templateId: string;
    to: string;
    variables?: Record<string, any>;
}
export declare class EasyMailJS {
    private apiKey;
    private secretKey;
    private baseURL;
    constructor(apiKey: string, secretKey: string, baseURL?: string);
    send(options: EasyMailJSOptions): Promise<any>;
}
