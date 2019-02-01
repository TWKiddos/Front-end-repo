import React, { Component } from 'react'
import MemberDetails from './MemberDetails'
import DonorDetails from './DonorDetails'
import RecipientDetails from './RecepientDetails'
import './style.css';

export default class MemberPage extends Component{
  render(){
    return(
      <div class = "memberPage">
        <MemberDetails />
        <div class = "subModules">
        <DonorDetails />
        <RecipientDetails />
        </div>
      </div>
    )
  }


}
