import React from 'react';
import './accordion.scss';
import { ReactComponent as ArrowDown}  from '../assets/icon-arrow-down.svg';



const Accordion = ({ title, content, toggle, open }) => {

    return (
        <div id={title} className='accordion-item'>
          <div  className='accordion-title' onClick={() => toggle(title)}>
            <span className={open ? 'bold' : 'title'}>{title}</span>
            <span className='icon'>{ !open ? <ArrowDown/> : <ArrowDown className='up' /> }</span>
          </div>
          <div>
            {open && <div className='accordion-content'> {content} </div>}
          </div>
        </div>
  )
}

export default Accordion;