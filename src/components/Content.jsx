import About from './about/About';
import Pojects from './project/Projects';

const Content = () => {
    return (
        <div className='body-container flex justify-evenly'>
          <About/>
          <Pojects/>   
        </div>
)
  };

export default Content;