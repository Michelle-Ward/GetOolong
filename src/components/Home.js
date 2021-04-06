import bannerImg from '../images/teatrayassort.jpeg';
import '../style/Home.css'

function Home() {
  return (
    <div id="home">
      {/* <img src={bannerImg} alt="tea assortment image" className="banner-img" /> */}
      <div className="banner-container">
        <div className="banner-img"></div>
      </div>

      <h2>I am a home component</h2>
      <p>This component will eventually hold information like who we are, what this is, and photos of the tea. we can also add an interactive map to see where the teas come from</p>

    </div>
  )
}

export default Home;