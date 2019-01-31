import React, { Component } from 'react'
import './style.css'
import '../style.css'

export default class RecepientDetails extends Component{
  render(){
    return(
      <div className="details recepient">
        <header>
          <h2 className="light secondHeading">Recepient</h2>
          <a href="edit" className="editDetails edit">Edit</a>
        </header>
        <main class="recepientModule">
          <table className="recepientDetails">
            <tbody>
              <tr>
                <th>Rejected Requests</th>
                <td className="value">0</td>
              </tr>
              <tr>
                <th>Pending Requests</th>
                <td className="value">1</td>
              </tr>
              <tr>
                <th>Completed Requests</th>
                <td className="value">1</td>
              </tr>
            </tbody>
          </table>
          <button type="button">Request</button>
        </main>
      </div>
    )
  }
}
