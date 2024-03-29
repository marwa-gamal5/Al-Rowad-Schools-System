import React from 'react'
import styles from './ApplicantRegistrationSetting.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ApplicantRegistrationSetting() {


    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);
    //set button Routes
    const buttonRoutes = [
        "/Administration/AdmissionRegistration/ApplicantRegistrationSetting/ManageGrades",
        "/Administration/AdmissionRegistration/ManageStage",
        "/Administration/AdmissionRegistration/Grades",


    ];
    //set button Names
    const buttonNames = [
        "Manage Registration Grades",
        "Manage Stage ",
        "Grades",


    ];
//function to handle event when Button Click
    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber === activeButton ? null : buttonNumber);
        navigate(buttonRoutes[buttonNumber - 1]);
    };

    return (

        <div >

            <h1>Applicant Registration Setting</h1>
            <div className='containt' style={{paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px"}}>
                <div className='p-4'>
                    <div className={`${styles.title}`}>Admission & Registration</div>
                    <div className='d-flex row'>
                        {[...Array(buttonNames.length).keys()].map((index) => (
                            <div key={index} className={`col-12 col-xl-3  col-lg-4  col-md-4 col-sm-6 mt-3`}>
                                <button
                                    onClick={() => handleButtonClick(index + 1)}
                                    className={`${activeButton === index + 1 ? styles.rectangular2 : styles.rectangular} w-100 d-flex justify-content-between align-items-center`}
                                >
                                    <p className={`${activeButton === index + 1 ? styles.p3 : styles.p1} mt-3`}>{buttonNames[index]}</p>
                                    <i className={`${activeButton === index + 1 ? styles.icon2 : styles.icon} fa-solid fa-bell`}></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicantRegistrationSetting