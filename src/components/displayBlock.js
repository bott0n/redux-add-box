import React from 'react'

import Info from './info.js'
import Title from './title.js'



const displayBlock =(props)=>{


        return (
            <div className='display-block'>
            <Title data={props.title} />
            <Info />
            
            </div>
        )
    
}
export default displayBlock