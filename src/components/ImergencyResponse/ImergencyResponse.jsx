import React from 'react'

// assets
import { TiPinOutline } from "react-icons/ti";

// import stylesheet
import classes from './ImergencyResponse.module.css';

const ImergencyResponse = () => {
  return (
    <div className={classes.noticeContainer}>
      <div className={classes.topbar}>
        <div className={classes.name}>.Imergency Request.</div>
      </div>
      <div className={classes.noticeBox}>
        <TiPinOutline className={classes.logo} />
        <div className={classes.Category}>Theft</div>
        <div className={classes.Location}>Food Court</div>
        <button>check</button>
      </div>
    </div>
  )
}

export default ImergencyResponse