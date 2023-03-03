import { useState } from "react";

const TableUserList = (props) => {
  return (
    <div>
      <table border>
        <tr>
          <th>Name</th>
          <th> Email</th>
          <th> Phone</th>
        </tr>
      {props.userList.map((item) => {
        return (
          <tr>
            <td>Name: {item.name}</td>
            <td>Email: {item.email}</td>
            <td>Phone: {item.phone}</td>
            <button 
            onClick={(e) => {
                props.onEdit(item) }}>Edit</button>
            <button 
            onClick={(e) => {
                props.onDelete(item) }}>Delete</button>
          </tr>
        )
      })
    }
    </table>
    </div>
  );
}
export default TableUserList;
