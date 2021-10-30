/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";


//1. npx creat-react-app 설치 
//2. Food function을 만들고 props로 값 부모로 전달하기
//2-1. 값은 map으로 배열값을 형성하여 같은 레이아웃을 복붙하는 번거로움을 줄일수있다
//3. npm i prop-type 설치 (내가 전달받은  props가 내가 원하는 props인지 확인해준다)  
const foodILike = [
    {
      id:1,
      name: "Kimchi",
      image:"https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e8305263694a4c2358508602ad7694e2cd022389545b2812f6e86bf29e05e172b53405",
      rating: 5 
    },
    {
      id:2,
      name: "ramian",
      image:"https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df64d239a3ca63c5a7574a4ad2656633c8c",
      rating: 4.5 
    },
    {
      id:3,
      name: "Kimchi",
      image:"https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e8305263694a4c2358508602ad7694e2cd022389545b2812f6e86bf29e05e172b53405",
      rating:3 
    },
    {
      id:4,
      name: "Kimchi",
      image:"https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e8305263694a4c2358508602ad7694e2cd022389545b2812f6e86bf29e05e172b53405",
      rating:2 
    }
]

function Food({name, image, rating}){

  return (
    <>
      <h1>I like {name}</h1>
    <img src={image} alt={name}></img>
    <h2>평점: {rating}/5.0</h2>
    </>

    )
}

Food.propTypes = { //타입을 확인할수 있다~ 이말이여
  name:PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired

};
function App() {
  //map은 배열에 하나하나 기능을 넣어 배열을 반환해주는 메서드 이다. 간편!
  return (
    <div className="App">
      hello~ 
      {foodILike.map(dish => 
      <Food 
        className ="food" 
        key={dish.id} 
        name={dish.name} 
        image={dish.image}
        rating={dish.rating}></Food>)}
    </div>
  );
}

export default App;
