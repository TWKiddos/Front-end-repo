import React, { Component } from 'react'
import MemberDetails from './MemberDetails'
import DonorDetails from './DonorDetails'
import RecipientDetails from './RecepientDetails'

export default class MemberPage extends Component{
  render(){
    return(
      <div>
        <MemberDetails />
        <DonorDetails />
        <RecipientDetails />
      </div>
    )
  }


}