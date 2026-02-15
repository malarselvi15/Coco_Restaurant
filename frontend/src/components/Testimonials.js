import React, { useState, useEffect } from "react";
import "../App.css";
import foodBg from "../assets/food-bg.webp";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const Testimonials = () => {

const reviews = [
{
name: "Kalpesh bendale",
avatar: avatar1,
text: "Coco Family Garden is a lovely place to relax and enjoy good food with family, especially kids.",
rating: 5,
},
{
name: "Titus Ponrathnam",
avatar: avatar2,
text: "The staff is pretty friendly and I definitely like the taste, it's the best restaurant within a reasonable distance of my village. ",
rating: 5,
},
{
name: "Santhiya",
avatar: avatar3,
text: "The food was really good.Quality and quantity are good. The chicken chukka and parotta are a must try!",
rating: 5,
},
{
name: "Lakshmi",
avatar: avatar3,
text: " The taste was so good and the food was fresh. Post lunch here, I didn't enjoy meals in other places to be honest.",
rating: 5,
},
{
name: "Sebastin Raj",
avatar: avatar3,
text: "A very nice resturant with air condotioned menu spanning from fish curry to fish fry, fish curry meals , with chicken mutton biryani",
rating: 5,
},
{
name: "Pavi Sasi",
avatar: avatar1,
text: "This is the most amazing thing I’ve recently discovered. I’ve been to a lot of seafood places but I’ve never gotten an experience like this.",
rating: 5,
},
{
name: "Amutha",
avatar: avatar2,
text: "The restaurant was superb in ambience and vegetarian menu is available and the service is very much appreciated. ",
rating: 5,
},
];

const [index,setIndex]=useState(0);

useEffect(()=>{
const interval=setInterval(()=>{
nextSlide();
},4000);
return()=>clearInterval(interval);
},[index]);

const nextSlide=()=>{
setIndex((prev)=>(prev+1)%reviews.length);
};

const prevSlide=()=>{
setIndex((prev)=>(prev-1+reviews.length)%reviews.length);
};

const visible=[
reviews[index%reviews.length],
reviews[(index+1)%reviews.length],
reviews[(index+2)%reviews.length],
];

return(
<section className="testimonials-section" style={{ backgroundImage: `url(${foodBg})` }}>

<div className="testimonials-dark-overlay"></div>

<div className="testimonials-container">

<h2 className="testimonials-title">Our Happy Customers</h2>

{/* LEFT BUTTON */}
<button className="carousel-btn left" onClick={prevSlide}>
&#10094;
</button>

{/* RIGHT BUTTON */}
<button className="carousel-btn right" onClick={nextSlide}>
&#10095;
</button>

<div className="testimonials-cards slider">

{visible.map((review,i)=>(
<div key={i} className="testimonial-card slide">

<div className="stars">
{Array(review.rating).fill().map((_,i)=>(
<span key={i} className="star">★</span>
))}
</div>

<p className="testimonial-text">"{review.text}"</p>

<h3 className="testimonial-name">{review.name}</h3>

</div>
))}

</div>

</div>

</section>
);

};

export default Testimonials;
