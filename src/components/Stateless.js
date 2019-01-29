import React from 'react'
const Stateless = ({title}) =>
  <tr>
    <td class="empty-column d-none d-md-table-cell"></td>
    <td><i class="fas fa-file-alt"></i>
        {title}</td>
    <td class="d-none d-md-table-cell">me</td>
    <td class="d-none d-md-table-cell">6:45 PM</td>
    <td><i class="fas fa-trash-alt"></i></td>
    <td class="empty-column d-none d-md-table-cell"></td>
  </tr>

export default Stateless;