import MainpageComp from "../../components/mainpage/MainpageComp"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./mainpage.scss"

const Mainpage = () => {
  return (
    <>
    <div className="container-mainpage">
        <Navbar/>
        <MainpageComp/>
        <Footer/>
    </div>
    </>
  )
}

export default Mainpage