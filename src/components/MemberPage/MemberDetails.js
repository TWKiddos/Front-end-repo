import React, { Component } from 'react';
import "./style.css"

export default class MemberDetails extends Component{
    render(){
      return(
        <div className="details">
          <header>
            <h2 className="light heading">Member Details</h2>
            <a href="edit" className="editDetails">Edit Member</a>
          </header>
            <table className="memberDetails">
              <tbody>
              <tr className="line">
                <th>Name</th>
                <td className="value">Thomas Cook</td>
                <th className="secondSection">Gender</th>
                <td className="value">Male</td>
              </tr>
              <tr className="line">
                <th>Phone Number</th>
                <td className="value">+0009999999999</td>
                <th className="secondSection">Email</th>
                <td className="value">thomas.cook@gmail.com</td>
              </tr>
              <tr className="line">
                <th>City</th>
                <td className="value">Malibu</td>
                <th className="secondSection">State</th>
                <td className="value">California</td>
              </tr>
              <tr className="line">
                <th>Country</th>
                <td className="value">United States Of America</td>
                <th className="secondSection">Pin Code</th>
                <td className="value">111432</td>
              </tr>
              </tbody>
            </table>
        </div>
      )
    }
}
