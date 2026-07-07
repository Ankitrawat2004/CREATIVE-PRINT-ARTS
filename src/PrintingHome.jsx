import { useEffect, useState } from "react";
import {
  BadgePercent,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  Download,
  Facebook,
  FileText,
  Instagram,
  Info,
  Lock,
  Mail,
  Menu,
  PackageCheck,
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
import logoImage from "./assets/images/creative-print-art-logo.png";
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
import bindingCaseWrapImage from "./assets/pricing/binding-case-wrap.png";
import bindingCoilBoundImage from "./assets/pricing/binding-coil-bound.png";
import bindingLinenWrapImage from "./assets/pricing/binding-linen-wrap.png";
import bindingPerfectBoundImage from "./assets/pricing/binding-perfect-bound.png";
import bindingSaddleStitchImage from "./assets/pricing/binding-saddle-stitch.png";
import coverGlossyImage from "./assets/pricing/cover-glossy.png";
import coverMatteImage from "./assets/pricing/cover-matte.png";
import interiorPremiumBwImage from "./assets/pricing/interior-premium-bw.png";
import interiorPremiumColorImage from "./assets/pricing/interior-premium-color.png";
import interiorStandardBwImage from "./assets/pricing/interior-standard-bw.png";
import interiorStandardColorImage from "./assets/pricing/interior-standard-color.png";
import paper60Image from "./assets/pricing/paper-60-uncoated.png";
import paper70Image from "./assets/pricing/paper-70-uncoated.png";
import paper80Image from "./assets/pricing/paper-80-coated.png";
import typeCalendarImage from "./assets/pricing/type-calendar.png";
import typeComicBookImage from "./assets/pricing/type-comic-book.png";
import typeEbookImage from "./assets/pricing/type-ebook.png";
import typeMagazineImage from "./assets/pricing/type-magazine.png";
import typePhotoBookImage from "./assets/pricing/type-photo-book.png";
import typePrintBookImage from "./assets/pricing/type-print-book.png";
import typeYearbookImage from "./assets/pricing/type-yearbook.png";

const navItems = [
  { label: "Sticker/Labels", href: "/#products" },
  { label: "Packaging", href: "/#products" },
  { label: "Cards/Stationery", href: "/#products" },
  { label: "Marketing", href: "/#products" },
  { label: "Pricing", href: "/?page=pricing#pricing" },
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

const pricingProductTypes = [
  {
    name: "Print Book",
    image: typePrintBookImage,
    basePrice: 42,
    pageRate: 1.15,
  },
  {
    name: "Photo Book",
    image: typePhotoBookImage,
    basePrice: 86,
    pageRate: 2.6,
  },
  {
    name: "Comic Book",
    image: typeComicBookImage,
    basePrice: 64,
    pageRate: 1.85,
  },
  {
    name: "Magazine",
    image: typeMagazineImage,
    basePrice: 38,
    pageRate: 1.3,
  },
  {
    name: "Yearbook",
    image: typeYearbookImage,
    basePrice: 112,
    pageRate: 2.9,
  },
  {
    name: "Calendar",
    image: typeCalendarImage,
    basePrice: 58,
    pageRate: 2.1,
  },
  {
    name: "Ebook",
    image: typeEbookImage,
    basePrice: 24,
    pageRate: 0.45,
  },
];

const bookSizes = [
  { label: "5 x 8 in", min: 32, max: 800, multiplier: 1 },
  { label: "6 x 9 in", min: 32, max: 740, multiplier: 1.12 },
  { label: "8.5 x 11 in", min: 24, max: 500, multiplier: 1.42 },
  { label: "A4 Portrait", min: 24, max: 460, multiplier: 1.52 },
];

const pricingOptions = {
  binding: [
    {
      group: "Paperback Options",
      items: [
        { title: "Perfect Bound", image: bindingPerfectBoundImage, price: 18 },
        { title: "Coil Bound", image: bindingCoilBoundImage, price: 26 },
        { title: "Saddle Stitch", image: bindingSaddleStitchImage, price: 12 },
      ],
    },
    {
      group: "Hardcover Options",
      items: [
        { title: "Case Wrap", image: bindingCaseWrapImage, price: 54 },
        { title: "Linen Wrap", image: bindingLinenWrapImage, price: 68 },
      ],
    },
  ],
  interior: [
    { title: "Black & White Standard", image: interiorStandardBwImage, price: 0 },
    { title: "Black & White Premium", image: interiorPremiumBwImage, price: 12 },
    { title: "Standard Color", image: interiorStandardColorImage, price: 28 },
    { title: "Premium Color", image: interiorPremiumColorImage, price: 44 },
  ],
  paper: [
    { title: "60# Uncoated", image: paper60Image, price: 0 },
    { title: "70# Uncoated", image: paper70Image, price: 14 },
    { title: "80# Coated", image: paper80Image, price: 22 },
  ],
  cover: [
    { title: "Glossy", image: coverGlossyImage, price: 0 },
    { title: "Matte", image: coverMatteImage, price: 9 },
  ],
  designing: [
    { title: "Not Required", key: "not-required", price: 0 },
    { title: "Yes You Can", key: "formatting-yes", price: 1500 },
  ],
  isbn: [
    { title: "Not Apply", key: "not-apply", price: 0 },
    { title: "Yes, Assign Unique ISBN", key: "assign-isbn", price: 499 },
  ],
};

const summaryRows = [
  { key: "size", label: "Book Size" },
  { key: "pages", label: "Page Count" },
  { key: "binding", label: "Binding Type" },
  { key: "interior", label: "Interior Color" },
  { key: "paper", label: "Paper Type" },
  { key: "cover", label: "Cover Finish" },
  { key: "designing", label: "Designing & Formatting" },
  { key: "isbn", label: "ISBN Allocation" },
];

function isPricingPage() {
  if (typeof window === "undefined") {
    return false;
  }

  const params = new URLSearchParams(window.location.search);
  return (
    params.get("page") === "pricing" ||
    window.location.pathname === "/pricing" ||
    window.location.hash === "#pricing"
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-main">
        <a className="brand" href="/" aria-label="Creative Print Arts home">
          <img className="brand-logo" src={logoImage} alt="Creative Print Arts" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
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

      <div className={`mobile-panel ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={closeMenu}>
            {item.label}
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
    </header>
  );
}

function PricingOptionCard({ option, selected, onSelect }) {
  return (
    <button
      className={`pricing-option-card ${selected ? "is-selected" : ""}`}
      type="button"
      onClick={() => onSelect(option)}
    >
      <img className="pricing-option-art" src={option.image} alt={option.title} />
      <span>{option.title}</span>
    </button>
  );
}

function FeatureChoiceCard({ option, selected, onSelect }) {
  return (
    <button
      className={`pricing-option-card feature-choice-card ${selected ? "is-selected" : ""}`}
      type="button"
      onClick={() => onSelect(option)}
    >
      <span className={`feature-choice-art is-${option.key}`} aria-hidden="true">
        <FileText size={24} />
      </span>
      <span>{option.title}</span>
    </button>
  );
}

function PricingAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <section className={`pricing-accordion ${open ? "is-open" : ""}`}>
      <button type="button" onClick={() => setOpen((value) => !value)}>
        <span>{title}</span>
        <ChevronDown size={19} aria-hidden="true" />
      </button>
      {open ? <div className="pricing-accordion-body">{children}</div> : null}
    </section>
  );
}

function StepBadge({ number }) {
  return (
    <span className="step-number" aria-hidden="true">
      {number}
    </span>
  );
}

function PricingPage() {
  const [activeProduct, setActiveProduct] = useState(pricingProductTypes[0]);
  const [bookSize, setBookSize] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [binding, setBinding] = useState(null);
  const [interior, setInterior] = useState(null);
  const [paper, setPaper] = useState(null);
  const [cover, setCover] = useState(null);
  const [designing, setDesigning] = useState(pricingOptions.designing[0]);
  const [isbn, setIsbn] = useState(pricingOptions.isbn[0]);
  const [copies, setCopies] = useState("25");
  const [retailDistribution, setRetailDistribution] = useState(true);

  const selectedSize = bookSizes.find((size) => size.label === bookSize);
  const pages = Number(pageCount);
  const hasValidPageCount =
    selectedSize && pages >= selectedSize.min && pages <= selectedSize.max;
  const isReady = Boolean(
    activeProduct && selectedSize && hasValidPageCount && binding && interior && paper && cover,
  );
  const calculatedPrice = isReady
    ? Math.round(
        (activeProduct.basePrice +
          pages * activeProduct.pageRate * selectedSize.multiplier +
          binding.price +
          interior.price +
          paper.price +
          cover.price +
          designing.price +
          isbn.price +
          (retailDistribution ? 10 : 0)) *
          1.18,
      )
    : 0;
  const copyCount = Math.max(Number(copies) || 25, 25);
  const discountRate = copyCount >= 300 ? 0.14 : copyCount >= 250 ? 0.12 : copyCount >= 200 ? 0.1 : 0;
  const estimateTotal = Math.round(calculatedPrice * copyCount * (1 - discountRate));
  const optionSummary = {
    size: bookSize,
    pages: hasValidPageCount ? `${pages} pages` : "",
    binding: binding?.title,
    interior: interior?.title,
    paper: paper?.title,
    cover: cover?.title,
    designing: designing?.title,
    isbn: isbn?.title,
  };

  const resetForProduct = (product) => {
    setActiveProduct(product);
    setBookSize("");
    setPageCount("");
    setBinding(null);
    setInterior(null);
    setPaper(null);
    setCover(null);
    setDesigning(pricingOptions.designing[0]);
    setIsbn(pricingOptions.isbn[0]);
    setCopies("25");
  };

  return (
    <>
      <Header />
      <main className="pricing-page" id="pricing">
        <section className="pricing-hero" aria-labelledby="pricing-title">
          <div className="pricing-hero-copy reveal">
            <h1 id="pricing-title">Pricing Calculator</h1>
            <p>
              Calculate printing costs, select product options, estimate retail-ready pricing,
              and prepare print templates for your custom order.
            </p>
          </div>

          <aside className="pricing-help-card reveal" aria-label="Pricing help">
            <span className="mini-book-illo" aria-hidden="true">
              <i />
              <b />
            </span>
            <div>
              <p>Need details about product options?</p>
              <a href="/#products">More about our products</a>
              <p>Get volume discounts on bulk orders</p>
              <a href="mailto:arunrawat2004@gmail.com">Contact us</a>
            </div>
          </aside>
        </section>

        <section className="product-type-row" aria-label="Choose a product type">
          <h2>Choose a product type</h2>
          <div className="product-type-list">
            {pricingProductTypes.map((product) => (
              <button
                className={`product-type-card ${
                  product.name === activeProduct.name ? "is-selected" : ""
                }`}
                type="button"
                key={product.name}
                onClick={() => resetForProduct(product)}
              >
                <img className="product-type-art" src={product.image} alt="" />
                <span>{product.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="pricing-builder" aria-label={`${activeProduct.name} options`}>
          <div className="pricing-builder-main">
            <div className="pricing-title-row">
              <h2>{activeProduct.name}</h2>
              <div className="retail-note">
                <strong>Sell on Retail Sites</strong>
                <p>
                  Select product options marked with this icon to enable distribution to retail
                  partners.
                </p>
                <span aria-hidden="true" />
              </div>
            </div>

            <section className="pricing-section">
              <h3>Book Size & Page Count</h3>
              <div className="pricing-input-grid">
                <label>
                  <span>Select Book Size</span>
                  <select value={bookSize} onChange={(event) => setBookSize(event.target.value)}>
                    <option value="">Select Book Size</option>
                    {bookSizes.map((size) => (
                      <option value={size.label} key={size.label}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  <span>Page Count</span>
                  <input
                    type="number"
                    min={selectedSize?.min ?? 1}
                    max={selectedSize?.max ?? 999}
                    value={pageCount}
                    placeholder="Page Count"
                    onChange={(event) => setPageCount(event.target.value)}
                  />
                </label>
              </div>
              <p className={`min-max ${pageCount && !hasValidPageCount ? "is-error" : ""}`}>
                MIN-MAX: {selectedSize ? `${selectedSize.min} - ${selectedSize.max}` : "-"}
              </p>
            </section>

            <section className="pricing-section feature-step-section">
              <div className="section-link-row">
                <div className="numbered-section-title">
                  <StepBadge number={1} />
                  <h3>Binding Type</h3>
                </div>
               <a href="/#products">More about binding types</a>
              </div>
              {pricingOptions.binding.map((group, index) => (
                <div className="option-group" key={group.group}>
                  <div className="numbered-option-heading">
                    <h4>{group.group}</h4>
                  </div>
                  <div className="pricing-card-grid is-three">
                    {group.items.map((option) => (
                      <PricingOptionCard
                        option={option}
                        selected={binding?.title === option.title}
                        onSelect={setBinding}
                        key={option.title}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="pricing-section feature-step-section">
              <div className="section-link-row">
                <div className="numbered-section-title">
                  <StepBadge number={2} />
                  <h3>Interior Color</h3>
                </div>
                <a href="/#products">More about interior colors</a>
              </div>
              <div className="pricing-card-grid is-interior-pair">
                {pricingOptions.interior.map((option) => (
                  <PricingOptionCard
                    option={option}
                    selected={interior?.title === option.title}
                    onSelect={setInterior}
                    key={option.title}
                  />
                ))}
              </div>
            </section>

            <section className="pricing-section feature-step-section">
              <div className="section-link-row">
                <div className="numbered-section-title">
                  <StepBadge number={3} />
                  <h3>Paper Type</h3>
                </div>
                <a href="/#products">More about paper types</a>
              </div>
              <div className="pricing-card-grid is-three">
                {pricingOptions.paper.map((option) => (
                  <PricingOptionCard
                    option={option}
                    selected={paper?.title === option.title}
                    onSelect={setPaper}
                    key={option.title}
                  />
                ))}
              </div>
            </section>

            <section className="pricing-section feature-step-section">
              <div className="section-link-row">
                <div className="numbered-section-title">
                  <StepBadge number={4} />
                  <h3>Cover Finish</h3>
                </div>
                <a href="/#products">More about cover finishes</a>
              </div>
              <div className="pricing-card-grid is-three">
                {pricingOptions.cover.map((option) => (
                  <PricingOptionCard
                    option={option}
                    selected={cover?.title === option.title}
                    onSelect={setCover}
                    key={option.title}
                  />
                ))}
              </div>
            </section>

            <section className="pricing-section feature-step-section">
              <div className="feature-step-heading">
                <StepBadge number={5} />
                <div>
                  <h3>Designing And Formatting</h3>
                  <p>Rs.1500/- Extra Per Cover Page And Rs.50 Extra Per Inner Page</p>
                </div>
              </div>
              <div className="pricing-card-grid feature-pair-grid">
                {pricingOptions.designing.map((option) => (
                  <FeatureChoiceCard
                    option={option}
                    selected={designing?.title === option.title}
                    onSelect={setDesigning}
                    key={option.title}
                  />
                ))}
              </div>
            </section>

            <section className="pricing-section feature-step-section">
              <div className="feature-step-heading">
                <StepBadge number={6} />
                <div>
                  <h3>ISBN Allocation</h3>
                  <p>It May Take 5 to 7 More Working Days To Deliver.</p>
                </div>
              </div>
              <p className="feature-note">
                An International Standard Book Number provides publishing information that gives
                retailers a way to report your book sales.
              </p>
              <div className="pricing-card-grid  feature-pair-grid">
                {pricingOptions.isbn.map((option) => (
                  <FeatureChoiceCard
                    option={option}
                    selected={isbn?.title === option.title}
                    onSelect={setIsbn}
                    key={option.title}
                  />
                ))}
              </div>
            </section>

            <section className="pricing-section feature-step-section">
              <div className="feature-step-heading">
                <StepBadge number={7} />
                <div>
                  <h3>Pricing Estimate</h3>
                  <p>
                    See available shipping options and pricing based on the product options selected
                    above.
                  </p>
                </div>
              </div>
              <div className="pricing-estimate-panel">
                <div className="estimate-form">
                  <label>
                    <span>Number of Copies (Minimum 25)</span>
                    <input
                      type="number"
                      min="25"
                      value={copies}
                      onChange={(event) => setCopies(event.target.value)}
                    />
                  </label>
                  <button type="button">Share Estimate</button>
                  <p>
                    Press the share estimate button and get an instant estimate delivered to your
                    email or WhatsApp.
                  </p>
                </div>
                <div className="discount-table" aria-label="Bulk discount levels">
                  <h4>Bulk Discount Levels</h4>
                  <div>
                    <span>Book Quantity</span>
                    <span>Discounted Price</span>
                  </div>
                  <div>
                    <span>200-249 copies</span>
                    <strong>10% off</strong>
                  </div>
                  <div>
                    <span>250-299 copies</span>
                    <strong>12% off</strong>
                  </div>
                  <div>
                    <span>300+ copies</span>
                    <strong>14% off</strong>
                  </div>
                  <small>Discounts are applied automatically at checkout.</small>
                </div>
              </div>
              <div className="estimate-total">
                Estimated total: <strong>Rs.{estimateTotal.toLocaleString("en-IN")}.00</strong>
              </div>
            </section>

            <PricingAccordion title="Revenue Estimates">
              <p>
                Estimated retail profit appears after all product options are selected. Current
                sample margin is Rs.{Math.max(calculatedPrice * 2 - calculatedPrice, 0)} per copy.
              </p>
            </PricingAccordion>

            <PricingAccordion title="Quantity & Shipping Estimates">
              <p>
                Add quantity and delivery preferences in the next step. Bulk discounts can be
                prepared for packaging, booklets, catalogs, and marketing prints.
              </p>
            </PricingAccordion>
          </div>

          <aside className="pricing-summary" aria-label="Pricing summary">
            <div className="summary-book-preview">
              <div className="book-mockup" aria-hidden="true">
                <span />
              </div>
              <strong>{isReady ? activeProduct.name : "Select all product options"}</strong>
            </div>

            <label className="retail-toggle">
              <input
                type="checkbox"
                checked={retailDistribution}
                onChange={(event) => setRetailDistribution(event.target.checked)}
              />
              <span aria-hidden="true" />
              <div>
                <strong>Retail Distribution</strong>
                <p>Select all options to check retail eligibility</p>
              </div>
            </label>

            <dl className="summary-option-list">
              {summaryRows.map((row) => (
                <div className={optionSummary[row.key] ? "is-complete" : ""} key={row.key}>
                  <dt>{row.label}</dt>
                  <dd>{optionSummary[row.key] || "Pending"}</dd>
                </div>
              ))}
            </dl>

            <button className="template-button" type="button">
              <Download size={17} aria-hidden="true" />
              Book Templates
            </button>
            <button className="template-button" type="button">
              <FileText size={17} aria-hidden="true" />
              Custom Cover Template
            </button>

            <div className="summary-price">
              <strong>{calculatedPrice.toLocaleString("en-IN")}.00</strong>
              <span>Rs. per {activeProduct.name}</span>
            </div>

            <button className="create-book-button" type="button" disabled={!isReady}>
              {isReady ? (
                <CheckCircle2 size={18} aria-hidden="true" />
              ) : (
                <PackageCheck size={18} aria-hidden="true" />
              )}
              Create Your {activeProduct.name}
            </button>

            <p className="summary-helper">
              <Info size={15} aria-hidden="true" />
              Price is a frontend estimate and will be confirmed before printing.
            </p>
          </aside>
        </section>
      </main>
      <Footer />
      <DiscountButton />
    </>
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
          <a href="/#products" key={link}>
            {link}
          </a>
        ))}
      </div>

      <div className="footer-column footer-support">
        <h3>Support</h3>
        {supportLinks.map((link) => (
          <a href="/#products" key={link}>
            {link}
          </a>
        ))}
      </div>

      <div className="footer-brand-panel">
        <a className="brand" href="/" aria-label="Creative Print Arts home">
          <img className="brand-logo" src={logoImage} alt="Creative Print Arts" />
        </a>

        <div className="footer-contact-list">
          <a href="mailto:business@kraftix.in">
            <Mail size={22} aria-hidden="true" />
            arunrawat2004@gmail.com
          </a>
          <a href="tel:+919836766662">
            <Phone size={22} aria-hidden="true" />
            +919871081398
          </a>
        </div>

        <div className="social-links" aria-label="Social links">
          <a href="/" aria-label="Instagram">
            <Instagram size={22} aria-hidden="true" />
          </a>
          <a href="/" aria-label="Facebook">
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

        <a className="copyright-link" href="/">
          Reserved Copyrights
        </a>
      </div>
    </footer>
  );
}

export default function PrintingHome() {
  if (isPricingPage()) {
    return <PricingPage />;
  }

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
