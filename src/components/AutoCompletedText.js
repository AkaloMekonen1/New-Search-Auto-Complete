import React from 'react';
import Countries from './Countries'

    export default class AutoCompletedText extends React.Component{
        constructor(){
            super()
        }
        render(){
            return (
                <div>
                     <Countries />  
                     <input type="text" />
                </div>
            )
        }
    }