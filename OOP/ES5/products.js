function ShopProducts(title, price) {
    this.title = title;
    this.price = price;
}

ShopProducts.prototype.getTitle = function () {
    return `Title: ${this.title}`
};

ShopProducts.prototype.setTitle = function (title) {
    this.title = title
};

ShopProducts.prototype.getPrice = function () {
    return `Price: ${this.price}`
};

ShopProducts.prototype.setPrice = function (price) {
    this.price = price
};

ShopProducts.prototype.getInfo = function () {
    return this.getTitle() + '\n' + this.getPrice();
};


function CDProduct(title, price, playLength) {
    this.playLength = playLength;
    ShopProducts.call(this, title, price);
}

CDProduct.prototype = Object.create(ShopProducts.prototype);
CDProduct.prototype.constructor = CDProduct;

CDProduct.prototype.getPlayLength = function () {
    return `Play length: ${this.playLength}`
};

CDProduct.prototype.getInfo = function () {
    let cdInfo = ShopProducts.prototype.getInfo.call(this);
    return cdInfo + '\n' + this.getPlayLength();
};


function BookProduct(title, price, numPages) {
    this.numPages = numPages;
    ShopProducts.call(this, title, price);
}

BookProduct.prototype = Object.create(ShopProducts.prototype);
BookProduct.prototype.constructor = BookProduct;

BookProduct.prototype.getNumPages = function () {
    return `Number of pages: ${this.numPages}`
};

BookProduct.prototype.getInfo = function () {
    let bookInfo = ShopProducts.prototype.getInfo.call(this);
    return bookInfo + '\n' + this.getNumPages();
};

// const newBook = new BookProduct('Book', '100', '370');
// console.log(newBook.getNumPages());
// console.log(newBook.getPrice());
// newBook.setPrice('500');
// console.log(newBook.getInfo());
// newBook.setTitle('New Book')
// console.log(newBook.getInfo());
// console.log(newBook.getTitle());




