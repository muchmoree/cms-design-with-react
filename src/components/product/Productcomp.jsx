import "./productcomp.scss"
import Product from "../../assets/product.png"
import Star from "../../assets/productstar.png"
import Dollar from "../../assets/dollar.png"

const Productcomp = () => {

  const dummyData = [
  {
    name : "Apple",
    picture: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: "1.098",
    oldPrice: "1.789",
    rate: 3,
    code: "red"
  },
  {
    name : "Samsung",
    picture: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: "1.498",
    oldPrice: "1.989",
    rate: 2,
    code: "blue"
  },
  {
    name : "Oppo",
    picture: "https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet-white-40739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: "679",
    oldPrice: "1.289",
    rate: 1,
    code: "green"
  },
  {
    name : "Huawei",
    picture: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: "987",
    oldPrice: "1.234",
    rate: 4,
    code: "red"
  },
  {
    name : "Apple",
    picture: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: "345",
    oldPrice: "987",
    rate: 5,
    code: "blue"
  },
  {
    name : "Iphone XS 1 TB The shortest way to do this ",
    picture: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: "345",
    oldPrice: "987",
    rate: 5,
    code: "blue"
  }
]

  return (
    <div className="container-product">
      <h2>Products</h2>
      <div className="filter">
        <form >
          <div className="brand">
            <span>Brand:</span>
            <select name="brandselection" id="brandSelection">
              <option value="">Choose</option>
              <option value="apple">Apple</option>
              <option value="microsoft">Microsoft</option>
              <option value="huwaei">Huawei</option>
              <option value="oppo">Oppo</option>
              <option value="nokia">Nokia</option>
              <option value="samsung">Samsung</option>
            </select>
          </div>
          <div className="price">
            <span className="pricespan">Price:</span>
            <input type="number" name="pricemin" id="priceMin" placeholder="min"/>
            <span>-</span>
            <input type="number" name="pricemax" id="priceMax"  placeholder="max"/>
          </div>
          <div className="guarantee">
            <span>Guarantee:</span>
            <input type="checkbox" name="Yes" id="yes" checked/>
            <label htmlFor="yes">Yes</label>
            <input type="checkbox" name="No"  id="no"/>
            <label htmlFor="no">No</label>
          </div>
          <a href="/">Filter</a>
          <div className="space"></div>
          <div className="sort">
            <span>Sort:</span>
            <select name="sortselection" id="sortSelection">
              <option value="">Choose</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </form>
        <span className="result">Result: {dummyData.length}</span>
      </div>
      <div className="cards">
        {dummyData.map((item)=>(
          <div className="card">
            <img src={item.picture} alt="" />
            <div className="info">
              <span className="infoname">{item.name}</span>
              <div className="bidprice">
                <img src={Dollar} alt="" />
                <span>{item.newPrice}</span>
                <s>{item.oldPrice}</s>
              </div>
              <div className="rate">
                {[...Array(item.rate)].map((e) => <img src={Star} alt="" />)}
                <div className="circle" style={{backgroundColor:`${item.code}`}}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productcomp