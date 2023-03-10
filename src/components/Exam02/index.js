
import { useState } from "react";
import { Table, Input, Button, Modal } from "antd";
const DEFAULT_STUDENT = { name: "", studentId: "", score: "", className: ""}

const TableStudents = (props) => {
    const [formData, setFormData] = useState(DEFAULT_STUDENT)
    const [dataSource, setDataSource] = useState([])
    const [open, setOpen] = useState(false)


    const onCreate = () => {
        setOpen(true)
    }

    const onEdit = (student) => {
        setFormData(student)
        setOpen(true)
    }
    const onDelete = (item) => {
        const newDataSource = dataSource.filter((dataSource) =>{
            return item.id !== dataSource.id
          })
          setDataSource(newDataSource)
    }
    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData({
            ...formData,
            [name] : value
        })
    }

    const onCancel = () => {
        setOpen(false)
    }

    const onSubmit = () => {
        if(formData.id) {
            const newDataSource = dataSource.map((item) => { // return item.id === formData.id ? item
                if(item.id === formData.id) {
                    return formData
                }
                return item
            })
            setDataSource(newDataSource)
            
        }
        else{
            setDataSource([
                ...dataSource,
                {
                    id: Math.random(),
                    ...formData
                }
                ])

        }
        setOpen(false)
    }
    // const dataSource = [
    //     {name: " Phùng Văn A ", StudentID: " 123 ", score: " 10 ", className: "1"},
    //     {name: " Trần Văn B ", StudentID: " 456 ", score: " 9 ", className: "2"},
    //     {name: " Lê Văn C ", StudentID: " 789 ", score: " 5 ", className: "1"},
    //     {name: " Trương Văn D ", StudentID: " 147 ", score: " 8 ", className: "2"},
    //     {name: " Huỳnh Văn E ", StudentID: " 258 ", score: " 9 ", className: "1"},
    // ]
    const columns = [
        {
          title: 'Tên học sinh',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Mã số học sinh',
          dataIndex: 'StudentID',
          key: 'StudentID',
        },
        {
          title: 'Điểm',
          dataIndex: 'score',
          key: 'score',
        },
        {
            title: 'Lớp',
            dataIndex: 'className',
            key: 'className',
          },
        {
            title: "",
            dataIndex: 'actions',
            render: (text, item) => {
                return (
                    <div>
                        <button onClick={() => { onEdit(item) }}>Edit</button>
                        <button onClick={()=> { onDelete(item) }}>Delete</button>
                    </div>
                )
            }
        },
      ];
      return (

          <div>
              <div>
                  <Modal open={open} onOk={onSubmit} onCancel={onCancel}>
                  <Input name='name' value={formData.name} onChange={onChange} />
                  <Input name='studentId' value={formData.studentId} onChange={onChange} />
                  <Input name='score' value={formData.score} onChange={onChange} />
                  <Input name='className' value={formData.className} onChange={onChange} />
                  </Modal>

                  <Button onClick={onCreate}>New Student</Button>
                <Table dataSource={dataSource} columns={columns} />;
              </div>

          </div>
      )
    
    };

    export default TableStudents;


