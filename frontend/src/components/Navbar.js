import React, { useEffect, useState } from "react";
import "../App.css";
import logoWhite from "../assets/logo-white.png";
import logoColor from "../assets/logo-color.png";

const Navbar=()=>{
const[scrolled,setScrolled]=useState(false);
const[menuOpen,setMenuOpen]=useState(false);

useEffect(()=>{
const handleScroll=()=>{
setScrolled(window.scrollY>80);
};
window.addEventListener("scroll",handleScroll);
return()=>window.removeEventListener("scroll",handleScroll);
},[]);

const scrollToSection=(id)=>{
const element=document.getElementById(id);
if(element){
const navbarHeight=90;
const elementPosition=element.getBoundingClientRect().top+window.pageYOffset-navbarHeight;
window.scrollTo({top:elementPosition,behavior:"smooth"});
setMenuOpen(false);
}
};

return(
<nav className={scrolled?"navbar scrolled":"navbar"}>

<div className="logo-container" onClick={()=>scrollToSection("home")} style={{cursor:"pointer"}}>
<img src={scrolled?logoColor:logoWhite} alt="logo" className="logo-img"/>
</div>

<div className="hamburger" onClick={()=>setMenuOpen(true)}>
<span></span>
<span></span>
<span></span>
</div>

<ul className={menuOpen?"nav-links active":"nav-links"}>

<div className="close-btn" onClick={()=>setMenuOpen(false)}>×</div>

<li onClick={()=>scrollToSection("home")}>Home</li>
<li onClick={()=>scrollToSection("about")}>About Us</li>
<li onClick={()=>scrollToSection("menu")}>Menu</li>
<li onClick={()=>scrollToSection("gallery")}>Gallery</li>
<li onClick={()=>scrollToSection("enquiry")}>Enquiry</li>
<li onClick={()=>scrollToSection("contact")}>Contact</li>

</ul>

</nav>
);
};

export default Navbar;
