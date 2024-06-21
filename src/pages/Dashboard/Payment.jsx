import React from 'react'

function Payment() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-12">
        <table className="table table-dark" style={{backgroundColor:"rgb(0 0 0 / 20%)", color:"white"}}>
<thead>
<tr>
  <th scope="col">Methods</th>
  <th scope="col">Expires</th>
</tr>
</thead>
<tbody>
<tr>
  <td scope="row">VISA</td>
  <td>20-2-2040</td>
</tr>
<tr>
  <td scope="row">Master Card</td>
  <td>22-2-2034</td>
</tr>
<tr>
  <td scope="row">Jazz Cash</td>
  <td>23-2-2034</td>
</tr>

</tbody>
</table>
        </div>
    </div>
</div>
  )
}

export default Payment