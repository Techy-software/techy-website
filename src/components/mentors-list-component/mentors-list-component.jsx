import React from 'react'
import './mentors-list-component.css'
import IconButton from '../../reusable components/IconButton/IconButton ';
import CountCard from '../../reusable components/CountCard/CountCard';
import { faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './../../reusable components/SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const MentorsListComponent = () => {
  return (
    <div>
      <div className="header-component">
        <h2>Mentors</h2>
        <div className='button-container'>
        <IconButton text="Upload CSV" icon={faUpload} className="outline" />
        <IconButton text="Add Mentor" icon={faPlus} className="solid" />
        </div>
      </div>
      <hr className='hr'/>
      <div className='data-container'>
    
        <CountCard label="Total mentors" count={130} />        
        <CountCard label="Active mentors" count={100} />        
        <CountCard label="un-active mentors" count={30} />        
        <CountCard label="un assigned mentors" count={13} />

      </div>

      <div className='table-container'>
        <div className="flex">
          <SearchBar/>
          <FontAwesomeIcon icon={faFilter} className='icon-styling'/>
        </div>
        
        
      </div>
    </div>
  )
}

export default MentorsListComponent
