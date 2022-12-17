import { Routes, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { dialogState } from './recoil/globalState';

import Home from '@/pages/Home/index';
import Signin from '@/pages/Signin/index';
import Signup from '@/pages/Signup/index';
import SearchResult from './pages/SearchResult';
import Item from './pages/Item';
import MyCollections from '@/pages/MyCollections/index';
import MyCollection from '@/pages/MyCollection/index';
import MyItem from '@/pages/MyItem';
import NotFound from '@/pages/NotFound';
import Dialog, { DialogProps } from './common/components/Dialog/Dialog';

function App() {
  const [dialog] = useRecoilState<DialogProps>(dialogState);

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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Dialog
        isOpen={dialog.isOpen}
        width={dialog.width}
        height={dialog.height}
        title={dialog.title}
        confirm={dialog.confirm}
      >
        {dialog.children}
      </Dialog>
    </>
  );
}

export default App;
