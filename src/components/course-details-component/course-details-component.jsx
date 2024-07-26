import React,{ useState } from 'react'
import './course-details-component.css'
import addIcon from '../../assets/icons/addIcon.svg'
import moreIcon from '../../assets/icons/moreCircle.svg'
import notebook from '../../assets/notebook.svg'
import addIconWhite from '../../assets/icons/addIconWhite.svg'
import unitsImages from '../../assets/unitsImages.svg'
import lessonDetailsImage from '../../assets/lessonDetailsImage.svg'
import tickCircle from '../../assets/tickCircle.svg'
import StepperComponent from './stepper-component'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CourseDetailsComponent = ({ steps, currentStep }) => {

   
    return (
        <div>
          <div>
            <div className='course-library-header'>
                <h1 className='course-library-title'>Courses Details</h1>
                <h2>Draft</h2>
                <StepperComponent steps={steps} currentStep={currentStep}/>
                <div className='left-header-side-class'>
                    <img src={tickCircle} alt="tick image" />
                    <h3>Saved</h3>
                    <img src={moreIcon} alt="Add icon" className='icon-styling'/>
                    <button className="arrow-button">
                        Next Step
                        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                    </button>
                </div>
            </div>
            
          </div>
          <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
          <div className='data-container'>
          <div className='categories-container'>
            <div className='categories-container-header'>
                <h1 className='categories-text'>Units</h1>
                <img src={addIcon} alt="Add icon" className='icon-styling'/>
            </div>
            <hr style={{ width: '98%', border: '1px solid #E6E6E6' }} />
            <div className='courses-container'>
                <img src={unitsImages} alt="Units image" />
                <h2>No Units added yet</h2>
                <h3>No Units added yetStart putting together your course by creating Units and lessons</h3>
            </div>
          </div>
          <div className='left-container'>
            <div className='left-container-header'>
                <h1 className='categories-text'>Lesson details</h1>
                <img src={moreIcon} alt="Add icon" className='icon-styling'/>
            </div>
            <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
            <div className='courses-container'>
                <img src={lessonDetailsImage} alt="Notebook image" className='image-container'/>
                <h2>No lessons added yet</h2>
                <h3>Start putting together your course by creating lessons.</h3>
            </div>
          </div>
          </div>
        </div>
      )
}

export default CourseDetailsComponent
