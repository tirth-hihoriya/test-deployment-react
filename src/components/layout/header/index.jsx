import React, { useState } from "react";
import logo from "../../../assets/img/greenHydroImages/logo.svg";
import MenuItem from "./MenuItem";
import MenuWithSub from "./MenuWithSub";
import SidebarMenu from "./SidebarMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-wrap d-flex align-items-center justify-content-between">
      <div className="logo-wrap">
        <a href="/">
          <img src={logo} alt="" className="logo-img" />
        </a>
      </div>

      <div className="menu-wrap d-flex align-items-center">
        {/* <div className={!open ? "menu-bars" : "menu-bars open"} onClick={() => {setOpen(!open)}}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div> */}

        <div
          className={
            !open
              ? "desk-menu d-flex align-items-center"
              : "desk-menu open d-flex align-items-center"
          }
        >
          <MenuWithSub name="Technology">
            <MenuItem link="/technology/orc" name="ORC Plant" />
            <MenuItem
              link="/technology/scicat"
              name="SciCat technology"
            />
          </MenuWithSub>
          <MenuItem link="/advancing" name="ESG" />
          <MenuItem link="/advantages" name="Why Us" />
          {/* <MenuWithSub name="Why Us">
            <MenuItem link="/about-us" name="About Us" />
            <MenuItem link="/advantages" name="Competitive Advantage" />
          </MenuWithSub> */}

            <MenuWithSub name="COMPANY">
            <MenuItem link="/about-us" name="About Us" />
            <MenuItem link="/insights" name="News" />
          </MenuWithSub>

         

          {/* <MenuItem link="/team" name="Team" /> */}
          <MenuItem link="/our-portfolio" name="Projects" />
         <Link to="contact/us" className="contact-btn">Contact Us</Link>
          {/* <MenuItem link="/partners" name=" Partners" /> */}
        </div>

        <SidebarMenu />
      </div>
    </div>
  );
};

export default Header;
