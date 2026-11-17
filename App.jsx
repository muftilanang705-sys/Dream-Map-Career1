import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Sparkles,
  Search,
  BookOpen,
  GraduationCap,
  Target,
  Menu,
  X,
  Star,
  Map,
  Telescope,
  Heart,
  ChevronDown,
} from "lucide-react";
import "./index.css";

const features = [
  {
    number: "01",
    title: "Kenali Dirimu",
    description:
      "Temukan potensi dan kecenderungan minat melalui eksplorasi diri dan tes RIASEC.",
    icon: Compass,
    color: "peach",
  },
  {
    number: "02",
    title: "Jelajahi Profesi",
    description:
      "Cari tahu berbagai profesi, persyaratan, pendidikan, dan peluang karier.",
    icon: Telescope,
    color: "blue",
  },
  {
    number: "03",
    title: "Rancang Masa Depan",
    description:
      "Susun perjalanan pendidikan dan rencana karier sesuai impianmu.",
    icon: Map,
    color: "green",
  },
];

const riasec = [
  { letter: "R", name: "Realistic", color: "#F4B47D" },
  { letter: "I", name: "Investigative", color: "#A9C8EF" },
  { letter: "A", name: "Artistic", color: "#D7B8EA" },
  { letter: "S", name: "Social", color: "#B9DCA7" },
  { letter: "E", name: "Enterprising", color: "#F2B4A6" },
  { letter: "C", name: "Conventional", color: "#B9C9D9" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [role, setRole] = useState("siswa");

  const openLogin = () => {
    setLoginOpen(true);
    setMenuOpen(false);
  };

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <Compass size={25} />
          </span>
          <span>
            <strong>DREAM MAP</strong>
            <small>CAREER EXPLORATION</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#features">Fitur</a>
          <a href="#riasec">RIASEC</a>
        </div>

        <div className="nav-actions">
          <button className="login-button" onClick={openLogin}>
            Masuk
          </button>
          <button className="nav-cta" onClick={openLogin}>
            Mulai Sekarang <ArrowUpRight size={17} />
          </button>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <a href="#about" onClick={() => setMenuOpen(false)}>Tentang</a>
              <a href="#features" onClick={() => setMenuOpen(false)}>Fitur</a>
              <a href="#riasec" onClick={() => setMenuOpen(false)}>RIASEC</a>
              <button onClick={openLogin}>Mulai Sekarang</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-decoration decoration-one" />
        <div className="hero-decoration decoration-two" />

        <div className="hero-content">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={15} />
            YOUR JOURNEY STARTS HERE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Every dream has
            <br />
            a <span>direction.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Kenali dirimu, temukan minatmu, dan mulai petualangan
            untuk merancang masa depan yang kamu impikan.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="primary-button" onClick={openLogin}>
              Mulai Petualangan <ArrowRight size={18} />
            </button>
            <a href="#about" className="secondary-button">
              Kenali Platform <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="hero-note">
            <div className="avatar-stack">
              <span>R</span>
              <span>I</span>
              <span>A</span>
            </div>
            <p>
              Explore your potential.
              <strong> Build your future.</strong>
            </p>
          </div>
        </div>

        {/* HERO ART */}
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="art-card">

            <img
  src="/src/assets/dream-explorer.png"
  alt="Dream Map Explorer"
  className="dream-explorer"
/>

           <motion.div
  className="art-label label-bottom"
  animate={{ y: [0, 9, 0] }}
  transition={{
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <Map size={17} />
  YOUR FUTURE MAP
</motion.div>
          </div>

          <motion.div
            className="floating-card floating-top"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={18} />
            <span>Dream big!</span>
          </motion.div>

          <motion.div
            className="floating-card floating-bottom"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <Heart size={17} />
            <span>Discover yourself</span>
          </motion.div>
        </motion.div>

        <div className="hero-bottom">
          <span>01 / DISCOVER YOURSELF</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-padding" id="about">
        <div className="section-heading">
          <span className="section-tag">A LITTLE INTRODUCTION</span>
          <h2>
            Masa depan bukan
            <br />
            sesuatu yang harus <span>ditunggu.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              Setiap orang punya potensi, minat, dan impian yang berbeda.
              Namun, menemukan arah yang tepat terkadang bukan hal mudah.
            </p>
            <p>
              Dream Map Career hadir untuk menemani perjalananmu mengenal
              diri sendiri, mengeksplorasi dunia profesi, hingga menyusun
              rencana pendidikan dan karier.
            </p>
            <a href="#features" className="text-link">
              Jelajahi fitur kami <ArrowRight size={17} />
            </a>
          </div>

          <div className="about-quote">
            <span className="quote-mark">“</span>
            <h3>
              You don't have to know everything. You just need to know
              where to start.
            </h3>
            <span className="quote-caption">YOUR JOURNEY, YOUR STORY.</span>
            <div className="quote-decoration">
              <Compass size={76} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section section-padding" id="features">
        <div className="section-heading center-heading">
          <span className="section-tag">YOUR CAREER JOURNEY</span>
          <h2>
            Temukan arah,
            <br />
            <span>langkah demi langkah.</span>
          </h2>
          <p>
            Perjalanan mengenal masa depan dimulai dari satu langkah kecil.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                className={`feature-card ${feature.color}`}
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-top">
                  <span>{feature.number} / 03</span>
                  <ArrowUpRight size={20} />
                </div>
                <div className="feature-icon">
                  <Icon size={30} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* RIASEC */}
      <section className="riasec-section section-padding" id="riasec">
        <div className="riasec-intro">
          <span className="section-tag">DISCOVER YOUR PERSONALITY</span>
          <h2>
            Six types.
            <br />
            <span>One unique you.</span>
          </h2>
          <p>
            Kenali enam kategori minat RIASEC untuk membantumu memahami
            kecenderungan aktivitas dan bidang karier yang menarik bagimu.
          </p>
        </div>

        <div className="riasec-grid">
          {riasec.map((item, index) => (
            <motion.div
              className="riasec-item"
              key={item.letter}
              style={{ "--riasec-color": item.color }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ rotate: index % 2 === 0 ? -4 : 4, y: -7 }}
            >
              <span className="riasec-letter">{item.letter}</span>
              <strong>{item.name}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="cta-decoration">✳</div>
        <span className="section-tag">THE NEXT CHAPTER IS YOURS</span>
        <h2>
          Ready to find
          <br />
          your <span>direction?</span>
        </h2>
        <p>
          Tidak perlu menunggu sempurna untuk memulai.
          Yuk, kenali dirimu dan temukan arah masa depanmu!
        </p>
        <button className="primary-button" onClick={openLogin}>
          Mulai Sekarang <ArrowRight size={18} />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <Compass size={23} />
          </span>
          <span>
            <strong>DREAM MAP</strong>
            <small>CAREER EXPLORATION</small>
          </span>
        </a>
        <p>© 2026 Dream Map Career. Your future, your direction.</p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>

      {/* LOGIN MODAL */}
      <AnimatePresence>
        {loginOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLoginOpen(false)}
          >
            <motion.div
              className="login-modal"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setLoginOpen(false)}
                aria-label="Tutup"
              >
                <X />
              </button>

              <div className="modal-logo">
                <Compass size={30} />
              </div>
              <span className="section-tag">WELCOME TO YOUR JOURNEY</span>
              <h2>Let's get started!</h2>
              <p className="modal-description">
                Pilih akunmu untuk melanjutkan perjalanan.
              </p>

              <div className="role-selector">
                <button
                  className={role === "siswa" ? "active" : ""}
                  onClick={() => setRole("siswa")}
                >
                  <GraduationCap size={19} />
                  Siswa
                </button>
                <button
                  className={role === "guru" ? "active" : ""}
                  onClick={() => setRole("guru")}
                >
                  <BookOpen size={19} />
                  Guru BK
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Fitur login akan diaktifkan setelah database dan autentikasi disiapkan.");
                }}
              >
                <label>
                  {role === "siswa" ? "Nama lengkap" : "Nama guru"}
                  <input
                    type="text"
                    placeholder={
                      role === "siswa"
                        ? "Masukkan nama lengkap"
                        : "Masukkan nama guru"
                    }
                    required
                  />
                </label>

                {role === "siswa" && (
                  <label>
                    Kelas
                    <input type="text" placeholder="Contoh: XII IPA 1" required />
                  </label>
                )}

                <label>
                  Sandi akses
                  <input type="password" placeholder="Masukkan sandi" required />
                </label>

                <button type="submit" className="primary-button modal-submit">
                  Masuk ke Dream Map <ArrowRight size={18} />
                </button>
              </form>

              <p className="modal-footnote">
                Your journey begins with one step.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;