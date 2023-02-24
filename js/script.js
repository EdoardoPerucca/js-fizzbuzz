
// Collego la lista html //

let listEl = document.getElementById("list");


for (let i = 1; i <= 100; i++) {
    
    let newElement = document.createElement('div');
    
    listEl.append(newElement);
    
    newElement.innerHTML = 0 + (i);
    
    console.log(newElement);

    newElement.style.background = "lightblue";

    
    
    if (i % 3 == 0) {
        newElement.innerHTML = "Fizz";
        newElement.style.background = "lightgreen";
        
    }

    if (i % 5 == 0) {
        newElement.innerHTML = "Buzz";
        newElement.style.background = "yellow";
    }

    if (i % 3 == 0 && i % 5 == 0) {
        newElement.innerHTML = "FizzBuzz";
        newElement.style.background = "red";
    }
}