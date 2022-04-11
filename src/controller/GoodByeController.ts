import { GoodbyeResponse } from "./types";
import { IGoodbyeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class GoodByeController implements IGoodbyeController { 
    public async getMessage(name?:string): Promise<GoodbyeResponse> { 
        LogSuccess('[/api/goodbye] Get Request')
        const date = new Date()
        return {
            message: `Goodbye ${name || "anonimus"}` ,
            date: `${date}`
        }
    }
}