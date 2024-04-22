'use client'

import { headingFeatures, dataFeatures } from '@/components/data/data'

import '@/components/sass/Feature.scss'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Features() {
  return (
    <section className="features" id="feature">
      <div className="features__container container grid">
        {
          headingFeatures.map((item) => {
            return (
              <div className="heading">
                <Fade triggerOnce duration={1000} delay={500} direction='left'>
                  <h1>{item.title}</h1>
                </Fade>

                <Zoom triggerOnce duration={1000} delay={500}>
                  <h1>{item.text}</h1>
                </Zoom>
              </div>
            )
          })
        }

        <div className="features__data">
          {
            dataFeatures.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade triggerOnce duration={1000} delay={500} direction='down'>
                    <i><item.icon /></i>
                  </Fade>

                  <Fade triggerOnce duration={1000} delay={500} direction='up'>
                    <p>{item.text}</p>
                  </Fade>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
