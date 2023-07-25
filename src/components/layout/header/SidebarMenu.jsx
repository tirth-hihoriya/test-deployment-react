import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'

const SidebarMenu = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="sidebar-menu">
      <div
        className={!open ? "menu-bars" : "menu-bars open"}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={!open ? "sidebar-wrap" : "sidebar-wrap open"}>
        <div className="sidebar-menu-items">
          {/* <div className="lap-menu">
            <a href="/news" className="sidebar-link">
              News & Insight
            </a>
            <a href="/contact" className="sidebar-link">
              Contact
            </a>
            <a href="/investor" className="sidebar-link">
              Investor
            </a>
          </div> */}

          <div className="mobile-menu">
            <a href="/about-us" className="sidebar-link">
              About Us
            </a>
            <a href="/advantages" className="sidebar-link">
              Why Us
            </a>
            <a href="/technology" className="sidebar-link">
              Technology
            </a>
            <a href="/technology/orc" className="sidebar-link">
              ORC Plant
            </a>
            <a href="/technology/scicat" className="sidebar-link">
              SciCat Technology
            </a>
            <a href="/advancing" className="sidebar-link">
              ESG
            </a>
            {/* <a href="/partners" className="sidebar-link">
              Partners
            </a> */}
            {/* <a href="/news" className="sidebar-link">
              News & Insight
            </a> */}
            <a href="/contact/us" className="sidebar-link">
              Contact
            </a>
            {/* <a href="/investor" className="sidebar-link">
              Investor
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu
