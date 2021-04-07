import bannerImg from '../images/teatrayassort.jpeg';
import PromoSmall from './PromoSmall.js';
import '../style/Home.css'
import peachTea from '../images/peachtealisting.webp';
import teaBox from '../images/tea box.webp';
import RoseTea from '../images/rose tea.webp';

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
          <img src={peachTea} />
          <img src={RoseTea} />
          <img src={teaBox}/>
          <img src={peachTea} />
          <img src={RoseTea} />
          <img src={teaBox}/>
      </div>


      <p>This component will eventually hold information like who we are, what this is, and photos of the tea. we can also add an interactive map to see where the teas come from</p>

    </div>
  )
}

export default Home;