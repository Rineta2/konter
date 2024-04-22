'use client'

import '@/components/sass/Review.scss'

import { headingReviews, dataReviews } from '@/components/data/data'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Review() {
  return (
    <section className="review" id="review">
      <div className="review__container container grid">
        {
          headingReviews.map((item) => {
            return (
              <div className="heading">
                <Zoom triggerOnce duration={1000} delay={500}>
                  <h1>{item.title}</h1>
                </Zoom>
              </div>
            )
          })
        }

        <div className="review__data">
          {
            dataReviews.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade triggerOnce duration={1000} delay={500} direction='down'>
                    <i><item.icons /></i>
                  </Fade>

                  <Zoom triggerOnce duration={1000} delay={500}>
                    <h3>{item.text}</h3>
                  </Zoom>

                  <Fade triggerOnce duration={1000} delay={500} direction='up'>
                    <h2>{item.name}</h2>
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
