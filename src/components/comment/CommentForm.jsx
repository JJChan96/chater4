import React,{Component} from 'react'

class CommentForm extends Component {

    state = {
        value: ''
    }

    handleChange = e => {
        // console.log(e.target.value) => e.target 은 input에 해당
        const { value } = {...e.target}
        this.setState({
            value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.value)

        const obj = {userid:'web7722',content:this.state.value,date:"2022-04-21",updateflag:true}

        this.props.addList(obj)
        this.setState({
            value:''
        })
        // Submit 버튼을 눌렀을 때 input 박스에 있는 내용을 쉽게 가져올 수 있게 처리는 함

        // App 컴포넌트에 있는 list라는 값을 push 해줘야하는 상황
            // App 컴포넌트에서 상태를 바꿀 수 있는 함수를 만듭시다.
            // App 컴포넌트에서 상태를 바꿀 수 있는 함수를 CommentForm 컴포넌트에게 props로 함수를 전달해줍시다.
            // handleSubmit 함수가 호출되었을 때 props로 전달받은 함수를 실행시킬 것이다.
            // props로 전달받은 함수는 CommentForm에서 받은 상태 value값을 인자값으로 넣어준다.
            // CommentForm에 있는 value라는 상태값을 '' 빈 문자열로 상태를 바꾼다. => 댓글 작성시 빈칸으로 돌아옴
    }

    render(){
        return(
            <li className="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <span className="ps_box">
                        <input 
                            type='text' 
                            className="int"
                            placeholder="댓글을 입력해주세요."
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                    </span>
                    <input type="submit" className="btn" value="등록" />
                </form>
            </li>
        )
    }
}

export default CommentForm