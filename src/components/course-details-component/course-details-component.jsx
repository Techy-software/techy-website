import './course-details-component.css';
import addIcon from '../../assets/icons/addIcon.svg';
import moreIcon from '../../assets/icons/moreCircle.svg';
import tickCircle from '../../assets/tickCircle.svg';
import StepperComponent from './stepper-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { get } from "../../utils/HtppService";
import { useEffect, useState } from 'react';

const CourseDetailsComponent = ({ steps, currentStep }) => {

  const [coursesList, setCoursesList] = useState([]);

  const fetchData = async () => {
    console.log("Fetching data...");
    try {
      const response = await get("/course/67699daa-70cb-4c40-a7c8-06e3901eb434/");
      console.log("Courses List Data:", response?.data);
      setCoursesList(response?.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <>
    {coursesList.length > 0 && (
      <div>
        <div className='course-library-header'>
          <h1 className='course-library-title'>Courses Details</h1>
          <h2>Draft</h2>
          <StepperComponent steps={steps} currentStep={currentStep} />
          <div className='left-header-side-class'>
            <img src={tickCircle} alt="tick image" />
            <h3>Saved</h3>
            <img src={moreIcon} alt="Add icon" className='icon-styling' />
            <button className="arrow-button">
              Next Step
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            </button>
          </div>
        </div>

        <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />

        <div className='data-container'>
          <div className='categories-container'>
            <div className='categories-container-header'>
              <h1 className='categories-text'>Units</h1>
              <img src={addIcon} alt="Add icon" className='icon-styling' />
            </div>
            <hr style={{ width: '98%', border: '1px solid #E6E6E6' }} />

            <div className='courses-container'>
              <ul>
                {coursesList.map((course, index) => (
                  <li key={index}>
                    <h2>{course.unitTitle || 'Unit Title'}</h2>
                    <p>{course.unitDescription || 'No description provided.'}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='left-container'>
            <div className='left-container-header'>
              <h1 className='categories-text'>Lesson details</h1>
              <img src={moreIcon} alt="Add icon" className='icon-styling' />
            </div>
            <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />

            <div className='courses-container'>
              <ul>
                {coursesList.map((course, index) => (
                  <li key={index}>
                    <h2>{course.lessonTitle || 'Lesson Title'}</h2>
                    <p>{course.lessonDescription || 'No description available.'}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
};

export default CourseDetailsComponent;
