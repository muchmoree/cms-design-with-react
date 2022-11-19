import Productcomp from "../../components/product/Productcomp"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./product.scss"

const Product = () => {
  return (
    <>
    <div className="container-product">
        <Navbar/>
        <Productcomp/>
        <Footer/>
    </div>
    </>
  )
}

export default Product