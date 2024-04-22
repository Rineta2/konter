'use client'
import { headingAbout, dataAbout } from '@/components/data/data'

import Image from 'next/image'

import '@/components/sass/About.scss'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container container grid">
        <div className="content">
          {
            headingAbout.map((item) => {
              return (
                <div className="heading">
                  <Fade triggerOnce duration={1000} delay={500} direction='left'>
                    <h3>{item.title}</h3>
                  </Fade>

                  <Zoom triggerOnce duration={1000} delay={500}>
                    <h1>{item.text}</h1>
                  </Zoom>

                  <Fade triggerOnce duration={1000} delay={500} direction='up'>
                    <p>{item.desc}</p>
                  </Fade>
                </div>
              )
            })
          }

          {
            dataAbout.map((item) => {
              return (
                <div className="img">
                  <Zoom triggerOnce duration={1000} delay={500}>
                    <Image src={item.img} alt='' />
                  </Zoom>
                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}
