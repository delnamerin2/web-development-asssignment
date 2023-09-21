import { astronaut } from "./IAstronaut.js";
import { cargo } from "./ICargo.js";
import { Rocket } from "./IRocket.js";


class Astro {
    static cargo1 = new cargo(1000, "bread");
    static cargo2 = new cargo(20000, "water");
    static astronaut1 = new astronaut(75, "Baby");
    static astronaut2 = new astronaut(810, "Venu");

    static cargoLoad: cargo[] = [this.cargo1, this.cargo2];
    static astronautLoad: astronaut[] = [this.astronaut1, this.astronaut2];

    static rocket1 = new Rocket("chandrayan", 5100, this.cargoLoad, this.astronautLoad);
    static main(opt: number) {
        if (opt == 1)
            return this.rocket1.sumMass(Astro.cargoLoad);
        else if (opt == 2)
            return this.rocket1.currentMassKg();
        else if (opt == 3) {
            const newCargoItem = prompt("Enter the material of the cargo item: ");
            const newCargoMass = parseInt(prompt("Enter the mass of the cargo item: "));
            const newCargo = new cargo(newCargoMass, newCargoItem);
            return this.rocket1.canAdd(newCargo);
        }
        else if (opt == 4) {
            const newCargoItem = prompt("Enter the material of the cargo item: ");
            const newCargoMass = parseInt(prompt("Enter the mass of the cargo item: "));
            const newCargo = new cargo(newCargoMass, newCargoItem);
            return this.rocket1.addCargo(newCargo);
        }
        else if (opt == 5) {
            const newAstronautName = prompt("Enter the name of the astronaut: ");
            const newAstronautMass = parseInt(prompt("Enter the mass of the astronaut: "));
            const newAstronaut = new astronaut(newAstronautMass, newAstronautName);
            return this.rocket1.addAstronaut(newAstronaut);
        }
    }
}
do {
    const option = parseInt(prompt("choose an option\n1.sumMass\n2.currentMassKg\n3.canAdd\n4.addCargo\n5.addAstronaut"));
    console.log(Astro.main(option));
} while (confirm("Do you want to continue?")); 