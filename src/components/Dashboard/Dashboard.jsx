import React from 'react';
import { FcManager } from "react-icons/fc";
import Piechart from '../PieChart/PieChart';
import List from '../List/List';
// styles
import classes from './Dashboard.module.css';



const Dashboard = () => {
  const MissingHeading = "Missing Students From Each Hostels"
  const MissingData = {
    labels: ['H1', 'H2', 'H7', 'H6', 'H9', 'H4'],
    datasets: [
      {
        label: 'percentage',
        data: [25, 25, 20, 10, 10, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const SecurityHeading = "Employed Security Guards";
  const SecurityData = {
    labels: ['Main Gate', 'Exit Gate 1', 'Exit Gate 2', 'QRT 1', 'QRT 2', 'others'],
    datasets: [
      {
        label: 'percentage',
        data: [25, 25, 20, 10, 10, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const MissingStudentsHeading = "Complain From Student List : ";
  const MissingStudentsData = [
    {
      name: "Robin Chayegia",
      id: "2112004",
      hostel: "H6",
      date: "01/01/0001",
      exitTime: "4:00 P.M.",
    },
    {
      name: "Laditya Gogoi",
      id: "2112999",
      hostel: "H7",
      date: "01/01/0001",
      exitTime: "4:00 P.M.",
    },
  ];
  const Hostels = ["H9", "H8", "H7", "H6"];
  return (
    <div className={classes.dashboard}>
      <h1 className={classes.heading}>Admin Dashboard</h1>
      <div className={classes.dashboardContainer}>
        <div className={classes.topContainer}>
          <div className={classes.dashboardCardContainer}>
            <div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Total Visits</p>
                  <FcManager className={classes.icon} />
                </div>
                <p className={classes.number}>120 Persons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than yesterday</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Total Visits</p>
                  <FcManager className={classes.icon} />
                </div>
                <p className={classes.number}>120 Persons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than yesterday</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Total Visits</p>
                  <FcManager className={classes.icon} />
                </div>
                <p className={classes.number}>120 Persons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than yesterday</p>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Total Visits</p>
                  <FcManager className={classes.icon} />
                </div>
                <p className={classes.number}>120 Persons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than yesterday</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Total Visits</p>
                  <FcManager className={classes.icon} />
                </div>
                <p className={classes.number}>120 Persons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than yesterday</p>
                </div>
              </div>
              <div className={classes.statContainer}>
                <div className={classes.box1}>
                  <p>Total Visits</p>
                  <FcManager className={classes.icon} />
                </div>
                <p className={classes.number}>120 Persons</p>
                <div className={classes.box1}>
                  <p>+14%</p>
                  <p>than yesterday</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.lineChartBox}>
            <Piechart heading={MissingHeading} data={MissingData} />
          </div>
          <div className={classes.lineChartBox}>
            <Piechart heading={SecurityHeading} data={SecurityData} />
          </div>
        </div>
        <div className={classes.bottomContainer}>
          <List heading={MissingStudentsHeading} data={MissingStudentsData} category={Hostels} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard