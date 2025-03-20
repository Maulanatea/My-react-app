const ProductsPage = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm bg-gray-700 border border-gray-200 rounded-lg shadow">
              <a href="#">
                <img src="/images/sepatu.jpg" alt="product" className="p-8 rounded-lg"/>
              </a>
              <div className="px-5 pb-5">
                <a href="">
                  <h5 className="text-xl font-semibold tracking-tight text-white">
                    Sepatu Lebaran
                  </h5>
                  <p className="text-m text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum atque eum dicta neque dolore ad, nulla cupiditate iure non quia ipsa ullam. Quos blanditiis in atque sint. Placeat, corrupti qui.
                  </p>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white">Rp. 100.000</span>
                <button className="bg-blue-600">Add To Cart</button>
              </div>
            </div>
        </div>
    )
}

export default ProductsPage