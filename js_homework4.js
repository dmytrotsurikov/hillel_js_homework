function checkProbabilityTheory(count) {

    let min=100;
    let max=1000;
    let countEven = 0; 
    let countOdd = 0;  

    function random(min, max) {
        return min + Math.random() * (max - min);
    }  
       
    for (let i = 0; i < count; i++) {
        let randomNumber = random(min, max).toFixed(0);  

            console.log(randomNumber);
                if (randomNumber % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }

    let percentageEven = (countEven / count) * 100;
    let percentageOdd = (countOdd / count) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Кількість парних чисел: ${countEven}`);
    console.log(`Кількість непарних чисел: ${countOdd}`);
    console.log(`Відсоток парних чисел: ${percentageEven}%`);
    console.log(`Відсоток непарних чисел: ${percentageOdd}%`);
    
}

checkProbabilityTheory(10);
