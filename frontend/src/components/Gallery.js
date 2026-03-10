import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../App.css";

import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">

      <h2 className="gallery-title">Wonderful Memories</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        loop={true}
        speed={900}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}

        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }}
      >

        <SwiperSlide>
          <div className="gallery-card">
            <img src={img1} alt="memory 1"/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="gallery-card">
            <img src={img2} alt="memory 2"/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="gallery-card">
            <img src={img3} alt="memory 3"/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="gallery-card">
            <img src={img4} alt="memory 4"/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="gallery-card">
            <img src={img5} alt="memory 5"/>
          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  );
};

export default Gallery;