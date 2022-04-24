import React,{Component} from 'react'
import GuguList from './GuguList'
import GuguForm from './GuguForm'

//guguclass
//guguform
//gugulist


class GuguClass extends Component {

    state = {
        value:null
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            ...this.state,
            value:parseInt(e.target.gugu.value)
        })
    }


    render(){
        return(
            <>
                <GuguForm 
                    onSubmit={this.handleSubmit}
                />
                <GuguList 
                    value={this.state.value}
                />
            </>
        )
    }
}

export default GuguClass