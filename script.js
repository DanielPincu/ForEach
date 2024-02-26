// const myArray = ['apple','banana','cherry','date','elderberry','fig','grape'];

// myArray.forEach(item => {
//     console.log(item);
// });


const products = [{
    title: 'Apple',
    description: 'This is an apple',
    image: 'https://picsum.photos/200/300',
    price: 0.99,
    category: 'fruit',
},
{
    title: 'Banana',
    description: 'This is a banana',
    image: 'https://picsum.photos/200/300',
    price: 0.49,
    category: 'fruit',
},
{
    title: 'Cherry',
    description: 'This is a cherry',
    image: 'https://picsum.photos/200/300',
    price: 0.79,
    category: 'veg',
},

];
 
// products.forEach(product => {
//     console.log(`Title: ${product.title} Price: ${product.price} Category: ${product.category}`);
// });

const filteredProducts = products.filter(product => product.price < 0.5);
console.log(filteredProducts);

const createCard = (product) => {
    return `
    
    <div class="card">
        <h4>${product.title}</h4>
        <h2>${product.description}</h2>
        <img src="${product.image}">
        <p>Price: ${product.price}</p>
        <p>Category: ${product.category}</p>
    </div>
    `;
};

products.forEach(product => {
    console.log(createCard(product));   
});

const productContainer = document.querySelector('.row');

 

filteredProducts.forEach(product => {
    productContainer.innerHTML += createCard(product);
}   );  