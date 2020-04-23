
var myfashionproduct = require('../app/models/proudct');

var mongoose = require('mongoose');

// connect
var db = require('../config/database')

mongoose.connect(db.mongoURI, { useNewUrlParser: true });

// arr
var products = [

  new myfashionproduct({
    imagepath: "images/productImages/shirt1.jpg",
    title: "Men's Shirt",
    description: "White Shirt",
    price: 60,
    productRating: 5,
  Category:"Shirt",
  Brand:"ABC"
  }),
  new myfashionproduct({
    imagepath: "images/productImages/shirt2.jpg",
    title: "Men's Shirt",
    description: "Black Shirt",
    price: 70,
    productRating: 5,
	Category:"Shirt",
  Brand:"ABC",
  }),
  new myfashionproduct({
    imagepath: "images/productImages/tshirt1.jpg",
    title: "Men's T Shirt",
    description: "White T-Shirt",
    price: 50,
    productRating: 5,
	Category:"Tshirt",
  Brand:"ABC",
  }),
  new myfashionproduct({
    imagepath: "images/productImages/tshirt2.jpg",
    title: "Men's T Shirt",
    description: "Black T-Shirt",
    price: 50,
    productRating: 5,
	Category:"Tshirt",
  Brand:"ABC",
  }),
  new myfashionproduct({
    imagepath: "images/productImages/menjeans1.jpg",
    title: "Men's Jeans",
    description: "Black Jeans",
    price: 100,
    productRating: 3,
	Category:"Jeans",
  Brand:"ABC",
  }),
  new myfashionproduct({
    imagepath: "images/productImages/menjeans2.jpg",
    title: "Men's Jeans",
    description: "Blue Jeans",
    price: 100,
    productRating: 4,
	Category:"Jeans",
  Brand:"ABC",
  }),
  new myfashionproduct({
    imagepath: "images/productImages/menshoe1.jpg",
    title: "Men shoe",
    description: "Sports Shoes",
    price: 200,
    productRating: 5,
	Category:"MenShoes",
  Brand:"ABC",
  }),
  new myfashionproduct({
    imagepath: "images/productImages/menshoe2.jpg",
    title: "Men shoe",
    description: "Black Shoes",
    price: 150,
    productRating: 5,
	Category:"MenShoes",
  Brand:"ABC",
  }),
  new myfashionproduct({
    imagepath: "images/productImages/men4.jpg",
    title: "Men Accessories",
    description: "Watch",
    price: 200,
    productRating: 4.5,
	Category:"Menaccessories",
  Brand:"ABC",
  }),
  new myfashionproduct({
    imagepath: "images/productImages/men6.jpg",
    title: "Men Accessories",
    description: "Belt",
    price: 20,
    productRating: 5,
	Category:"Menaccessories",
  Brand:"ABC",
  }),new myfashionproduct({
    imagepath: "images/productImages/women5.jpg",
    title: "Women Accessories",
    description: "Shades",
    price: 10,
    productRating: 5,
	Category:"Womenaccessories",
  Brand:"ABC",
  }),new myfashionproduct({
    imagepath: "images/productImages/women1.jpg",
    title: "Women Accessories",
    description: "Bag",
    price: 10,
    productRating: 5,
	Category:"Womenaccessories",
  Brand:"ABC",
  }),new myfashionproduct({
    imagepath: "images/productImages/top1.jpg",
    title: "Women Tops",
    description: "Lacy Top",
    price: 15,
    productRating: 4.5,
	Category:"Tops",
  Brand:"ABC",
  }),new myfashionproduct({
    imagepath: "images/productImages/top3.jpg",
    title: "Women Tops",
    description: "White Top",
    price: 10,
    productRating: 5,
	Category:"Tops",
  Brand:"ABC",
  }),new myfashionproduct({
    imagepath: "images/productImages/dress1.jpg",
    title: "Women Dresses",
    description: "White Dress",
    price: 50,
    productRating: 5,
	Category:"Dresses",
  Brand:"XYZ",
  }),new myfashionproduct({
    imagepath: "images/productImages/dress3.jpg",
    title: "Women Dresses",
    description: "Floral Dress",
    price: 75,
    productRating: 5,
	Category:"Dresses",
  Brand:"XYZ",
  }),new myfashionproduct({
    imagepath: "images/productImages/top3.jpg",
    title: "Women Tops",
    description: "White Top",
    price: 10,
    productRating: 5,
	Category:"Tops",
  Brand:"ABC",
  }),new myfashionproduct({
    imagepath: "images/productImages/womenjeans4.jpg",
    title: "Women Jeans",
    description: "White Jeans",
    price: 100,
    productRating: 5,
	Category:"WomenJeans",
  Brand:"ABC",
  }),
  new myfashionproduct({
    imagepath: "images/productImages/womenshoe1.jpg",
    title: "Women Shoes",
    description: "Black Heels",
    price: 160,
    productRating: 5,
	Category:"WomenShoes",
  Brand:"ABC",
  }),

















    
  
  
];



var done = 0;
for(var i=0; i < products.length; i++) {
  products[i].save(function(err, n){
    done++;
    if(err){
        console.log(err);
    }
    if(done === products.length) {
      exit();
    }
  });

}


function exit() {
  mongoose.disconnect();
}