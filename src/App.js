import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout';
import BoardLayout from './layouts/BoardLayout';
import Home from './pages/Home';
import RallyBoard from './pages/RallyBoard';
import ReviewBoard from './pages/ReviewBoard';
import Notice from './pages/Notice';
import QnABoard from './pages/QnABoard';
import MyPage from './pages/MyPage';
import Login from './pages/Login';

// 브라우저별 기본 CSS 스타일 초기화
import '../src/reset.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomeLayout/>}>
          <Route index element={ <Home/> }/>
        </Route>
        <Route path='/' element={ <BoardLayout/>}>
          <Route path='rally' element={ <RallyBoard/> }/>
          <Route path='review' element={ <ReviewBoard/>}/>
          <Route path='notice' element={ <Notice/> }/>
          <Route path='qna' element={ <QnABoard/> }/>
          <Route path='mypage' element={ <MyPage/> }/>
          <Route path='Login' element={ <Login/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
