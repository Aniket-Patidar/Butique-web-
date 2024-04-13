import Link from "next/link";
import React, { useState } from "react";
import Cart from "./Card";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <style jsx>{`
          nav {
            position: fixed;
            z-index: 99;
            width: 100%;
            background: #fff;
          }
          nav .wrapper {
            position: relative;
            max-width: 1300px;
            padding: 0px 30px;
            height: 70px;
            line-height: 70px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .wrapper .logo a {
            /* color: #f2f2f2; */
            color: #034363;
            font-size: 30px;
            font-weight: 800;
            text-decoration: none;
          }
          .wrapper .nav-links {
            display: flex;
          }
          .nav-links li {
            list-style: none;
          }
          .nav-links li a {
            /* color: #f2f2f2; */
            color: #034363;
            text-decoration: none;
            font-size: 18px;
            font-weight: 600;
            padding: 9px 15px;
            border-radius: 5px;
            transition: all 0.3s ease;
          }
          .nav-links li a:hover {
            /* background: #3A3B3C; */
            background: #034363;
            color: #fff;
          }

          .nav-links .mobile-item {
            display: none;
          }
          .nav-links .drop-menu {
            position: absolute;
            background: #fff;
            color: #034363;
            /* background: #C22F63; */
            width: 180px;
            line-height: 45px;
            top: 85px;
            opacity: 0;
            visibility: hidden;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
          }
          .nav-links li:hover .drop-menu,
          .nav-links li:hover .mega-box {
            transition: all 0.3s ease;
            top: 70px;
            opacity: 1;
            visibility: visible;
          }
          .drop-menu li a {
            width: 100%;
            display: block;
            padding: 0 0 0 15px;
            font-weight: 400;
            border-radius: 0px;
          }
          .mega-box {
            position: absolute;
            left: 0;
            width: 100%;
            padding: 0 30px;
            top: 85px;
            opacity: 0;
            visibility: hidden;
          }
          .mega-box .content {
            background: #fff;
            padding: 25px 20px;
            display: flex;
            width: 100%;
            justify-content: space-between;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
          }
          .mega-box .content .row {
            width: calc(25% - 30px);
            line-height: 45px;
          }
          .content .row img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .content .row header {
            color: #034363;
            font-size: 20px;
            font-weight: 700;
          }
          .content .row .mega-links {
            margin-left: -40px;
            border-left: 1px solid rgba(255, 255, 255, 0.09);
          }
          .row .mega-links li {
            padding: 0 20px;
          }
          .row .mega-links li a {
            padding: 0px;
            padding: 0 20px;
            color: #034363;
            font-weight: 500;
            font-size: 17px;
            display: block;
          }
          .row .mega-links li a:hover {
            color: #f2f2f2;
          }
          .wrapper .btn {
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            display: none;
          }

          @media screen and (max-width: 970px) {
            .wrapper .btn {
              display: block;
            }
            .wrapper .nav-links {
              position: fixed;
              height: 100vh;
              width: 100%;
              max-width: 350px;
              top: 0;
              left: -100%;
              background: #242526;
              display: block;
              padding: 50px 10px;
              line-height: 50px;
              overflow-y: auto;
              box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
              transition: all 0.3s ease;
            }

            .nav-links li {
              margin: 15px 10px;
            }
            .nav-links li a {
              padding: 0 20px;
              display: block;
              font-size: 20px;
            }
            .nav-links .drop-menu {
              position: static;
              opacity: 1;
              top: 65px;
              visibility: visible;
              padding-left: 20px;
              width: 100%;
              max-height: 0px;
              overflow: hidden;
              box-shadow: none;
              transition: all 0.3s ease;
            }
            #showDrop:checked ~ .drop-menu,
            #showMega:checked ~ .mega-box {
              max-height: 100%;
            }
            .nav-links .desktop-item {
              display: none;
            }
            .nav-links .mobile-item {
              display: block;
              color: #f2f2f2;
              font-size: 20px;
              font-weight: 500;
              padding-left: 20px;
              cursor: pointer;
              border-radius: 5px;
              transition: all 0.3s ease;
            }
            .nav-links .mobile-item:hover {
              background: #3a3b3c;
            }
            .drop-menu li {
              margin: 0;
            }
            .drop-menu li a {
              border-radius: 5px;
              font-size: 18px;
            }
            .mega-box {
              position: static;
              top: 65px;
              opacity: 1;
              visibility: visible;
              padding: 0 20px;
              max-height: 0px;
              overflow: hidden;
              transition: all 0.3s ease;
            }
            .mega-box .content {
              box-shadow: none;
              flex-direction: column;
              padding: 20px 20px 0 20px;
            }
            .mega-box .content .row {
              width: 100%;
              margin-bottom: 15px;
              border-top: 1px solid rgba(255, 255, 255, 0.08);
            }
            .mega-box .content .row:nth-child(1),
            .mega-box .content .row:nth-child(2) {
              border-top: 0px;
            }
            .content .row .mega-links {
              border-left: 0px;
              padding-left: 15px;
            }
            .row .mega-links li {
              margin: 0;
            }
            .content .row header {
              font-size: 19px;
            }
          }
          nav input {
            display: none;
          }

          .body-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            text-align: center;
            padding: 0 30px;
          }
          .body-text div {
            font-size: 45px;
            font-weight: 600;
          }

          /* Mega menu css ends */

          @media screen and (max-width: 640px) {
            #menu-btn {
              display: block;
            }
          }
        `}</style>
        <Cart open={open} setOpen={setOpen}></Cart>

        <div className="wrapper">
          <div className="logo">
            <Link href={"/"}>
              <img
                src={
                  "https://pinklily.com/cdn/shop/files/logo_2c756023-f61f-4cdc-aa7c-4e4a2c384766.png?v=1614306339&width=200"
                }
                className="w-[100px]"
                alt="logo"
              />
            </Link>
          </div>
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times" />
            </label>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Dropdown Menu
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                Dropdown Menu
              </label>
              <ul className="drop-menu">
                <li>
                  <a href="#">Drop menu 1</a>
                </li>
                <li>
                  <a href="#">Drop menu 2</a>
                </li>
                <li>
                  <a href="#">Drop menu 3</a>
                </li>
                <li>
                  <a href="#">Drop menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Mega Menu
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Mega Menu
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Vectors</a>
                      </li>
                      <li>
                        <a href="#">Business cards</a>
                      </li>
                      <li>
                        <a href="#">Custom logo</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Personal Email</a>
                      </li>
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile Email</a>
                      </li>
                      <li>
                        <a href="#">Web Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Site Seal</a>
                      </li>
                      <li>
                        <a href="#">VPS Hosting</a>
                      </li>
                      <li>
                        <a href="#">Privacy Seal</a>
                      </li>
                      <li>
                        <a href="#">Website design</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a onClick={() => setOpen((e) => !e)} href="#">
                Cart
              </a>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn"></label>
          <div className="md:hidden">
            <GiHamburgerMenu className="text-xl" />
          </div>
        </div>
      </nav>
      <div className="body-text">
        <div className="title">Responsive Dropdown and Mega Menu</div>
        <div className="sub-title">using only HTML &amp; CSS</div>
      </div>
    </>
  );
};
