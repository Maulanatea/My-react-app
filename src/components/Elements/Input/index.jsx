import Input from "./Input"
import Label from "./Label"

const InputForm = (props) => {
    const { text, name, type, placeholder} = props
    return (
        <div className="mb-6">
            <Label htmlFor={name} text={text}/>
            <Input name={name} type={type} placeholder={placeholder}/>

        </div>
    )
}

export default InputForm