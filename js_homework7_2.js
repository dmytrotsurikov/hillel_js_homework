var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

var regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;


function getCorrectEmails(arr) { 
    let CorrectEmails = []; 

    
    arr.forEach(function(arr) {    
        if (regex.test(arr.email)) {
            CorrectEmails.push(arr.email); 
        }
    });

    return CorrectEmails; 
}


var CorrectEmails = getCorrectEmails(arr);

console.log(CorrectEmails);