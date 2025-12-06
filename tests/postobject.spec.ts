import { test, expect } from "@playwright/test";

import { RequestHandler } from "../utils/request-handler.ts";

const given = new RequestHandler();
const reqData = {
    data: {
        "name": "Vicky Brand Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }
}
test("Create Single Object", async ({ request }) => {
    const sigleObjectResponse = await request.post("https://api.restful-api.dev/objects", {
        data: {
            "name": "Vicky Brand Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        },
    })
    const sigleObjectJSON = sigleObjectResponse.json();
    console.log(sigleObjectJSON);
})

test.only("Validate Single Object with request-handler", async ({ }) => {
    const responseData = given
        .baseURI("https://api.restful-api.dev")
        .path("/objects")
        .requestBody(reqData)
    console.log(responseData);
})