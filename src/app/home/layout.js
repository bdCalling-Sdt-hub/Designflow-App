import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}
