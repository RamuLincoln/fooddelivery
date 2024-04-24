
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import Maincontainer from './Components/Maincontainer';
import MenuContainer from './Components/MenuContainer';
import { useEffect } from 'react';
import BannerName from './Components/BannerName';
import delivery from './Images/food-delivery-boy-driving-scooter.avif';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import burger from "./Images/burger.avif";
import pizza from "./Images/pizza.avif";
import briyani from "./Images/briyani.avif";
import lemon from "./Images/drinks.avif";
import sandwich from "./Images/sw.avif";
import salad from "./Images/salad.avif";

function App() {

  useEffect(()=>{
    const menuli = document.querySelectorAll('#menu li')
    
    function setactive() {
      menuli.forEach((n)=>n.classList.remove("active"))
      this.classList.add("active");
    }
    menuli.forEach((n) => n.addEventListener('click',setactive))
  },[])
  return (
    <div className="App">
      {/* Header section */}
      <Header />
      {/* Main container */}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={'Ram'} discount={"20"} link={'#'} />
            <img src={delivery} alt='' className='deliveryPic' />
          </div>
          {/* DishContainer */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"}/>
            </div>
            <div className="rowContainer">
              <MenuCard image={burger} name={"Burger"} />
              <MenuCard image={pizza} name={"Pizza"} />
              <MenuCard image={briyani} name={"Briyani"} />
              <MenuCard image={lemon} name={"Lemon"} />
              <MenuCard image={sandwich} name={"Salad"} />
              <MenuCard image={salad} name={"Sandwich"} />
            </div>
            <div className="dishItemContainer"></div>
          </div>
        </div>
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
