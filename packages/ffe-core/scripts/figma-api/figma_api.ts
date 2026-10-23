import {
    GetLocalVariablesResponse,
    PostVariablesRequestBody,
    PostVariablesResponse,
} from '@figma/rest-api-spec';

export default class FigmaApi {
    private baseUrl = 'https://api.figma.com';
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    private async request<T>(path: string, init: RequestInit = {}) {
        const resp = await fetch(`${this.baseUrl}${path}`, {
            ...init,
            headers: {
                Accept: '*/*',
                'X-Figma-Token': this.token,
                ...init.headers,
            },
        });

        if (!resp.ok) {
            throw new Error(
                `Figma API ${init.method ?? 'GET'} ${path} failed: ${resp.status} ${await resp.text()}`,
            );
        }

        return (await resp.json()) as T;
    }

    async getLocalVariables(fileKey: string) {
        return this.request<GetLocalVariablesResponse>(
            `/v1/files/${fileKey}/variables/local`,
        );
    }

    async postVariables(fileKey: string, payload: PostVariablesRequestBody) {
        return this.request<PostVariablesResponse>(
            `/v1/files/${fileKey}/variables`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            },
        );
    }
}
