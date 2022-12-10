import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '@/pages/Home/index';
import Signin from '@/pages/Signin/index';
import Signup from '@/pages/Signup/index';
import SearchResult from './pages/SearchResult';
import Item from './pages/Item';
import MyCollections from '@/pages/MyCollections/index';
import MyCollection from '@/pages/MyCollection/index';
import MyItem from './pages/MyItem';
import '@/App.css';

function App() {
  // 임시 지역 상태
  const isSignedIn = true;
  const userid = 'ulgoon';

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/searchresult" element={<SearchResult />}></Route>
      <Route path="/item/:isbn" element={<Item />}></Route>
      <Route path="/mycollections/:userid" element={<MyCollections />}></Route>
      <Route
        path="/mycollection/:userid/:collectionid"
        element={<MyCollection />}
      ></Route>
      <Route path="/myitem/:isbn" element={<MyItem />}></Route>
    </Routes>
  );
}

export default App;
