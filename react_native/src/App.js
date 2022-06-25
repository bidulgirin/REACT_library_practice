/* eslint-disable */
import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Home  from "./routes/Home";
import About  from "./routes/About";
import Detail  from "./routes/Detail";
import Navigation from "./components/Navigation"

//1. 니꼬샘은 여러가지 라우터 중에 HashRouter 을 사용하겠다고 함 import About from "./routes/About"; 로 불러와줌
//2. HashRouter안에 Route에 입력할것은 props가 들어가는데 하나는 렌더링할 스크린이 들어가고 다른하나는 props는 뭘할지 정해주는 기능을 한다
// ->/about라는 길로가서 About 컴포넌트를 보여줘라는 뜻
//3. import할때 이름을 굳이 파일이름과 동일하게 할필요는 없다고 함 About as Potato 로 About파일이름을 Potato로 명시할수있다고 함! 의미만 잘통하게 적어놓자구~
//4. route url 의 작동방식은 url이 일치하는것모두 렌더링함 /about/introduce라고 입력하면
//about 이랑 about/introduce랑 다 나옴~ 그래서 exact={true} 를써서 렌더를 구분하여 출력하도록 한다
// 5. a태그는 html코드라서 새로고침된다 그래서 Link를 사용해야한다
//import {Link} from "react-router-dom"; 을 불러온다! link는 route안에서 써야함
//6. BrowserRouter는 

function App(){
  return(
    
      <HashRouter> 
        <Navigation />
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movie/:id" component={Detail}></Route>
      </HashRouter>
    
  )
}

export default App;
