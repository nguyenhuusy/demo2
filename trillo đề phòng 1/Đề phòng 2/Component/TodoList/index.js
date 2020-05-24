import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Todolist.scss';
import { connect } from 'react-redux';
import Calendar from '../Calendar/Calendar';
import {save_table_item} from '../../redux/actions/tableAction'
//import $ from "jquery";
class Todolist extends Component {
    constructor() {
        super();

        this.state = {
            display1: false,
            display2: false,
            display3: false,
            d: '',
            nameiteminput: '',
            descriptioninput: '',
            deadlineinput: ''


        }
    }
    // componentDidMount() {
    //     // Direct reference to autocomplete DOM node
    //     // (e.g. <input ref="autocomplete" ... />
    //     const node = ReactDOM.findDOMNode(this.refs.autocomplete);
    //     // Evergreen event listener || IE8 event listener
    //     const addEvent = this.node.addEventListener || this.node.attachEvent;
    //     addEvent("keypress", this.handleKeyPress, false);
    //   }
    //   componentWillUnmount() {
    //     const removeEvent = this.node.removeEventListener || this.node.detachEvent;
    //     // Reduce any memory leaks
    //     removeEvent("keypress", this.handleKeyPress);
    //   }
    savethistable = () => {
        const { nameItem, descriptionItem, save_deadline, deadline_total, save_deadline_total, deadline, save_description_item, save_name_item, index, location, save_location,key } = this.props;
        const { display1, display3, display2, nameiteminput, descriptioninput } = this.state;

        location.push(index);
        this.setState({ deadlinestate: deadline })
        deadline_total.push(deadline);
        save_deadline_total(deadline_total);
        save_location(location);
        nameItem.push(nameiteminput);
        descriptionItem.push(descriptioninput);
        save_name_item(nameItem);
        save_description_item(descriptionItem);
        save_deadline('');
        this.setState({ display1: false });
        this.setState({ display2: false });

    }
    allowDrop = (ev) => {
        ev.preventDefault();
       
    }
    nonallowDrop=(ev)=> {
        ev.stopPropagation();
        
    }
    
