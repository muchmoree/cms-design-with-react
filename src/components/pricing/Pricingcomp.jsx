import "./pricingcomp.scss"
import Pageheaderscomp from "../headers/Pageheaderscomp"
import Dollar from "../../assets/dollar.png"
import { useState } from "react"
import Pricingpopup from "../popups/pages/Pricingpopup"

const Pricingcomp = () => {

  let newPrices = [49.99, 60.99, 81.99]
  let oldPrices = [19.99, 20.99, 51.99]
  let titles = ["Beginner","Medium","Large"]

  const [firstprice , setFirstPrice] = useState(oldPrices);
  const [date, setDate] = useState("mo")

  const [popup,setPopup] = useState(false);
  const [reference,setReference] = useState();

  const [title,setTitle] = useState(titles)

  const handleAnnualPrice = () =>{
    setFirstPrice(newPrices)
    setDate("yo")
  }

  const handleMonthlyPrice = () => {
    setFirstPrice([19.99 , 20.99 , 51.99 ])
    setDate("mo")
  }

  const handlePopupFirst = () =>{
    setPopup(!popup)
    setReference(firstprice[0])
    setTitle(titles[0])

  } 
  const handlePopupSecond = () =>{
    setPopup(!popup)  
    setReference(firstprice[1]) 
    setTitle(titles[1])
  } 
  const handlePopupThird = () =>{
    setPopup(!popup)  
    setReference(firstprice[2])
    setTitle(titles[2])
  } 



  return (
    <div className="container-pricing">
      {popup && <Pricingpopup title = {title} reference={reference} 
      onOpen = {popup} onClose = {()=>setPopup(false)}/>}
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
          <button className="btn1" onClick={handlePopupFirst} >Get Started</button>
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
          <button onClick={handlePopupSecond} className="middlebtn" >Get Started</button>
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
          <button onClick={handlePopupThird}>Get Started</button>
        </div>
      </div>


    </div>
  )
}

export default Pricingcomp