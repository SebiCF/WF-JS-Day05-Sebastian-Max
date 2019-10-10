let cars =

    [{

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

        }
    ]



createContent();


function createContent() {
    let products = document.getElementById("products");
    for (i = 0; i < cars.length; i++) {
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
        let eventFunction = function () {
            createBiggerContent(container.id)
        }
        container.addEventListener("click", eventFunction)
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

function createBiggerContent(id) {
    let insertBefore = Number(id) + 1;
    if ((insertBefore % 3) != 0) {
        insertBefore += (3 - insertBefore % 3);
    }
    let bigCard = document.getElementsByClassName("bigCard");
    if (bigCard[0] != undefined) {
        bigCard[0].parentNode.removeChild(bigCard[0]);
    }
    let container = document.createElement("div");
    container.className = "bigCard";
    document.getElementById("products").insertBefore(container, document.getElementById(insertBefore));
}