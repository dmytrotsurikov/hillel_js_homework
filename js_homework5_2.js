let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

let servicesToNumber = {};

for (let key in services) {
    if (services.hasOwnProperty(key)) {
        servicesToNumber[key] = Number.parseInt(services[key]); 
        console.log(servicesToNumber[key])
    }
}

let calculation = {
    price() {
        let total = 0;
        for (let key in servicesToNumber) {
            if (servicesToNumber.hasOwnProperty(key)) {
                total += servicesToNumber[key]; 
            }
        }
        return total ; 
    },

    minPrice() {
        let prices = Object.values(servicesToNumber); 
        return Math.min(...prices); 
    },

    maxPrice() {
        let prices = Object.values(servicesToNumber); 
        return Math.max(...prices) ; 
    }
};

console.log("Загальна вартість: " + calculation.price()); 
console.log("Мінімальна вартість: " + calculation.minPrice()); 
console.log("Максимальна вартість: " + calculation.maxPrice()); 

services['Розбити скло'] = "200 грн";

console.log("Загальна вартість: " + calculation.price()); 
console.log("Мінімальна вартість: " + calculation.minPrice()); 
console.log("Максимальна вартість: " + calculation.maxPrice()); 
