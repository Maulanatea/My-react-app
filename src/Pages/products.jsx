// import Button from "../components/Elements/Button"

import CardProduct from "../components/Fragments/CardProduct"

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/sepatu.jpg"/>
                <CardProduct.Body title="Sepatu Lebaran">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 200.000"/> 
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/sepatu.jpg"/>
                <CardProduct.Body title="Sepatu Lebaran">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 200.000"/> 
            </CardProduct>
        </div>
    )
}

export default ProductsPage