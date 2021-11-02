import React from "react";
import {Link} from "react-router-dom";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/"); //집으로 돌아가게 하는코드
        }
    }
    render(){
        const {location} = this.props;
        return(
            <>
            <span>{location.state.title}</span>
            </>
            )
    }
}
export default Detail;