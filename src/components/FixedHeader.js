import '../style/FixedHeader.css'
import OutlineButton from './OutlineButton.js';

function FixedHeader() {
  return (
    <div className="fixedhead-container">
      <h1 className="brand-logo">Get Oolong</h1>
      <div className="fixedHead-buttons">
        <OutlineButton text="Sign In / Create Account"/>
        <OutlineButton text="Cart"/>
      </div>

    </div>
  )
}

export default FixedHeader;