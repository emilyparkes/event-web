import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-header'>
      {/* <div className='nav-logo'>
        <Link to='/'>
          <img src='/images/' className='logo' />
        </Link>
      </div> */}
      <div className='nav-links'>

        <span className='nav-link-individual-styling'>
          <Link to='/'>home</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/profile/emilycoco'>profile</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/popular'>popular</Link>
        </span>
        {/* <span className='nav-link-individual-styling'>
          <Link to='/calendar'>calendar</Link>
        </span> */}
        <span className='nav-link-individual-styling'>
          <Link to='/map'>map</Link>
        </span>

        <span className='nav-link-individual-styling'>
          <Link to='/public-events'>public events</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/local-events'>local events</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/categories'>categories</Link>
        </span>


        <span className='nav-link-individual-styling'>
          <Link to='/register'>register</Link>
        </span>

        <span className='nav-link-individual-styling'>
          <Link to='/signin'>sign in</Link>
        </span>

      </div>
    </div>
  )
}

export default Nav
