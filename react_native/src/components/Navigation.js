import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"
function Navigation(){
    return(
        <div className="navigation">
            <Link to="/">Home</Link>
    <Link to={{
            pathname:"/about",
            state: {
                fromNavtigation: true
            }
        }}>about</Link>
        </div>
    )
}
export default Navigation;