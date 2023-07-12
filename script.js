let openShopping = document.querySelector('#open');
let closeShopping = document.querySelector('.close-cart');
let list = document.querySelector('.list');
let listCard = document.querySelector('.cart-list');
let body = document.querySelector('body');
let total = document.querySelector('.total-price');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{

    body.classList.add('active');

})

closeShopping.addEventListener('click', ()=>{

    body.classList.remove('active');

})

let products = [

    {

        id: 1,
        name: 'Invisible',
        image: 'C1.png',
        price: 90,
        description: 'DUREX',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'

    },

    {
        id: 2,
        name: 'Love',
        image: 'C2.png',
        price: 90,
        description: 'DUREX',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 3,
        name: 'Pleasuremax',
        image: 'C3.png',
        price: 100,
        description: 'DUREX',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 4,
        name: 'Performa',
        image: 'C4.png',
        price: 125,
        description: 'DUREX',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 5,
        name: 'Chocolate',
        image: 'C5.png',
        price: 100,
        description: 'DUREX',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 6,
        name: 'Sensual Strawberry',
        image: 'C6.png',
        price: 115,
        description: 'DUREX',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 7,
        name: 'Featherite Ultima',
        image: 'C7.png',
        price: 110,
        description: 'DUREX',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 8,
        name: 'Bubblegum',
        image: 'C8.png',
        price: 120,
        description: 'DUREX',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 11,
        name: 'Alex Blake',
        image: 'S1.png',
        price: 1500,
        description: 'SEX DOLLS',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'

    },

    {
        id: 12,
        name: 'Sophie Reyes',
        image: 'S2.png',
        price: 1000,
        description: 'SEX DOLLS',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 13,
        name: 'Mia Malkova',
        image: 'S3.png',
        price: 1200,
        description: 'SEX DOLLS',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 14,
        name: 'Amanda Adams',
        image: 'S4.png',
        price: 1100,
        description: 'SEX DOLLS',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 15,
        name: 'Blair Williams',
        image: 'S5.png',
        price: 1750,
        description: 'SEX DOLLS',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 16,
        name: 'Honey Hayes',
        image: 'S6.png',
        price: 1400,
        description: 'SEX DOLLS',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 17,
        name: 'Imogen Sy',
        image: 'S7.png',
        price: 2200,
        description: 'SEX DOLLS',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 18,
        name: 'Skylar Vox & Jordi',
        image: 'S8.png',
        price: 2200,
        description: 'SEX DOLLS',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 21,
        name: '12" White',
        image: 'D1.png',
        price: 1130,
        description: 'DILDO',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'

    },

    {
        id: 22,
        name: '14" Black',
        image: 'D2.png',
        price: 1625,
        description: 'DILDO',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 23,
        name: '8" Sprinkler',
        image: 'D3.png',
        price: 1255,
        description: 'DILDO',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 24,
        name: '10" Glass',
        image: 'D4.png',
        price: 1050,
        description: 'DILDO',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 25,
        name: '10" Realistic Thick',
        image: 'D5.png',
        price: 2150,
        description: 'DILDO',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 26,
        name: '9" Alien',
        image: 'D6.png',
        price: 1470,
        description: 'DILDO',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 27,
        name: '10" Dragon Thick',
        image: 'D7.png',
        price: 1630,
        description: 'DILDO',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 28,
        name: '8" Magical Wand',
        image: 'D8.png',
        price: 1195,
        description: 'DILDO',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 31,
        name: 'Hooked Shaped',
        image: 'V1.png',
        price: 350,
        description: 'VIBRATOR',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'

    },

    {
        id: 32,
        name: 'Dongle',
        image: 'V2.png',
        price: 400,
        description: 'VIBRATOR',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 33,
        name: 'Remote Shaped',
        image: 'V3.png',
        price: 410,
        description: 'VIBRATOR',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 34,
        name: 'Ring Shaped',
        image: 'V4.png',
        price: 375,
        description: 'VIBRATOR',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 35,
        name: 'Monochrome',
        image: 'V5.png',
        price: 650,
        description: 'VIBRATOR',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 36,
        name: 'Pink Delight',
        image: 'V6.png',
        price: 500,
        description: 'VIBRATOR',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 37,
        name: 'Dart Shaped',
        image: 'V7.png',
        price: 430,
        description: 'VIBRATOR',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 38,
        name: 'Classic ',
        image: 'V8.png',
        price: 515,
        description: 'VIBRATOR',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 41,
        name: 'INCEL Incelator',
        image: 'F1.png',
        price: 800,
        description: 'FLESHLIGHT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'

    },

    {
        id: 42,
        name: 'INCEL Masturbator',
        image: 'F2.png',
        price: 1145,
        description: 'FLESHLIGHT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 43,
        name: 'GOLD\'s Ripple',
        image: 'F3.png',
        price: 970,
        description: 'FLESHLIGHT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 44,
        name: 'SLOPPY Devil',
        image: 'F4.png',
        price: 1300,
        description: 'FLESHLIGHT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 45,
        name: 'NOISELESS MASTER',
        image: 'F5.png',
        price: 1130,
        description: 'FLESHLIGHT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 46,
        name: 'BURAT DESTROYER',
        image: 'F6.png',
        price: 1000,
        description: 'FLESHLIGHT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 47,
        name: 'INCEL POCKET',
        image: 'F7.png',
        price: 1680,
        description: 'FLESHLIGHT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 48,
        name: 'GAWK GAWK MASTER',
        image: 'F8.png',
        price: 2345,
        description: 'FLESHLIGHT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 51,
        name: 'Flavorless ',
        image: 'L1.png',
        price: 120,
        description: 'LUBRICANT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'

    },

    {
        id: 52,
        name: 'Vanilla',
        image: 'L2.png',
        price: 145,
        description: 'LUBRICANT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 53,
        name: 'UBE LUBE',
        image: 'L3.png',
        price: 150,
        description: 'LUBRICANT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {
        id: 54,
        name: 'Blueberry',
        image: 'L4.png',
        price: 130,
        description: 'LUBRICANT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 55,
        name: 'Snoop Dogg',
        image: 'L5.png',
        price: 185,
        description: 'LUBRICANT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 56,
        name: 'Menthol Life',
        image: 'L6.png',
        price: 160,
        description: 'LUBRICANT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 57,
        name: 'Jack Sparrow',
        image: 'L7.png',
        price: 145,
        description: 'LUBRICANT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

    {

        id: 58,
        name: 'Incel Strawberry',
        image: 'L8.png',
        price: 130,
        description: 'LUBRICANT',
        starwars: '<i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i> <i class = "fa-solid fa-star"></i>'


    },

];

let listCards  = [];

function initApp(){

    products.forEach((value, key) =>{

        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `

            <img src="Images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="description">${value.description}</div>
            <div class="starwars">${value.starwars}</div>
            <div class="price">₱ ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;

        list.appendChild(newDiv);

    })

}

initApp();

function addToCard(key){

    if(listCards[key] == null){

        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;

    }

    reloadCard();

}

function reloadCard(){

    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{

        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `

                <div><img src="Images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>

                <div>

                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>

                </div>`;

                listCard.appendChild(newDiv);

        }
})

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

}

function changeQuantity(key, quantity){

    if(quantity == 0){

        delete listCards[key];

    }
    
    else{

        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;

    }

    reloadCard();
}
