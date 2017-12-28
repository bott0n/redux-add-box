
import React from 'react'
import DisplayBlock from './displayBlock.js'

import {connect} from 'react-redux'
import store from '../store'
import {addBlock} from '../actions'

let Test=()=>{
    var num=[];
    store.getState().displayBlock.map(items=>{
      num.push(<DisplayBlock key={items.id} title={items.title}/>)
    })
    return(<div>
        {num}
        </div>)
}


let InputPanel=(props)=>{
    console.log('re-render')
    let title
    let text
        return(
            <div className='input'>
                <form onSubmit={e=>{
                    e.preventDefault()
                    store.dispatch(addBlock(title.value,text.value))
                    console.log(title.value)
                    console.log(text.value)
                    props.view()
                }}>
                    <input ref={node=>{
                        title = node
                    }}/>
                    <input ref={node=>{
                        text=node
                    }}/>
                    <button type='submit'>
                    addBlock
                    </button>
                </form>
            </div>
        )
    
}
class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showInputPanel:true
        }
    }
    
    toggleClick(){
      
        if(this.state.showInputPanel===false){
            this.setState({
                showInputPanel:true
            })
        }
        if(this.state.showInputPanel===true){
            this.setState({
                showInputPanel:false
            })
        }
    }
    render(){

       
             
      console.log('mian-rerender')
        return(<div >
              {this.state.showInputPanel?<InputPanel view={this.toggleClick.bind(this)}/>:''}
             <button onClick={this.toggleClick.bind(this)} >
             click me 
             </button>
            
             <div className='main'>
           
           This is Body 
          <Test/>
      
      </div>          

            </div>)
    }
}
export default Main