import { useRef, useState } from "react"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"
import { use } from "react"
import { useEffect } from "react"
import { login } from "../../services/auth.service"

const FormLogin = () => {

  const [loginFailed, setLoginFailed] = useState("")
  const hadndleLogin = (event) => {
    event.preventDefault()
    // localStorage.setItem("email", event.target.email.value)
    // localStorage.setItem("password", event.target.password.value)
    // window.location.href = "/products"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem("token", res)
        window.location.href = "/products"
      } else {
        setLoginFailed(res.response.data)
      }
    })
  }
  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  },[])
    return(
        <form onSubmit={hadndleLogin}>
          <InputForm
            text="Username"
            name="username"
            type="text"
            placeholder="username"
            ref={usernameRef}
          />
          <InputForm
            text="Password"
            name="password"
            type="password"
            placeholder="******"
          />
          <Button className="bg-blue-600 w-full" text="Login" type={"submit"}/>

          {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
    )
}

export default FormLogin