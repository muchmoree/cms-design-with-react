import MainpageComp from "../../components/mainpage/MainpageComp"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./mainpage.scss"

const Mainpage = () => {
  return (
    <>
    <div>
        <Navbar/>
        <MainpageComp/>
        <Footer/>
    </div>
    </>
  )
}

export default Mainpage