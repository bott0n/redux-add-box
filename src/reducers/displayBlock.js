const displayBlock = (state=[],action)=>{
    switch(action.type){
        case 'ADD_BLOCK':
        return[
            ...state,
            {
            id:action.id,
            title:action.title,
            text:action.text
            }
        ]
        default:
        return state
    }
}
export default displayBlock