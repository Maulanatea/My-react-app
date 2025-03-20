import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
    return(
        <form action="">
          <InputForm
            text="Fullname"
            name="fullname"
            type="text"
            placeholder="insert your name here..."
          />
          <InputForm
            text="Email"
            name="email"
            type="email"
            placeholder="example@mail.com"
          />
          <InputForm
            text="Password"
            name="password"
            type="password"
            placeholder="******"
          />
          <InputForm
            text="Confirm Password"
            name="confirmpassword"
            type="password"
            placeholder="******"
          />
          <Button variant="bg-blue-600 w-full" text="Register" />
        </form>
    )
}

export default FormRegister