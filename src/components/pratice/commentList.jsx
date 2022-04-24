import React,{Component} from 'react'

class CommentList extends Component {

    /*
        CommentLsit에서 상태를 만들면 보내기는 참 쉽겠지만 우리는 CommentForm도 생각해야함

        댓글의 내용은 사용자가 직접입력하는 것이기 때문에 우리가 댓글을 입력하고 submit을 때릴때
        댓글이 생성되기 때문에 상태를 list에 두지 않고 상태 끌어올리기를 이용해서 Comment에다가 상태를
        두어야 한다. 하지만 우리가 지금 props로 children을 쓰고 있기 때문에 props를 보내고 있는
        App 컴포넌트에다가 state를 넣어줘야 한다
    */


    // 2.    
    // App2에서 props로 받음 map을 통해서 각각 배열에 있는 객체를 v로 받고 배열에 인덱스 값을 k로 받을 것이다.
    // return을 통해서 items 이라는 변수에다가 이 배열들을 넣어줄 것이다. 객체를 이러한 jsx형태로 담을 배열을 items 배열에다가 넣고
    // 배열을 그냥 출력하면 그대로 자동으로 적용해서 반복시켜줄 것이다 => {this.items}
    // 아이디 제목 날짜를 배열에서 꺼내오는 객체가 v니까 이 친구를 꺼내와서 출력해보도록 하자 => v.userid..
    items = () => this.props.list.map((v,k)=>{
        return(
                <ul className="comment-row" key={k}>
                    <li className="comment-id">{v.userid}</li>
                    <li className="comment-content">{v.content}</li>
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