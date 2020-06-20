import React from 'react';
import './AutoCompletedText.css'
import Countries from './Countries';

    export default class AutoCompletedText extends React.Component{
        constructor(){
            super()
            this.country = [
                "Israel",
                "USA",
                "Italy",
                "United Kingdom"
            ]
            this.state = {
                 options: [],
                 isHidden: false
            }
        }
        toggleIsHidden = ()=>{
            this.setState({
                isHidden: !this.state.isHidden
            })
        }
        handleClick = ()=>{
            console.log("test")
        }
        render(){
            return (
                <div>
                   <input type="text" onChange={this.handleClick} name="insert"/>
                   <ul>
                     {this.country.map((country)=>
                         <li key={country}>{country}</li>
                     )}
                   </ul>
                </div>
            )
        }
    }