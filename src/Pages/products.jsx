// import Button from "../components/Elements/Button"

import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct"
import { useEffect } from "react";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 200000,
        image: "/images/sepatu.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid beatae natus voluptatibus ex quis minima mollitia, ab, culpa neque nostrum earum nihil illum ipsum fugiat. Amet sit illum quos dignissimos?"
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 100000,
        image: "/images/sepatu.jpg",
        description: "sepatu lama dari belanja online"
    },
    {
        id: 3,
        name: "Sepatu Lebaran",
        price: 300000,
        image: "/images/sepatu.jpg",
        description: "sepatu Lebaran bekas Lebaran kemarin"
    }
]

const email = localStorage.getItem("email")

const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
      setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])

    useEffect(() => {
      if(cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id === item.id);
          return acc + (item.qty * product.price);
        }, 0);
        setTotalPrice(sum);
        localStorage.setItem("cart", JSON.stringify(cart))
      }
    }, [cart])

    const hadndleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if(cart.find((item) => item.id === id)) {
          setCart(
            cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
          )
        } else {
          setCart([...cart, {id, qty: 1}])
        }
    }

    return (
        <Fragment>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {email}
            <Button className="ml-5 bg-black" onClick={hadndleLogout} text={"Logout"}/>
        </div>
        <div className="flex justify-center py-5">
            <div className="w-4/6 flex flex-wrap">
              {products.map((product) => (
                  <CardProduct key={product.id}>
                      <CardProduct.Header image={product.image}/>
                      <CardProduct.Body name={product.name}>
                      {product.description}
                      </CardProduct.Body>
                      <CardProduct.Footer price={product.price}
                      id={product.id}
                      handleAddToCart={handleAddToCart}
                    /> 
                  </CardProduct>
              ))}
            </div>
            <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Chart</h1>
            <table className="text-left table-auto border-separate border-spacing-x-5">
                <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                      const product = products.find((product) => product.id === item.id);
                      return (
                        <tr key={item.id}>
                          <td>{product.name}</td>
                          <td>Rp{" "}{product.price.toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}</td>
                          <td>{item.qty}</td>
                          <td>Rp{" "}{(item.qty*product.price).toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}</td>
                        </tr>
                      )
                    })}
                    <br/>
                    <tr className="font-bold text-blue-600">
                      <td colSpan={3}>Total Price</td>
                      <td>
                      Rp{" "}{totalPrice.toLocaleString("id-ID", {styles:"currency", currency:"IDR"})}
                      </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </Fragment>
    );
};

export default ProductsPage