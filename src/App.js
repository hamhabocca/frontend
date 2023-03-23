import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/commons/Footer';
import './App.css';

// 브라우저별 기본 CSS 스타일 초기화
import '../src/reset.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element ={ <Footer/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
