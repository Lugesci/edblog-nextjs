import React from 'react'
import Link from 'next/link'
import MainMenu from '../navigation/MainMenu';

const Header = () => (
  <header className='main-header'>
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <Link href='/'>
          <a>
            <img src="https://ed.team/static/images/logo-premium.svg" alt="EDlogo" className='main-logo'/>
          </a>
        </Link>
      </div>
    </div>
    <MainMenu />
  </header>
)

export default Header
