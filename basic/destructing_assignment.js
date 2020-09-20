const product = {
	name: "iPhone",
	description: "Apple家的手機",
	brand: "Apple",
	offers: {
		priceCurrency: "NTD",
		price: "26900",
	},
};

const {name, brand} = product;

console.log(name);
console.log(brand);

const {
	offers: {price}
} = product

console.log(price);
console.log(offers);
