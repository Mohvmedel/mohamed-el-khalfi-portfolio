import { useEffect, useState } from "react";
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
  Mail,
  Menu,
  MessageCircle,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const navItems = ["About", "Stack", "Projects", "Experience", "Contact"];

const stackLayers = [
  {
    title: "Interface Layer",
    description: "Responsive web interfaces and user experiences.",
    technologies: ["React", "Angular", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend Layer",
    description: "Secure APIs, authentication, business logic, and server-side systems.",
    technologies: ["Laravel", "Spring Boot", "ASP.NET Core", "PHP", "Java", "C#", "Python", "REST APIs"],
  },
  {
    title: "Mobile Layer",
    description: "Flutter mobile apps connected to backend APIs and business workflows.",
    technologies: ["Flutter", "API Integration", "Mobile UI", "Driver Apps", "Service Apps"],
  },
  {
    title: "Management Systems Layer",
    description: "Dashboards, CRUD systems, workflow management, logistics tracking, and role-based platforms.",
    technologies: ["Dashboards", "CRUD", "Role Management", "Workflows", "Logistics Systems"],
  },
  {
    title: "Data Layer",
    description: "Database design, structured data, and business information management.",
    technologies: ["MySQL", "SQL Server", "Oracle"],
  },
  {
    title: "Deployment Layer",
    description: "Version control, containers, CI/CD, and deployment workflows.",
    technologies: ["Git", "GitHub", "Docker", "Kubernetes", "CI/CD", "Postman"],
  },
  {
    title: "AI / Vision Layer",
    description: "Computer vision and intelligent detection systems.",
    technologies: ["Python", "OpenCV", "YOLO"],
  },
];

const projects = [
  {
    title: "BeautyDoc",
    type: "E-commerce Website",
    category: "E-commerce / Web Platform",
    description:
      "A modern e-commerce website for beauty and skincare products, focused on clean product presentation, responsive design, and a smooth shopping experience.",
    contribution:
      "Built a business-ready shopping experience with structured product presentation and responsive pages.",
    tags: ["E-commerce", "Web Platform", "Responsive UI"],
    accent: "teal",
    size: "featured",
  },
  {
    title: "DriveLux",
    type: "Car Rental Website",
    category: "Booking / Business Website",
    description:
      "A car rental website designed to present vehicles, services, and booking information with a premium and user-friendly experience.",
    contribution: "Created a clear customer journey for browsing rental vehicles and understanding services.",
    tags: ["Car Rental", "Booking", "Business Website"],
    accent: "copper",
    size: "medium",
  },
  {
    title: "Brocli",
    type: "Web & Mobile Service Platform",
    category: "Service Platform / Mobile App",
    description:
      "A service platform connecting clients with service providers, including web features, Flutter mobile app context, API integration, user management, service requests, and data exchange.",
    contribution: "Contributed to frontend, backend, API integration, UI improvements, and mobile application context.",
    tags: ["Laravel", "Flutter", "MySQL", "API REST"],
    accent: "violet",
    size: "featured",
  },
  {
    title: "Delivery Company Design System",
    type: "Full Product Design System",
    category: "Delivery Platform / Design System",
    description:
      "A complete design system for a delivery company, including merchant website interfaces, driver app screens, and reusable platform UI components.",
    contribution: "Designed a consistent product experience across merchant, driver, and platform interfaces.",
    tags: ["Design System", "Merchant Website", "Driver App", "UI System"],
    accent: "lime",
    size: "medium",
  },
  {
    title: "Logistics & Transport Management",
    type: "Management System",
    category: "Logistics / Business Management",
    description:
      "A logistics and transport management system designed to track operations, organize flows, manage transport processes, and improve internal business operations.",
    contribution: "Worked on analysis, database structure, functional modules, testing, and improvement of the solution.",
    tags: ["ASP.NET", "Flutter", "Management System"],
    accent: "teal",
    size: "technical",
  },
  {
    title: "Intelligent HSE Monitoring",
    type: "AI / Computer Vision System",
    category: "Safety / AI Management System",
    description:
      "An intelligent HSE system for monitoring safety measures using computer vision, detecting non-compliance cases, and supporting real-time operational tracking.",
    contribution: "Built an AI-oriented solution using computer vision models and a structured web system.",
    tags: ["Python", "OpenCV", "YOLO", "ASP.NET Core", "Angular"],
    accent: "copper",
    size: "technical",
  },
];

const journey = [
  [
    "2025",
    "LEAR - Tanger / Stage PFE",
    "Worked on the analysis, design, and development of a logistics and transport management system from February 2025 to July 2025.",
  ],
  [
    "2024",
    "BROCLICONNECT - Rabat / Internship",
    "Contributed to a service platform with frontend, backend, API integration, UI improvements, and Flutter mobile application context.",
  ],
  [
    "2023",
    "CRI - Rabat / Internship",
    "Worked on IT asset management tools, mission order management, and IT support from June 2023 to September 2023.",
  ],
  [
    "2022",
    "SWALL DISTRIBUTION - Rabat / Internship",
    "Developed a payment management application and maintained a pre-sales application from June 2022 to August 2022.",
  ],
  [
    "Education",
    "ISMAGI - Rabat",
    "Ingénieur d'État en Développement Informatique, October 2022 - July 2025. Classe Préparatoire at ISMAGI, October 2020 - July 2022.",
  ],
  [
    "Academic",
    "Lycée Ahmed Chawki - Salé",
    "Baccalauréat Sciences Physiques, September 2021 - June 2022.",
  ],
  [
    "Proof",
    "Certifications & Languages",
    "IBM Docker Essentials, IBM Kubernetes Operators Advanced. Languages: Arabic, French, English, Tamazight.",
  ],
];

const services = [
  "Web Platforms - E-commerce, booking, service, and business websites",
  "Mobile Applications - Flutter apps connected to backend APIs",
  "Management Systems - Logistics, transport, orders, users, roles, and workflows",
  "Admin Dashboards - Activity monitoring, data management, and performance tracking",
  "Backend APIs - Secure REST APIs, authentication, roles, and business logic",
  "AI / Computer Vision Solutions - Detection and monitoring with OpenCV and YOLO",
];

const proof = [
  ["7", "featured digital solution projects"],
  ["Full", "web, mobile, API, database, and management systems"],
  ["IBM", "Docker and Kubernetes certifications"],
  ["4", "languages: Arabic, French, English, Tamazight"],
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
      <FloatingContact />
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
        <small>Web & Mobile Developer</small>
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
          Full-Stack Engineer
        </p>
        <p className="hero-description" data-reveal>
          Web · Mobile · Management Systems. I build modern digital solutions for businesses, from
          web platforms and Flutter mobile apps to management systems, admin dashboards, secure APIs,
          and scalable databases.
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
  focus: ["web", "mobile", "management systems"],
  stack: ["Laravel", "Flutter", "ASP.NET Core", "Angular"],
  builds: "complete digital solutions"
};`}</pre>
          <div className="terminal-status">
            <span>build passing</span>
            <strong>ready to ship</strong>
          </div>
        </div>
        <div className="floating-badge badge-react">Flutter</div>
        <div className="floating-badge badge-laravel">Laravel</div>
        <div className="floating-badge badge-spring">AI</div>
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
          Web platforms, mobile applications, and management systems.
        </h2>
        <div className="about-panel" data-reveal>
          <p>
            I am an Ingénieur d'État en Développement Informatique based in Salé, Morocco. I design
            and develop complete digital solutions adapted to real business needs, including web
            applications, mobile apps, management systems, backend APIs, databases, dashboards, and
            deployment workflows.
          </p>
          <div className="studio-map">
            <span>Web Platforms: e-commerce, booking, service apps</span>
            <span>Mobile Applications: Flutter apps connected to APIs</span>
            <span>Management Systems: logistics, orders, workflows</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const icons = [Code2, Server, Braces, ShieldCheck, Database, ArrowUpRight, Sparkles];

  return (
    <section className="stack section" id="stack" data-pattern="magnetic-cards">
      <div className="section-header" data-reveal>
        <span className="section-kicker">02 / Technology Stack</span>
        <h2>Tools for building complete digital solutions.</h2>
        <p className="section-subtitle">
          From interface design to backend APIs, mobile apps, databases, and deployment workflows.
        </p>
      </div>
      <div className="stack-architecture">
        {stackLayers.map((layer, index) => {
          const Icon = icons[index];
          return (
            <motion.article
              className="stack-card"
              key={layer.title}
              data-reveal
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="stack-node">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={24} />
              </div>
              <h3>{layer.title}</h3>
              <p>{layer.description}</p>
              <div className="chip-list">
                {layer.technologies.map((item) => (
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
        <p className="section-subtitle">
          A focused selection of web platforms, mobile applications, management systems, and business
          solutions.
        </p>
      </div>
      <div className="project-bento">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${project.accent} ${project.size}`}
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
              <div className="mockup-grid" aria-hidden="true">
                <i>{project.type}</i>
                <i>{project.category}</i>
                <i>{project.tags[0]}</i>
                <i>{project.tags[1]}</i>
              </div>
            </div>
            <div className="project-content">
              <span className="project-index">0{index + 1}</span>
              <small>{project.category}</small>
              <h3>{project.title}</h3>
              <strong>{project.type}</strong>
              <p>{project.description}</p>
              <p className="project-contribution">{project.contribution}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey section" id="experience" data-pattern="scroll-progress-cards">
      <div className="section-header" data-reveal>
        <span className="section-kicker">04 / Experience</span>
        <h2>Professional experience and engineering background.</h2>
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
        <h2>What I Build</h2>
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
          <span>Credibility through practical engineering proof</span>
          <p>
            Focused experience across web applications, mobile applications, management systems,
            admin dashboards, backend APIs, database-driven platforms, delivery and logistics
            systems, and AI / computer vision solutions.
          </p>
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
        <h2>Let's build a reliable digital solution.</h2>
        <div className="contact-actions">
          <a href="mailto:mohamed.elkhalfi@example.com" className="button primary">
            <Mail size={18} />
            Contact Me
          </a>
          <a className="button ghost" href="/Mohamed-El-Khalfi-CV.html" download>
            <Download size={18} />
            Download CV
          </a>
          <a href="#projects" className="button ghost">
            <ArrowDownRight size={18} />
            View Projects
          </a>
        </div>
        <p>
          I'm open to opportunities and freelance projects in web platforms, mobile apps, management
          systems, dashboards, APIs, and business solutions.
        </p>
      </div>
      <footer>
        <span>Mohamed El Khalfi</span>
        <span>Full-Stack Engineer · Web · Mobile · Management Systems</span>
        <a href="#top">Back to top</a>
      </footer>
    </section>
  );
}

function FloatingContact() {
  const whatsappMessage = encodeURIComponent(
    "Hello Mohamed, I saw your portfolio and would like to discuss a web platform, mobile app, management system, or business solution with you."
  );

  return (
    <a
      className="floating-contact"
      href={`https://wa.me/212688441461?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Mohamed El Khalfi on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}

export default App;
