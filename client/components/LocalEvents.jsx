import React from './react'

const LocalEvents = () => {
  
  render() 
  return (
    <div className='localevents'>
    {events.map(event => {
      <Link key={events.id} to={'/event'} />
    })}
    </div>
  )
}

export default LocalEvents