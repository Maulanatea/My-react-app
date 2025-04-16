// import Button from "../components/Elements/Button"

import Button from "../components/Elements/Button";
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

const email = localStorage.getItem("email")

const ProductsPage = () => {

    const hadndleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }
    return (
        <>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {email}
            <Button className="ml-5 bg-black" onClick={hadndleLogout} text={"Logout"}/>
        </div>
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
        </>
    );
};

export default ProductsPage