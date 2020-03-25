import React, { Component } from 'react';
import './Header.scss';
import {connect} from 'react-redux';
import {save_table} from '../../redux/actions/tableAction';
import Todolist from '../TodoList/index';
class Header extends Component {
    constructor() {
        super();
        
        this.state = {
            nameinput:'',
            descriptioninput:'',
        }
    }
    savethistable=()=> {
        const {nameinput,descriptioninput} =this.state;
        const {save_table,infor}=this.props;
        // nametable.push(nameinput);
        // descriptiontable.push(descriptioninput);
        // save_description(descriptiontable);
        //save_name(nametable);

        save_table(nameinput,descriptioninput)
        document.getElementsByClassName("inputname")[0].style.display="none";
        this.setState({ nameinput:'' });
        this.setState({descriptioninput:''})
        //var node = document.getElementById("table-flex");
        //node.removeAttribute("hidden");
        console.log('hoho')

         
        
    }    
    

    render() {
        const {nameinput,descriptioninput} =this.state;
        const {nametable,descriptiontable,infor}=this.props;
        return (
            <div id="header">
                <button onClick={() => {document.getElementsByClassName("inputname")[0].style.display="flex";
                }} className="insert-table"><i className="fas fa-plus"></i></button>
                <div className="inputname">
                    <div className="input-body">
                    <label className="label-text" style={{ marginBottom: "5px" }}> Nhập tên bảng </label>
                    <input className="form-input form-input-table-name" type="text" name="table-name" value={nameinput} onChange={e => this.setState({ nameinput: e.target.value })}/>
                    <label className="label-text" style={{ marginBottom: "5px" }}> Nhập mô tả </label>
                    <input className="form-input form-input-table-description" type="text" name="table-description" value={descriptioninput} onChange={e => this.setState({ descriptioninput: e.target.value })}/>
                    </div>
                    <div>
                    <button className="table-button" onClick={this.savethistable}> Tạo bảng </button>
                    <button className="table-button" onClick={()=>document.getElementsByClassName("inputname")[0].style.display="none"}
                > Huỷ </button>
                    </div>
                </div>
            <div id="table-flex">
            {
            console.log('infor',infor),
            infor.map((item,idx)=>
                 <Todolist
                 key={idx}
                 index={idx}
                 name={item.name_table}
                 description={item.description_table}
                    
                 />
                 )}
                    </div>
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
    infor:state.table.infor  
})
export default connect(mapStateToProps, { save_table })(Header);