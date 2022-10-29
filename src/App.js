import './App.scss';
import Accordion from './components/Accordion';
import {accordionData} from './utils/content';
import { useState } from 'react';
import { ReactComponent as Design}  from './assets/illustration-woman-online-desktop.svg';
import { ReactComponent as Cube}  from './assets/illustration-box-desktop.svg';
import { ReactComponent as Mobile}  from './assets/illustration-woman-online-mobile.svg';
import { ReactComponent as MobileShadow}  from './assets/bg-pattern-mobile.svg';

function App() {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = key => {
    setIsActive(isActive !== key ? key : null)
}

  return (
    <div className="App">
      <div className='illustration'>

        <Mobile className='mobile' />
        <MobileShadow className='mobile-shadow' />

        
        <Cube className='cube' />
        
      
        
      </div>

      <div className='container'>
        <div className='design'>
        <Design />
        </div>
      <h1>FAQ</h1>
      <div className='accordion'>
      {accordionData && accordionData.map(({ title, content }) => (
          <Accordion
          key={title}
          title={title} 
          content={content} 
          toggle={handleToggle}
          open={isActive === title}
          />
          ))}
      </div>
      </div>
        
    </div>
  );
}

export default App;
