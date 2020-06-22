import React from 'react';
import './AutoCompletedText.css'
import Countries from './Countries';

    export default class AutoCompletedText extends React.Component{
        constructor(){
            super()
            this.countries = [
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
            let suggestions = []
            if(value.length>0){
                const regex = new RegExp(`^${value}`, 'i')//check if the letters of countries are match to the user's value 
                suggestions = this.countries.sort().filter(element=>regex.test(element)) //move to suggestions the matched values
                this.setState(()=>({options:suggestions}))
            }console.log(suggestions)
        }
        suggestionsValue = ()=>{
            
            if(this.state.options.length===0){
                return null
            }
            return (
                <ul>
                     {this.state.options.map((country)=>
                         <li key={country}>{country}</li>
                     )}
                   </ul>
            )
        }
        render(){
            return (
                <div>
                   <input type="text" onChange={this.handleChange} />
                   {this.suggestionsValue()}
                </div>
            )
        }
    }