import {SAVE_TABLE, SAVE_TABLE_ITEM} from '../type';

export const save_table=(name,description)=> dispatch => {
    const data=[];
    data.push({name,description});
    return dispatch({
            type:SAVE_TABLE,
            payload:data
        })
    
}
export const save_table_item=(name,description,deadline)=>dispatch=>{
    const data=[];
    data.push({name,description,deadline});
    return dispatch({
        type: SAVE_TABLE_ITEM,
        payload:data
    })
}
