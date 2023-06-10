import React from 'react'

const Table = () => {
  return (
    <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Airlines</th>
        <th scope="col">IATA</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Air India</td>
        <td>AI</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Air India Express</td>
        <td> IX</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>AIX CONNECT</td>
        <td>I5</td>
        </tr>
        <tr>
        <th scope="row">4</th>
        <td>AKASA AIR</td>
        <td>QP</td>
        </tr>      
        <tr>
        <th scope="row">5</th>
        <td>GO FIRST</td>
        <td>G8</td>
        </tr>
        <tr>
        <th scope="row">6</th>
        <td>INDIGO</td>
        <td>6E</td>
        </tr>
        <tr>
        <th scope="row">7</th>
        <td>SPICEJET</td>
        <td>SG</td>
        </tr>
        <tr>
        <th scope="row">8</th>
        <td>VISTARA</td>
        <td>UK</td>          
        </tr>      
    </tbody>
    </table>
  )
}

export default Table