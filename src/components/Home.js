import ItemCard from './ItemCard.js';
import PromoSmall from './PromoSmall.js';
import '../style/Home.css'
import peachTea from '../images/peachtealisting.webp';
import teaBox from '../images/tea box.webp';
import roseTea from '../images/rose tea.webp';
import cinnamon from '../images/cinnamon tea.jpeg';

const fakeListings = [
  {
    image: `${peachTea}`,
    title: 'Peach Passsion',
    description: 'Aliquam in neque sem. Pellentesque quis porttitor dui, vel venenatis quam. Nam id sodales augue. Donec vel elit eros.'
  },
  {
    image: `${teaBox}`,
    title: 'Matcha',
    description: 'Aliquam in neque sem. Pellentesque quis porttitor dui, vel venenatis quam. Nam id sodales augue. Donec vel elit eros.'
  },
  {
    image: `${roseTea}`,
    title: 'oolong',
    description: 'Aliquam in neque sem. Pellentesque quis porttitor dui, vel venenatis quam. Nam id sodales augue. Donec vel elit eros.'
  },
  {
    image: `${cinnamon}`,
    title: 'Cinnamon',
    description: 'Aliquam in neque sem. Pellentesque quis porttitor dui, vel venenatis quam. Nam id sodales augue. Donec vel elit eros.'
  }
]

function Home() {
  return (
    <div id="home">
      {/* <img src={bannerImg} alt="tea assortment image" className="banner-img" /> */}
      <div className="banner-container">
        <div className="banner-img"></div>
        <div className="banner-txt">
          <h1>Freshly Picked For Spring</h1>
          <div className="banner-byline">
            <p>Wave goodbye to winter<br />  with a refreshing collection</p>
            <button className="banner-button">SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className="promo-banner">
         <PromoSmall title="FREE SET OF COASTERS" byline="with tea purchase"/>
         <hr />
         <PromoSmall title="SAVE WITH STARTER PACK" byline="includes 2 free mini collections" />
      </div>
      <div className="quote-container">
        <h2>Come, let us have some tea and continue to talk about happy things</h2>
      </div>
      <div className="shop-options">
        <div className="tea-option">
          <div className="tea-option-btn">
            <a href="/home">SHOP TEA</a>
          </div>
        </div>
        <div className="set-option">
          <div className="set-option-btn">
            <a href="/home">SHOP TEA SETS</a>
          </div>
        </div>
      </div>
      <div className="shop-preview">
        <h2>DISCOVER THE COMPANY OF TEA</h2>
        <div className="preview-cards">
          {fakeListings.map((item) => <ItemCard image={item.image} title={item.title} description={item.description}/>)}
        </div>
      </div>

    </div>
  )
}

export default Home;