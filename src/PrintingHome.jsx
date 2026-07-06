import { useEffect, useState } from "react";
import {
  BadgePercent,
  BookOpen,
  Calculator,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  Facebook,
  Instagram,
  Lock,
  Mail,
  Menu,
  Phone,
  Pencil,
  Quote,
  Search,
  ShoppingCart,
  Star,
  Settings,
  Upload,
  UserCircle,
  Wallet,
  X,
} from "lucide-react";
import heroImage from "./assets/images/printing-hero.png";
import businessCardImage from "./assets/products/business-card.png";
import courierBagImage from "./assets/products/courier-bag.png";
import hangTagsImage from "./assets/products/hang-tags.png";
import inkTransferImage from "./assets/products/ink-transfer-stickers.png";
import keychainImage from "./assets/products/keychain.png";
import metalStickerImage from "./assets/products/metal-sticker.png";
import paperBoxesImage from "./assets/products/paper-boxes.png";
import printedTapeImage from "./assets/products/printed-tape.png";
import raisedUvImage from "./assets/products/raised-uv-stickers.png";
import roundStickersImage from "./assets/products/round-stickers.png";
import stickerSheetsImage from "./assets/products/sticker-sheets.png";
import thankYouCardImage from "./assets/products/thank-you-card.png";

const navItems = [
  "Sticker/Labels",
  "Packaging",
  "Cards/Stationery",
  "Marketing",
  "B2B Pricing",
  "Industry",
];

const tabs = ["Bestseller", "Packaging", "Industries"];

const products = [
  {
    title: "Custom Round Sticker",
    price: "Starts at Rs.162",
    image: roundStickersImage,
  },
  {
    title: "Custom Paper Boxes",
    price: "Starts at 10pcs",
    image: paperBoxesImage,
  },
  {
    title: "Raised Spot UV Vinyl Stickers",
    price: "25pcs starting @ Rs.227",
    image: raisedUvImage,
  },
  {
    title: "Ink Transfer Stickers",
    price: "10pcs starting @ Rs.291",
    image: inkTransferImage,
  },
  {
    title: "Metal Stickers - Luxury Custom Label",
    price: "10pcs starting @ Rs.929",
    image: metalStickerImage,
  },
  {
    title: "Black Custom Courier Poly Bags (with POD)",
    price: "Moq 50pcs",
    image: courierBagImage,
  },
  {
    title: "Multiple Stickers in Sheets",
    price: "25 sheets starting @ Rs.855",
    image: stickerSheetsImage,
  },
  {
    title: "Transparent Printed Tape",
    price: "Moq lowest 24pcs",
    image: printedTapeImage,
    featured: true,
  },
  {
    title: "Premium Business Cards",
    price: "100pcs starting @ Rs.399",
    image: businessCardImage,
  },
  {
    title: "Custom Hang Tags",
    price: "50pcs starting @ Rs.349",
    image: hangTagsImage,
  },
  {
    title: "Custom Acrylic Keychains",
    price: "25pcs starting @ Rs.499",
    image: keychainImage,
  },
  {
    title: "Thank You Insert Cards",
    price: "100pcs starting @ Rs.299",
    image: thankYouCardImage,
  },
];

const serviceHighlights = [
  {
    icon: BookOpen,
    title: "Best online document printing service",
    tone: "blue",
  },
  {
    icon: Settings,
    title: "Upload - print setting - payment",
    tone: "pink",
  },
  {
    icon: Clock,
    title: "Standard turnaround time for printing - 48 to 72 hrs",
    tone: "yellow",
  },
  {
    icon: Calculator,
    title: "Low pricing for every product",
    tone: "dark",
  },
];

const printSteps = [
  {
    icon: Pencil,
    label: "Register or Login",
  },
  {
    icon: Upload,
    label: "Upload & Setting of File",
  },
  {
    icon: ShoppingCart,
    label: "Add Shipping address",
  },
  {
    icon: Wallet,
    label: "Make Payment",
  },
];

const reviews = [
  {
    name: "Aarav Kapoor",
    city: "Kolkata",
    product: "Metal Stickers",
    rating: 5,
    timestamp: "06 Jul 2026, 10:42 AM",
    quote:
      "The metal stickers came out sharp, premium, and exactly like the artwork preview. The finish made our packaging look much more expensive.",
  },
  {
    name: "Meera Iyer",
    city: "Bengaluru",
    product: "Custom Paper Boxes",
    rating: 5,
    timestamp: "03 Jul 2026, 04:18 PM",
    quote:
      "Very clean printing and the box color matched our brand nicely. The approval process was smooth and the order arrived on time.",
  },
  {
    name: "Rohan Shah",
    city: "Mumbai",
    product: "Transparent Printed Tape",
    rating: 4,
    timestamp: "29 Jun 2026, 07:55 PM",
    quote:
      "Good quality tape for shipping orders. Logo visibility is clear, adhesive is strong, and the team helped adjust the artwork before printing.",
  },
  {
    name: "Nisha Verma",
    city: "Delhi",
    product: "Sticker Sheets",
    rating: 5,
    timestamp: "21 Jun 2026, 11:30 AM",
    quote:
      "The sticker sheets were bright, neatly cut, and easy to peel. Great option for small business packaging and thank-you inserts.",
  },
  {
    name: "Kabir Malhotra",
    city: "Pune",
    product: "Courier Poly Bags",
    rating: 5,
    timestamp: "12 Jun 2026, 01:12 PM",
    quote:
      "Courier bags feel sturdy and the black print looks classy. Reordering will be easy because the saved design is already perfect.",
  },
];

