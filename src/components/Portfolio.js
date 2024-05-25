import './style.css';
import './style@media.css';

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='container'>
        <h2>Portfolio</h2>
        <div className='flex-center'><hr /></div>
        <div className='grid-portfolio margin-top'>
          <section className='section' onClick={() => window.location.assign('https://o-react.vercel.app/')}>
            <div className='image'>
              <img alt='Olena Studio' src={'./img/olena_studio.png'} />
            </div>
            <div className='text'>
              <h3 className='h3'>Olena Studio</h3>
              <p>Full Stack WebSite.</p>
              <p>FrontEnd is written in the React and BackEnd in the Node.
                Also, the site has an analysis for the administrator using React Chart.</p>
              <p>The documentation is written by Swagger.</p>
            </div>
          </section>
          <section className='section' onClick={() => window.location.assign('https://ulia-ushenko.vercel.app/')}>
            <div className='image'>
              <img alt='Ulia Ushenko' src={'./img/ulia_ushenko.png'} />
            </div>
            <div className='text'>
              <h3 className='h3'>Ulia Ushenko</h3>
              <p>Full Stack WebSite.</p>
              <p>FrontEnd is written in the React and BackEnd in the Node.</p>
              <p>Mongo was used as a database.</p>
            </div>
          </section>
          <section className='section' onClick={() => window.location.assign('https://forest-site.vercel.app/')}>
            <div className='image'>
              <img alt='Forest' src={'./img/forest.png'} />
            </div>
            <div className='text'>
              <h3 className='h3'>Natural Forest</h3>
              <p>FrontEnd - WebSite.</p>
              <p>This site is written on React. The interesting thing about this project is the 3D main screen. 
                By moving the mouse over the screen, you can view this structure more comprehensively.</p>
            </div>
          </section>
          <section className='section' onClick={() => window.location.assign('https://3d-model-website-ten.vercel.app/')}>
            <div className='image'>
              <img alt='Olena Studio' src={'./img/3d-website.png'} />
            </div>
            <div className='text'>
              <h3 className='h3'>3D - model website</h3>
              <p>FrontEnd - WebSite.</p>
              <p>Written on React using 3D models.
              On the main window, there is an interactive menu in the form of a star system, and you can go to other pages when scrolling around.</p>
            </div>
          </section>
          <section className='section' onClick={() => window.location.assign('https://bank-system-weld.vercel.app/')}>
            <div className='image'>
              <img alt='Bank system' src={'./img/bank_system.png'} />
            </div>
            <div className='text'>
              <h3 className='h3'>Hoo bank</h3>
              <p>FrontEnd - WebSite.</p>
              <p>Written on React using Tailwind css.
              A simple landing site that talks about banking opportunities. The main advantage is the use of a new library css.</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
