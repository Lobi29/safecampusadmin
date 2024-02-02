import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './NavItems.module.css';

const NavItems = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className={classes.navitems}>

            <div className={classes.navBox}>
                <Link to="/" style={{
                    textDecoration: "none",
                    color: "#111"
                }}>
                    <div className={classes.item1}>
                        Dashboard
                    </div>
                </Link>

                <div className={classes.item2} onClick={toggleOpen}>
                    Services
                </div>
                {isOpen && (
                    <div className={classes.dropdown}>
                        <div className={classes.forUsers}>
                            <p className={classes.dropdownHeading}>Student</p>
                            <div>
                                <ul>
                                    <Link to="/addstudent" style={{
                                        textDecoration: "none",
                                        color: "#111"
                                    }}>
                                        <li>Add Student</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.forVendors}>
                            <p className={classes.dropdownHeading}>Security</p>
                            <div>
                                <ul>
                                    <Link to="/addsecurity" style={{
                                        textDecoration: "none",
                                        color: "#111"
                                    }}>
                                        <li>Add Security</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.forGovt}>
                            <p className={classes.dropdownHeading}>Admin</p>
                            <div>
                                <ul>
                                    <Link to="/addadmin" style={{
                                        textDecoration: "none",
                                        color: "#111"
                                    }}>
                                        <li>Add Admin</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <Link to="/securitynotice" style={{
                    textDecoration: "none",
                    color: "#111"
                }}>
                    <div className={classes.item2}>
                        Security Notice
                    </div>
                </Link>

                <div className={classes.item3}>
                    <Link to="/imergencyresponse" style={{
                        textDecoration: "none",
                        color: "#111"
                    }}>
                        Imergency Response
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default NavItems