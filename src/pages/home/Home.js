import React, { useState } from "react";
import style from "../../assets/images/style.jpg";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import item1 from "../../assets/images/item1.jpg";
import item2 from "../../assets/images/item2.jpg";
import item3 from "../../assets/images/item3.jpg";
import item4 from "../../assets/images/item4.jpg";
import masterslide from "../../assets/images/masterslide.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";



export const Home = () => {
  const [xplay, setxPlay] = useState(false)
  const openModal = () => {
    setxPlay(!xplay)
  }
  return (
    <>
      {/* section1 */}
      <div className="slide">
        <div className="slide-info"><h1>LEATHER BACS</h1>
          <p className="text-center text-white">new collection</p>
          <NavLink to={"/product"}>Shop Now</NavLink>
        </div>
      </div>
      {/* section2 */}
      <section className="section-2">
        <div className="banner"><img src={banner2} alt="" />
          <h1>COMING SOON</h1>
        </div>
        <div className="banner"><img src={banner1} alt="" />
          <h1>COMING SOON</h1>
        </div>
        <div className="banner"><img src={banner2} alt="" />
          <h1>COMING SOON</h1>
        </div>
      </section>
      {/* section3 */}
      <section className="section-3">
        <div className="our-product"><h1>OUR PRODUCT</h1></div>
        <ul class="nav nav-pills mb-3 grand-menu" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link bg-transparent text-gray  les-menu" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Best Seller</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link bg-transparent text-gray  les-menu" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">New</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link bg-transparent text-gray  les-menu" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sale</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link bg-transparent text-gray  les-menu" id="pills-old-tab" data-bs-toggle="pill" data-bs-target="#pills-old" type="button" role="tab" aria-controls="pills-old" aria-selected="false">Old</button>
          </li>

        </ul>
        <div class="tab-content" id="pills-tabContent">
          {/* premier tabs ---------------------------------*/}
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

            <div className="x4card">


              <div className="xcard"><div className="item1"><img src={item1} alt="" /></div>
                <div className="info-product"><p>sweet jean bleu</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item2} alt="" /></div>
                <div className="info-product"><p>sac a dos noir</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item3} alt="" /></div>
                <div className="info-product"><p>jean bleu</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item4} alt="" /></div>
                <div className="info-product"><p>montre noir coach</p>
                  <p>$75.00</p>
                </div>
              </div>



            </div>
          </div>
          {/* deuxieme tabs ----------------------------*/}
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            <div className="x4card">


              <div className="xcard"><div className="item1"><img src={item1} alt="" /></div>
                <div className="info-product"><p>sweet jean bleu</p>
                  <p>$75.00</p>
                </div>
              </div>

              <div className="xcard"><div className="item1"><img src={item3} alt="" /></div>
                <div className="info-product"><p>jean bleu</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item2} alt="" /></div>
                <div className="info-product"><p>sac a dos noir</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item4} alt="" /></div>
                <div className="info-product"><p>montre noir coach</p>
                  <p>$75.00</p>
                </div>
              </div>



            </div>
          </div>
          {/* troisieme tabs ------------------------------*/}
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
            <div className="x4card">



              <div className="xcard"><div className="item1"><img src={item2} alt="" /></div>
                <div className="info-product"><p>sac a dos noir</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item3} alt="" /></div>
                <div className="info-product"><p>jean bleu</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item4} alt="" /></div>
                <div className="info-product"><p>montre noir coach</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item1} alt="" /></div>
                <div className="info-product"><p>sweet jean bleu</p>
                  <p>$75.00</p>
                </div>
              </div>



            </div>
          </div>
          {/* quatrieme tabs ------------------------------------------------------*/}
          <div class="tab-pane fade" id="pills-old" role="tabpanel" aria-labelledby="pills-old-tab" tabindex="0">
            <div className="x4card">


              <div className="xcard"><div className="item1"><img src={item1} alt="" /></div>
                <div className="info-product"><p>sweet jean bleu</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item2} alt="" /></div>
                <div className="info-product"><p>sac a dos noir</p>
                  <p>$75.00</p>
                </div>
              </div>
              <div className="xcard"><div className="item1"><img src={item3} alt="" /></div>
                <div className="info-product"><p>jean bleu</p>
                  <p>$75.00</p>
                </div>
              </div>

              <div className="xcard"><div className="item1"><img src={item2} alt="" /></div>
                <div className="info-product"><p>sac a dos noir</p>
                  <p>$75.00</p>
                </div>
              </div>



            </div>
          </div>

        </div>
      </section>
      {/* section4 */}
      <section className="section-4">
        <div className="sous-bg">
          <h3>The Beauty</h3>
          <h1>LOOK BOOK</h1>
          <div className="play-icone" onClick={openModal}><FontAwesomeIcon icon={faPlay} className="play" /><p>play video</p></div>
        </div>
      </section>

      <div className={xplay ? "modalx" : "hide"
      }>
      <p onClick={openModal} className="close-modal">x</p>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/yhXZ2uWquvw" title="The Anix - &quot;This Machine&quot; T-Shirt (Preview)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </>
  );
};
