import React from 'react'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import AklMap from './AklMap'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function SimpleTabs () {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Map" {...a11yProps(0)} />
          <Tab label="List" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AklMap/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       List
      </TabPanel>
    </div>
  )
}
