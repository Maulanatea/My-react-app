import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
  const hadndleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem("email", event.target.email.value)
    localStorage.setItem("password", event.target.password.value)
    window.location.href = "/products"
  }
    return(
        <form onSubmit={hadndleLogin}>
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
          <Button className="bg-blue-600 w-full" text="Login" type={"submit"}/>
        </form>
    )
}

export default FormLogin