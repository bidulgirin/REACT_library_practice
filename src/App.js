
import React from 'react';
import Customer from './components/Customer';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';


const styles = theme =>({
  root: {
    width: '100%',
    overflowX: "auto",
    marginTop: theme.spacing.unit * 3
  },
  table:{
    minWidth: 1080
  }

})
const customer =[{
  'id' :'1' ,
  'image' : 'http://placeimg.com/64/64/any' ,
  'name' : '홍길동',
  'birthday':'980927',
  'gender' :'남자',
  'job' :'소드마스터'

},
{
  'id' :'2' ,
  'image' : 'http://placeimg.com/64/64/2' ,
  'name' : '홍길동',
  'birthday':'980sf927',
  'gender' :'남자',
  'job' :'히키코모리'

},
{
  'id' :'3' ,
  'image' : 'http://placeimg.com/64/64/3' ,
  'name' : '홍길동',
  'birthday':'98sfds0927',
  'gender' :'남자',
  'job' :'키보드워리어'

}
]
class App extends React.Component{
  render(){
  const { classes } = this.props;
  return (
   
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
                customer.map(c=>{  //map 함수 문법 
                  return (
                    <Customer 
                      key={c.id} //key 사용자를 구별할수 있게 하는 것
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                })
              }
          </TableBody>
        </Table>
      </Paper>
   
  );
}
}

export default withStyles(styles)(App);
