const obj = {
    name: 'The Big Bang Theory',
    genre: 'Sitcom',
    created: 'Chuck Lorre',
    
    getInfo() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    } 

};

obj.getInfo(); 

obj.starring = 'Jim Parsons';
obj.getInfo(); 