const brandTags = [
  { label: "UC", className: "brand-uc" },
  { label: "SHYAM STEEL", className: "brand-shyam" },
  { label: "HALDIRAM BHUJIAWALA", className: "brand-haldiram" },
  { label: "in", className: "brand-linkedin" },
  { label: "CRED", className: "brand-cred" },
  { label: "FYERS", className: "brand-fyers" },
  { label: "NAPCLOUD", className: "brand-napcloud" },
  { label: "R", className: "brand-reliance" },
  { label: "Uber", className: "brand-uber" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-main">
        <a className="brand" href="#home" aria-label="Kraftix Digital home">
          kraftix digital<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href="#products">
              {item}
              <ChevronDown size={15} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="header-actions" aria-label="Store actions">
          <a className="icon-button" href="#products" aria-label="Search products">
            <Search size={23} aria-hidden="true" />
          </a>
          <a className="icon-button cart-button" href="#products" aria-label="Shopping cart">
            <ShoppingCart size={23} aria-hidden="true" />
            <span>0</span>
          </a>
          <a className="login-link" href="#products">
            <UserCircle size={25} aria-hidden="true" />
            Login/Signup
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <div className="header-subnav">
        <a href="#products">
          Ready To Buy
          <ChevronDown size={15} aria-hidden="true" />
        </a>
      </div>

      <div className={`mobile-panel ${menuOpen ? "is-open" : ""}`}>
        {[...navItems, "Ready To Buy"].map((item) => (
          <a key={item} href="#products" onClick={closeMenu}>
            {item}
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-label="Kraftix Digital custom printing">
      <div className="hero-copy reveal">
        <h1>Custom printing for brands & you.</h1>
        <p>Low MOQ | Free Whatsapp Approval | Trusted by 35k+ customers</p>
        <div className="hero-actions">
          <a className="primary-button" href="#products">
            Shop Stickers
          </a>
          <a className="secondary-button" href="#products">
            Shop Packaging
          </a>
        </div>
      </div>

      <div className="hero-media reveal">
        <img src={heroImage} alt="Custom printed packaging, stickers, labels, bags, and cups" />
      </div>
    </section>
  );
}

function CategoryTabs() {
  return (
    <section className="category-tabs" aria-label="Product categories">
      {tabs.map((tab, index) => (
        <a className={index === 0 ? "is-active" : ""} href="#products" key={tab}>
          <span>{index + 1}</span>
          {tab}
        </a>
      ))}
    </section>
  );
}

function Products() {
  return (
    <section className="section products" id="products">
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card reveal" key={product.title}>
            <img className="product-image" src={product.image} alt={product.title} />
            <div className="product-info">
              <h3 className={product.featured ? "is-featured" : ""}>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PrintProcessSection() {
  return (
    <section className="print-process" aria-label="Printing process">
      <div className="service-highlights">
        {serviceHighlights.map(({ icon: Icon, title, tone }) => (
          <article className="service-highlight reveal" key={title}>
            <span className={`highlight-icon is-${tone}`}>
              <Icon size={32} aria-hidden="true" />
            </span>
            <h3>{title}</h3>
          </article>
        ))}
      </div>

      <div className="easy-steps">
        <h2>Easy steps to get prints</h2>
        <div className="step-track">
          {printSteps.map(({ icon: Icon, label }) => (
            <article className="print-step reveal" key={label}>
              <span className="step-icon">
                <Icon size={27} aria-hidden="true" />
              </span>
              <p>{label}</p>
            </article>
          ))}
        </div>
        <div className="secure-note">
          <span>
            <Lock size={25} aria-hidden="true" />
          </span>
          <p>Your Files are Secure, After Printing Files will be Deleted</p>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const activeReview = reviews[activeReviewIndex];
  const averageRating = (
    reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
  ).toFixed(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReviewIndex((index) => (index + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showReview = (index) => {
    setActiveReviewIndex((index + reviews.length) % reviews.length);
  };

  return (
    <section className="section reviews" id="reviews">
      <div className="review-headline reveal">
        <div>
          <span className="section-kicker">Customer reviews</span>
          <h2>Real orders, real print quality.</h2>
          <p>Fresh feedback from customers who ordered stickers, packaging, tape, and labels.</p>
        </div>
        <div className="review-score" aria-label={`${averageRating} average rating`}>
          <strong>{averageRating}</strong>
          <div className="stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                className={index < Math.round(Number(averageRating)) ? "is-filled" : ""}
                fill={index < Math.round(Number(averageRating)) ? "currentColor" : "none"}
                key={index}
                size={16}
              />
            ))}
          </div>
          <span>{reviews.length} verified reviews</span>
        </div>
      </div>

      <div className="review-showcase">
        <button
          className="review-nav"
          type="button"
          aria-label="Previous customer review"
          onClick={() => showReview(activeReviewIndex - 1)}
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>

        <article className="review-card reveal" key={activeReview.name} aria-live="polite">
          <div className="review-card-top">
            <span className="review-avatar" aria-hidden="true">
              {activeReview.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </span>
            <div className="review-person">
              <strong>{activeReview.name}</strong>
              <span>
                {activeReview.city} / {activeReview.product}
              </span>
            </div>
            <time className="review-timestamp">{activeReview.timestamp}</time>
          </div>

          <Quote className="review-quote-icon" size={34} aria-hidden="true" />
          <p>{activeReview.quote}</p>

          <div className="review-meta">
            <div className="stars" aria-label={`${activeReview.rating} out of 5 star rating`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  className={index < activeReview.rating ? "is-filled" : ""}
                  fill={index < activeReview.rating ? "currentColor" : "none"}
                  key={index}
                  size={19}
                />
              ))}
            </div>
            <span>Verified order</span>
          </div>
        </article>

        <button
          className="review-nav"
          type="button"
          aria-label="Next customer review"
          onClick={() => showReview(activeReviewIndex + 1)}
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="review-list" aria-label="All customer reviews">
        {reviews.map((review, index) => (
          <button
            className={`review-pill ${index === activeReviewIndex ? "is-active" : ""}`}
            type="button"
            key={review.name}
            onClick={() => showReview(index)}
          >
            <span>{review.name}</span>
            <small>
              {review.rating}.0 rating / {review.timestamp}
            </small>
          </button>
        ))}
      </div>
    </section>
  );
}

function DiscountButton() {
  return (
    <a className="discount-button" href="#products" aria-label="Get discount">
      <BadgePercent size={19} aria-hidden="true" />
      Get Discount
    </a>
  );
}

function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="Brands served">
      <div className="brand-strip-inner">
        {brandTags.map((brand) => (
          <span className={`client-logo ${brand.className}`} key={brand.label}>
            {brand.label}
          </span>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const productLinks = ["Stickers", "Labels", "Packaging", "Stationary"];
  const supportLinks = ["About Us", "Raise an Issue", "Order Feedback", "Contact Us", "Blog"];

  return (
    <footer className="footer">
      <div className="footer-column footer-products">
        <h3>Product</h3>
        {productLinks.map((link) => (
          <a href="#products" key={link}>
            {link}
          </a>
        ))}
      </div>

      <div className="footer-column footer-support">
        <h3>Support</h3>
        {supportLinks.map((link) => (
          <a href="#products" key={link}>
            {link}
          </a>
        ))}
      </div>

      <div className="footer-brand-panel">
        <a className="brand" href="#home" aria-label="Kraftix Digital home">
          kraftix digital<span>.</span>
        </a>

        <div className="footer-contact-list">
          <a href="mailto:business@kraftix.in">
            <Mail size={22} aria-hidden="true" />
            business@kraftix.in
          </a>
          <a href="tel:+919836766662">
            <Phone size={22} aria-hidden="true" />
            +919836766662
          </a>
        </div>

        <div className="social-links" aria-label="Social links">
          <a href="#home" aria-label="Instagram">
            <Instagram size={22} aria-hidden="true" />
          </a>
          <a href="#home" aria-label="Facebook">
            <Facebook size={22} aria-hidden="true" />
          </a>
        </div>

        <div className="payment-row" aria-label="Accepted payments">
          <span className="payment-badge visa">VISA</span>
          <span className="payment-badge upi">UPI</span>
          <span className="payment-badge razorpay">
            <CreditCard size={13} aria-hidden="true" />
            Razorpay
          </span>
        </div>

        <a className="copyright-link" href="#home">
          Reserved Copyrights
        </a>
      </div>
    </footer>
  );
}

export default function PrintingHome() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryTabs />
        <Products />
        <PrintProcessSection />
        <Reviews />
      </main>
      <BrandStrip />
      <Footer />
      <DiscountButton />
    </>
  );
}
