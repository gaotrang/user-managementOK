import { useState, useEffect } from "react"; //chỉ lấy các phần cần thiết
import TableUserList from "./TableUserList"; // để lấy toàn bô folder TableUserList
import FormUser from "./FormUser";

const DEFAULT_USER = { name: '', email: '', phone: ''}

const Bai3 = () => {
  // const [users, setUsers] = useState ([])
  const [userList, setUserList] = useState([]);
  const [formData, setFormData] = useState(DEFAULT_USER);
  const [searchUserList, setSearchUserList] = useState([]);
  const [keyword, setKeyWord] = useState('');

useEffect(() => {
  console.log(1)
  if(keyword !== '') {
    const newUserList = userList.filter((item) => {
      return item.name === keyword
    })
    setSearchUserList(newUserList)
  }
  else {
    setSearchUserList(userList)
  }
}, [keyword, userList])

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onClick = () => {
    debugger
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

  const onEdit = (item) => {
    setFormData(item)
  }
  const onDelete = (item) => {
    const newUserList = userList.filter((user) =>{
      return user.id !== item.id
    })
    setUserList(newUserList)
  };

  const onSearch = (e) =>{
    setKeyWord(e.target.value)
  }

  return (
    <div>
      <FormUser formData={formData} setFormData={setFormData} onSubmit={onClick}/>

      <input value={keyword}  onChange ={onSearch}/>

      <TableUserList userList={searchUserList} onEdit={onEdit} onDelete={onDelete}/>
    </div>
  );
}

export default Bai3;
