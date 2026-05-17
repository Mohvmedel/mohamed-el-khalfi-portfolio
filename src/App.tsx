import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
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

const navItems = [
  ["Product-minded engineer", "about"],
  ["Architecture stack", "stack"],
  ["Selected builds", "projects"],
  ["Field experience", "experience"],
  ["Start a build", "contact"],
];

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
    title: "Brocli",
    type: "Live Web & Mobile Service Platform",
    category: "Service Platform / Mobile App",
    status: "Live Product",
    liveUrl: "https://brocli.ma",
    visual: "/brocli-homepage.png",
    problem: "Connect clients with verified service providers.",
    build: "Web features, API integration, service flows, and Flutter mobile context.",
    tags: ["Laravel", "Flutter", "MySQL", "API REST"],
    proof: "brocli.ma",
    accent: "violet",
    size: "featured",
  },
  {
    title: "BeautyDoc",
    type: "E-commerce Website",
    category: "E-commerce / Web Platform",
    status: "Delivered Build",
    problem: "Create a clean online shopping experience for beauty and skincare products.",
    build: "Structured product presentation, responsive pages, and a smooth shopping journey.",
    tags: ["E-commerce", "Web Platform", "Responsive UI"],
    proof: "Business-ready product flow",
    accent: "teal",
    size: "medium",
  },
  {
    title: "DriveLux",
    type: "Car Rental Website",
    category: "Booking / Business Website",
    status: "Delivered Build",
    problem: "Present rental vehicles, services, and booking information clearly.",
    build: "A premium browsing journey for vehicles, services, and booking details.",
    tags: ["Car Rental", "Booking", "Business Website"],
    proof: "Customer-facing business interface",
    accent: "copper",
    size: "medium",
  },
  {
    title: "Delivery Company Design System",
    type: "Full Product Design System",
    category: "Delivery Platform / Design System",
    status: "In Progress",
    problem: "Create a consistent delivery experience across multiple interfaces.",
    build: "Merchant website interfaces, driver app screens, and reusable platform UI components.",
    tags: ["Design System", "Merchant Website", "Driver App", "UI System"],
    proof: "Delivery ecosystem UI direction",
    accent: "lime",
    size: "medium",
  },
  {
    title: "Logistics & Transport Management",
    type: "Management System",
    category: "Logistics / Business Management",
    status: "Private System",
    problem: "Organize transport operations, logistics workflows, and internal processes.",
    build: "Analysis, database structure, functional modules, workflow organization, and testing.",
    tags: ["ASP.NET", "Flutter", "Management System"],
    proof: "Operational management modules",
    accent: "teal",
    size: "technical",
  },
  {
    title: "Intelligent HSE Monitoring",
    type: "AI / Computer Vision System",
    category: "Safety / AI Management System",
    status: "Technical Build",
    problem: "Detect safety non-compliance cases from video streams.",
    build: "Computer vision models and a structured web system for operational tracking.",
    tags: ["Python", "OpenCV", "YOLO", "ASP.NET Core", "Angular"],
    proof: "AI / Vision safety monitoring",
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
    "Ingénieur d'État en Développement Informatique, October 2022 - July 2025.",
  ],
  [
    "Education",
    "ISMAGI - Rabat",
    "Classe Préparatoire, October 2020 - July 2022.",
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
  "Businesses that need an online platform - E-commerce, booking, service platforms, and customer-facing websites",
  "Teams that need better internal organization - Management systems, dashboards, workflows, roles, and data tracking",
  "Products that need mobile access - Flutter apps for clients, drivers, service providers, and internal users",
  "Operations that need automation and visibility - APIs, databases, reporting, admin panels, and process tracking",
];

