import React from "react";
import img1 from "./images/image-product-1.jpg";
import img2 from "./images/image-product-2.jpg";
import img3 from "./images/image-product-3.jpg";
import img4 from "./images/image-product-4.jpg";

import cart from "./images/icon-cart.svg";

const Header = () => {
  return (
    <>
      <section>
        <div className="container-fluid ">
          <div className="row mb-5 my-6 pb-6 pt-5">
            <div className="col-lg-6 col-md-6 col-12">
              
              <section>
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                  </div>

                  <div class="carousel-inner">
                    <div class="carousel-item active ">
                      <img
                        src={img1}
                        class="d-block w-100"
                        alt="/images/img1"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={img2}
                        class="d-block w-100"
                        alt="/images/img2"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={img3}
                        class="d-block w-100"
                        alt="/images/img3"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={img4}
                        class="d-block w-100"
                        alt="/images/img4"
                      />
                    </div>
                  </div>

                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>

                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </section>
            </div>


            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="text-left text-capitalize pt-5 md-6 my-0">
                SNEAKER COMPANY
              </h2>
              <h1 className="text-left text-capitalize fw-bold my-0 pt-5">
                Fall Limited Edition Sneakers
              </h1>
              <p className="fw-bold pt-5">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
              <div className="fw-bold my-1 mx  px-1 py-4 pd-5  pt-5">
                <i className="fas fa-minus minus "></i>
                <input type="text" placeholder="" className="width:50px" />
                <i className="fas fa-plus add"></i>
              </div>{" "}
              <br></br>
              <button className="btn bg-danger text-white fw-bold my-1 mx-3 px-5  pd-1  pt-3">
                <img src={cart} /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
