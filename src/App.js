import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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
  'job' :'소드마스터'

},
{
  'id' :'3' ,
  'image' : 'http://placeimg.com/64/64/3' ,
  'name' : '홍길동',
  'birthday':'98sfds0927',
  'gender' :'남자',
  'job' :'소드마스터'

}
]
function App() {
  return (
    /*
    <div>
   <Customer
   id={customer[0].id}
   image={customer[0].image}
    name={customer[0].name}
    birthday={customer[0].birthday}
    gender={customer[0].gender}
    job={customer[0].job}
   />
   <Customer
   id={customer[1].id}
   image={customer[1].image}
    name={customer[1].name}
    birthday={customer[1].birthday}
    gender={customer[1].gender}
    job={customer[1].job}
   />
   <Customer
   id={customer[2].id}
   image={customer[2].image}
    name={customer[2].name}
    birthday={customer[2].birthday}
    gender={customer[2].gender}
    job={customer[2].job}
   />
   </div>
   이렇게 적으면 코드가 길어지기때문에 map 함수를 사용한다
    */
    <div>
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
   </div>
  );
}

export default App;
