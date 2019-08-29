import * as React from "react";
import "./Tomatoes.scss"
import axios from "../../config/axios";
import {addTomato,initTomatoes} from "../../redux/actions/tomatoes";
import TomatoAction from "./TomatoAction";
import {connect} from "react-redux"

interface ITomatoesProps {
    addTomato:(payload:any)=>any
    tomatoes:any[]
}
class Tomatoes extends React.Component<ITomatoesProps>{
    constructor(props){
        super(props)
        console.log(props)
    }
    componentDidMount(){
        this.getTomatoes()
    }


    get unfinishedTomato(){
        return this.props.tomatoes.filter(t=> !t.description&&!t.ender_at)[0]
    }
    getTomatoes = async ()=>{
        try{
            const response = await  axios.get("tomatoes")
            console.log(response.data)
        }catch (e) {
            throw new Error(e)
        }
    }

    startTomato = async()=>{
        try {
            const response = await axios.post("tomatoes",{duration:25*60*1000})
            this.props.addTomato(response.data.resource)
            console.log(response.data)
        }catch (e) {
            throw new Error(e)
        }
    }

    public render(){
        return(
            <div className="Tomatoes" id="Tomatoes">
                <TomatoAction startTomato={this.startTomato}
                              unfinishedTomato={this.unfinishedTomato}/>
            </div>
        )
    }
}
const  mapStateToProps = (state, ownProps)=>({
    tomatoes: state.tomatoes,
    ...ownProps
})
const  mapDispatchToProps ={
    initTomatoes,
    addTomato
}
export default connect(mapStateToProps,mapDispatchToProps)(Tomatoes)