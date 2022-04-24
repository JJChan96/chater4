import React, {Component} from 'react'
import './assets/a.css'
import styles from './assets/App.module.css'
import styless from './assets/test.module.css'
import styled from 'styled-components'
import Comment from './components/pratice/Comment'
import CommentForm from './components/pratice/CommentForm'
import CommentList from './components/pratice/CommentList'

class App2 extends Component {
    state = {
        value:'hello world!',
        list:[]
    }
    
    // 1. state에 있는 list는 list컴포넌트에 쓸거같으니 보내주도록 하자 list ={list}
    // 2. 이 리스트를 가지고 렌더할 수 있는 화면을 만들어보도록 하자 => list 컴포넌트 이동 ㄱㄱ
    // 3. 생명주기란 무엇인가?
    /*
        DOmContendLoaded 처럼 모든 컴포넌트가 다 완성이 되었을 시점 때 컨트롤 할 수 있는 기능이
        componentDidMount이다. 이것은 화면이 다 렌더되었을 때 실행시키는 이벤트라고 생각하면된다. 
    */

    
    componentDidMount(){
        this.setState({
            ...this.state,
            list:[
                {userid:'web7722',content:'안뇽하세요2',date:"2022-04-21"},
                {userid:'web7722',content:'안뇽하세요3',date:"2022-04-21"},
                {userid:'web7722',content:'안뇽하세요4',date:"2022-04-21"}
            ]
        })
    }
    

    addList = (content) =>{
        this.setState({
            list:[...this.state.list, {userid:'web7722',content:content,date:"2022-04-21"}]
            // //list:[
            //     {userid:'web7722',content:'안뇽하세요2',date:"2022-04-21"},
            //     {userid:'web7722',content:'안뇽하세요3',date:"2022-04-21"},
            //     {userid:'web7722',content:'안뇽하세요4',date:"2022-04-21"}
            // ] 이 상태에서 , 를 하고 {userid:'web7722',content:'안뇽하세요5',date:"2022-04-21"} 이걸 넣은 상황
            // -> app 컴포넌트에 상태를 바꾸는 함수이다. 이제 이 함수를 props로 전달해줄 것 => Form에다가
        })
    }


    // 3번까지 해서 CRUD 중 R을 완성했다 이제 C를 완성해보도록 하자
    /*
        자 이제 만들어볼텐데 우리가 value값을 통해서 댓글을 생성할려고 한다.. 근데 굳이 App컴포넌트에다가
        state를 둬서 value값을 줘야하나..? 그냥 Form 컴포넌트에다가 state 만들어서 value값 주고 그것을 
        list에다가 넘겨주면 되는거 아닌가?? 다 만들어진 결과물만 app 컴포넌트 list에다가 넘겨주면 되지않을까??
        app컴포넌트 상태값에 value를 안주는 이유가 값을 주게되면 하위 컴포넌트까지 다같이 렌더되기 때문!

        1. 그러면 form으로 가서 상태를 만들도록 하자 
    */ 


    render(){
        const {list} = this.state
        return(
            <>  
                <Comment>
                    <CommentForm addList={this.addList} /> 
                    <CommentList list={list} />
                </Comment>
            </>
        )
    }
}


export default App2;



// children을 쓰면  App2컴포넌트에서 <comment></comment> 사이에 들어갈 내용이 children이라 생각하면된다.
 