const proofSignals = [
  { label: "LIVE PRODUCT", text: "Brocli.ma service platform" },
  { label: "DELIVERED BUILDS", text: "BeautyDoc · DriveLux" },
  { label: "MOBILE CONTEXT", text: "Flutter apps · Driver/service flows" },
  { label: "MANAGEMENT SYSTEMS", text: "Logistics · Mission orders · Dashboards · Workflows" },
  { label: "AI / VISION", text: "OpenCV · YOLO safety monitoring" },
  { label: "DEVOPS FOUNDATION", text: "Docker · Kubernetes · CI/CD" },
  { label: "CERTIFICATIONS", text: "IBM Docker · IBM Kubernetes" },
];

const proofIndex = [
  ["01", "Product proof"],
  ["02", "System proof"],
  ["03", "Technical proof"],
];

const valueEngine = [
  {
    number: "01",
    title: "Understand",
    keywords: "Business needs · Users · Workflows",
    text: "I start by understanding the real problem before writing code.",
  },
  {
    number: "02",
    title: "Structure",
    keywords: "Modules · Data · APIs · User flows",
    text: "I organize the solution into clear, scalable parts.",
  },
  {
    number: "03",
    title: "Build",
    keywords: "Web · Mobile · Backend · Dashboards",
    text: "I develop complete systems with clean interfaces and reliable logic.",
  },
  {
    number: "04",
    title: "Improve",
    keywords: "Testing · UX · Performance · Reliability",
    text: "I refine the product so it becomes useful, stable, and easy to use.",
  },
];

