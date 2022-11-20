import "./pricingcomp.scss"
import Pageheaderscomp from "../headers/Pageheaderscomp"
import Dollar from "../../assets/dollar.png"
import { useState } from "react"

const Pricingcomp = () => {

  let newPrices = ['49.99', '60.99', '81.99']

  const [firstprice , setFirstPrice] = useState(['19.99', '20.99', '51.99']);

  const [date, setDate] = useState("mo")

  const handleAnnualPrice = () =>{

    setFirstPrice(newPrices)
    setDate("yo")
  }

  const handleMonthlyPrice = () => {

    setFirstPrice(['19.99 $', '20.99 $', '21.99 $'])
    setDate("mo")
  }


  return (
    <div className="container-pricing">
      <Pageheaderscomp  title= "Pricing"/>
      <div className="toggle">
        <input type="radio" name="pr" id="month" defaultChecked/>
        <label onClick={handleMonthlyPrice}  htmlFor="month">Monthly</label>
        <input type="radio" name="pr" id="annual" />
        <label onClick={handleAnnualPrice} htmlFor="annual">Annually</label>
      </div>
      <div className="content-pricing">
        <div className="card">
          <span className="card-type">Beginner</span>
          <span className="card-type-pack">Genious</span>
          <div className="price">
            <img src={Dollar} alt="" />
            <span className="package-price">{firstprice[0]}</span>
            <span className="period">/ {date}</span>
          </div>
          <div className="specification">
            <ul>
              <li>Lorem ipsum Dolor Dolor as</li>
              <li>Lorem ipsum Dolor Dolor as</li>
              <li>Lorem ipsum Dolor Dolor as</li>
              <li>Lorem ipsum Dolor Dolor as</li>
              <li>Lorem ipsum Dolor Dolor as</li>
            </ul>
          </div>
          <button>Get Started</button>
        </div>
        <div className="card">
          <span className="card-type">Medium</span>
          <span className="card-type-pack">Hilarious</span>
          <div className="price">
            <img src={Dollar} alt="" />
            <span className="package-price">{firstprice[1]}</span>
            <span className="period">/ {date}</span>
          </div>
          <div className="specification">
            <ul>
              <li>Lorem ipsum Dolor</li>
              <li>Lorem ipsum Dolor</li>
              <li>Lorem ipsum Dolor</li>
              <li>Lorem ipsum Dolor</li>
              <li>Lorem ipsum Dolor</li>
            </ul>
          </div>
          <button className="middlebtn" >Get Started</button>
        </div>
        <div className="card">
          <span className="card-type">Large</span>
          <span className="card-type-pack">Extra</span>
          <div className="price">
            <img src={Dollar} alt="" />
            <span className="package-price">{firstprice[2]}</span>
            <span className="period">/ {date}</span>
          </div>
          <div className="specification">
            <ul>
              <li>Lorem ipsum Dolor</li>
              <li>Lorem ipsum Dolor</li>
              <li>Lorem ipsum Dolor</li>
              <li>Lorem ipsum Dolor</li>
              <li>Lorem ipsum Dolor</li>
            </ul>
          </div>
          <button>Get Started</button>
        </div>
      </div>


    </div>
  )
}

export default Pricingcomp