import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Todolist.scss';
import { connect } from 'react-redux';
import Calendar from '../Calendar/Calendar';
import { save_table_item, save_table } from '../../redux/actions/tableAction'
import TodoListItem from '../TodoListItem/TodoListItem';
//import $ from "jquery";
class Todolist extends Component {
    constructor() {
        super();
        
        this.state = {
            nameinput: '',
            descriptioninput: '',
            
        }
    }
    savethistable = () => {
        const { nameinput, descriptioninput } = this.state;
        const { deadline, save_table_item, index } = this.props
        save_table_item(nameinput, descriptioninput, deadline, index);
        this.setState({ nameinput:'' });
        this.setState({descriptioninput:''})
        document.getElementsByClassName(`table-item-input-${index}`)[0].style.display = "none";
        //document.getElementById(`tablecontent${index}`).style.display="block";
    }
    allowDrop = (ev) => {
        ev.preventDefault();

    }
    
    drop = (ev) => {

        ev.preventDefault();
        var data = ev.dataTransfer.getData("id");

        ev.target.appendChild(document.getElementById(data));}

        render() {
            const { index, name, description, deadline,infor } = this.props;
            
            const { nameinput, descriptioninput } = this.state;
           
            return (
                <div className="table">
                    {console.log('index4')}
                    <div className="table-header">
                        <span className="table-name">{name}</span>
                        <span className="table-description">{description}</span>
                        <button className="table-button" onClick={() => document.getElementsByClassName(`table-item-input-${index}`)[0].style.display = "flex"}>Tạo công việc</button>
                    </div>
                    
                    

                    <div className="table-content" id={`tablecontent${index}`}
                        onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>

                        {infor[index].infor_item.map((item,idx)=>
                            
                            <TodoListItem
                            key={idx}
                            index={idx}
                            index_main_table={index}
                            name={item.name_table_item}
                            description={item.description_table_item}
                            deadline={item.deadline_item}
                            />
                        )}

                    </div>
                    
                    <div className={`table-item-input table-item-input-${index}`}>
                        <label style={{ marginBottom: "5px" }}> Tên công việc </label>
                        <input className="form-input form-input-table-name" type="text" name="table-name" value={nameinput} onChange={e => this.setState({ nameinput: e.target.value })} />
                        <label style={{ marginBottom: "5px" }}> Mô tả nội dung công việc </label>
                        <input className="form-input form-input-table-description" type="text" name="table-description" value={descriptioninput} onChange={e => this.setState({ descriptioninput: e.target.value })} />
                        <div className="main-button-item">
                            <button className="button-item" onClick={this.savethistable}> Lưu </button>
                            <button className="button-item" onClick={() => document.getElementsByClassName(`table-item-input-${index}`)[0].style.display = "none"}> Huỷ </button>
                            <button className="button-item deadline" onClick={() => document.getElementsByClassName("main-calendar")[0].style.display = "flex"}>Deadline</button>

                            <div className="main-calendar">
                                <div className="calendar-item">
                                    <label style={{ marginBottom: "5px" }}> Deadline </label>
                                    <input className="form-input" type="text" name="deadline" value={deadline} readOnly />
                                </div>
                                <Calendar />
                            </div>

                        </div>
                    </div>
                    




                </div>
            )

        }
    }


    const mapStateToProps = state => ({
        deadline: state.table.deadline,
        infor:state.table.infor
    })
    export default connect(mapStateToProps, { save_table_item })(Todolist);