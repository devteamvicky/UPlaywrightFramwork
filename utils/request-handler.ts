import { test, expect } from "@playwright/test";

export class RequestHandler{

    private baseURl:string="";
    private endponit:string="";
    private queryParameters:object={};
    private header:object={};
    private reqBody:object={};


    baseURI(url:string){
        this.baseURl=url;
        return this;
    }
    path(pathParams:string){
        this.endponit = pathParams;
        return this;
    }
    queryParams(queryParams:object){
        this.queryParameters=queryParams;
        return this;
    }
    headers(requestHeaders:object){
        this.header=requestHeaders;
        return this;
    }
    requestBody(requestBody:object){
        this.reqBody=requestBody;
        return this;
    }

}