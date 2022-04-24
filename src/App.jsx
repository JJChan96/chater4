import React, {Component} from 'react'
import './assets/a.css'
import styles from './assets/App.module.css'
import styless from './assets/test.module.css'
import styled from 'styled-components'
import GuguClass from './components/gugu/GuguClass'
import Comment from './components/comment/Comment'
import CommentForm from './components/comment/CommentForm'
import CommentList from './components/comment/CommentList'
// import와 require의 차이점 
// 1. 만들어진 시기가 다름.
// 2. require가 먼저 나옴 왜?? => nodejs 나오면서 나옴 => nodejs환경에서만 쓸 수 있음
// 3. import가 나중에 나옴 왜?? => ES6나오면서 나옴


// 컴포넌트 내에서 바로 css를 작업한 내용을 만들 수 있다.
const Button = styled.button`
    background:#000;
    border:none;
    color:#fff;
    padding:7px 14px;

`

const HoverButton = styled(Button)`
    background:#007bff;
    :hover{
        background:#0069d9;
    }
`

const display = (props) => {
    let flag;
    if( props.background === '#333') flag = 'none';
    return flag;
}


const ActiveButton = styled(Button)`
    background:${ (props) => props.background };
    display:${display};
`

class App extends Component {
    state = {
        value:'hello worlasdasdasdasasdadsd!!!!!',
        list:[]
    }

    // 생명주기 함수 
    componentDidMount(){ // component가 다 그려졌을때, 다 렌더했을 때 실행시키는 이벤트라고 생각하자.
        console.log('헤헤~')
        // 상태를 여기서 바꾸면.. render가 다시 실행됨
        this.setState({ // 불변성.. 데이터가 바뀌면 화면이 바뀐다 -> 데이터가 바뀌면 render가 다시 실행된다.
            ...this.state,
            list:[
                {userid:'web7722',content:'안녕하세요1',date:"2022-04-21",updateflag:true},
                {userid:'web7722',content:'안녕하세요2',date:"2022-04-21",updateflag:true},
                {userid:'web7722',content:'안녕하세요3',date:"2022-04-21",updateflag:true}
            ],
            
        })
    }


    addList = (obj) => {
        this.setState({
            ...this.state,
            list:[...this.state.list,obj]
        })
    }


    updateList = list => {
        this.setState({
            ...this.state,
            list
        })
    }


    render(){
        const { list } = this.state
        console.log('hello App Component')
        return(
            <>  
                {gogo()}
                <Comment>
                    <CommentForm 
                    addList={this.addList}
                />
                    <CommentList 
                    list={ list }
                    updateList={this.updateList}
                />
                </Comment>
                {/* <GuguClass /> */}
            </>
        //     // <>  
        //     //     <div className="colors">{this.state.value}</div>
        //     //     <div className={styles.colors}>여기는 모듈</div>
        //     //     <div className={styless.colors}>여기는 test</div>
        //     //     <div>
        //     //         <Button>하잉</Button>
        //     //         <HoverButton>두번하잉</HoverButton>
        //     //         <ActiveButton background="#333">세번하잉</ActiveButton>
        //     //     </div>
        //     // </>
        )
    }
}

function gogo(){
    console.log('gogo')
}

export default App;