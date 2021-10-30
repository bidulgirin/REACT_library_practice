/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";


//1. npx creat-react-app 설치 
//2. Food function을 만들고 props로 값 부모로 전달하기
//2-1. 값은 map으로 배열값을 형성하여 같은 레이아웃을 복붙하는 번거로움을 줄일수있다
//3. npm i prop-type 설치 (내가 전달받은  props가 내가 원하는 props인지 확인해준다)  
//4. props 말고 state를 사용해보자
//5. class 컴포넌트와  function 컴포넌트의 차이를 알아보자 return을 쓰느냐 render을 쓰느냐 
// class 컴포넌트는 자동적으로 실행된다고한다
//6. state 값을 변경하지 마시오 
// state자체를 변경하게 되면 render 메소드가 refresh를 안함 
//7. setstate로 상태를 복사하고 this.setState({});를 사용한다
//8. setstate로 상태를 변경하면서 count의 값을 this.state.count +1 로 지정하는데
// 이 코드는 state값에 의존하고 있어 좋지 못한 코드이다
//9. setState에다가 function 값으로 바꾸고 this.state를 current로 바꾼다~ 외부 상태에 의존을 하지 않아도 괜찮다!
//10. react life cycle mounting(태어나는것) , updating(변화하는것), unmounting(죽는것)
//mounting constroctor()
class App extends React.Component{ 
  constructor(props){
    super(props);
  }

  state = {
    //데이터 가져오고변경하기위해 state를 쓴다
    count: 0
  };
  componentDidMount(){
    console.log("Component renderd");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
 
  add = () =>{
    this.setState(current =>({ count: current.count + 1 })); 

  };
  minus = () =>{
    this.setState({ count:this.state.count - 1 });
  }
  
  render(){
    console.log('i am rendering')
    return (
      <div >
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
   
  }}

export default App;
