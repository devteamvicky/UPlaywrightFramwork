import { test as fixtureTest} from "@playwright/test"
import { RequestHandler } from "./request-handler"

export type reqHandType={
    given:RequestHandler
}

export const Given = fixtureTest.extend<reqHandType>({given:async({},use)=>{
    const requesthandler = new RequestHandler();
    await use(requesthandler);
}})