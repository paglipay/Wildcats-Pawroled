import React from 'react'
import { Table } from 'react-bootstrap';

function PerpStats() {
  return (
    <Table style={{ color: 'white', textAlign:'left' }}>
    <tr>
      <td colSpan={4}>
        <h3>NIKOLAI ONDREJKO</h3>
      </td>
    </tr>
      <tr>
        <td colSpan={4}>
          <h6>Alias: Diggle Berry Bandit</h6>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          Dob
          Feb 09, 1971
        </td>
        <td  colSpan={2} >
          LIC. CLASS
          C
        </td>
      </tr>
      <tr>
        <td>
          Sex M
        </td>
        <td colSpan={2} >
          Hair Brn
        </td>
        <td>
          Eyes Brn
        </td>
      </tr>
      <tr>
        <td>
          Ht 2'2"
        </td>
        <td  colSpan={2} >
          Wt 111
        </td>
        <td >
          Dl 123123
        </td>
      </tr>
      <tr>
        <td  colSpan={2} >
          Issued 11/26/09
        </td>
        <td colSpan={2} >
          Expires 11/26/19
        </td>
      </tr>
      <tr>
        <td colSpan={4}>
          Misc. and State Specific Info.
        </td>
      </tr>
      <tr>
        <td>
        </td>
      </tr>
    </Table>
  )
}

export default PerpStats