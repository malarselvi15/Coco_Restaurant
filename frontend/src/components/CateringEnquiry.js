import React,{useState}from"react";
import"../App.css";

const CateringEnquiry=()=>{
const[formData,setFormData]=useState({
name:"",
phone:"",
event:"",
date:"",
guests:"",
message:"",
});

const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value,
});
};

const handleSubmit=(e)=>{
e.preventDefault();
const whatsappNumber="919361753526";
const text=`
Catering Enquiry 🍽️

Name: ${formData.name}
Phone: ${formData.phone}
Event Type: ${formData.event}
Event Date: ${formData.date}
Number of Guests: ${formData.guests}

Message:
${formData.message}
`;
const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
window.open(url,"_blank");
};

return(
<section className="catering-section">
<div className="catering-container">

<h2 className="catering-title">Catering Enquiry</h2>

<p className="catering-subtitle">
Let us make your event delicious & unforgettable
</p>

<form className="catering-form"onSubmit={handleSubmit}>

<div className="form-group">

<input
type="text"
name="name"
placeholder="Your Name"
required
onChange={handleChange}
/>

<input
type="tel"
name="phone"
placeholder="Phone Number"
required
onChange={handleChange}
/>

</div>

<div className="form-group">

<select
name="event"
required
onChange={handleChange}
defaultValue=""
>

<option value=""disabled>
Select Event Type
</option>

<option value="Wedding">
Wedding
</option>

<option value="Birthday">
Birthday
</option>

<option value="Corporate Event">
Corporate Event
</option>

<option value="Engagement">
Engagement
</option>

<option value="Anniversary">
Anniversary
</option>

<option value="Reception">
Reception
</option>

<option value="House Warming">
House Warming
</option>

<option value="Other">
Other
</option>

</select>

<input
type="date"
name="date"
required
onChange={handleChange}
/>

</div>

<input
type="number"
name="guests"
placeholder="Number of Guests"
required
onChange={handleChange}
/>

<textarea
name="message"
placeholder="Additional Details..."
rows="4"
onChange={handleChange}
></textarea>

<button
type="submit"
className="catering-btn"
>

Send Message

</button>

</form>

</div>
</section>
);
};

export default CateringEnquiry;
