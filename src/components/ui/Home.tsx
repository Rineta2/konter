'use client'
import '@/components/sass/Home.scss'

import { headingHome, dataHome } from '@/components/data/data'

import homeImg from '@/components/assets/Home/home.png'

import Image from 'next/image'

import '@/components/sass/Home.scss'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Home() {

  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        {
          headingHome.map((item) => {
            return (
              <div className="heading">
                <Fade triggerOnce duration={1000} delay={500} direction='down'>
                  <h1><i>{item.icons}</i>{item.title}</h1>
                </Fade>

                <Zoom triggerOnce duration={1000} delay={500}>
                  <h1>{item.text}</h1>
                </Zoom>
              </div>
            )
          })
        }

        {
          dataHome.map((item) => {
            return (
              <div className="home__data">
                <div className="text">
                  <Fade triggerOnce duration={1000} delay={500} direction='left'>
                    <h1>{item.title}</h1>
                  </Fade>

                  <Zoom triggerOnce duration={1000} delay={500}>
                    <h1>{item.text}</h1>
                  </Zoom>

                  <Fade triggerOnce duration={1000} delay={500} direction='up'>
                    <div className="btn">
                      <a href={item.path}>{item.name} <i>{item.icons}</i></a>
                    </div>
                  </Fade>
                </div>

                <div className="img">
                  <Zoom triggerOnce duration={1000} delay={500}>
                    <Image src={homeImg} alt="home" />
                  </Zoom>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
