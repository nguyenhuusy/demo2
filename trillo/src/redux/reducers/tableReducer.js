import { SAVE_TABLE, SAVE_TABLE_ITEM, SAVE_DEADLINE,DRAG_TABLE_ITEM,DROP_TABLE_ITEM } from '../type';

const initialState = {
    infor: [
        //    {
        //        name_table:'',
        //        discription_table:'',
        //        infor_item:[
        //            {
        //                name_table_item:'',
        //                description_table_item:''
        //            }
        //        ]
        //    }
        
    ],
    deadline: ''

}

export default function (state = initialState, action) {
    switch (action.type) {

        case SAVE_TABLE:
            return {
                ...state,
                infor: [...state.infor, {
                    name_table: action.payload.name,
                    description_table: action.payload.description,
                    
                    infor_item:[]
                    //     {
                    //         name_table_item:'',
                    //         description_table_item:''
                    //     }
                    // ]
                }]


            }
        case DRAG_TABLE_ITEM:
        const a=action.payload.index_main_table_drag    
        const m=action.payload.index_item_drag
            state.infor[a].infor_item.splice(m,1)
                    
            return {
                ...state,
                infor:state.infor
            }
        case SAVE_TABLE_ITEM:
            const n=action.payload.location;
            
            
                state.infor[n]= {
                    name_table:state.infor[n].name_table,
                    description_table:state.infor[n].description_table,
                    infor_item:[...state.infor[n].infor_item,
                        {
                            name_table_item: action.payload.name,
                            description_table_item: action.payload.description,
                            deadline_item:action.payload.deadline
                        }
                    ]
                
            }

            return {
                ...state,
                infor : state.infor
                // infor_item: [...state.infor_item, {
                //     name_table_item: action.payload.name,
                //     description_table_item: action.payload.description,
                //     deadline_item:action.payload.deadline,
                //     location_item:action.payload.location
                // }]


            }
        case SAVE_DEADLINE:
            return {
                ...state,
                deadline: action.payload
            }

        default:
            return state;
    }
}
