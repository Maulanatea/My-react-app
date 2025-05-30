import PropTypes from 'prop-types';
import Button from "../Elements/Button";
import { Link } from 'react-router-dom';

const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
            {children}
        </div>
    );
};

CardProduct.propTypes = {
  children: PropTypes.node,
};

const Header = (props) => {
    const {id, image} = props
    return (
        <Link to={`/product/${id}`}>
            <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover"/>
        </Link>
    );
};

Header.propTypes = {
    image: PropTypes.string,
  };

const Body = (props) => {
    const {children, name} = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name.substring(0, 20)} ...
                </h5>
                <p className="text-m text-white">
                    {children.substring(0, 100)} ...
                </p>
            </a>
        </div>
    );
};

Body.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
  };

const Footer = (props) => {
    const {price, handleAddToCart, id} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">${" "}
                {price.toLocaleString('id-ID', {styles: "currency", currency:"USD"})}
            </span>
            <Button variant="bg-blue-600" text="Add to cart" onClick={() => handleAddToCart(id)} />
        </div>
    );
};

Footer.propTypes = {
    price: PropTypes.number,
    handleAddToCart: PropTypes.func,
    id: PropTypes.number,
  };

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
