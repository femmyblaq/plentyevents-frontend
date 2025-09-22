import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Masonry from "react-masonry-css";
import styles from "../Pages/NewHome.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Body from "../components/Body";

const LandingPage = () => {
  const images = [
    // Waiters
    // "https://www.freepik.com/free-photo/blue-lagoon-sangria-lemonade-glasses-inside-ice-tray_5588418.htm#fromView=search&page=1&position=38&uuid=c11f3837-f208-4d13-887d-81bce5c5697d&query=cocktail+party",
    // "https://www.freepik.com/free-photo/people-drinking-cocktails_94964850.htm#fromView=search&page=1&position=3&uuid=c11f3837-f208-4d13-887d-81bce5c5697d&query=cocktail+party",
    // "https://www.freepik.com/free-photo/blue-lagoon-sangria-lemonade-glasses-inside-ice-tray_5588418.htm#fromView=search&page=1&position=38&uuid=c11f3837-f208-4d13-887d-81bce5c5697d&query=cocktail+party",
    // Bartenders
    // "https://images.unsplash.com/photo-1514361892635-cebbd6b8a2b7?auto=format&fit=crop&w=600&q=80",
    // "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    // Waitress
    // "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    // "https://images.unsplash.com/photo-1465101178521-c1a6f3b5f0a6?auto=format&fit=crop&w=600&q=80",
    // Caterer
    "https://www.freepik.com/free-photo/blue-lagoon-sangria-lemonade-glasses-inside-ice-tray_5588418.htm#fromView=search&page=1&position=38&uuid=c11f3837-f208-4d13-887d-81bce5c5697d&query=cocktail+party",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://img.freepik.com/premium-photo/generative-ai-shows-man-receiving-food-from-indoor-buffet-while-holding-glass-champagne_28914-19162.jpg?w=1480",
    // Cocktails
    "https://img.freepik.com/free-photo/bartender-preparing-drink-bar_23-2150444010.jpg?ga=GA1.1.1400057597.1754989377&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/catering-buffet-food_74190-4133.jpg?t=st=1758554884~exp=1758558484~hmac=eb12021b19044758b24ddbd614fe88d3ea1137da707637c5d1e154eaef2e3e1f&w=1480",
    "https://img.freepik.com/free-photo/grilled-meat-cutlet-with-eggplant-mushroom-tomatoes-rosemary-board_140725-10936.jpg?ga=GA1.1.1400057597.1754989377&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/young-black-man-as-server-holding-food-tray_236854-54785.jpg?w=1480",

    "https://img.freepik.com/premium-photo/african-american-man-serving-cocktails-bar-holding-round-tray-with-green-blue-red-drinks_13339-379114.jpg?w=1480",
    "https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208270.jpg?t=st=1758573284~exp=1758576884~hmac=1d9e45e51253e200ec79b0a26894705e220af26b3d2afd578bb1d0cfc9814727&w=1480",
    "https://img.freepik.com/free-photo/fried-chicken-with-grilled-potatoes-eggplants-tomatoes-peppers_140725-7841.jpg?ga=GA1.1.1400057597.1754989377&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/friends-wearing-party-hats-toasting-with-champagne_23-2148757435.jpg?ga=GA1.1.1400057597.1754989377&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/young-waiter-african-ethnicity-brown-uniform-crossing-arms-chest-while-standing-aisle-tables-served-guests-cafe_274679-25782.jpg?ga=GA1.1.1400057597.1754989377&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?ga=GA1.1.1400057597.1754989377&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/set-designer-work-indoors_23-2149836992.jpg?ga=GA1.1.1400057597.1754989377&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/catering-wedding_97070-818.jpg?w=1480",
    "https://img.freepik.com/premium-photo/close-up-beer-table_1048944-9404495.jpg?w=1480",
    "https://img.freepik.com/premium-photo/close-up-food-table_1048944-26908988.jpg?w=1480",
    "https://img.freepik.com/free-photo/blue-lagoon-sangria-lemonade-glasses-inside-ice-tray_114579-3528.jpg?t=st=1758554429~exp=1758558029~hmac=1864a61d268c0e10e56ad333fb281a7adfe6bfb35ae31fbc0a6f83939c3909ab&w=1480",
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <> 
    <Navbar /> 
    <div className={`container-fluid bg-dark min-vh-100 position-relative ${styles.landing}`}>
      {/* Overlay with CTA */}
      <div className={styles.overlay}>
        <h1 className={styles.ctaTitle}>Join PlentyEvents Today</h1>
        <p className={styles.ctaDesc}>
          Discover, hire, and connect with the best waiters, bartenders, waitresses, caterers, and cocktail experts. Whether you're hosting or serving, PlentyEvents is your gateway to seamless event experiences.
        </p>
        <div className={styles.ctaButtons}>
          {/* <a href="/register" className={styles.ctaBtn}>Join as Vendor</a>
          <a href="/register" className={styles.ctaBtnOutline}>Join as Waiter</a> */}

          <button className={`${styles.ctaBtn} btn btn-success me-3`}>Join as Vendor</button>
          <button className={`${styles.ctaBtnOutline} btn btn-outline-success`}>Join as Waiter</button>
        </div>
      </div>
      {/* Masonry Images */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={`${styles.myMasonryGrid} p-0`}
        columnClassName={styles.myMasonryGridColumn}
      >
        {images.map((img, index) => (
          <div key={index} className="mb-4">
            <img
              src={img}
              alt={`Landing ${index}`}
              className="w-100 rounded-4 shadow-lg"
            />
          </div>
        ))}
      </Masonry>
    </div>
    <Body/>
        <Footer />
    </>
  );
};

export default LandingPage;
