'use client'
import Layout from '@/components/ui/Layout'

import { useState, useEffect } from 'react'

import { CircleLoader } from 'react-spinners'

const page = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {loading ? <CircleLoader
        color={'#191825'} loading={loading} size={200} cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> : <main>
        <Layout />
      </main>}
    </>
  )
}

export default page