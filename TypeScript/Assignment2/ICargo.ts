import { Ipayload } from "./payload.js";

class cargo implements Ipayload{
    massKg: number;
    material: string;
    constructor(massKg: number, material: string){
        this.massKg = massKg;
        this.material = material;
    }
}

export {cargo}