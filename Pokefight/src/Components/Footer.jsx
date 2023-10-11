import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import "./CSS/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="sb__footer">
        <div className="sb__footer-padding">
          <div className="sb__footer-links">
            <div className="sb__footer-links_div">
              <h4>For Business</h4>
              <a href="/employer">
                <p>Employer</p>
              </a>
              <a href="/Career">
                <p>Career</p>
              </a>
              <a href="/Locations">
                <p>Location</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Resources</h4>
              <a href="/Resources">
                <p>Resource Center</p>
              </a>
              <a href="/PokéAPI">
                <p>PokéAPI</p>
              </a>
              <a href="/Contact">
                <p>Contact</p>
              </a>
              <a href="/About">
                <p>About us</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Partner</h4>
              <a href="/Company">
                <p>Company</p>
              </a>
              <a href="/Sponsors">
                <p>Sponsors</p>
              </a>
            </div>
            <div className="socialmedia">
              <p>
                <a className="social" href="/Facebook">
                  <img src={Facebook} alt="" />
                </a>
              </p>

              <p>
                <a className="social" href="/Twitter">
                  <img src={Twitter} alt="" />
                </a>
              </p>
              <p>
                <a className="social" href="/Instagram">
                  <img src={Instagram} alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} WBS Group Four. All rights are
              reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/Terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/Privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/Security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/Cookies">
              <div>
                <p>Cookie declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