const heroTechBadges = [
  { label: "Laravel", className: "badge-laravel", iconSrc: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { label: "Spring Boot", className: "badge-spring", iconSrc: "https://cdn.simpleicons.org/springboot/6DB33F" },
  { label: "ASP.NET Core", className: "badge-asp", iconSrc: "https://cdn.simpleicons.org/dotnet/8F8CFF" },
  { label: "Flutter", className: "badge-flutter", iconSrc: "https://cdn.simpleicons.org/flutter/51D6C7" },
  { label: "AI / Vision", className: "badge-ai", iconSrc: "https://cdn.simpleicons.org/opencv/C4EF6A" },
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
      <WhyWork />
      <Stack />
      <Projects />
      <Journey />
      <Services />
      <Proof />
      <Contact />
      <FloatingContact />
      <Analytics />
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
        <span>
          <img src="/logo-portfolio.png" alt="" />
        </span>
        <small>Full-Stack Engineer</small>
      </a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>
            {label}
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
          Web · Mobile · Management Systems. I help businesses turn ideas and operational problems
          into reliable digital solutions — from web platforms and Flutter mobile apps to dashboards,
          APIs, databases, and management systems.
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
  role: "Full-Stack Engineer",
  builds: ["web platforms", "mobile apps", "management systems"],
  coreStack: ["Laravel", "Spring Boot", "ASP.NET Core", "Flutter"],
  edge: ["AI / Vision", "Docker", "Kubernetes"],
};`}</pre>
          <div className="terminal-status">
            <span>build passing</span>
            <strong>ready to ship</strong>
          </div>
        </div>
        <div className="tech-orbit" aria-hidden="true">
          {heroTechBadges.map((badge) => (
            <TechBadge key={badge.label} {...badge} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechBadge({
  label,
  iconSrc,
  className,
}: {
  label: string;
  iconSrc: string;
  className: string;
}) {
  return (
    <div className={`floating-badge tech-badge ${className}`} title={label}>
      <span className="tech-icon">
        <img src={iconSrc} alt="" loading="lazy" />
      </span>
      <span className="tech-label">{label}</span>
    </div>
  );
}

function About() {
  return (
    <section className="about section" id="about" data-pattern="pinned-scrub">
      <div className="section-kicker" data-reveal>
        01 / Product-minded engineer
      </div>
      <div className="about-grid">
        <h2 data-reveal>
          Web platforms, mobile apps, and management systems.
        </h2>
        <div className="about-panel" data-reveal>
          <p>
            I'm a full-stack engineer based in Salé, Morocco. I design and build complete digital
            solutions for real business needs — from interfaces and APIs to databases, dashboards,
            mobile apps, and deployment workflows.
          </p>
          <p className="about-statement">
            My strength is connecting technical structure with creative problem-solving.
          </p>
          <div className="studio-map">
            <span>
              <strong>Build</strong>
              Web platforms · Mobile apps · Management systems
            </span>
            <span>
              <strong>Connect</strong>
              APIs · Databases · Dashboards · Workflows
            </span>
            <span>
              <strong>Deliver</strong>
              Clean interfaces · Reliable logic · Business-ready solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyWork() {
  const icons = [ShieldCheck, Braces, Code2, Sparkles];

  return (
    <section className="why section" data-pattern="reveal-on-scroll">
      <div className="section-header" data-reveal>
        <span className="section-kicker">02 / Proof signals</span>
        <h2>From business problem to reliable product.</h2>
        <p className="section-subtitle">
          A simple process that helps me move from unclear needs to useful digital systems.
        </p>
      </div>
      <div className="value-engine" aria-label="Engineering loop">
        {valueEngine.map((step, index) => {
          const Icon = icons[index];

          return (
            <article className="engine-step" key={step.title} data-reveal>
              <div className="engine-step-top">
                <span>{step.number}</span>
                <Icon size={21} />
              </div>
              <h3>{step.title}</h3>
              <strong>{step.keywords}</strong>
              <p>{step.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Stack() {
  const icons = [Code2, Server, Braces, ShieldCheck, Database, ArrowUpRight, Sparkles];

  return (
    <section className="stack section" id="stack" data-pattern="magnetic-cards">
      <div className="section-header" data-reveal>
        <span className="section-kicker">03 / Architecture stack</span>
        <h2>How I build complete digital products.</h2>
        <p className="section-subtitle">
          From interfaces and APIs to mobile apps, databases, deployment workflows, and intelligent
          systems.
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
        <span className="section-kicker">04 / Selected builds</span>
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
                {"visual" in project && project.visual ? (
                  <img src={project.visual} alt={`${project.title} homepage screenshot`} loading="lazy" />
                ) : (
                  <>
                    <i>{project.type}</i>
                    <i>{project.category}</i>
                    <i>{project.tags[0]}</i>
                    <i>{project.tags[1]}</i>
                  </>
                )}
              </div>
            </div>
            <div className="project-content">
              <div className="project-meta">
                <span className="project-index">0{index + 1}</span>
                <small className="project-signal">
                  <i />
                  {project.status}
                </small>
              </div>
              <h3>{project.title}</h3>
              <strong>{project.type}</strong>
              <dl className="project-file">
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Build</dt>
                  <dd>{project.build}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{project.tags.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Proof</dt>
                  <dd>{project.proof}</dd>
                </div>
              </dl>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {"liveUrl" in project && project.liveUrl ? (
                <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Open proof <ArrowUpRight size={16} />
                </a>
              ) : null}
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
        <span className="section-kicker">05 / Field experience</span>
        <h2>Professional experience and engineering background.</h2>
      </div>
      <div className="journey-list">
        {journey.map(([year, title, description], index) => (
          <div className="journey-item" key={`${year}-${title}-${index}`}>
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
        <span className="section-kicker">06 / Problems I help solve</span>
        <h2>Problems I help solve</h2>
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
          <div className="proof-card-top">
            <span>Proof signals</span>
            <ShieldCheck size={34} />
          </div>
          <strong>Real builds. Real systems. Real proof.</strong>
          <p>
            A focused mix of live products, delivered projects, management systems, mobile apps,
            AI/Vision work, and deployment foundations.
          </p>
          <div className="proof-index" aria-label="Proof index">
            {proofIndex.map(([number, label]) => (
              <span key={label}>
                <b>{number}</b>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="proof-grid">
        {proofSignals.map((signal) => (
          <div className="proof-item" key={signal.label} data-reveal>
            <strong>{signal.label}</strong>
            <span>{signal.text}</span>
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
          <a href="mailto:mohvmedelkhvlfi@gmail.com" className="button primary">
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
