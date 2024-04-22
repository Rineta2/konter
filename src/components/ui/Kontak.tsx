'use client'

import { headingContact, dataContact, dataContact2, social } from '../../components/data/data'

import '@/components/sass/Kontak.scss'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Kontak() {
  return (
    <section className="kontak" id="kontak">
      <div className="kontak__container container grid">

        <div className="content">

          {
            headingContact.map((item) => {
              return (
                <div className="heading">
                  <Fade triggerOnce duration={1000} delay={500} direction='down'>
                    <h1>{item.title}</h1>
                  </Fade>
                  {
                    dataContact.map((item) => {
                      return (
                        <div className="box__content">
                          <div className="head">
                            <Fade triggerOnce duration={1000} delay={500} direction='down'>
                              <i>{item.icons}</i>
                            </Fade>
                            <Zoom triggerOnce duration={1000} delay={500}>
                              <h3>{item.title}</h3>
                            </Zoom>
                            <Fade triggerOnce duration={1000} delay={500} direction='up'>
                              <a href={item.path}>{item.text}</a>
                            </Fade>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }

          {
            headingContact.map((item) => {
              return (
                <div className="heading">
                  <Fade triggerOnce duration={1000} delay={500} direction='down'>
                    <h1>{item.title}</h1>
                  </Fade>
                  {
                    dataContact2.map((item) => {
                      return (
                        <div className="box">
                          <Fade triggerOnce duration={1000} delay={500} direction='down'>
                            <h3>{item.title}</h3>
                          </Fade>

                          <Zoom triggerOnce duration={1000} delay={500}>
                            <a href={item.path} target='_blank'>{item.text}</a>
                          </Zoom>
                          <div className="social">
                            {
                              social.map((item) => {
                                return (
                                  <Zoom triggerOnce duration={1000} delay={500}>
                                    <a href={item.path} key={item.id} className='social__link' target='_blank'>
                                      <i>{item.icons}</i>
                                    </a>
                                  </Zoom>
                                )
                              })
                            }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }

        </div>

      </div>
    </section>
  )
}
