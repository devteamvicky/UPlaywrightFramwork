import { test, expect } from "@playwright/test";

export class RequestHandler {

    private baseURl: string = "";
    private endpoint: string = "";
    private queryParameters: object = {};
    private header: object = {};
    private reqBody: object = {};
    private defaultBaseURL: string = 'https://packages.debian.org/stable/';


    baseURI(url: string) {
        this.baseURl = url;
        // console.log(`BASE URI : ${this.baseURI.toString}`);
        return this;
    }
    path(pathParams: string) {
        this.endpoint = pathParams;
        // console.log(`pathParams  : ${this.endponit.toString}`);

        return this;
    }
    queryParams(queryParams: object) {
        this.queryParameters = queryParams;
        // console.log(`queryParameters  : ${this.queryParameters.toString}`);

        return this;
    }
    headers(requestHeaders: object) {
        this.header = requestHeaders;
        return this;
    }
    requestBody(requestBody: object) {
        this.reqBody = requestBody;
        return this;
    }

    /**
     * This build custome url builder for queryparameters and append create url string
     */
    getURL() {
        const defaultURL = new URL(`${this.baseURl ?? this.defaultBaseURL}${this.endpoint}`)
        for (const [key, value] of Object.entries(this.queryParameters)){

            defaultURL.searchParams.append(key,value);

        }
        console.log(defaultURL.toString());
    }

}