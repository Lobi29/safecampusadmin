import React, { useState } from 'react';
import { MdOutlinePerson2 } from "react-icons/md";

//  styles
import classes from './MakeNotice.module.css';

const MakeNotice = () => {
    const [noticeDetails, setNoticeDetails] = useState({
        title: "",
        description: "",
        date: "",
    });

    const handleChange = (e) => {
        setNoticeDetails({ ...noticeDetails, [e.target.name]: e.target.value })
    };

    return (
        <div className={classes.login}>
            <div className={classes.topbar}>
                <div className={classes.name}>.Notice Form.</div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.subHeading}>
                    After publishing notice it can't be undone
                </div>
                <form className={classes.form} onSubmit={() => console.log("hello")}>
                    <div className={classes.inputBox}>
                        <div className={classes.iconContainer}>
                            <MdOutlinePerson2 className={classes.icon} />
                        </div>
                        <input
                            type="text"
                            className={classes.inputField}
                            name='title'
                            placeholder='Enter Notice Heading'
                            value={noticeDetails.title}
                            onChange={handleChange}
                            autoComplete='on'
                        />
                    </div>
                    <div className={classes.inputBox}>
                        <textarea
                            rows={6}
                            className={classes.inputField}
                            name='description'
                            placeholder='Reason'
                            value={noticeDetails.description}
                            onChange={handleChange}
                            autoComplete='on'
                        />
                    </div>
                    <div className={classes.inputBox}>
                        <div className={classes.iconContainer}>
                            <MdOutlinePerson2 className={classes.icon} />
                        </div>
                        <input
                            type="text"
                            className={classes.inputField}
                            name='title'
                            placeholder='Enter Issue Date'
                            value={noticeDetails.date}
                            onChange={handleChange}
                            autoComplete='on'
                        />
                    </div>
                    <div className={classes.submitBox}>
                        <button className={classes.buttonSubmit} type='submit'>Publish</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MakeNotice;