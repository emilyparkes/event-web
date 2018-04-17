import React from 'react'

class Preferences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='preferencespg'>
        <div className='page-section'>

          <div className='page-heading-section'>
            <div className='page-title-font'>Preferences</div>
            <div className='page-title-blurb'>Choose the kind of events you are interested in knowing about.</div>
          </div>

          <div className='page-content-section'>

            <div className='event-category'>
              <div classname='category-name'>
              <Link to={'/events/concerts'} >Concerts</Link></div>
              <div className='category-blurb'>music for large audiences.</div>
            </div>
            
            <div className='event-category'>
              <div classname='category-name'>
              <Link to={'/events/gigs'} >Gigs</Link></div>
              <div className='category-blurb'>music at bars or clubs.</div>
            </div>

            <div className='event-category'>
              <div classname='category-name'>
              <Link to={'/events/festivals'} >Festivals</Link></div>
              <div className='category-blurb'>special, one or multi day celebration.</div>
            </div>

            <div className='event-category'>
              <div classname='category-name'>
              <Link to={'/events/art'}>Art</Link></div>
              <div className='category-blurb'>exhibitions, public displays.</div>
            </div>

            <div className='event-category'>
              <div classname='category-name'>
              <Link to={'/events/theatre'} >Theatre</Link></div>
              <div className='category-blurb'>plays, film premiere.</div>
            </div>

            <div className='event-category'>
              <div classname='category-name'>
              <Link to={'/events/food'} >Food</Link></div>
              <div className='category-blurb'>store openings, festivals.</div>
            </div>

            <div className='event-category'>
              <div classname='category-name'>
              <Link to={'/events/markets'} >Markets</Link></div>
              <div className='category-blurb'>buy and sell commercial and handmade goods.</div>
            </div>

            <div className='event-category'>
              <div classname='category-name'>
              <Link to={'/events/city-pop-up'} >City Pop-Ups</Link></div>
              <div className='category-blurb'>organised one off events, store openings, first-time city events.</div>
            </div>

            <div className='event-category'>
              <div classname='category-name'>
              <Link to={'/events/community'} >Community</Link></div>
              <div className='category-blurb'>locally held events such as garage sales, fruit stalls etc.</div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Preferences
