import React from "react";
import logo from "./Images/sai_logo.png";
import'./UpperHeader.css'

const UpperHeader = () => {
    return(
        <div>
             <header className="upperHeader">
      <div className="logo">
        <img src={logo} width={200} height={40} alt="Sheer Analytics and Insights logo" />
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <div className="contact-info">
        {/* Add your contact info */}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button type="submit" className="search-btn"><i className="fa fa-search"></i></button>
      </div>
    </header>
    <hr class="hr"></hr>
        </div>
    )
}

export default UpperHeader