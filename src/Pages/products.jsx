// import Button from "../components/Elements/Button"

import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "Rp 200.000",
        image: "/images/sepatu.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid beatae natus voluptatibus ex quis minima mollitia, ab, culpa neque nostrum earum nihil illum ipsum fugiat. Amet sit illum quos dignissimos?"
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "Rp 100.000",
        image: "/images/sepatu.jpg",
        description: "sepatu lama dari belanja online"
    }
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}/>
                    <CardProduct.Body name={product.name}>
                    {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price}/> 
                </CardProduct>
            ))}
        </div>
    );
};

export default ProductsPage