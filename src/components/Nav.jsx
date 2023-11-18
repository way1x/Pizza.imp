import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Nav = () => {
  const router = useState();
  return (
    <nav>
    <div className="container">
        <div className="navbar">
            <div className="nav-left">
                <h1 style={{color:"white"}}>Pizza.imp</h1>
            </div>
            <div className="nav-right">
              <Link href='/' >Home</Link>
              <Link href={'/blog'} > blog</Link>
              <Link href={'/pizza'} > pizza</Link>
            </div>
        </div>
    </div>
    </nav>
  )
}

export default Nav