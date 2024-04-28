import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { useEffect, useState } from 'react';
import BannerName from './Components/BannerName';
import delivery from './Images/food-delivery-boy-driving-scooter.avif';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import menu from './Data/menu';
import ItemCard from './Components/ItemCard';
import { piza } from './Data/data';
import DebitCard from './Components/DebitCard';

function App() {
  const [data, setData] = useState('')

  useEffect(()=>{
    const menuli = document.querySelectorAll('#menu li')
    /* menu item active*/
    function setactive() {
      menuCard.forEach((n)=>n.classList.remove("active"))
      this.classList.add("active");
    }
    /* Bottom menu active*/
    function setMenuActive() {
      menuli.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuli.forEach((n) => n.addEventListener('click',setMenuActive))

    const menuCard = document.querySelector(".rowContainer").querySelectorAll('.rowMenuCard')
    menuCard.forEach((n) => n.addEventListener('click',setactive))
    
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
            {menu.map((m)=>(
            <div key={m.id} onClick={() => setData(m.name)}>
            <MenuCard  image={m.image} name={m.name} />
            </div>))}
            </div> 
            
            <div className="dishItemContainer">
              {piza.filter(ele=> ele.category === data).map((m)=>
              <ItemCard key={m.id} itemId={m.id} imgSrc={m.image} name={m.name} ratings={m.ratings} price={m.price}/>)}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
        </div>
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
