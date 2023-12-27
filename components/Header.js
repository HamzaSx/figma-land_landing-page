"use client";

import Image from "next/image";
import logo from "../public/logos/logo.png";
import menu from "../public/icons/menu.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Image
        className="header__logo"
        priority
        alt="Logo"
        src={logo}
        width={186}
        height={58}
      />

      <nav className={`header__nav`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="header__btn-log">Login</button>
        <button
          className="header__menu"
          onClick={() => setIsOpen(isOpen ? false : true)}
        >
          <Image
            className="header__menu-img"
            priority
            alt="Menu"
            src={menu}
            width={44}
            height={27}
          />
        </button>
      </div>
      <nav className={`header__nav-mb ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
