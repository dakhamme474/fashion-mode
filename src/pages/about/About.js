import React from "react";
import about from "../../assets/images/about.jpg";

export const About = () => {
  return (
    <>
      <section className="section-about">
        <div className="heading-page"><h1>ABOUT</h1></div>
        <div className="all-about">
          <div className="img-about"><img src={about} alt="" /></div>
          <div className="our-story"><h1>Our Story</h1>
            <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem molestias Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, enim quidem? Veritatis quasi qui Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, at! cupiditate esse porro quis quidem doloribus? maxime facere dignissimos, eius accusantium nulla eos eaque aperiam laborum ipsam inventore amet reiciendis qui repellat corrupti dolores facilis nemo fugit. Accusantium provident tenetur commodi qui illo saepe, sapiente quis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quod neque repellat totam consequatur assumenda corporis sequi omnis iste at animi eveniet reiciendis vel tempora, fuga ad eaque a vitae. Maxime nisi et consectetur at omnis optio reiciendis rem assumenda?</p></div>
        <p className="sous-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum illo sequi quidem mollitia harum. Totam, ratione. Magnam, numquam voluptates! Consequuntur aut saepe in quae. Numquam placeat a sequi consequatur voluptates!</p></div>
        </div>
      </section>
    </>
  );
};
