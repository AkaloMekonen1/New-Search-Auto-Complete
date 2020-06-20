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
            if(value.length == 0){
                return this.setState(()=>({
                    options: []
                }))
            }else{
                const regex = new RegExp(`${value}`, 'i')//check if the countries list match to the user's value
                const suggestions = this.countries.sort().filter((item)=>item.test(regex))
                this.setState(()=>({
                    options: suggestions
                }))
            }
        }
        render(){
            return (
                <div>
                   <input type="text" onChange={this.handleChange} />
                   <ul>
                     {this.countries.map((country)=>
                         <li key={country}>{country}</li>
                     )}
                   </ul>
                </div>
            )
        }
    }