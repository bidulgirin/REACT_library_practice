import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render(){
        return(
          
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile"/> </TableCell>
                    <TableCell>{this.props.name} </TableCell>
                    <TableCell>{this.props.birthday} </TableCell>
                    <TableCell>{this.props.gender} </TableCell>
                    <TableCell>{this.props.job} </TableCell>
                </TableRow>
           
        )
    }
}


/* table을 만들거기 때문에 일단 치움
class CustomerProfile extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
                </div>

        )
    }
}
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
           
                <div>{this.props.birthday}</div>
                <div>{this.props.gender}</div>
                <div>{this.props.job}</div>
            
         </div>
        )
    }
}
*/
export default Customer;