import "./AboutUs.css";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavigateBar from "./NavigateBar";

import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { SiReact } from "react-icons/si";

function AboutUs() {
  return (
    <>
      <div className="pb-5">
        <NavigateBar />{" "}
      </div>
      <div className="container-fluid mt-5 about_us">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <h2 className="text-center mb-5 mt-5 aboutUs_title">
              All about this project!!
              <br />
              Let me tell you a story... One Pixel At A Time
            </h2>
            <div className="row mb-5 mt-2">
              <div className="col-md-12">
                <p>
                  In the blink of an eye, our team embarked on an ambitious
                  quest: to create a thriving e-commerce platform. Armed with
                  over
                  <span className="me-2 ms-2">
                    <strong style={{ color: "#fca311" }}>
                      {""}
                      +600 hours of programming
                    </strong>
                  </span>
                  expertise gained during an intensive 3 months bootcamp, we
                  harnessed the power of HTML, CSS, JavaScript, Node.js, React,
                  MongoDB, and SQL to bring our vision to life. The challenge?
                  Completing this monumental task in just three weeks.
                </p>
              </div>
              <div className="col-md-12">
                <h4 className="sub_title">The Spark Behind Our Project</h4>
                <p>
                  Our mojo? The vibrant, ever-expanding realm of video games. As
                  gamers ourselves, we couldn't resist diving into an industry
                  that mesmerizes millions.
                </p>
              </div>
              <div className="col-md-12">
                <h4 className="sub_title"> A Whirlwind Journey</h4>
                <p>
                  Time was our nemesis, but we faced it head-on with grit and a
                  splash of audacity. Every day was a rollercoaster, each hurdle
                  a chance to flex our creative muscles.
                </p>
              </div>
              <div className="col-md-12">
                <h4 className="sub_title">
                  Unleashing Our Programming Prowess
                </h4>
                <p>
                  Our bootcamp experience laid the foundation for success. With
                  more than 600 hours of programming education under our belts,
                  we were equipped with the skills and expertise needed to build
                  something substantial. HTML, CSS, JavaScript, Node.js, React,
                  MongoDB, and SQL became our trusty tools.
                </p>
              </div>
              <div className="col-md-12">
                <h4 className="sub_title">A Window to the Future</h4>
                <p>
                  We invite you to hop aboard this thrilling adventure as we
                  navigate the ever-evolving landscape of the video game
                  industry,
                  <strong style={{ color: "#fca311" }}>
                    {" "}
                    ONE PIXEL AT A TIME.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 mt-5">
          <div className="col-md-12 text-center">
            <div className="background_icons pt-2 pb-2">
              <h3>
                <SiMongodb /> <SiMysql /> <SiNodedotjs /> <AiOutlineHtml5 />{" "}
                <TbBrandCss3 /> <DiJavascript1 /> <SiReact />
              </h3>
            </div>
          </div>
        </div>
        <div className="row pt-5 mb-5">
          <div className="col-md-12 text-center">
            <h2>About Us!</h2>
          </div>
        </div>
        <div className="row pb-5 d-flex justify-content-center">
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <div className="background_alejo background me-2">
              <img
                className="img_aboutUs mt-3"
                src="./src/assets/ManAvatar.avif"
                alt="image"
              />
              <div className="aboutUs_content_alejo">
                <h3 className="text-center mt-3">Alejo Vignale</h3>
                <p className="text-center description_aboutUs_alejo">
                  Full Stack Developer
                </p>
              </div>
              <div className=" text-center m-3 ">
                <ul className="profile-links">
                  <div className="border_links_alejo">
                    <li className="list_color">
                      <Link className="description_aboutUs_alejo list_color">
                        LinkedIn
                      </Link>
                    </li>
                  </div>
                  <div className="border_links_rodrigo">
                    <li className="list_color">
                      <Link className="list_color description_aboutUs_alejo">
                        Github
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4 ">
            <div className="background_rodrigo background me-2">
              <img
                className="img_aboutUs mt-3"
                src="./src/assets/ManAvatar.avif"
                alt="image"
              />
              <div className="aboutUs_content_rodrigo">
                <h3 className="text-center mt-3">Rodrigo Silva</h3>
                <p className="text-center description_aboutUs_rodrigo">
                  Full Stack Developer
                </p>
              </div>
              <div className=" text-center ">
                <ul className="profile-links">
                  <div className="border_links_rodrigo">
                    <li className="list_color">
                      <Link className="description_aboutUs_rodrigo list_color">
                        LinkedIn
                      </Link>
                    </li>
                  </div>
                  <div className="border_links_rodrigo">
                    <li className="list_color">
                      <Link className="list_color description_aboutUs_rodrigo">
                        Github
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-5">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
