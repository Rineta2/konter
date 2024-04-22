'use client'
import { useState, useEffect } from "react";
import { FiSmartphone } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { TiTimes } from "react-icons/ti";

import { menu } from '@/components/data/data'

import '@/components/sass/Header.scss'
export default function Header() {

  const [show, setShow] = useState(false);

  const [activeLink, setActiveLink] = useState<string | null>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Header Fix

  const [fix, setFix] = useState<boolean>(false);

  const setFixed = (): void => {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setFixed);

    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, []);


  return (
    <header className={`header ${fix ? 'fix' : ''}`}>
      <nav className="container">

        <div className="prof">
          <h1><i><FiSmartphone /></i> Berkah Cellular</h1>
        </div>

        <ul className={`nav__list ${show ? 'show' : ''}`}>
          {
            menu.map((item) => {
              return (
                <li key={item.id} className="nav__item">
                  <a href={item.path} className={`nav__link ${activeLink === item.active ? 'active' : ''}`} onClick={() => setShow(false)}>{item.title}</a>
                </li>
              )
            })
          }
        </ul>

        <div className="nav__toggle" onClick={() => setShow(!show)}>
          {
            show ? <TiTimes className="close" /> : <CgMenuRight className="hamburger" />
          }
        </div>
      </nav>
    </header>
  )
}
