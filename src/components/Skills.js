
import './style.css';


function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className='container'>
        <h2 className='color-white'>My skills</h2>
        <div className='flex-center'><hr className='bgcolor-white' /></div>
         <div className='flex-between margin-top'>
        <div className='box-pie'>
          <div class="pie p1"></div>
          <div className='number'>
            <h4>85<span>%</span></h4>
          </div>
          <h5>React</h5>
          </div>
          <div className='box-pie'>
          <div class="pie p2"></div>
          <div className='number'>
            <h4>75<span>%</span></h4>
          </div>
          <h5>Node</h5>
          </div>
          <div className='box-pie'>
          <div class="pie p3"></div>
          <div className='number'>
            <h4>70<span>%</span></h4>
          </div>
          <h5>MongoDB</h5>
          </div>
          <div className='box-pie'>
          <div class="pie p4"></div>
          <div className='number'>
            <h4>72<span>%</span></h4>
          </div>
          <h5>Swagger</h5>
          </div>
         
          </div>
          
        
      </div>
    </div>
  );
}

export default Skills;
