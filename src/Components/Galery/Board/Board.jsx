import React from 'react'
import Galery from '../GaleryPhotos/Galery'
import classes from './Board.module.css';

export default function Board() {
  return (
    <div className={classes.app}>
      <Galery/>
    </div>
  )
}


