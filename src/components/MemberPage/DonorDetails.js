import React, { Component } from 'react'
import "./style.css"

export default class DonorDetails extends Component{
  render(){
    return(
      <div className="donor details fit">
        <header>
          <h2 className="light secondHeading">Donator</h2>
          <a href="edit" className="editDetails edit">Edit</a>
        </header>
        <main>
      <table className="donarDetails">
        <tbody>
        <tr>
          <th>Blood Group</th>
          <td className="value">A+</td>
        </tr>
        <tr>
          <th>No. of Donations</th>
          <td className="value">5</td>
        </tr>
        <tr>
          <th>Pending Donations</th>
          <td className="value">1</td>
        </tr>
        <tr>
          <th>Pending Requests</th>
          <td className="value">2</td>
        </tr>
        </tbody>
      </table>
        </main>

      </div>
    )
  }
}
