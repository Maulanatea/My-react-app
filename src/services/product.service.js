import axios from "axios";

export const getProducts = (callback) => {
  axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
    
};

//biasanya kalo pake then itu harus ada catch
// tapi kalo kita udah pake async await kita ga perlu catch lagi