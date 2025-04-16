import PropTypes from 'prop-types';


const Button = (props) => {
    const {className="bg-green-600", text, onClick = () => {}, type ="button"} = props
    return (
      <div >
        <button className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
        type={type}
        onClick={() => onClick()}
        >
          {text}
        </button>
      </div>
    )
  }

  Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
  };

  export default Button