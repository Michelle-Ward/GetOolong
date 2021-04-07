import '../style/PromoSmall.css'
function PromoSmall(props) {
  return (
    <div className="promo-container">
      <h3>{props.title}</h3>
      <p>{props.byline}</p>
      <a>Learn More</a>
    </div>
  )
}

export default PromoSmall;