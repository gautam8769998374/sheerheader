import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContectUs.css'
import phoneIcon from './contact-phone-icon.png';

 class ContectUs extends Component {
  render() {
    return (
      <div>
        <div class="my-3 problem-statement-sec shadow">
    <div class="container p-3 p-md-5 bg-white">
    <div class="row">
    <div class="col-12 col-md-5 px-md-5">
    <div class="font40 font-weight-bold c-red line-height-125">
    <h1 class="Contact"> Contact Us </h1>
     </div>
    <div class="hspacer15"></div>
    <div class="font18 c-blue font-weight-bold">
     {/* <h5 class="contact">Please fill out the form to enable our research representatives to contact you at the
    earliest.</h5> */}
    <h5>Company Info :</h5>
    </div>
    <div class="py-5">
    
    <div class="row py-2">
      <h5 style={{color: 'blue'}}>US Office :</h5>
       <h6> Milwaukee, Wisconsin
        U.S</h6>
    <div class="col-2">
      <img src={phoneIcon}height="20" width="20" alt="" class=""/>
    </div>
    <div class="col-10">
    <div class="c-blue font20 font-weight-bold">
      +1-917-730-4660
    </div>
    <div class="c-blue font16">
      (US Office Hours)
    {/* (Corporate Office Hours) */}
   

    </div>
    </div>
    </div>
    {/* <!-- <div class="row py-2">
    <div class="col-2">
      <img src="contact-phone-icon.png" alt="" class="">
    </div>
    <div class="col-10">
    <div class="c-blue font20 font-weight-bold">
    +1-888-600-6441
    </div>
    <div class="c-blue font16">
    US/Can Toll Free
    </div>
    </div>
    </div> --> */}
    <div class="row py-2">
      <h5 style={{color: 'blue'}}>Corporate office :</h5> 
        
        <h6>RDB Boulevard, 8th Floor, Plot K 1, Sector 5, Block EP and GP, Kolkata 700091, India.</h6>
    <div class="col-2">
      <img src={phoneIcon} height="20" width="20" alt="" class=""/>
    </div>
    <div class="col-10">
    <div class="c-blue font20 font-weight-bold">
      +91-9836913164
    </div>
    <div class="c-blue font16">
    {/* (sales@sheeranalyticsandinsights.com) */}
    </div>
    </div>
    </div>
    <div class="row py-2">
      <h5 style={{color: 'blue'}}>Branch Office :</h5> 
        
        <h6>11/822, Chopasani Housing Board Jodhpur( Rajasthan) 342001, India</h6>
    <div class="col-2">
      {/* <!-- <img src="contact-phone-icon.png" height="40", width="40" alt="" class=""> --> */}
    </div>
    <div class="col-10">
    <div class="c-blue font20 font-weight-bold">
      {/* <!-- +91-9836913164 --> */}
    </div>
    <div class="c-blue font16">
    {/* <!-- (sales@sheeranalyticsandinsights.com) --> */}
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-12 col-md-7">
    <form name="Form1" onsubmit="if (!window.__cfRLUnblockHandlers) return false; return Form1_Validator(this)" action="subscribecontactus_new.asp?send=cs" method="post">
    <div class="row">
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Full Name <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="first_name" name="first_name" maxlength="40"/>
    </div>
    </div>
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Job Title <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="job_title" maxlength="80" name="job_title"/>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Company Name <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="company" maxlength="80" name="company"/>
    </div>
    </div>
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Phone No. <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="phone_no" maxlength="40" name="phone_no"/>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-12">
    <label class="font15 c-gray">Your Email <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <div class="input-group-prepend">
    <span class="input-group-text bg-light-gray c-gray p-3" id="basic-addon1"><i class="far fa-envelope"></i></span>
    </div>
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="email" maxlength="80" name="email"/>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Country</label>
    <select class="form-control bg-light-gray" id="country" name="country" size="1">
    <option value="Select Country">Select Country</option>
    <option value="Afghanistan">
    Afghanistan</option>
    <option value="Albania">
    Albania</option>
    <option value="Algeria">
    Algeria</option>
    <option value="Andorra">
    Andorra</option>
    <option value="Angola">
    Angola</option>
    <option value="Anguilla">
    Anguilla</option>
    <option value="Antarctica">
    Antarctica</option>
    <option value="Antigua and Barbuda">
    Antigua and Barbuda</option>
    <option value="Argentina">
    Argentina</option>
    <option value="Armenia">
    Armenia</option>
    <option value="Aruba">
    Aruba</option>
    <option value="Australia">
    Australia</option>
    <option value="Austria">
    Austria</option>
    <option value="Azerbaijan">
    Azerbaijan</option>
    <option value="Bahamas, The">
    Bahamas, The</option>
    <option value="Bahrain">
    Bahrain</option>
    <option value="Bangladesh">
    Bangladesh</option>
    <option value="Barbados">
    Barbados</option>
    <option value="Belarus">
    Belarus</option>
    <option value="Belgium">
    Belgium</option>
    <option value="Belize">
    Belize</option>
    <option value="Benin">
    Benin</option>
    <option value="Bermuda">
    Bermuda</option>
    <option value="Bhutan">
    Bhutan</option>
    <option value="Bolivia">
    Bolivia</option>
    <option value="Bosnia and Herzegovina">
    Bosnia and Herzegovina</option>
    <option value="Botswana">
    Botswana</option>
    <option value="Brazil">
    Brazil</option>
    <option value="British Indian Ocean Territory">
    British Indian Ocean Territory</option>
    <option value="Brunei">
    Brunei</option>
    <option value="Bulgaria">
    Bulgaria</option>
    <option value="Burkina Faso">
    Burkina Faso</option>
    <option value="Burundi">
    Burundi</option>
    <option value="Cambodia">
    Cambodia</option>
    <option value="Cameroon">
    Cameroon</option>
    <option value="Canada">
    Canada</option>
    <option value="Cape Verde">
    Cape Verde</option>
    <option value="Central African Republic">
    Central African Republic</option>
    <option value="Chad">
    Chad</option>
    <option value="Chile">
    Chile</option>
    <option value="China"> 
    China</option>
    <option value="Cocos (Keeling) Islands">
    Cocos (Keeling) Islands</option>
    <option value="Colombia">
    Colombia</option>
    <option value="Comoros">
    Comoros</option>
    <option value="Congo - the Democratic Republic of the">
    Congo - the Democratic Republic of the</option>
    <option value="Congo, Republic of the">
    Congo, Republic of the</option>
    <option value="Costa Rica">
    Costa Rica</option>
    <option value="Côte d'Ivoire">
    Côte d'Ivoire</option>
    <option value="Croatia">
    Croatia</option>
    <option value="Cuba">
    Cuba</option>
    <option value="Curacao">
    Curacao</option>
    <option value="Cyprus">
    Cyprus</option>
    <option value="Czech Republic">
    Czech Republic</option>
    <option value="Denmark">
    Denmark</option>
    <option value="Djibouti">
    Djibouti</option>
    <option value="Dominica">
    Dominica</option>
    <option value="Dominican Republic">
    Dominican Republic</option>
    <option value="Ecuador">
    Ecuador</option>
    <option value="Egypt">
    Egypt</option>
    <option value="El Salvador">
    El Salvador</option>
    <option value="Equatorial Guinea">
    Equatorial Guinea</option>
    <option value="Eritrea">
    Eritrea</option>
    <option value="Estonia">
    Estonia</option>
    <option value="Ethiopia">
    Ethiopia</option>
    <option value="Europe">
    Europe</option>
    <option value="Falkland Islands (Malvinas)">
    Falkland Islands (Malvinas)</option>
    <option value="Fiji">
    Fiji</option>
    <option value="Finland">
    Finland</option>
    <option value="France">
    France</option>
    <option value="Gabon">
    Gabon</option>
    <option value="Gambia">
    Gambia</option>
    <option value="Georgia">
    Georgia</option>
    <option value="Germany">
    Germany</option>
    <option value="Ghana">
    Ghana</option>
    <option value="Greece">
    Greece</option>
    <option value="Greenland">
    Greenland</option>
    <option value="Grenada">
    Grenada</option>
    <option value="Guatemala">
    Guatemala</option>
    <option value="Guinea-Bissau">
    Guinea-Bissau</option>
    <option value="Guyana">
    Guyana</option>
    <option value="Haiti">
    Haiti</option>
    <option value="Heard Island and McDonald Islands">
    Heard Island and McDonald Islands</option>
    <option value="Holy See (Vatican City State)">
    Holy See (Vatican City State)</option>
    <option value="Honduras">
    Honduras</option>
    <option value="Hong Kong">
    Hong Kong</option>
    <option value="Hungary">
    Hungary</option>
    <option value="Iceland">
    Iceland</option>
    <option value="India">
    India</option>
    <option value="Indonesia">
    Indonesia</option>
    <option value="Iran -  Islamic Republic of">
    Iran - Islamic Republic of</option>
    <option value="Iraq">
    Iraq</option>
    <option value="Ireland">
    Ireland</option>
    <option value="Israel">
    Israel</option>
    <option value="Italy">
    Italy</option>
    <option value="Jamaica">
    Jamaica</option>
    <option value="Japan">
    Japan</option>
    <option value="Jordan">
    Jordan</option>
    <option value="Kazakhstan">
    Kazakhstan</option>
    <option value="Kenya">
    Kenya</option>
    <option value="Kiribati">
    Kiribati</option>
    <option value="Korea, North">
    Korea, North</option>
    <option value="Korea, South">
    Korea, South</option>
    <option value="Kuwait">
    Kuwait</option>
    <option value="Kyrgyzstan">
    Kyrgyzstan</option>
    <option value="Laos">
    Laos</option>
    <option value="Latvia">
    Latvia</option>
    <option value="Lebanon">
    Lebanon</option>
    <option value="Lesotho">
    Lesotho</option>
    <option value="Liberia">
    Liberia</option>
    <option value="Libya">
    Libya</option>
    <option value="Liechtenstein">
    Liechtenstein</option>
    <option value="Lithuania">
    Lithuania</option>
    <option value="Luxembourg">
    Luxembourg</option>
    <option value="Macau">
    Macau</option>
    <option value="Macedonia">
    Macedonia</option>
    <option value="Madagascar">
    Madagascar</option>
    <option value="Malawi">
    Malawi</option>
    <option value="Malaysia">
    Malaysia</option>
    <option value="Maldives">
    Maldives</option>
    <option value="Mali">
    Mali</option>
    <option value="Malta">
    Malta</option>
    <option value="Marshall Islands">
    Marshall Islands</option>
    <option value="Mauritania">
    Mauritania</option>
    <option value="Mauritius">
    Mauritius</option>
    <option value="Mexico">
    Mexico</option>
    <option value="Moldova">
    Moldova</option>
    <option value="Monaco">
    Monaco</option>
    <option value="Mongolia">
    Mongolia</option>
    <option value="Montenegro">
    Montenegro</option>
    <option value="Morocco">
    Morocco</option>
    <option value="Mozambique">
    Mozambique</option>
    <option value="Myanmar">
    Myanmar</option>
    <option value="N Guinea">
    N Guinea</option>
    <option value="Namibia">
    Namibia</option>
    <option value="Nauru">
    Nauru</option>
    <option value="Nepal">
    Nepal</option>
    <option value="Netherlands">
    Netherlands</option>
    <option value="Netherlands Antilles">
    Netherlands Antilles</option>
    <option value="New Zealand">
    New Zealand</option>
    <option value="Nicaragua">
    Nicaragua</option>
    <option value="Niger">
    Niger</option>
    <option value="Nigeria">
    Nigeria</option>
    <option value="Northern Mariana Islands">
    Northern Mariana Islands</option>
    <option value="Norway">
    Norway</option>
    <option value="Oman">
    Oman</option>
    <option value="Pakistan">
    Pakistan</option>
    <option value="Palau">
    Palau</option>
    <option value="Palestinian Territories">
    Palestinian Territories</option>
    <option value="Panama">
    Panama</option>
    <option value="Papua New Guinea">
    Papua New Guinea</option>
    <option value="Paraguay">
    Paraguay</option>
    <option value="Peru">
    Peru</option>
    <option value="Philippines">
    Philippines</option>
    <option value="Poland">
    Poland</option>
    <option value="Portugal">
    Portugal</option>
    <option value="Qatar">
    Qatar</option>
    <option value="Romania">
    Romania</option>
    <option value="Russia">
    Russia</option>
    <option value="Rwanda">
    Rwanda</option>
    <option value="Saint Kitts and Nevis">
    Saint Kitts and Nevis</option>
    <option value="Saint Lucia">
    Saint Lucia</option>
    <option value="Saint Vincent and the Grenadines">
    Saint Vincent and the Grenadines</option>
    <option value="Samoa">
    Samoa</option>
    <option value="San Marino">
    San Marino</option>
    <option value="Sao Tome and Principe">
    Sao Tome and Principe</option>
    <option value="Saudi Arabia">
    Saudi Arabia</option>
    <option value="Senegal">
    Senegal</option>
    <option value="Serbia">
    Serbia</option>
    <option value="Seychelles">
    Seychelles</option>
    <option value="Sierra Leone">
    Sierra Leone</option>
    <option value="Singapore">
    Singapore</option>
    <option value="Slovakia">
    Slovakia</option>
    <option value="Slovenia">
    Slovenia</option>
    <option value="Solomon Islands">
    Solomon Islands</option>
    <option value="Somalia">
    Somalia</option>
    <option value="South Africa">
    South Africa</option>
    <option value="Spain">
    Spain</option>
    <option value="Sri Lanka">
    Sri Lanka</option>
    <option value="Sudan">
    Sudan</option>
    <option value="Suriname">
    Suriname</option>
    <option value="Swaziland">
    Swaziland</option>
    <option value="Sweden">
    Sweden</option>
    <option value="Switzerland">
    Switzerland</option>
    <option value="Syria">
    Syria</option>
    <option value="Taiwan">
    Taiwan</option>
    <option value="Tajikistan">
    Tajikistan</option>
    <option value="Tanzania">
    Tanzania</option>
    <option value="Thailand">
    Thailand</option>
    <option value="Timor-Leste">
    Timor-Leste</option>
    <option value="Togo">
    Togo</option>
    <option value="Tonga">
    Tonga</option>
    <option value="Trinidad and Tobago">
    Trinidad and Tobago</option>
    <option value="Tunisia">
    Tunisia</option>
    <option value="Turkey">
    Turkey</option>
    <option value="Turkmenistan">
    Turkmenistan</option>
    <option value="Tuvalu">
    Tuvalu</option>
    <option value="Uganda">
    Uganda</option>
    <option value="Ukraine">
    Ukraine</option>
    <option value="United Arab Emirates">
    United Arab Emirates</option>
    <option value="United Kingdom">
    United Kingdom</option>
    <option value="United States">
    United States</option>
    <option value="Uruguay">
    Uruguay</option>
    <option value="Uzbekistan">
    Uzbekistan</option>
    <option value="Vanuatu">
    Vanuatu</option>
    <option value="Venezuela">
    Venezuela</option>
    <option value="Vietnam">
    Vietnam</option>
    <option value="Virgin Islands -  U.S.">
    Virgin Islands - U.S.</option>
    <option value="Virgin Islands - British">
    Virgin Islands - British</option>
    <option value="Wallis and Futuna">
    Wallis and Futuna</option>
    <option value="Western Sahara">
    Western Sahara</option>
    <option value="Yemen">
    Yemen</option>
    <option value="Zambia">
    Zambia</option>
    <option value="Zimbabwe">
    Zimbabwe</option>
    </select>
    </div>
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Choose Industry</label>
    <select class="form-control bg-light-gray" id="Industry" size="1" name="Industry">
    <option selected="selected">Choose Industry</option>
    <option value="Aerospace and Defense">Aerospace and Defense</option>
    <option value="Automotive and Transportation">Automotive and Transportation
    </option>
    <option value="Chemical and Materials">Chemical and Materials</option>
    <option value="Energy and Power">Energy and Power</option>
    <option value="Food and Beverage">Food and Beverage</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Information and Communication Technology">Information and
    Communication Technology</option>
    <option value="Packaging Construction and Mining">Packaging Construction and
    Mining</option>
    <option value="Semiconductor and Electronics">Semiconductor and Electronics
    </option>
    <option value="other">other</option>
    </select>
    </div>
    </div>
    <div class="hspacer15"></div>
    <div class="row" style={{display:'none'}}>
    <div class="col-12 col-md-6">
    <div class="form-group">
    <label class="font15 c-gray">Enter text from the image </label>
    <input placeholder="Enter text from the image" type="text" name="BetaPotataCaptcha" id="BetaPotataCaptcha" class="form-control bg-light-gray"/>
    </div>
    </div>
    <div class="col-12 col-md-6">
    <div class="form-group">
    <label class="font15 c-gray">&nbsp; </label>
    <div class="form-control font-weight-bold text-center captcha">
    <div style={{ backgroundColor: "white", color: "#005AA0", fontFamily: "Arial", fontSize: "14px", fontWeight: "bold", height: "24px" }} align="left">
    8
    7
    4
    3
    1
    &nbsp;</div>
    </div>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-12">
    <label class="font15 c-gray">Message</label>
    <div class="input-group mb-3">
    <textarea class="form-control bg-light-gray" id="Comments" name="Comments" rows="3"></textarea>
    </div>
    </div>
    </div>
    <div class="row" style={{display: 'none'}}>
    <div class="col-12">
    <div id="Managepreferences" class="form-group col-lg-12">
    <label style={{ fontWeight:'bold', marginTop:'10px', display:'inline-block', fontSize:'12px' }}>
    Manage
    preferences :</label>
    <ul style={{listStyle:'none', fontSize:'12px', padding:'0', margin:'0'}}>
    <li><input type="checkbox" name="SelectAll"/> Select all</li>
    <li><input type="checkbox" name="Newsletter"/><span id="txNewsletter">
    News-Letters with latest Market
    insights</span></li>
    <li><input type="checkbox" name="ProductAndService"/><span id="txProductAndService"> Information &amp; discussion on the
    relevant new products and services </span></li>
    <li><input type="checkbox" name="InsightAndInformation"/><span id="txInsightAndInformation"> Information &amp; discussion on Market
    insights and Market information</span> </li>
    <li><input type="checkbox" name="EventsAndConferences"/><span id="txEventsAndConferences"> Information &amp; discussion on our
    events and conferences</span></li>
    
    <li><label style={{ fontWeight:'bold', marginTop:'10px', display:'inline-block'}}>
    Preferred modes for discussion</label>
    <ul style={{listStyle:'none',padding:'0 0 0 10px'}}>
    <li><input type="checkbox" name="ModeSelectAll"/> Select all</li>
    <li><input type="checkbox" name="ModeEMail"/> <span id="txModeEMail">Email</span></li>
    <li><input type="checkbox" name="ModePhone"/> <span id="txModePhone">Phone</span></li>
    <li><input type="checkbox" name="ModeSocialMedia"/> <span id="txModeSocialMedia">Professional and social network
    (Linkedin, etc)</span></li>
    
    </ul>
    </li>
    </ul>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-12">
    <input class="btn btn-primary btn-blue btn-block py-3 font15 font-weight-bold text-uppercase" type="submit" value="Send us Email" name="submit"/>
    <span>
    By clicking the "Submit" button, you are agreeing to the
    <a href> Terms of Use </a> and
    <a href>Privacy Policy.</a>
    </span>
    </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
      </div>
    )
  }
}

export default ContectUs