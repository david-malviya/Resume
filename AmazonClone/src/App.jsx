import React from "react";
import box1_image from './assets/box1_image.jpg'
import box2_image from './assets/box2_image.jpg'
import box3_image from './assets/box3_image.jpg'
import box4_image from './assets/box4_image.jpg'
import box5_image from './assets/box5_image.jpg'
import box6_image from './assets/box6_image.jpg'
import box7_image from './assets/box7_image.jpg'
import box8_image from './assets/box8_image.jpg'
import './App.css'

const App = () => {
  return (
    <>
      <header id="David">
        <nav id="FirstNav">
          <div id="navbar">
            <div className="amazon-logo border"></div>
          </div>

          <div id="delivery-Address" className="border">
            <p className="Deliver-to">Deliver to</p>
            <div className="logo-india">
              <i className="fa-solid fa-location-dot"></i>
              <p className="india-name">India</p>
            </div>
          </div>

          <div id="search-all-glass">
            <select id="select-tag">
              <option value="#">All</option>
            </select>
            <input placeholder="Search Amazon" className="search-amazon" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div id="flag-language" className="border">
            <div className="flag">
              <img
                src="https://cdn-icons-png.flaticon.com/128/206/206626.png"
                alt=""
              />
            </div>
            <div className="language">
              <select>
                <option value="#">En</option>
              </select>
            </div>
          </div>

          <div id="signIn-Account" className="border">
            <p className="helloSignIn">Hello, sign in</p>
            <p className="Account">Account & Lists</p>
          </div>

          <div id="return-order" className="border">
            <p className="helloSignIn">
              <span>Returns</span>
            </p>
            <p className="Account">& orders</p>
          </div>

          <div id="cart-icon" className="border">
            <div className="cart-icon-image">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="for-cart-name">
              <p className="cart-name Account">Cart</p>
            </div>
          </div>
        </nav>

        <nav id="secondnav">
          <div id="for-display-flex">
            <div id="tripleline-all" className="samepadding-secondnav border">
              <div className="tripleline">
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="All">
                <span>All</span>
              </div>
            </div>

            <div className="today-deal samepadding-secondnav border">
              <p>Today's Deals</p>
            </div>

            <div className="registry samepadding-secondnav border">
              <p>Registry</p>
            </div>

            <div className="customer-service samepadding-secondnav border">
              <p>Customer Service</p>
            </div>

            <div className="gift-card samepadding-secondnav border">
              <p>Gift Cards</p>
            </div>

            <div className="Sell samepadding-secondnav border">
              <p>Sell</p>
            </div>
          </div>

          <div className="ShopDealsinElectronics">
            <p>Shop deals in Electronics</p>
          </div>
        </nav>
      </header>

      <main>
        <div>
          <div id="hero-section">
            <div className="hero-message">
              <p>
                You are on amazon.com. You can also shop on Amazon India for
                millions of products with fast local delivery.{" "}
                <a href="#" className="hero-msg">
                  Click here to go to amazon.in
                </a>
              </p>
            </div>
          </div>

          <div id="shopping-section">
            {[
              { title: "Clothes", image: box1_image },
              { title: "Health & Personal Care", image: box2_image},
              { title: "Furniture", image: box3_image },
              { title: "Electronics", image: box4_image },
              { title: "Beauty Picks", image: box5_image },
              { title: "Pet Care", image: box6_image },
              { title: "New Arrival in Toys", image: box7_image },
              { title: "Discover Fashion Trends", image: box8_image },
            ].map((item, index) => (
              <div className="box" key={index}>
                <div className="Shopping-image">
                  <h2>{item.title}</h2>
                  <div className="shopimg">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="shopping-anchor">
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <div className="Sign-upatFooter">
          <div className="sign-up">
            <p className="Firstpara-signup">See personalized recommendations</p>
            <button>Sign in</button>
            <p className="secondpara-signup">
              New customer? <a href="#">Start here</a>
            </p>
          </div>
        </div>

        <a href="#David" className="Backtotop">
          <p>Back to top</p>
        </a>

        <div className="last-div">
          {[
            {
              title: "Get to Know Us",
              links: [
                "Careers",
                "Blog",
                "About Amazon",
                "Investor Relation",
                "Amazon Devices",
                "Amazon Science",
              ],
            },
            {
              title: "Make Money with Us",
              links: [
                "Sell products at amazon",
                "Sell on Amazon Business",
                "Sell apps on Amazon",
                "Become an Affiliate",
                "Advertise Your Products",
                "Self-Publish with Us",
                "Host an Amazon Hub",
                "> See more Make Money with Us",
              ],
            },
            {
              title: "Amazon Payment Products",
              links: [
                "Amazon Business Card",
                "Shop with Points",
                "Reload Your Balance",
                "Amazon Currency Converter",
              ],
            },
            {
              title: "Let Us Help You",
              links: [
                "Amazon and covid-19",
                "Your Account",
                "Your Orders",
                "Shipping Rates & Policies",
                "Returns & Replacements",
                "Manage Your Content and Devices",
                "Amazon Assistant",
                "Help",
              ],
            },
          ].map((section, index) => (
            <div className="firstinfo" key={index}>
              <h3 className="gettoknow">{section.title}</h3>
              {section.links.map((link, i) => (
                <div className="careers" key={i}>
                  <a href="#">{link}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default App;
