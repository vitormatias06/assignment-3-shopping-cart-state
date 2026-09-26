import "./App.css";
import keyboardImage from "./assets/keyboard.jpg";
import mouseImage from "./assets/mouse.jpg";
import hubImage from "./assets/usb-hub.jpg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header storeName="MatiasTech" />

      <Hero
        title="Welcome to MatiasTech"
        subtitle="Find the latest technology and accessories for your setup."
        callToActionText="Shop Now"
      />

      <main className="products">
        <h2>Featured Products</h2>

        <div className="product-list">
          <ProductCard
            name="Mechanical Keyboard"
            price="79.99"
            image={keyboardImage}
            description="A comfortable mechanical keyboard for work and gaming."
          />

          <ProductCard
            name="Gaming Mouse"
            price="49.99"
            image={mouseImage}
            description="A fast and precise mouse designed for gaming."
          />

          <ProductCard
            name="USB-C Hub"
            price="39.99"
            image={hubImage}
            description="Connect multiple devices with this compact USB-C hub."
          />
        </div>
      </main>

      <Footer
        storeName="MatiasTech"
        email="contact@matiastech.com"
        phone="(323) 202-3122"
      />
    </div>
  );
}

export default App;
