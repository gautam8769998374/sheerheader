import { useState, useRef, useEffect } from 'react'
import './LowerHeader.css'
import './DropdownMenu.css';

function LowerHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);    
    const dropdownRef = useRef(null);

    function toggleDropdown() {
      setIsDropdownOpen(!isDropdownOpen);
    }
    function RegionsDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      });
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      }


      const [isOpen, setIsOpen] = useState(false);

      const regionsDropdown = () => setIsOpen(!isOpen);

      

     
        const [isOpen1, setIsOpen1] = useState(false);
      
        function toggleMenu() {
          console.log('toggleMenu called');
          setIsOpen1(!isOpen1);
          console.log('isOpen1:', isOpen1);
        }
        console.log('rendering');
 
   
  return (

    <div>
        <header  class=" lowerHeader">
            <nav>
                <ul>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

                <button className="menu-icon" onClick={toggleMenu}>
                  <i className="fas fa-bars"></i>
                </button>
                {isOpen1 && (
                  <div className="dropdown-menu1">
                    <ul>
                      <li><a href="#" className="dropdown-menu2">Home</a></li>
                      <li><a href="#" className="dropdown-menu2">News</a></li>
                      <li><a href="#" className="dropdown-menu2">Press</a></li>
                      <li><a href="#" className="dropdown-menu2">Blog</a></li>
                      <li><a href="#"className= 'dropdown-menu2'>Query</a></li>
                    </ul>
                  </div>
                )}


      






          <div className="Regions1">
      <span className="Regions2" onClick={regionsDropdown}>
        Regions
        <svg className={`Regions3 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 30 48" version="1.1" width="10" height="10" preserveAspectRatio>
          <path d="M0 4.7c1.8-1.8 3.4-3.4 4.9-4.9 8 8 16.1 16 24.2 24 -8.1 8-16.1 16-24.2 24 -1.5-1.5-3.1-3.1-4.7-4.7C6.5 36.7 12.9 30.4 19.4 24 12.8 17.5 6.4 11.1 0 4.7z"></path>
        </svg>
      </span>
      {isOpen && (
        <div className="Regions4">
          <a href="#" className="Regions5">India</a>
          <a href="#" className="Regions5">China</a>
          <a href="#" className="Regions5">Russia</a>
          <a href="#" className="Regions5">Pakistan</a>
          <a href="#" className="Regions5">Bangladesh</a>
          <a href="#" className="Regions5">Shrilanka</a>
          <a href="#" className="Regions5">Iran</a>
          <a href="#" className="Regions5">Irque</a>
          <a href="#" className="Regions5">Israeal</a>
        </div>
      )}
    </div>
          <span className={`dropdown-toggle gautam ${isDropdownOpen ? 'show' : ''}`} onClick={toggleDropdown} ref={dropdownRef}>Industry Expertise</span>
              <span class="drop-down-icon">
                <svg class="rotate-90" viewBox="0 0 30 48" version="1.1"  width="10" height="10" preserveAspectRatio >
                <path d="M0 4.7c1.8-1.8 3.4-3.4 4.9-4.9 8 8 16.1 16 24.2 24 -8.1 8-16.1 16-24.2 24 -1.5-1.5-3.1-3.1-4.7-4.7C6.5 36.7 12.9 30.4 19.4 24 12.8 17.5 6.4 11.1 0 4.7z"></path>
                </svg>
              </span> 
              <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item">Consumer Oriented Sector</a>
          <a href="#" className="dropdown-item">Home care</a>
          <a href="#" className="dropdown-item">Travel and Tourism</a>
          <a href="#" className="dropdown-item">Packaging</a>
          <a href="#" className="dropdown-item">Footwear</a>
          <a href="#" className="dropdown-item">Baby Care</a>
          <a href="#" className="dropdown-item">Pet Care</a>
          <a href="#" className="dropdown-item">Food Ingredients</a>  
          <a href="#" className="dropdown-item">Alcoholic Beverages</a>
        </div>
      </div>
        
        <li class="dropdown">
      <span class="dropdown-toggle gautam"  >Solutions</span>
      <span class="drop-down-icon">
                <svg class="rotate-90" viewBox="0 0 30 48" version="1.1"  width="10" height="10" preserveAspectRatio >
                <path d="M0 4.7c1.8-1.8 3.4-3.4 4.9-4.9 8 8 16.1 16 24.2 24 -8.1 8-16.1 16-24.2 24 -1.5-1.5-3.1-3.1-4.7-4.7C6.5 36.7 12.9 30.4 19.4 24 12.8 17.5 6.4 11.1 0 4.7z"></path>
                </svg>
        </span> 
        <div class="dropdown-menu">
                <a>B2B and B2C</a>
                <a>Data Analytics</a>
                <a> SEO and Translation Services</a>
                <a> Market Research Reports</a>
                <a>It Solution</a>
              </div>  
        </li>
       
        <span class="one">Resources</span>
        <span class="one">Box</span>
        <span class="one">Contact Us</span>
        <span class="one">About Us</span>

                </ul>
            </nav>
        </header>
    </div>
  )
}

export default LowerHeader