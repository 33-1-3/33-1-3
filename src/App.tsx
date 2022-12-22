import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home/index';
import Signin from '@/pages/Signin/index';
import Signup from '@/pages/Signup/index';
import SearchResult from './pages/SearchResult';
import Item from './pages/Item';
import MyCollections from '@/pages/MyCollections/index';
import MyCollection from '@/pages/MyCollection/index';
import MyItem from '@/pages/MyItem';
import NotFound from '@/pages/NotFound';
import Verification from '@/pages/Verification';
import { loginState, userState } from '@/recoil/globalState';
import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';

function App() {
  const [isLogIn, setIsLogIn] = useRecoilState(loginState);
  const [userId, setUserId] = useRecoilState(userState);

  useEffect(() => {
    async function auth() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_DB_SERVER}auth`, {
          withCredentials: true,
        });
        const {
          data: { isLogin, userId },
        } = res;

        setIsLogIn(isLogin);
        setUserId(userId);
      } catch (error) {
        console.log(error);
      }
    }
    auth();
  }, [isLogIn, userId]);

  console.log('@@@@');
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/searchresult" element={<SearchResult />}></Route>
        <Route path="/item/:id" element={<Item />}></Route>
        <Route
          path="/mycollections/:userid"
          element={<MyCollections />}
        ></Route>
        <Route
          path="/mycollection/:userid/:collectionid"
          element={<MyCollection />}
        ></Route>
        <Route path="/myitem/:id" element={<MyItem />}></Route>
        <Route path="/verification/:userId" element={<Verification />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
