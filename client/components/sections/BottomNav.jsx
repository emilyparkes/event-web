import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
})

export default function LabelBottomNavigation () {
  const classes = useStyles()
  const [value, setValue] = React.useState('home')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label='Home' value='home' icon={<HomeIcon />} />
      <BottomNavigationAction label='Search' value='search' icon={<LocationSearchingIcon />} />
      <BottomNavigationAction label='Calendar' value='calendar' icon={<CalendarTodayIcon />} />
      <BottomNavigationAction label='Account' value='account' icon={<AccountCircleIcon />} />
    </BottomNavigation>
  )
}
