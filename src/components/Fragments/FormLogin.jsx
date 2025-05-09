import { useRef } from "react"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"
import { use } from "react"
import { useEffect } from "react"

const FormLogin = () => {
  const hadndleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem("email", event.target.email.value)
    localStorage.setItem("password", event.target.password.value)
    window.location.href = "/products"
  }
  const emailRef = useRef(null)

  useEffect(() => {
    emailRef.current.focus()
  },[])
    return(
        <form onSubmit={hadndleLogin}>
          <InputForm
            text="Email"
            name="email"
            type="email"
            placeholder="example@mail.com"
            ref={emailRef}
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