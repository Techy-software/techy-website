import React ,{ useState }from 'react';
// import CourseLibraryComponent from './components/course-library-component/course-library-component';
import CourseDetilasComponent from './components/course-details-component/course-details-component';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Content', 'Setup', 'Assign'];

  return (
    <CourseDetilasComponent steps={steps} currentStep={currentStep} />
  );
};

export default App;