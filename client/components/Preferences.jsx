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
              <div classname='category-name'>Concerts</div>
              <div className='category-blurb'>music for large audiences.</div>
            </div>
            <div className='event-category'>
              <div classname='category-name'>Gigs</div>
              <div className='category-blurb'>music at bars or clubs.</div>
            </div>
            <div className='event-category'>
              <div classname='category-name'>Festivals</div>
              <div className='category-blurb'>special, one or multi day celebration.</div>
            </div>
            <div className='event-category'>
              <div classname='category-name'>Art</div>
              <div className='category-blurb'>exhibitions, public displays.</div>
            </div>
            <div className='event-category'>
              <div classname='category-name'>Theatre</div>
              <div className='category-blurb'>plays, film premiere.</div>
            </div>
            <div className='event-category'>
              <div classname='category-name'>Food</div>
              <div className='category-blurb'>store openings, festivals.</div>
            </div>
            <div className='event-category'>
              <div classname='category-name'>City Pop-Ups</div>
              <div className='category-blurb'>organised one off events, store openings, first-time city events.</div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Preferences
