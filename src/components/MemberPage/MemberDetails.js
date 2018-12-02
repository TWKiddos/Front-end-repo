import React, { Component } from 'react';
import "./style.css"

export default class MemberDetails extends Component{
    render(){
      return(
        <div className="details">
          <header>
            <h2 className="heading">Member Details</h2>
            <a href="" className="editDetails">Edit Member</a>
          </header>
          <section>
            <table className="memberDetails">
              <tbody>
              <tr className="line">
                <td>Name</td>
                <td className="value">Thomas Cook</td>
                <td className="secondSection">Gender</td>
                <td className="value">Male</td>
              </tr>
              <tr className="line">
                <td>Phone Number</td>
                <td className="value">+0009999999999</td>
                <td className="secondSection">Email</td>
                <td className="value">thomas.cook@gmail.com</td>
              </tr>
              <tr className="line">
                <td>City</td>
                <td className="value">Malibu</td>
                <td className="secondSection">State</td>
                <td className="value">California</td>
              </tr>
              <tr className="line">
                <td>Country</td>
                <td className="value">United States Of America</td>
                <td className="secondSection">Pin Code</td>
                <td className="value">111432</td>
              </tr>
              </tbody>
            </table>
          </section>
        </div>
      )
    }
}