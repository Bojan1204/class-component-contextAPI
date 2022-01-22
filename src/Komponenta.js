import React from 'react';
import { ThemeContext } from './contexs/ThemeContext';

export default class Komponenta extends React.Component{
  static contextType = ThemeContext;
  
    render(){
        const {Name} = this.context 
        return(
            <h1>Moje ime je {Name} </h1>
        )
    }
}