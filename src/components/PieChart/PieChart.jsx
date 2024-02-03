import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import classes from './PieChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({heading, data}) => {

    return (
        <div>
            <h1 className={classes.heading}>{heading}</h1>
            <Doughnut data={data} />
        </div>
    );
}

export default PieChart