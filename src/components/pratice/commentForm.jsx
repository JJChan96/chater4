import React,{Component} from 'react'

class CommentForm extends Component {

    /*
        1. state value값을 주고 변화하는 이벤트 함수를 넣자.(handelChange) 
        handleChange => 내용이 하나하나씩 생길때마다 handeChange가 실행된다. -> e.target.value 를 사용

        2. 이제 우리는 우리가 글 쓴 것을 폼태그 안에 value에다가 넣어주면 된다. value = {this.state.value}
        
        3. 우리는 input 박스에 내용을 넣었을때 최신화에 대한 내용을 value값에 넣는 작업까지 마쳤다.
        이제 submit 버튼을 눌렀을 때 특정 함수를 호출할 것이다. handleSubmit( ) 
        
        4. submit를 눌렀을 때 현재 내가 작성한 값(input 박스에 있는 내용)을 잘 가져오기 위해 사용했고 이 값을 app 컴포넌트에 
        상태값에 있는 list 배열에 넣어줘야 한다.

        4.1 App컴포넌트에서 상태를 바꿀 수 있는 함수를 만들것이다.(addList( )) App 컴포넌트에서 상태를 바꿀 수 있는 함수를
        Form 컴포넌트에게 props로 함수를 전달할 것이다.
        4.2 handleSubmit 함수가 호출되었을 때 props로 전달받은 함수를 실행시킬 것이다.

        5. 자 이제 내용을 적고 버튼을 누르면 list에 새로 생기는 것을 볼 수 있다. 하지만 댓글 내용이 내가 쓴 것과는 다르게 
        같은 내용으로만 나오는 것을 볼 수 있다. 왜냐! 우리가 addList에 추가할 값을 우리가 정한 값으로만 넣었기 때문
        그래서 이 내용만 바꾸면 된다~ props로 받은 함수에 인자값에 value를 넣어줌!
        
    */

    state = {
        value:''
    }

    handleChange = e => {
        const {value} = {...e.target} // input에 해당함 e.target.value
        this.setState({ // setState 될때마다 render가 발생함
            value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        this.props.addList(this.state.value) // 4.2 방법

        this.setState({
            value:''
        })
    }

    render(){
        return(
            <li className="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <span className="ps_box">
                        <input 
                            type="text"
                            className="int"
                            placeholder="댓글을 입력해주세요"
                            onChange={this.handleChange}
                            value={this.state.value} // 상태가 바뀐값으로 value값을 넣어줌
                        />
                    </span>
                    <input type="submit" className="btn" value="등록" />
                </form>
            </li>
        )
    }
}

export default CommentForm