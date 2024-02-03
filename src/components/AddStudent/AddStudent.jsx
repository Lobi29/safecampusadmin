import React, { useState } from 'react';
import { MdOutlinePerson2 } from "react-icons/md";

//  styles
import classes from './AddStudent.module.css';

const AddStudent = () => {
  const [studentDetails, setStudentDetails] = useState({
    email: "",
    name: "",
    scholarID: "",
    hostel: "",
    image: "",
  });

  const handleChange = (e) => {
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value })
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setStudentDetails({ ...studentDetails, profilePicture: base64 })
  };


  return (
    <div className={classes.login}>
      <div className={classes.topbar}>
        <div className={classes.name}>.Add Student.</div>
      </div>
      <div className={classes.bottom}>
        <form className={classes.form} onSubmit={() => console.log("hello")}>
          <div className={classes.inputBox}>
            <div className={classes.iconContainer}>
              <MdOutlinePerson2 className={classes.icon} />
            </div>
            <input
              type="email"
              className={classes.inputField}
              name='email'
              placeholder='Enter Student Email'
              value={studentDetails.email}
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
              name='name'
              placeholder='Enter Student Name'
              value={studentDetails.name}
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
              name='scholarIDl'
              placeholder='Enter Student ScholarID'
              value={studentDetails.scholarID}
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
              name='hostel'
              placeholder='Enter Student Hostel'
              value={studentDetails.hostel}
              onChange={handleChange}
              autoComplete='on'
            />
          </div>
          <div className={classes.inputBox}>
            <input
              className={classes.form__image}
              name='image'
              type="file"
              placeholder='upload profile picture'
              onChange={handleFileUpload}
              autoComplete='on'
            />
          </div>
          <div className={classes.submitBox}>
            <button className={classes.buttonSubmit} type='submit'>Register Student</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStudent;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
};