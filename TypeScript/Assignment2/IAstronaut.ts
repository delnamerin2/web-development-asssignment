import { Ipayload } from "./payload.js";

class astronaut implements Ipayload{
    massKg: number;
    name: string;
    constructor(massKg: number, name: string){
        this.massKg = massKg;
        this.name = name;
    }
}

export{astronaut}