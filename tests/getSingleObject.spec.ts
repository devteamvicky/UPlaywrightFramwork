import {test,expect} from "@playwright/test";

test("Get Single Object",async({request})=>{
let objID:string ="9";
const getSingleObjectResponse = await request.get(`https://api.restful-api.dev/objects/${objID}`);
const getSingleObjectJSON = await getSingleObjectResponse.json();

//validation
expect(getSingleObjectResponse.status()).toEqual(200);
expect(getSingleObjectJSON.id).toEqual(objID);

console.log(getSingleObjectJSON);
});