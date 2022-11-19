import Pricingcomp from "../../components/pricing/Pricingcomp"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./pricing.scss"

const Pricing = () => {
  return (
    <>
    <div className="container-pricing">
        <Navbar/>
        <Pricingcomp/>
        <Footer/>
    </div>
    </>
  )
}

export default Pricing