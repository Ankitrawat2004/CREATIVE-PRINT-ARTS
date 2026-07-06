import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Layers3,
  Mail,
  Megaphone,
  Menu,
  MonitorSmartphone,
  Palette,
  PenTool,
  Phone,
  Printer,
  Search,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import heroImage from "./assets/images/agency-hero.png";

const navItems = ["Home", "Services", "Work", "Process", "Contact"];

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    text: "Campaign strategy, paid ads, social content, and growth systems built around measurable attention.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    text: "Logos, visual systems, messaging, and brand kits that make every touchpoint feel consistent.",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Design",
    text: "Responsive websites, landing pages, and UI experiences that feel premium and convert cleanly.",
  },
  {
    icon: Printer,
    title: "Print Creative",
    text: "Brochures, packaging, flyers, signage, and print-ready campaign material for offline impact.",
  },
  {
    icon: Search,
    title: "SEO & Content",
    text: "Search-friendly page structure, content planning, and optimization for long-term visibility.",
  },
  {
    icon: PenTool,
    title: "Creative Studio",
    text: "Campaign concepts, motion-ready layouts, and content systems for modern brand storytelling.",
  },
];

const projects = [
  {
    tag: "Brand Launch",
    title: "Fresh identity for a local retail brand",
    color: "coral",
  },
  {
    tag: "Lead Campaign",
    title: "Conversion-focused landing page system",
    color: "cyan",
  },
  {
    tag: "Print + Digital",
    title: "Integrated brochure and social campaign",
    color: "lime",
  },
];

const process = [
  "Research the audience, offer, and competition",
  "Shape the message, visuals, and conversion path",
  "Design polished assets for web, social, and print",
  "Refine the experience for mobile and launch readiness",
];

const testimonials = [
  {
    quote:
      "The team understood our brand quickly and turned it into designs that looked sharp across every platform.",
    name: "Riya Sharma",
    role: "Retail Founder",
  },
  {
    quote:
      "Our campaigns finally felt connected. The landing page, creatives, and print material all worked together.",
    name: "Arjun Mehta",
    role: "Growth Lead",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Kraftix Digital home">
        <span className="brand-mark">K</span>
        <span>Kraftix Digital</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">
        Let's Talk
        <ArrowRight size={18} aria-hidden="true" />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`mobile-panel ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
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
    <section className="hero" id="home" aria-label="Kraftix Digital homepage">
      <img className="hero-bg" src={heroImage} alt="" />
      <div className="hero-scrim" />
      <div className="hero-content reveal">
        <span className="eyebrow">
          <Sparkles size={18} aria-hidden="true" />
          Digital, branding, web, and print
        </span>
        <h1>Kraftix Digital</h1>
        <p>
          A creative agency crafting bold digital campaigns, polished websites,
          and print-ready brand experiences for businesses ready to stand out.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#contact">
            Start a Project
            <ArrowRight size={19} aria-hidden="true" />
          </a>
          <a className="secondary-button" href="#work">
            View Work
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading reveal">
        <span className="section-kicker">What we do</span>
        <h2>Creative services for every brand touchpoint.</h2>
        <p>
          From launch campaigns to everyday brand content, the studio connects
          strategy, design, web, content, and production-ready creative.
        </p>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="service-card reveal" key={title}>
            <span className="icon-badge">
              <Icon size={24} aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-band" id="about">
      <div className="about-copy reveal">
        <span className="section-kicker">About the studio</span>
        <h2>Built for brands that need digital and print to speak the same language.</h2>
        <p>
          Kraftix Digital brings campaign thinking, design craft, and responsive
          web experiences into one focused creative workflow. Every project is
          shaped to look sharp online and stay practical in the real world.
        </p>
      </div>
      <div className="stats reveal" aria-label="Agency highlights">
        <div>
          <strong>360</strong>
          <span>Brand presence</span>
        </div>
        <div>
          <strong>4x</strong>
          <span>Creative output</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Mobile-ready delivery</span>
        </div>
      </div>
    </section>
  );
}

function WorkShowcase() {
  return (
    <section className="section work" id="work">
      <div className="section-heading align-left reveal">
        <span className="section-kicker">Selected work</span>
        <h2>Campaign systems that look sharp everywhere.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.color} reveal`} key={project.title}>
            <div className="project-visual" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process-band" id="process">
      <div className="process-intro reveal">
        <span className="section-kicker">Process</span>
        <h2>Simple, fast, and built around clear creative decisions.</h2>
      </div>
      <div className="process-list">
        {process.map((item, index) => (
          <div className="process-item reveal" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="section-heading reveal">
        <span className="section-kicker">Client voice</span>
        <h2>Designed to feel trusted from the first scroll.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card reveal" key={item.name}>
            <div className="stars" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <p>"{item.quote}"</p>
            <div>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy reveal">
        <span className="section-kicker">Start here</span>
        <h2>Ready to turn attention into action?</h2>
        <p>
          Share the brief, choose the channel, and move from scattered ideas to
          a campaign system that is ready to design, publish, and promote.
        </p>
      </div>
      <div className="contact-actions reveal">
        <a className="primary-button" href="mailto:hello@kraftixdigital.in">
          <Mail size={19} aria-hidden="true" />
          Email Us
        </a>
        <a className="secondary-button light" href="tel:+910000000000">
          <Phone size={18} aria-hidden="true" />
          Call Now
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="#home" aria-label="Kraftix Digital home">
          <span className="brand-mark">K</span>
          <span>Kraftix Digital</span>
        </a>
        <p>Digital marketing, branding, websites, and print creative.</p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WorkShowcase />
        <Process />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
