import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    return(
        <form action="">
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
          <Button variant="bg-blue-600 w-full" text="Login" />
        </form>
    )
}

export default FormLogin