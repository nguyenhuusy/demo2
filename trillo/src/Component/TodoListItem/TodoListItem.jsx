import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './TodoListItem.scss';
import { connect } from 'react-redux';
import Calendar from '../Calendar/Calendar';
import { save_table_item,drag_table_item } from '../../redux/actions/tableAction'
//import $ from "jquery";
class TodoListItem extends Component {
    nonallowDrop = (ev) => {
        ev.stopPropagation();

    }

    drag = (ev) => {
        const { index,drag_table_item } = this.props;
        ev.dataTransfer.setData("id", ev.target.id);
        

    }
    deleteitem=()=>{
        const {index,index_main_table,drag_table_item}=this.props;
        var list_item=document.getElementById(`item${index}`);
        list_item.remove();
        drag_table_item(index_main_table,index)
        console.log('delete item')
        //var list=document.getElementById(`tablecontent${index_main_table}`);
        //list.removeChild(list_item);
    }
    render() {
        const { index, name, description, deadline } = this.props;
        console.log('lele')
        return (
            <div
            draggable="true" onDragStart={(event) => this.drag(event)}
            onDragOver={(event) => this.nonallowDrop(event)}
            
            className="draggable"
            id={`item${index}`}>
                <div style={{fontWeight:"bold"}}>{name}</div>
                        <div className="table-description">
                            {description}</div>
                        {!!deadline && 
                        <div className="table-description"> 
                        Deadline: {deadline}
                        </div>}
                        <div className="main-button-item">
                        <button className="button-item" >Sửa task</button>
                        <button className="button-item" onClick={this.deleteitem}>Xoá task</button>

            </div>
            </div>
        )

    }
}


const mapStateToProps = state => ({


})
export default connect(mapStateToProps,{drag_table_item})(TodoListItem);