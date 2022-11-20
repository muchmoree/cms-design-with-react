import "./mainpagecomp.scss"
import Main from "../../assets/sectionvr.png"
import Jessica from "../../assets/teamfirst.png"
import Elsa from "../../assets/teamsecond.png"
import Tori from "../../assets/teamthird.png"

const MainpageComp = () => {
  return (
    <div className="container-mainpage">
      <header>
        <div className="content-mainpage">
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Rerum harum nulla doloribus fuga mollitia, provident volupta </p>
        </div>
      </header>
      <main>
        <div className="hero-left">
          <div className="hero-left-info">
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
              adipiscing elit Ut et.</p>
            <div className="btn">
              <button>
                Mainpage<i className='bx bx-chevron-down bx-sm'></i>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={Main} alt="" />
        </div>
      </main>
      <section>
        <div className="info">
          <h3>Team</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Ipsum, quidem.  provident volupta</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="profile-image">
              <img src={Jessica} alt="" />
            </div>
            <h5>Jessica Stein</h5>
            <h6>Prf. Administrative Assistant</h6>
            <div className="social-icons">
              <i className='bx bxl-instagram bx-sm'></i>
              <i className='bx bxl-linkedin-square bx-sm' ></i>
            </div>
          </div>
          <div className="card">
            <div className="profile-image">
              <img src={Elsa} alt="" />
            </div>
            <h5>Elsa Khalifa</h5>
            <h6>Prf. Administrative Assistant</h6>
            <div className="social-icons">
              <i className='bx bxl-instagram bx-sm'></i>
              <i className='bx bxl-linkedin-square bx-sm' ></i>
            </div>
          </div>
          <div className="card">
            <div className="profile-image">
              <img src={Tori} alt="" />
            </div>
            <h5>Tori Crowford</h5>
            <h6>Prf. Administrative Assistant</h6>
            <div className="social-icons">
              <i className='bx bxl-instagram bx-sm'></i>
              <i className='bx bxl-linkedin-square bx-sm' ></i>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default MainpageComp