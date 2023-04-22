import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionWrapper from './SectionWrapper';
import CarouselCard from './CarouselCard';

const Testimonials: React.FC = () => {
  const testimonialsData = [
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
    { text: `Polaroid direct trade gorpcore glossier fashion axe four loko banh mi twee ethical banjo tote bag pug mustache. Plaid normcore vinyl, la croix green juice art party swag blog craft beer etsy biodiesel sartorial franzen JOMO. Literally cliche banh mi distillery.` },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SectionWrapper id="testimonials">
      <div className="w-full flex flex-col items-end">
        <h2 className="text-2xl mb-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <CarouselCard key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
