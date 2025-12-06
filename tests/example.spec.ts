import { test, expect } from '@playwright/test';

test('Validate get all Object', async ({ request }) => {
  const response = await request.get("https://api.restful-api.dev/objects");
  const getAllObjectJSON = await response.json();
  console.log(getAllObjectJSON);

  //validation
  
  expect(getAllObjectJSON.length).toBe(13);
  expect(getAllObjectJSON[1].name).toEqual("Google Pixel 6 Pro");
  expect(response.status()).toEqual(200);

});

