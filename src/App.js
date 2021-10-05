/* https://console.firebase.google.com/project/facebook-clonef/settings/general/web:MzBhNmZlYzMtZWFiYi00MjlhLWE2NjctYzQwZDBiNGIxMTEz */
/* rfce (Importante)*/
/* https://material-ui.com/es/ */
/* https://material-ui.com/components/icons/#icons */
/*https://www.youtube.com/watch?v=B-kxUMHBxNo&t=13342s 3:31*/

/*https://www.youtube.com/watch?v=XWRik18G0Ls&t=446s */
/*https://console.firebase.google.com/project/facebook-clonef/firestore/data/~2Fposts~2FxeBAA09BBzUtTw1WMunE?hl=es*/
/*https://console.firebase.google.com/project/facebook-clonef/authentication/providers*/ 
/**npm install firebase*/

import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgetspr from './Widgetspr';

/*import Widgets from './Widgets';*/
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className = "app">
      {!user ? (
        <Login/>
      ):(
        <>
        <Header/>
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgetspr/>
        </div>
        </>
      )}


    </div>


  );
    
  }export default App;
