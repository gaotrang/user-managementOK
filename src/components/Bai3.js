import { useState } from "react";

const DEFAULT_USER = { name: '', email: '', phone: ''}

const Bai3 = () => {
  const [users, setUsers] = useState ([])
  const [userList, setUserList] = useState([])
  const [formData, setFormData] = useState(DEFAULT_USER)

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onClick = () => {
    if(formData.id) {
      const newUserList = userList.map((item) => {
        if(item.id === formData.id) {
            return formData
        }
        return item
      })
      setUserList(newUserList)
    }
    else{
      setUserList([
        ...userList,
        {
          id: Math.random(),
          ...formData
        }
      ])
    }
    setFormData(DEFAULT_USER)
  }

  const onEdit = (selectedUser) => {
    setFormData(selectedUser)
  }
  return (
    <div>
      <div>
        <input name = 'name' value={formData.name} placeholder="name" onChange ={onChange}/>
        <input name = 'email' value={formData.email} placeholder="email"  onChange={onChange} />
        <input name = 'phone' value={formData.phone} placeholder="phone"  onChange={onChange} />
        <button onClick = {onClick}>{formData.id ? "Edit" : " Create" }</button>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>

      </table>
      {userList.map((item) => {
        return (
          <tr>
            <td>Name: {item.name}</td>
            <td>Email: {item.email}</td>
            <td>Phone: {item.phone}</td>
            <button 
            onClick={(e) => {onEdit(item) }}>Edit</button>
          </tr>
        )
      })
    }
    </div>
  );
}

export default Bai3;
