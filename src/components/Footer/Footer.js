import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BiLocationPlus, BiMailSend } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { RiPhoneLine } from "react-icons/ri";
import "./Footer.scss";
import icon2 from "../assets/icon2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Footer() {
  return (
    <div>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid px-5 text-md-left">
          <div className="row pt-5">
            <div className="col-md-6 mt-md-0 mt-3 align">
              <p>
                JimsOutfit is a premium unisex brand offering a ready to wear
                label and accessories to world class personalities.
              </p>
              <div>
                <a
                  href="https://www.instagram.com/jims_outfit/"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </a>

                <a href="https://www.facebook.com/jimsoutfit" target="_blank">
                  <FiFacebook />
                </a>
                <a href="#">
                  <FiTwitter />
                </a>
              </div>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase"> Our Links</h5>

              <ul className="list-unstyled">
                <li classNameName="">
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Return Policy</a>
                </li>
                <li>
                  <a href="#!">Terms and Conditionss</a>
                </li>
                <li>
                  <a href="#!">Shipping Information</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Info</h5>

              <ul className="list-unstyled">
                <li>
                  <BiLocationPlus />
                  <a href="#">16 Karimu Ikotun close, sabo-yaba</a>
                </li>
                <li>
                  <BiMailSend />
                  <a href="mailto:jimsoutfit@gmail.com">jimsoutfit@gmail.com</a>
                </li>

                <li>
                  <RiPhoneLine />
                  <a href="tel:+23407039461453">+2347039461453</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          <a href="#">© JimOutfit Production 2022</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
