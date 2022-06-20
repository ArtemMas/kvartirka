import React from 'react';
import im from './image.module.css';
import icon from '../../../assets/images/icon.png'

const Image = () => {
   return (
      <div className={im.divImStyle}>
         <img className={im.ima} src={icon} alt=""/>
      </div>
      )
}
export default Image;
