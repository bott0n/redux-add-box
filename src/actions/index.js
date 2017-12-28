let block_id=0
export const addBlock = (title,text)=>(
    {
        type:'ADD_BLOCK',
        id:block_id++,
        title,
        text
    }
)