import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Navigation from './Components/Navigation/Navigation';
import CommaderBrigade from './Components/Main/ComponentBrigade/CommaderBrigade/CommaderBrigade';
import HeadquaretsBrigadeContainer from "./Components/Main/ComponentBrigade/HeadquaretsBrigade/HeadquaretsBrigadeContainer";
import MessagesContainer from "./Components/Main/ComponentBrigade/Messages/MessagesContainer";
import ChatFriendsContainer from './Components/Main/ChatFriends/ChatFriendsContainer'
import FirstBatalionContainer from "./Components/Main/ComponentBrigade/FirstBatalion/FirstBatalionContainer";
import UsersContainer from "./Components/Main/Users/UsersContainer"

function App() {

  return (
    <BrowserRouter>
    <div className='gridWrapper'>
      <Header />
      <Navigation />
      <Main />
        <Routes>

          <Route path='/main/*' element={<Main />} />

          <Route path='/commaderBrigade/*' element={<CommaderBrigade />} />


          <Route path='/HeadquaretsBrigade/*' element={<HeadquaretsBrigadeContainer />} />


          <Route path='/FirstBatalion/*' element={<FirstBatalionContainer />} />

          <Route path='/Messages/*' element={<MessagesContainer />} />

          <Route path='/Users/*' element={<UsersContainer />} />

          <Route path='/ChatFriends/*' element={<ChatFriendsContainer />} />
          
        </Routes>
      <Footer />
    </div> 
    </BrowserRouter >
  );
}

export default App;
