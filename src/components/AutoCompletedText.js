import React from 'react';
import './AutoCompletedText.css'

    export default class AutoCompletedText extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                 options: [],
                 text: ''
            }
        }              
        handleChange = (e)=>{
            const value = e.target.value
            let suggestions = []
            if(value.length>0){
                const regex = new RegExp(`^${value}`, 'i')//The letters I want to test 
                suggestions = this.props.item.sort().filter(element=>regex.test(element)) //check if the letters I want the user insert match the letters of the countries
            }
            this.setState(()=>({options:suggestions, text:value}))
                            }
        suggestionsValue = ()=>{
            
            if(this.state.options.length===0){
                return null
            }
            return (
                <ul>
                     {this.state.options.map((country)=>
                         <li key={country} onClick={()=>this.suggestionsClicked(country)}>{country}</li>
                     )}
                   </ul>
            )
        }
        suggestionsClicked = (country)=>{
            this.setState(()=>({text: country}))
        }
        render(){
            return (
                <div className="AutoCompletedText">
                   <input type="text" onChange={this.handleChange} value={this.state.text} />
                   {this.suggestionsValue()}
                </div>
            )
        }
    }