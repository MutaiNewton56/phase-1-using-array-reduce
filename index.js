const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteries = [4, 5, 3, 7, 2, 10];

const reducer = (batteryTotal, currentBattery) => batteryTotal + currentBattery;

const totalBatteries = batteries.reduce(reducer, 0);

console.log(totalBatteries); // Output: 31
