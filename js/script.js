
let cars = 

    [
    {

        "name": "Tesla",

        "productionYear": "2000",

        "image": "./img/tesla.jpg",

        "price": "40000"

    },
    {

        "name": "Tesla",

        "productionYear": "2000",

        "image": "./img/tesla.jpg",

        "price": "30000"

    },
    {

        "name": "Tesla",

        "productionYear": "2000",

        "image": "./img/tesla.jpg",

        "price": "20000"

    },
    {

        "name": "Tesla",

        "productionYear": "2000",

        "image": "./img/tesla.jpg",

        "price": "25000"

    },
    {

        "name": "Tesla",

        "productionYear": "2000",

        "image": "./img/tesla.jpg",

        "price": "15000"

    },
    {

        "name": "Tesla",

        "productionYear": "2000",

        "image": "./img/tesla.jpg",

        "price": "30000"

    },
    {

        "name": "Tesla",

        "productionYear": "2000",

        "image": "./img/tesla.jpg",

        "price": "50000"

    },
    {

        "name": "Tesla",

        "productionYear": "2000",

        "image": "./img/tesla.jpg",

        "price": "50000"

    },
    {

        "name": "Tesla",

        "productionYear": "2000",

        "image": "./img/tesla.jpg",

        "price": "50000"

    }]

    

createContent();


function createContent(){
    let products = document.getElementById("products");
    for (i = 0; i < cars.length; i++){
        let container = document.createElement("div");
        let img = document.createElement("img");
        let description = document.createElement("div");
        container.className = "container";
        container.id = i;
        img.src = cars[i].image;
        description.innerText = cars[i].name;
        container.appendChild(img);
        container.appendChild(description);
        products.appendChild(container);

    }
    

    /*for (let car of cars){
        let container = document.createElement("div");
        let img = document.createElement("img");
        let description = document.createElement("div");
        container.className = "container";
        img.src = car.image;
        description.innerText = car.name;
        container.appendChild(img);
        container.appendChild(description);
        products.appendChild(container);
    }*/

}

function createBiggerContent(){

}
