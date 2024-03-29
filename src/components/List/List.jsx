import React, { useState } from 'react'

import { BiUpArrowAlt } from 'react-icons/bi';

// styles
import classes from './List.module.css';

const List = ({ heading, data, options }) => {

    const [selectedOption, setSelectedOption] = useState("");


    return (
        <div className={classes.vendorList}>
            <h1 className={classes.heading}>{heading}</h1>

            <div className={classes.vendorStats}>
                <div className={classes.statBox}>
                    <div className={classes.box1}>
                        <h1 className={classes.headingStat}>Total</h1>
                        <h1>10</h1>
                    </div>
                    <div className={classes.box2}>
                        <BiUpArrowAlt />
                        <p className={classes.percentage}>60% than yesterday</p>
                    </div>
                </div>
            </div>

            <div className={classes.filterContainer}>
                <p>Search By Category : </p>
                <div>
                    <select className={classes.selectForm} value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
                        {/* Map over the options array to generate <option> elements */}
                        {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>


            {/* list : { vendor, state, about, capacity, status} */}
            <div className={classes.table}>
                <div className={classes.tableHeading}>
                    <p className={classes.name}> Name</p>
                    <p className={classes.id}>Scholar ID</p>
                    <p className={classes.hostel}>Category</p>
                    <p className={classes.date}>Date</p>
                    <p className={classes.time}>Exit Time</p>
                    <p className={classes.status}>Status</p>
                </div>

                {data.map((data, index) => {
                    if (data.Category === selectedOption) {
                        return (
                            <div key={index} className={classes.tableContent}>
                                <p className={classes.name}>{data.name}</p>
                                <p className={classes.id}>{data.id}</p>
                                <p className={classes.hostel}>{data.hostel}</p>
                                <p className={classes.date}>{data.date}</p>
                                <p className={classes.time}>{data.time}</p>
                                <p className={classes.status}>{data.status}</p>
                            </div>
                        )
                    }
                })}
            </div>


        </div >
    )
}

export default List;