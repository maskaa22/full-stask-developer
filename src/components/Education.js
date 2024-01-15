import './style.css';
import './style@media.css';

function Education() {
  return (
    <div className='education' id='education'>
      <div className='container'>
        <h2 className='color-white'>Education</h2>
        <div className='flex-center'><hr className='bgcolor-white' /></div>
        <div className='flex-between margin-top-80'>
          <div>
            <p className='education-p-name'>Kremenchug National University</p>
            <p className='education-p-years'>(2013-2018)</p>
            <p className='education-p-last'>Computer science</p>
          </div>
          <svg className='svg-line'>
            <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" />
          </svg>
          <div className='position-text-right'>
            <p className='education-p-name'>Courses by "Okten School"</p>
            <p className='education-p-years'>(2023)</p>
            <p className='education-p-last'>JavaScript Complex</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
