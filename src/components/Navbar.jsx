import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Cart from "./Card";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaCartFlatbedSuitcase, FaCartShopping } from "react-icons/fa6";
import { CgLogOut } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

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

        <>
          <div className="wrapper relative">
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
            <ul className="nav-links flex gap-4 ">
              <label htmlFor="close-btn" className="btn close-btn">
                <i className="fas fa-times" />
              </label>
              <li>
                <Link href={"/"} className="font-semibold hover:bg-blue-700 hover:text-white rounded-lg py-1.5 px-3 ">Home</Link>
              </li>
              <li>
                <Link href={"/orders"} className="font-semibold hover:bg-blue-700 hover:text-white rounded-lg py-1.5 px-3 ">Orders</Link>
              </li>

              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link href="#" className="desktop-item">
                  Mega Menu
                </Link>
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
                          <Link href="#">Graphics</Link>
                        </li>
                        <li>
                          <Link href="#">Vectors</Link>
                        </li>
                        <li>
                          <Link href="#">Business cards</Link>
                        </li>
                        <li>
                          <Link href="#">Custom logo</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Email Services</header>
                      <ul className="mega-links">
                        <li>
                          <Link href="#">Personal Email</Link>
                        </li>
                        <li>
                          <Link href="#">Business Email</Link>
                        </li>
                        <li>
                          <Link href="#">Mobile Email</Link>
                        </li>
                        <li>
                          <Link href="#">Web Marketing</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>Security services</header>
                      <ul className="mega-links">
                        <li>
                          <Link href="#">Site Seal</Link>
                        </li>
                        <li>
                          <Link href="#">VPS Hosting</Link>
                        </li>
                        <li>
                          <Link href="#">Privacy Seal</Link>
                        </li>
                        <li>
                          <Link href="#">Website design</Link>
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
            <div className="md:hidden flex items-center gap-2">
              <FaCartShopping
                onClick={() => setOpen((e) => !e)}
                className=""
                size={20}
              />
              <GiHamburgerMenu
                className="text-xl"
                onClick={() => setSidebarOpen((e) => !e)}
              />
            </div>
          </div>
          <div className="md:hidden bg-[]">
            <aside
              ref={sidebarRef}
              id="sidebar-multi-level-sidebar"
              className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } sm:translate-x-0`}
              aria-label="Sidebar"
            >
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 bg-[#FEFAF6]">
                <img
                  className="w-[120px] mx-auto"
                  src="https://pinklily.com/cdn/shop/files/logo_2c756023-f61f-4cdc-aa7c-4e4a2c384766.png?v=1614306339&width=200"
                ></img>
                <ul className="space-y-2 font-medium  py-[20px]">
                  <li>
                    <a
                      href={"/admin/dashboard"}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-200 group"
                    >
                      <MdOutlineDashboardCustomize />
                      <span className="ms-3">Dashboard</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={"/profile"}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-200 group"
                    >
                      <CgProfile />
                      <span className="ms-3">Profile</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={"/orders"}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-200 group"
                    >
                      <FaCartFlatbedSuitcase />
                      <span className="ms-3">Orders</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/about"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-200 group"
                    >
                      <MdOutlineRoundaboutLeft />
                      <span className="ms-3">About</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/contractUs"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-200 group"
                    >
                      <MdOutlineLocalPhone />
                      <span className="ms-3">Contract Us</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/logout"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-200 group"
                    >
                      <CgLogOut />
                      <span className="ms-3">Logout</span>
                    </a>
                  </li>
                </ul>
                <div className="absolute bottom-3 flex justify-evenly w-full">
                  <FaInstagram className="text-lg" />
                  <SlSocialTwitter className="text-lg" />
                  <CiFacebook className="text-lg" />
                </div>
              </div>
            </aside>
          </div>
        </>
      </nav>
    </>
  );
};
