
const projects = [
  {
    number: "01",
    title: "AI Customer Support Assistant",
    category: "AI · Full Stack",
    description:
      "An AI-powered customer support chatbot designed to help users get answers to their questions through a conversational interface.",
    technologies: ["React", "FastAPI", "Python", "Azure OpenAI", "Cosmos DB"],
    github: "https://github.com/your-username",
  },
  {
    number: "02",
    title: "IMDb Movie Explorer",
    category: "Frontend Development",
    description:
      "A movie discovery application that uses a movie API to display movie information and lets users search titles and explore their favorites.",
    technologies: ["HTML", "CSS", "JavaScript", "OMDb API"],
    github: "https://github.com/your-username",
  },
  {
    number: "03",
    title: "Full-Stack Web Application",
    category: "Personal Project · In Progress",
    description:
      "A project to practice building responsive user interfaces, connecting APIs, managing data, and developing backend functionality.",
    technologies: ["Next.js", "Node.js", "Database", "Git"],
    github: "https://github.com/your-username",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Python", "Java"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Fundamentals",
    skills: ["Git", "GitHub", "VS Code", "OOP", "DBMS", "Data Structures"],
  },
];

const learningItems = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Learning to build responsive, accessible user interfaces with HTML, CSS, JavaScript, React, and Next.js.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Practicing server-side development, REST APIs, authentication concepts, and database integration.",
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "Strengthening programming fundamentals, data structures, algorithms, and debugging skills.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Go to home">
          RC<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Let&apos;s Connect <span>↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            ENGINEERING STUDENT · OPEN TO INTERNSHIPS
          </p>

          <h1>
            Ram Charan
            <br />
            <span>Potnuru.</span>
          </h1>

          <h2>
            Aspiring <span>Full-Stack Developer</span>
          </h2>

          <p className="hero-description">
            I&apos;m a second-year engineering student passionate about building
            useful digital products, learning modern web technologies, and
            turning ideas into real-world applications.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore My Work <span>↘</span>
            </a>
            <a className="button button-light" href="#contact">
              Get In Touch <span>↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN INDIA</span>
            <span className="meta-divider" />
            <span>BUILDING · LEARNING · IMPROVING</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-top">
            <span>PERSONAL PORTFOLIO</span>
            <span>2026 — PRESENT</span>
          </div>

          <div className="monogram">R<span>C</span></div>

          <div className="visual-bottom">
            <div>
              <p className="visual-label">CURRENT FOCUS</p>
              <p className="visual-focus">Full-Stack Development</p>
            </div>
            <div className="visual-arrow">↗</div>
          </div>

          <div className="visual-index">01 / DEVELOPER PROFILE</div>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of interest">
        <div className="ticker-inner">
          <span>WEB DEVELOPMENT</span><i>✳</i>
          <span>PROBLEM SOLVING</span><i>✳</i>
          <span>CREATIVE THINKING</span><i>✳</i>
          <span>CONTINUOUS LEARNING</span><i>✳</i>
          <span>WEB DEVELOPMENT</span>
        </div>
      </div>

      <section className="section section-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>
            Curious mind.
            <br />
            <span>Builder&apos;s mindset.</span>
          </h2>
        </div>

        <div className="about-grid">
          <p className="about-lead">
            I&apos;m an engineering student working toward becoming a skilled
            full-stack web developer.
          </p>

          <div className="about-details">
            <p>
              My focus is on developing a strong foundation in frontend and
              backend technologies while building projects that solve practical
              problems. I enjoy exploring how websites work, experimenting
              with new tools, and learning by creating.
            </p>
            <p>
              I&apos;m currently looking for internship opportunities where I can
              contribute, learn from experienced developers, collaborate with a
              team, and grow through real-world software development.
            </p>

            <a className="text-link" href="#contact">
              Let&apos;s work on something meaningful <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">02 / MY JOURNEY</p>
            <h2>
              Learning today.
              <br />
              <span>Building for tomorrow.</span>
            </h2>
            <p className="section-intro">
              My current focus is turning engineering fundamentals into
              practical development skills.
            </p>
          </div>

          <div className="journey-card">
            <div className="journey-date">
              <span className="journey-dot" />
              CURRENT
            </div>

            <div className="journey-content">
              <p className="journey-type">EDUCATION & PERSONAL DEVELOPMENT</p>
              <h3>Full-Stack Development Journey</h3>
              <p className="journey-subtitle">
                Engineering Student · 2nd Year
              </p>
              <p className="journey-description">
                Building practical experience through personal projects,
                learning web development fundamentals, exploring APIs and
                databases, and improving problem-solving skills.
              </p>

              <div className="tag-list">
                <span>Hands-on Projects</span>
                <span>Frontend</span>
                <span>Backend</span>
                <span>DSA</span>
              </div>
            </div>

            <div className="journey-count">01</div>
          </div>

          <div className="learning-grid">
            {learningItems.map((item) => (
              <article className="learning-card" key={item.number}>
                <p className="card-number">{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell" id="projects">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow">03 / SELECTED PROJECTS</p>
            <h2>
              Ideas turned
              <br />
              <span>into projects.</span>
            </h2>
          </div>
          <p className="section-intro">
            A selection of projects to showcase my learning, creativity, and
            interest in software development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-art" aria-hidden="true">
                {project.number === "01" && (
                  <div className="chat-art">
                    <div className="chat-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="chat-bubble chat-bubble-left">
                      How can I help you?
                    </div>
                    <div className="chat-bubble chat-bubble-right">
                      I need some assistance.
                    </div>
                    <div className="chat-bubble chat-bubble-left short">
                      Let&apos;s figure it out.
                    </div>
                  </div>
                )}

                {project.number === "02" && (
                  <div className="movie-art">
                    <div className="movie-poster poster-one">IM</div>
                    <div className="movie-poster poster-two">DB</div>
                    <div className="movie-poster poster-three">+</div>
                  </div>
                )}

                {project.number === "03" && (
                  <div className="code-art">
                    <span>01&nbsp; &lt;main&gt;</span>
                    <span>02&nbsp;&nbsp; buildSomething();</span>
                    <span>03&nbsp;&nbsp; learnEveryDay();</span>
                    <span>04&nbsp; &lt;/main&gt;</span>
                  </div>
                )}
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  View on GitHub <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="edit-note">
          Replace the example project descriptions and GitHub links with your
          own work before publishing.
        </p>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">04 / TECHNICAL SKILLS</p>
            <h2>
              Tools I use.
              <br />
              <span>Skills I&apos;m growing.</span>
            </h2>
            <p className="section-intro">
              My current toolkit for learning, building, debugging, and
              improving as a developer.
            </p>
          </div>

          <div className="skills-list">
            {skillGroups.map((group, index) => (
              <div className="skill-row" key={group.title}>
                <div className="skill-label">
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="edit-note">
            Keep only the technologies you can confidently discuss in an
            interview.
          </p>
        </div>
      </section>

      <section className="section section-shell" id="education">
        <div className="section-heading">
          <p className="eyebrow">05 / EDUCATION & LEARNING</p>
          <h2>
            Building my
            <br />
            <span>foundation.</span>
          </h2>
        </div>

        <div className="education-grid">
          <article className="education-card">
            <p className="education-label">EDUCATION</p>
            <h3>[Your College / University]</h3>
            <p className="education-degree">
              B.Tech in [Your Engineering Branch]
            </p>
            <div className="education-footer">
              <span>Undergraduate · 2nd Year</span>
              <span>[Expected Graduation Year]</span>
            </div>
          </article>

          <article className="education-card">
            <p className="education-label">TRAINING & CERTIFICATIONS</p>
            <h3>Continuous Learning</h3>
            <p className="education-degree">
              Full-Stack Web Development · [Platform or Course]
            </p>
            <div className="education-footer">
              <span>Self-learning & coursework</span>
              <span>Ongoing</span>
            </div>
            <p className="education-small">
              Add any completed courses, workshops, or certifications here.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <p className="eyebrow">06 / CONTACT</p>
          <h2>
            Have an opportunity?
            <br />
            <span>Let&apos;s talk.</span>
          </h2>
          <p className="contact-description">
            I&apos;m open to internships, collaborative projects, and
            opportunities to learn and contribute. I&apos;d love to hear from you.
          </p>

          <a
            className="button button-white"
            href="mailto:ramcharanpotnuru08@gmail.com"
          >
            Email Me <span>↗</span>
          </a>

          <div className="contact-details">
            <a href="mailto:ramcharanpotnuru08@gmail.com">
              ramcharanpotnuru08@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/your-username/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="brand" href="#home">
          RC<span>.</span>
        </a>
        <p>Designed & built with curiosity.</p>
        <a className="back-top" href="#home">
          BACK TO TOP 
        </a>
        <p className="copyright">
           Ram Charan Potnuru
        </p>
      </footer>
    </main>
  );
}
