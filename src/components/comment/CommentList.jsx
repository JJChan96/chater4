import React,{Component} from 'react'

class CommentList extends Component {

    state = {
        value:'',
        update:null
    }

    /* 
        CommentList에서 상태를 만들었다면.. 어떠한 이슈가 있는가?
        데이터 뿌리는데 있어서는 엄청 쉽다!
        
        하지만 우리는 CommentForm이랑 같이 생각을 해야한다.

        state = {
            list : [
                {id,content,date},
                {id,content,date},
            ]
        }

        이런식으로 해야한다. 하지만 CommentForm에서 데이터를 입력을 하고 보내줘야하는 상황이 생기기 때문에 List에 상태를 넣으면 안된다.
        하지만 자식 component끼리는 데이터를 props가 불가능 그렇기에 부모 component인 comment에다가 상태를 넣어야 한다. but... 우리는 App에다가 Children을 사용했기때문에...
        App 쪽에다가 state를 넣어야한다.
    */ 
        
    
    input = React.createRef()

    /* 생명주기 함수 */

    componentDidUpdate(){ // 컴포넌트가 리랜더링 되었을 때 => 상태가 바뀌었을때
        console.log('이건 업데이트')
    }

    componentDidMount(){ // 얘는 최초로 컴포넌트가 랜더가 완료 되었을 때
        //소켓연결
        console.log('이건 로드')
    }

    componentWillUnmount(){ // 컴포넌트가 사라질때 
        //소켓종료
        console.log('이건 사라짐')
    }
        


    handleClick = (i) => e => {
        console.log(e.target.innerHTML,i)
        this.setState({
            ...this.state,
            value:e.target.innerHTML,
            update:i
        })
    }

    updateChange = e => {
        const {value} = {...e.target}

        this.setState({
            ...this.state,
            value
        })
    }


    updateKeyDown = i => e => {
        if(e.key !== "Enter") return

        const {updateList,list} = this.props
        // list
        const newList = [...list]
        newList[i].content = this.state.value


        this.setState({
            ...this.state,
            update:null,
        })

        console.log(this.state.value)
        updateList(newList)
        

    }

    deleteClick = k => {
        console.log(k)
        const {updateList,list} = this.props
        const newList = [...list].filter( (v,i)=>i !== k)
        console.log(newList)

        updateList(newList)
        // const deletArr= []
        // for(let i=0; i<newList.length; i++){
        //     if(i!==k){ // k:0 , i:0 false
        //         deletArr.push(newList[i])
        //     }
        // }
        // console.log(deletArr)


 // ---------------------------------------------------------------- 위랑 같은 방법
    //     const deletArr = newList.filter( (v,i)  => {
    //         return i !== k
    //     })
    //     console.log(deletArr)
    }



    // handleClick = (i) => {
    //     const eventClick = e => {
    //         console.log(i)
    //         console.log(e)
    //     }

    //     return eventClick
    // }

    // this.props.list 배열이 몇개? -> 1개

    //1. span을 클릭시 안에 들어가있는 내용을 출력하기.
    //   span onclick시 event 매개변수에서 e.target.innerHTML
    //   클릭했을 때 해당 내용의 정보를 가져올 수 있었다.
            // 클릭했을 때는 CommentList의 상태에게 저장을 시켜준다.
    items = () =>this.props.list.map((v,k)=>{  // k -> 어떠한 배열의 인덱스값이 무엇인지 알려줌
        return (
            <ul className="comment-row" key={k}>
                <li className="comment-id">{v.userid}</li>
                <li className="comment-content">
                    {
                        this.state.update === k
                        ?  <input 
                            type="text" 
                            value={this.state.value}
                            onChange={this.updateChange}
                            onKeyDown={this.updateKeyDown(k)}
                            className="comment-update-input"
                        />
                        : (
                            <>
                                <span onClick={this.handleClick(k)}> {v.content} </span>
                                <span className="comment-delete-btn" onClick={ ()=>{this.deleteClick(k)} }></span>
                                <span className="comment-delete-btn" onClick={ ()=>{this.deleteClick(k)} }>
                                    X
                                </span>
                            </>
                        ) 
                    }
                </li>
                <li className="comment-date">{v.date}</li>
            </ul>
        )
    })

    render(){
        return(
            <li>
                {this.items()}
            </li>
        )
    }
}

export default CommentList