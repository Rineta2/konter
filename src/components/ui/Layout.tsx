'use clinet'

import { Fragment } from 'react'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/ui/Header'), { ssr: false })
const Home = dynamic(() => import('@/components/ui/Home'), { ssr: false })
const Say = dynamic(() => import('@/components/ui/Say'), { ssr: false })
const Features = dynamic(() => import('@/components/ui/Features'), { ssr: false })
const Review = dynamic(() => import('@/components/ui/Review'), { ssr: false })
const About = dynamic(() => import('@/components/ui/About'), { ssr: false })
const Kontak = dynamic(() => import('@/components/ui/Kontak'), { ssr: false })
const Footer = dynamic(() => import('@/components/ui/Footer'), { ssr: false })

export default function Layout() {

  return (
    <Fragment>
      <Header />
      <Home />
      <Say />
      <hr className="hr" />
      <Features />
      <Review />
      <About />
      <Kontak />
      <Footer />
    </Fragment>
  )
}
