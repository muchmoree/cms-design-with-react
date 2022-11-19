import "./blog.scss"
import Blogcomp from "../../components/blog/Blogcomp"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Blog = () => {
  return (
    <>
    <div className="container-blog">
        <Navbar/>
        <Blogcomp/>
        <Footer/>
    </div>
    </>
  )
}

export default Blog