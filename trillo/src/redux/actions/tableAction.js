import {SAVE_TABLE, SAVE_TABLE_ITEM,SAVE_DEADLINE,DRAG_TABLE_ITEM,DROP_TABLE_ITEM} from '../type';

export const save_table=(name,description)=> dispatch => {
    
    const data={name,description};
    return dispatch({
            type:SAVE_TABLE,
            payload:data
        })
    
}
export const save_table_item=(name,description,deadline,location)=>dispatch=>{
    
    const data={name,description,deadline,location};
    return dispatch({
        type: SAVE_TABLE_ITEM,
        payload:data
    })
}

export const drag_table_item=(index_main_table_drag,index_item_drag)=>dispatch=>{
    
    const data={index_main_table_drag,index_item_drag};
    return dispatch({
        type: DRAG_TABLE_ITEM,
        payload:data
    })
}
export const drop_table_item=(index_main_table_drop,index_item_drop)=>dispatch=>{
    
    const data={index_main_table_drop,index_item_drop};
    return dispatch({
        type: DROP_TABLE_ITEM,
        payload:data
    })
}

export const save_deadline=(data) => dispatch=> {
    return dispatch({
        type: SAVE_DEADLINE,
        payload:data
    })
}
