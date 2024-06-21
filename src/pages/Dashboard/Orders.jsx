import React from 'react'

function Orders() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
            <table className="table table-dark" style={{backgroundColor:"rgb(0 0 0 / 20%)", color:"white"}}>
  <thead>
    <tr>
      <th scope="col">Order#</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">834834</td>
      <td>20-2-34</td>
      <td>Completed</td>
    </tr>
    <tr>
      <td scope="row">323483</td>
      <td>22-2-34</td>
      <td>Shipped</td>
    </tr>
    <tr>
      <td scope="row">145834</td>
      <td>23-2-34</td>
      <td>Incomplete</td>
    </tr>
    
  </tbody>
</table>
            </div>
        </div>
    </div>
  )
}

export default Orders