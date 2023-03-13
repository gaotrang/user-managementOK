
import { Table, Button } from "antd";
//INPUT: dataSource, onEdit, onDelete
const TableStudents = (props) => {

    const columns = [
        {
            title: 'Tên học sinh',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Mã số học sinh',
            dataIndex: 'StudentId',
            key: 'StudentId',
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
                        <Button onClick={() => { props.onEdit(item) }}>Edit</Button>
                        <Button onClick={() => { props.onDelete(item) }}>Delete</Button>
                    </div>
                )
            }
        },
    ];
    return (

        <Table dataSource={props.dataSource} columns={columns} />
    )
};
export default TableStudents;

//SearchBox (components,class)
//handleClick ( function = động từ)


