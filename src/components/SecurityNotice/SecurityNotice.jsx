import React from 'react'

// assets
import { TiPinOutline } from "react-icons/ti";

// import stylesheet
import classes from './SecurityNotice.module.css';
import MakeNotice from '../MakeNotice/MakeNotice';

const SecurityNotice = () => {
  return (
    <div className={classes.noticeContainer}>
      <div className={classes.left}>
        <div className={classes.topbar}>
          <div className={classes.name}>.Notice Board.</div>
        </div>
        <div className={classes.noticeBox}>
          <TiPinOutline className={classes.logo} />
          <div className={classes.heading}>Don't Use K.V. road Today</div>
          <div className={classes.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas aspernatur tempore, corrupti a iste deserunt vitae autem eligendi mollitia.</div>
          <button>5/2/2024</button>
        </div>
        <div className={classes.noticeBox}>
          <TiPinOutline className={classes.logo} />
          <div className={classes.heading}>Don't Use K.V. road Today</div>
          <div className={classes.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas aspernatur tempore, corrupti a iste deserunt vitae autem eligendi mollitia.</div>
          <button>5/2/2024</button>
        </div>
        <div className={classes.noticeBox}>
          <TiPinOutline className={classes.logo} />
          <div className={classes.heading}>Don't Use K.V. road Today</div>
          <div className={classes.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas aspernatur tempore, corrupti a iste deserunt vitae autem eligendi mollitia.</div>
          <button>5/2/2024</button>
        </div>
      </div>
      <div className={classes.right}>
        <MakeNotice />
      </div>
    </div>
  )
}

export default SecurityNotice