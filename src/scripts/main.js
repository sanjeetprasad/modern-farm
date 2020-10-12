import { addPlant, usePlants } from './field.js';
import { createPlan } from './plan.js';
import { createCorn } from './seeds/corn.js';
import { createAsparagus } from "./seeds/asparagus.js"

import {plantSeeds} from './tractor.js';

const yearlyPlan = createPlan()

// console.log(yearlyPlan)


const asparagusSeed = createCorn()

// console.log(asparagusSeed)

const addPlants = addPlant(asparagusSeed)
// console.log(addPlants)



plantSeeds(createPlan())
const usePlant = usePlants()
console.log(usePlant)