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
        handleChange = (e)=>{
            const value = e.target.value
            console.log(value)
            if(value.length == 0){
                return this.setState(()=>({
                    options: []
                }))
            }else{
                const regex = new RegExp(`${value}`, 'i')//check if the countries list match to the user's value
            }
        }
        render(){
            return (
                <div>
                   <input type="text" onChange={this.handleChange} />
                   <ul>
                     {this.country.map((country)=>
                         <li key={country}>{country}</li>
                     )}
                   </ul>
                </div>
            )
        }
    }