    drag = (ev) => {
        const { index } = this.props;
        ev.dataTransfer.setData("id", ev.target.id);
        
        
    }
    drop = (ev) => {
        const {display1}=this.state;
        const { index } = this.props;
        const { save_location, location } = this.props;
        ev.preventDefault();
        var data = ev.dataTransfer.getData("id");
        var key2=Number(data);
        ev.target.appendChild(document.getElementById(data));
        location.splice(key2,1,index);
        save_location(location);
        
    }
    edit_task = () => {
        const { nameItem, descriptionItem, deadline, save_description_item, save_name_item, save_location, location } = this.props;
        const { display1, display2, display3, nameiteminput, descriptioninput } = this.state;
        if (display3 === false) {
            this.setState({ display3: true })
        } else {
            this.setState({ display3: false })
        }
    }
    delete_task = () => {
        const { nameItem, descriptionItem, deadline, save_description_item, save_name_item, save_location, location } = this.props;
        const { display1, display2, display3, nameiteminput, descriptioninput } = this.state;

    }
    render() {
        const { name, description, index,key } = this.props;
        const { nameItem, descriptionItem, deadline, deadline_total, save_deadline_total, save_deadline, save_description_item, save_name_item, save_location, location } = this.props;
        const { display1, display2, display3, d, nameiteminput, descriptioninput, deadlinestate } = this.state;
        
        var tasks = []
        this.props.location.forEach((t, idx) => {
            if (t === index) {
                tasks.push(
                    <div key={idx}
                        draggable="true" onDragStart={(event) => this.drag(event)}
                        onDragOver={(event) => this.nonallowDrop(event)}
                        
                        className="draggable"
                        id={`${idx}`}
                    >

                        <div style={{fontWeight:"bold"}}>{nameItem[idx]}</div>
                        <div className="table-description">
                            {descriptionItem[idx]}</div>
                        {!!deadline_total[idx] && 
                        <div className="table-description"> 
                        Deadline: {deadline_total[idx]}
                        </div>}
                        
                        <div className="main-button-item">
                        <button className="button-item" onClick={() => {
                            this.setState({ nameiteminput: nameItem[idx] })
                            this.setState({ descriptioninput: descriptionItem[idx] })
                            
                            this.setState({ d: idx })
                        }}>Sửa task</button>
                        <button className="button-item" onClick={() => {
                            nameItem.splice(idx, 1);
                            descriptionItem.splice(idx, 1);
                            deadline_total.splice(idx, 1);
                            location.splice(idx, 1);
                            save_name_item(nameItem);
                            save_description_item(descriptionItem);
                            save_location(location);
                            save_deadline_total(deadline_total);
                            this.setState({ display1: false })
                            return;
                        }
                        }>Xoá task</button>
                        </div>
                        {!!(idx === d) &&
                            <div className="table-edit-item-input">
                                <label className="table-item-text" style={{ marginBottom: "5px" }} > Tên công việc </label>
                                <input className="form-input form-input-table-name" type="text" name="table-name" value={nameiteminput} onChange={e => this.setState({ nameiteminput: e.target.value })} />
                                <label className="table-item-text" style={{ marginBottom: "5px" }}> Mô tả nội dung công việc </label>
                                <input className="form-input form-input-table-description" type="text" name="table-description" value={descriptioninput} onChange={e => this.setState({ descriptioninput: e.target.value })} />
                                <div className="main-button-item">
                                <button className="button-item" onClick={() => {
                                    nameItem.splice(idx, 1, nameiteminput);
                                    descriptionItem.splice(idx, 1, descriptioninput);
                                    if (deadline!==''){deadline_total.splice(idx, 1, deadline)};
                                    this.setState({ d:'' });
                                    this.setState({ display2: false })
                                }}> Lưu </button>
                                <button className="button-item" onClick={() => {this.setState({ d:'' });
                            this.setState({ display2: false })
                            }}> Huỷ </button>
                                <button className="button-item" onClick={() => {this.setState({ display2: true });
                            
                            }}>Deadline</button>
                            {!!display2 &&
                                    <div className="main-calendar main-calendar-edit">
                                        <div className="calendar-item">
                                        <label style={{ marginBottom: "5px" }}> Deadline </label>
                                        <input className="form-input" type="text" name="deadline" value={deadline} readOnly />
                                        </div>
                                        <Calendar />
                                    </div>
                                }
                                </div>
                                
                            </div>
                        }
                        
                    </div>
                );
            }
        });
        return (


            <div className="table" key={key}>

                <div className="table-header">
                    <span className="table-name">{name}</span>
                    <span className="table-description">{description}</span>
                    <button className="table-button" onClick={() => this.setState({ display1: true })}>Tạo công việc</button>
                    {!!display1 &&
                        <div className="table-item-input">
                            <label style={{ marginBottom: "5px" }}> Tên công việc </label>
                            <input className="form-input form-input-table-name" type="text" name="table-name" onChange={e => this.setState({ nameiteminput: e.target.value })} />
                            <label style={{ marginBottom: "5px" }}> Mô tả nội dung công việc </label>
                            <input className="form-input form-input-table-description" type="text" name="table-description" onChange={e => this.setState({ descriptioninput: e.target.value })} />
                            <div className="main-button-item">
                            <button className="button-item" onClick={this.savethistable}> Lưu </button>
                            <button className="button-item" onClick={() => this.setState({ display1: false })}> Huỷ </button>
                            <button className="button-item deadline" onClick={() => this.setState({ display2: true })}>Deadline</button>
                            {!!display2 &&
                                <div className="main-calendar">
                                    <div className="calendar-item">
                                    <label style={{ marginBottom: "5px" }}> Deadline </label>
                                    <input className="form-input" type="text" name="deadline" value={deadline} readOnly />
                                    </div>
                                    <Calendar />
                                </div>
                            }
                            </div>
                        </div>
                    }


                </div>

                <div className="table-content" id={`div${index}`}
                    onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}
                
                >
                    
                    {tasks}

                </div>



            </div>

        )
    }
}


const mapStateToProps = state => ({
    nameItem: state.tableitem.name,
    descriptionItem: state.tableitem.description,
    deadline: state.tableitem.deadline,
    deadline_total: state.tableitem.deadline_total,
    location: state.tableitem.location
    // name:state.table.name,
    // description:state.table.description

})
export default connect(mapStateToProps, { save_description_item, save_deadline_total, save_deadline, save_name_item, save_location })(Todolist);