import './App.scss';
import Accordion from './components/Accordion';
import {accordionData} from './utils/content';
import { useState } from 'react';
import { ReactComponent as Design}  from './assets/illustration-woman-online-mobile.svg';
import { ReactComponent as Box}  from './assets/illustration-box-desktop.svg';

function App() {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = key => {
    setIsActive(isActive !== key ? key : null)
}

  return (
      <div className='container'>
      <div className='illustration'>
        <Design className='design'/>
        <Box className='box'/>
      </div>
      <section>
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
      </section>
      </div>
  );
}

export default App;
