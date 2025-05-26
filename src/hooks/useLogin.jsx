// biasakan untuk penamaan Hooks harus menggunakan awalan "use", untuk membedakan apakah itu fungsi biasa atau hooks

import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
        const token = localStorage.getItem("token")
        if(token) {
          setUsername(getUsername(token))
        } else {
          window.location.href = "/login"
        }
      }, [])

      return username;

}