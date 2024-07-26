import React from 'react';
import './course-library-component.css'; 
import addIcon from '../../assets/icons/addIcon.svg'
import moreIcon from '../../assets/icons/moreCircle.svg'
import notebook from '../../assets/notebook.svg'
import addIconWhite from '../../assets/icons/addIconWhite.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';

const CourseLibraryComponent = (props) => {
  return (
    <div>
      <div className='course-library-header'>
        <h1 className='course-library-title'>Courses Library</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
      <div className='data-container'>
      <div className='categories-container'>
        <div className='categories-container-header'>
            <h1 className='categories-text'>Categories</h1>
            <img src={addIcon} alt="Add icon" className='icon-styling'/>
        </div>
        <hr style={{ width: '98%', border: '1px solid #E6E6E6' }} />
        <div style={{ marginTop : '15px', marginBottom : '15px',display: 'flex', justifyContent: 'center',alignItems: 'center', width: '90%', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '4px', padding: '5px', backgroundColor: '#fff' , marginLeft:'20px' }}>
            <i className="fas fa-search" style={{ marginRight: '10px', color: '#888' }}></i>
            <input
                type="text"
                // value={searchTerm}
                // onChange={handleInputChange}
                // onKeyPress={handleKeyPress}
                placeholder="Search..."
                style={{ border: 'none', outline: 'none', flex: '1' }}
            />
            </div>
      </div>
      <div className='left-container'>
        <div className='left-container-header'>
            <h1 className='categories-text'>Untitled Category</h1>
            <img src={moreIcon} alt="Add icon" className='icon-styling'/>
        </div>
        <hr style={{ width: '100%', border: '1px solid #E6E6E6' }} />
        <div className='courses-container'>
            <img src={notebook} alt="Notebook image" className='image-container'/>
            <h2>No courses added yet</h2>
            <h3>Kickstart your course creation process, create your first Course in seconds.</h3>
            <button className='add-course-button'>
                <img src={addIconWhite} alt="Add icon" className='button-icon'/>
                Add Course
            </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CourseLibraryComponent
