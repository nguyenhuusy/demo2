import { SAVE_TABLE, SAVE_TABLE_ITEM } from '../type';

const initialState = {
    table: {
        name:'',
        description:'',
        table_item: ''
}
}

export default function (state = initialState, action) {
    switch (action.type) {
        
        case SAVE_TABLE:
            
            return {
                ...state,
                table: {
                name:action.payload.name,
                description:action.payload.description
            }

            }
        case SAVE_TABLE_ITEM:
            
            return {
                ...state,
                table_item: action.payload
            }

        default:
            return state;
    }
}