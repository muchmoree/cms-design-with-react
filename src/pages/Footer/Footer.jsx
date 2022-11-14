import "./footer.scss"
import Logo from "../../assets/logo.png"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-upcontent">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-content">
          <div className="footer-content-up">
            <ul>
              <li>
                <a href="/">Mainpage</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
            </ul>
          </div>
          <div className="footer-content-down">
            <ul>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-button">
            <button className="user-login">Login</button>
            <button className="user-register">Signup</button>
          </div>
          <div className="footer-icons">
            <a href="/">
              <i class='bx bxl-instagram bx-md'></i>
            </a>
           <a href="/"><i class='bx bxl-facebook-square bx-md' ></i></a>
           <a href="/"><i class='bx bxl-reddit bx-md' ></i></a>
           <a href="/"><i class='bx bxl-twitter bx-md' ></i></a>
           <a href="/"><i class='bx bxl-youtube bx-md' ></i></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span>Copyright © 2022 lorem.com, Inc,</span>
      </div>
    </div>
  )
}

export default Footer