'use client'

import '@/components/sass/Say.scss'

import { dataSay } from '@/components/data/data'

import Image from 'next/image'

import sayImg from '@/components/assets/Say/say.png'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Say() {
  return (
    <section className="say" id="say">
      <div className="say__container container grid">

        {
          dataSay.map((item) => {
            return (
              <div className="say__data">

                <div className="text">
                  <Fade triggerOnce duration={1000} delay={500} direction='left'>
                    <h3>{item.text}</h3>
                  </Fade>

                  <Zoom triggerOnce duration={1000} delay={500}>
                    <h1>{item.title}</h1>
                  </Zoom>

                  <Fade triggerOnce duration={1000} delay={500} direction='up'>
                    <p>{item.desc}</p>
                  </Fade>
                </div>

                <div className="img">
                  <Zoom triggerOnce duration={1000} delay={500}>
                    <Image src={sayImg} alt='' />
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
