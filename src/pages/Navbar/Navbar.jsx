import "./navbar.scss"
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-logo">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-content">
            <ul>
                <li>
                    <a href="/">Mainpage</a>
                </li>
                <li>
                    <a href="/product">Product</a>
                </li>
                <li>
                    <a href="/pricing">Pricing</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
            </ul>
        </div>
        <div className="navbar-user">
            <button className="user-login">Login</button>
            <button className="user-register">Signup</button>
            <a href="/dashboard">Dashboard</a>
        </div>
    </div>
  )
}

export default Navbar


