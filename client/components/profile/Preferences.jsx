import React from 'react'
import {Link} from 'react-router-dom'

class Preferences extends React.Component {
  render () {
    return (
      <div className='preferencespg'>
        <div className='page-section'>

          <div className='page-heading-section'>
            <div className='page-title-font'>Preferences</div>
            <div className='page-title-blurb'>Choose the kind of events you are interested in knowing about.</div>
          </div>

          <div className='page-content-section'>
            {/* create select box for each category that will display those categories in 'home page' */}
            <div className='event-category'>
              <div className='category-name'>
                <Link to={'/events/Concerts'} >Concerts</Link></div>
              <div className='category-blurb'>music for large audiences.</div>
            </div>

            <div className='event-category'>
              <div className='category-name'>
                <Link to={'/events/Gigs'} >Gigs</Link></div>
              <div className='category-blurb'>music at bars or clubs.</div>
            </div>

            <div className='event-category'>
              <div className='category-name'>
                <Link to={'/events/Festivals'} >Festivals</Link></div>
              <div className='category-blurb'>special, one or multi day celebration.</div>
            </div>

            <div className='event-category'>
              <div className='category-name'>
                <Link to={'/events/Art'}>Art</Link></div>
              <div className='category-blurb'>exhibitions, public displays.</div>
            </div>

            <div className='event-category'>
              <div className='category-name'>
                <Link to={'/events/Theatre'} >Theatre</Link></div>
              <div className='category-blurb'>plays, film premiere.</div>
            </div>

            <div className='event-category'>
              <div className='category-name'>
                <Link to={'/events/Food'} >Food</Link></div>
              <div className='category-blurb'>store openings, festivals.</div>
            </div>

            <div className='event-category'>
              <div className='category-name'>
                <Link to={'/events/Markets'} >Markets</Link></div>
              <div className='category-blurb'>buy and sell commercial and handmade goods.</div>
            </div>

            <div className='event-category'>
              <div className='category-name'>
                <Link to={'/events/City-pop-up'} >City Pop-Ups</Link></div>
              <div className='category-blurb'>organised one off events, store openings, first-time city events.</div>
            </div>

            <div className='event-category'>
              <div className='category-name'>
                <Link to={'/events/Community'} >Community</Link></div>
              <div className='category-blurb'>locally held events such as garage sales, fruit stalls etc.</div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Preferences
