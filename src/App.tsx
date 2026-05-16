import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const navItems = ["About", "Stack", "Projects", "Journey", "Contact"];

const skills = {
  Frontend: ["React.js", "Vue.js", "Angular", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  Backend: ["Laravel", "PHP", "ASP.NET", "Django", "Spring Boot", "REST APIs", "JWT Authentication"],
  Database: ["MySQL", "SQL"],
  Tools: ["Git", "GitHub", "Vite", "Axios", "Postman", "VS Code", "Eclipse"],
};

const projects = [
  {
    title: "USkin E-commerce",
    stack: "Laravel, Vue.js 3, Vite, Axios, MySQL",
    description:
      "Modern e-commerce platform with product browsing, cart, wishlist, authentication, admin management, multilingual support, and responsive UI.",
    accent: "teal",
  },
  {
    title: "Evo Mart",
    stack: "Spring Boot, Angular, JWT, MySQL",
    description:
      "E-commerce web application with secure authentication, product management, REST API backend, and Angular frontend.",
    accent: "copper",
  },
  {
    title: "Dental Center",
    stack: "React, Vue.js, Laravel API structure",
    description:
      "Dental clinic management web app with structured components, clean UI, and modular frontend architecture.",
    accent: "violet",
  },
  {
    title: "Port Truck Management",
    stack: "Laravel, SQL, HTML, CSS",
    description:
      "Application for managing truck entries and exits in a port, including driver information, vehicle registration, trailers, entry dates, exit dates, and stay duration.",
    accent: "lime",
  },
];

const journey = [
  ["2019", "Baccalaureate", "Built the academic base for technical problem solving."],
  ["2022", "DEUG in Networks and Telecommunications", "Developed systems thinking across infrastructure, networks, and web foundations."],
  ["2024", "Built Evo Mart", "Delivered a full-stack e-commerce project with secure APIs and a structured frontend."],
  ["2025", "Business applications", "Developed management tools, dashboards, data flows, and practical web platforms."],
  ["Today", "Full-stack engineer", "Focused on useful, scalable, and polished modern web platforms."],
];

const services = [
  "E-commerce platforms",
  "Admin dashboards",
  "Business management systems",
  "REST API backends",
  "Responsive frontend interfaces",
  "Authentication systems",
  "Database-driven web apps",
];

const proof = [
  ["4", "featured product builds"],
  ["7+", "frameworks across frontend and backend"],
  ["Full", "product lifecycle ownership"],
  ["API", "first backend architecture"],
];

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lightX = useMotionValue(0);
  const lightY = useMotionValue(0);
  const springX = useSpring(lightX, { stiffness: 80, damping: 28, mass: 0.5 });
  const springY = useSpring(lightY, { stiffness: 80, damping: 28, mass: 0.5 });

  useLenis();

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      lightX.set(event.clientX);
      lightY.set(event.clientY);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [lightX, lightY]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
            },
          }
        );
      });

      gsap.fromTo(
        ".hero-title span",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.2, stagger: 0.08, ease: "power4.out", delay: 0.15 }
      );

      gsap.to(".hero-visual", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const projectTrack = document.querySelector<HTMLElement>(".project-track");
      const projectWrap = document.querySelector<HTMLElement>(".projects-scroll");
      if (projectTrack && projectWrap && window.matchMedia("(min-width: 900px)").matches) {
        gsap.to(projectTrack, {
          x: () => -(projectTrack.scrollWidth - window.innerWidth + 96),
          ease: "none",
          scrollTrigger: {
            trigger: projectWrap,
            start: "top top",
            end: () => `+=${projectTrack.scrollWidth}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>(".journey-item").forEach((item, index) => {
        gsap.to(item, {
          "--progress": "100%",
          scrollTrigger: {
            trigger: item,
            start: "top 68%",
            end: "bottom 48%",
            scrub: true,
          },
        });

        gsap.from(item.querySelector(".journey-card"), {
          x: index % 2 === 0 ? -24 : 24,
          autoAlpha: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 78%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="site">
      <motion.div className="cursor-light" style={{ x: springX, y: springY }} aria-hidden="true" />
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Journey />
      <Services />
      <Proof />
      <Contact />
    </main>
  );
}

function Navigation({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
  return (
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Mohamed El Khalfi home">
        <span>MEK</span>
        <small>Full-Stack Engineer</small>
      </a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        <Mail size={16} />
        Contact
      </a>
      <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top" data-pattern="split-text-reveal + parallax-depth">
      <div className="hero-copy">
        <p className="eyebrow" data-reveal>
          Portfolio / Full-stack engineer / Morocco
        </p>
        <h1 className="hero-title" aria-label="Mohamed El Khalfi">
          <span>Mohamed</span>
          <span>El Khalfi</span>
        </h1>
        <p className="hero-subtitle" data-reveal>
          Full-Stack Engineer building modern, scalable, and user-friendly web applications.
        </p>
        <p className="hero-description" data-reveal>
          I design and develop complete digital products using Laravel, React, Vue, Angular, Django,
          Spring Boot, and modern frontend/backend tools.
        </p>
        <div className="hero-actions" data-reveal>
          <a className="button primary" href="#projects">
            View Projects <ArrowDownRight size={18} />
          </a>
          <a className="button ghost" href="#contact">
            Contact Me <Mail size={18} />
          </a>
          <a className="button text" href="/Mohamed-El-Khalfi-CV.html" download>
            Download CV <Download size={18} />
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="terminal-card">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
            <small>product-build.ts</small>
          </div>
          <pre>{`const engineer = {
  name: "Mohamed El Khalfi",
  focus: ["frontend", "backend", "APIs"],
  stack: ["Laravel", "React", "Vue", "Angular"],
  ships: "useful web platforms"
};`}</pre>
          <div className="terminal-status">
            <span>build passing</span>
            <strong>ready to ship</strong>
          </div>
        </div>
        <div className="floating-badge badge-react">React</div>
        <div className="floating-badge badge-laravel">Laravel</div>
        <div className="floating-badge badge-spring">Spring</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about" data-pattern="pinned-scrub">
      <div className="section-kicker" data-reveal>
        01 / Positioning
      </div>
      <div className="about-grid">
        <h2 data-reveal>
          Practical engineering with a polished product eye.
        </h2>
        <div className="about-panel" data-reveal>
          <p>
            I am a full-stack engineer passionate about creating clean, practical, and scalable web
            solutions. I enjoy working across the full product lifecycle, from database design and
            backend APIs to responsive interfaces and polished user experiences.
          </p>
          <div className="studio-map">
            <span>Database</span>
            <span>API</span>
            <span>Interface</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const icons = [Code2, Server, Database, Braces];

  return (
    <section className="stack section" id="stack" data-pattern="magnetic-cards">
      <div className="section-header" data-reveal>
        <span className="section-kicker">02 / Technology Stack</span>
        <h2>Tools for building complete products.</h2>
      </div>
      <div className="stack-grid">
        {Object.entries(skills).map(([group, items], index) => {
          const Icon = icons[index];
          return (
            <motion.article
              className="stack-card"
              key={group}
              data-reveal
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Icon size={28} />
              <h3>{group}</h3>
              <div className="chip-list">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-scroll" id="projects" data-pattern="horizontal-on-vertical">
      <div className="project-intro">
        <span className="section-kicker">03 / Featured Projects</span>
        <h2>Selected builds with real product shape.</h2>
      </div>
      <div className="project-track">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${project.accent}`}
            key={project.title}
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
          >
            <div className="project-mockup">
              <div className="mockup-top">
                <span />
                <span />
                <span />
              </div>
              <div className="mockup-grid">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="project-content">
              <span className="project-index">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.stack}</small>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey section" id="journey" data-pattern="scroll-progress-cards">
      <div className="section-header" data-reveal>
        <span className="section-kicker">04 / Journey</span>
        <h2>From networks to full-stack product systems.</h2>
      </div>
      <div className="journey-list">
        {journey.map(([year, title, description]) => (
          <div className="journey-item" key={year}>
            <span className="journey-year">{year}</span>
            <article className="journey-card">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section" data-pattern="sticky-stack">
      <div className="services-sticky" data-reveal>
        <span className="section-kicker">05 / What I Can Build</span>
        <h2>Useful systems for teams that need software to work.</h2>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <motion.div
            className="service-row"
            key={service}
            data-reveal
            whileHover={{ x: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{service}</strong>
            <ArrowUpRight size={24} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof section" data-pattern="masked-image-reveal">
      <div className="proof-visual" data-reveal>
        <div className="system-card">
          <ShieldCheck size={34} />
          <span>Credibility through shipped project proof</span>
          <p>No fake testimonials. Just visible scope, stack variety, and practical full-stack output.</p>
        </div>
      </div>
      <div className="proof-grid">
        {proof.map(([value, label]) => (
          <div className="proof-item" key={label} data-reveal>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact" data-pattern="reveal-on-scroll">
      <div className="contact-inner" data-reveal>
        <Sparkles size={28} />
        <h2>Let's build something useful, fast, and beautiful.</h2>
        <div className="contact-actions">
          <a href="mailto:mohamed.elkhalfi@example.com" className="button primary">
            <Mail size={18} />
            Email
          </a>
          <a href="https://github.com/" className="button ghost" target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/" className="button ghost" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href="https://wa.me/" className="button ghost" target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
        <p>
          Available for full-stack web platforms, internal tools, dashboards, APIs, and scalable
          product interfaces.
        </p>
      </div>
      <footer>
        <span>Mohamed El Khalfi</span>
        <span>Full-Stack Engineer</span>
        <a href="#top">Back to top</a>
      </footer>
    </section>
  );
}

export default App;
