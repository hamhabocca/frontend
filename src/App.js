import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/commons/Footer';

// 브라우저별 기본 CSS 스타일 초기화
import '../src/reset.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element ={ <Footer/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
