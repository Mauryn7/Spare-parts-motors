import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.cnsylphy.com/demo/index-banner-1.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="86234982"
            title="Shock Absobers"
            image="https://i0.wp.com/studentlesson.com/wp-content/uploads/2020/11/shock-absorber-types.jpg?fit=1000%2C667&ssl=1"
            price={1000.12}
            rating={5}
          />
          <Product
            id="86234982"
            title="AC Compressor"
            image="https://m.media-amazon.com/images/I/71A4pJvWdcL._SX679_.jpg"
            price={670.12}
            rating={5}
          />
          <Product
            id="86234982"
            title="Engine"
            image="https://www.nicepng.com/png/detail/211-2113754_car-engine-png.png"
            price={1000.12}
            rating={5}
          />
          <Product
            id="109724022"
            title="Radiator"
            image="https://www.nicepng.com/png/detail/373-3733006_description-car-radiator.png"
            price={1200.91}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8908309583"
            title="Brake pads"
            image="https://www.kindpng.com/picc/m/463-4633050_brake-disc-safeline-brake-pads-hd-hd-png.png"
            price={500.2}
            rating={5}
          />
          <Product
            id="8908309583"
            title="Fuel Tank"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2h-_8herPvr1LB1c8-dnhF60LBZPYnoxItjSS6XdN&s"
            price={500.2}
            rating={5}
          />
          <Product
            id="02348244"
            title="Suspension"
            image="https://www.kindpng.com/picc/m/285-2855211_jri-shocks-polaris-slingshot-car-suspension-png-transparent.png"
            price={300.91}
            rating={4}
          />

          <Product
            id="402973242"
            title="Wind Shield"
            image="https://www.kindpng.com/picc/m/233-2335206_windshield-png-page-car-windscreens-png-transparent-png.png"
            price={1000.05}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8908309583"
            title="Bolts"
            image="https://www.kindpng.com/picc/m/463-4633050_brake-disc-safeline-brake-pads-hd-hd-png.png"
            price={10}
            rating={5}
          />
          <Product
            id="8908309583"
            title="engine oil"
            image="https://www.kindpng.com/picc/m/463-4633050_brake-disc-safeline-brake-pads-hd-hd-png.png"
            price={50.2}
            rating={5}
          />
          <Product
            id="02348244"
            title="Windshield wiper"
            image="https://www.kindpng.com/picc/m/285-2855211_jri-shocks-polaris-slingshot-car-suspension-png-transparent.png"
            price={30.11}
            rating={4}
          />

          <Product
            id="402973242"
            title="car audio wire"
            image="https://www.kindpng.com/picc/m/233-2335206_windshield-png-page-car-windscreens-png-transparent-png.png"
            price={134}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8908309583"
            title="screws"
            image="https://www.kindpng.com/picc/m/463-4633050_brake-disc-safeline-brake-pads-hd-hd-png.png"
            price={30}
            rating={5}
          />
          <Product
            id="8908309583"
            title="drive gear box"
            image="https://www.kindpng.com/picc/m/463-4633050_brake-disc-safeline-brake-pads-hd-hd-png.png"
            price={430}
            rating={5}
          />
          <Product
            id="02348244"
            title="power window"
            image="https://www.kindpng.com/picc/m/285-2855211_jri-shocks-polaris-slingshot-car-suspension-png-transparent.png"
            price={300.91}
            rating={4}
          />

          <Product
            id="402973242"
            title="sunroof module"
            image="https://www.kindpng.com/picc/m/233-2335206_windshield-png-page-car-windscreens-png-transparent-png.png"
            price={1123.4}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8908309583"
            title="steering wheel"
            image="https://www.kindpng.com/picc/m/463-4633050_brake-disc-safeline-brake-pads-hd-hd-png.png"
            price={300.5}
            rating={5}
          />
          <Product
            id="8908309583"
            title=""
            image="https://www.kindpng.com/picc/m/463-4633050_brake-disc-safeline-brake-pads-hd-hd-png.png"
            price={100}
            rating={5}
          />
          <Product
            id="02348244"
            title="car cover"
            image="https://www.kindpng.com/picc/m/285-2855211_jri-shocks-polaris-slingshot-car-suspension-png-transparent.png"
            price={200.5}
            rating={4}
          />

          <Product
            id="402973242"
            title="hand brakes"
            image="https://www.kindpng.com/picc/m/233-2335206_windshield-png-page-car-windscreens-png-transparent-png.png"
            price={101}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="9873043"
            title="Tyres"
            image=" https://www.nicepng.com/png/detail/6-63620_car-tires-png-clip-art-clip-art-tyres.png"
            price={600.50}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;