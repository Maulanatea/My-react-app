const Button = (props) => {
    const {variant="bg-green-600", text} = props
    return (
      <div >
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}>
          {text}
        </button>
      </div>
    )
  }

  export default Button