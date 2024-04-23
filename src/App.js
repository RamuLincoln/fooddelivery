
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import Maincontainer from './Components/Maincontainer';
import MenuContainer from './Components/MenuContainer';

function App() {
  return (
    <div className="App">
      {/* Header section */}
      <Header />
      {/* Main container */}
      <main>
        <div className="mainContainer"></div>
        <div className="rightMenu"></div>
      </main>
      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={'#'} icon = {<HomeRounded />} />
          <MenuContainer link={'#'} icon = {<Chat />} />
          <MenuContainer link={'#'} icon = {<AccountBalanceWalletRounded />} />
          <MenuContainer link={'#'} icon = {<Favorite />} />
          <MenuContainer link={'#'} icon = {<SummarizeRounded />} />
          <MenuContainer link={'#'} icon = {<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
