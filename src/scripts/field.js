const fieldPlantsArr = [];

export const addPlant = (seedObj) => {
    fieldPlantsArr.push(seedObj)

}

export const usePlants = () => {
    return fieldPlantsArr.slice();
}


