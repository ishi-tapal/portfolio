import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Chip,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Grid,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  FaPython,
  FaNodeJs,
  FaReact,
  FaJava,
  FaLinux,
  FaDatabase,
  FaGithub,
  FaAngular,
} from "react-icons/fa";
import {
  SiElasticsearch,
  SiSplunk,
  SiSpring,
  SiMysql,
  SiJavascript,
  SiBurpsuite,
  SiKalilinux,
  SiMetasploit,
  SiOwasp,
  SiUbuntu,
  SiVmware,
  SiElasticsearch as SiEs,
} from "react-icons/si";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ParticleBackground from "./Particle";
import Typewriter from "typewriter-effect";
//import Typed from "react-typed";

//import emailjs from "emailjs-com";

/* -------------------------
  THEME / CONSTANTS
   ------------------------- */
const theme = {
  background: "#0a0f1a",
  text: "#e0e0e0",
  accent: "#00e5ff",
  accentHover: "#00bcd4",
  cardBg: "rgba(255, 255, 255, 0.03)",
  cardBorder: "rgba(0,229,255,0.10)",
  cardShadow: "rgba(0,229,255,0.04)",
};

/* -------------------------
  Simple motion variants
   ------------------------- */
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const cardMotion = {
  whileHover: { scale: 1.02, boxShadow: `0 0 25px ${theme.accent}` },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

/* -------------------------
  Data
   ------------------------- */
const skillCategories = [
  {
    title: "Secure Development & Automation",
    skills: [
      "C",
      "C++",
      "Python",
      "Node.js",
      "React.js",
      "Spring Boot",
      "RESTful APIs",
      "Git",
    ],
  },
  {
    title: "Monitoring & Detection",
    skills: [
      "Elasticsearch",
      "Splunk",
      "SIEM",
      "Log Analysis",
      "Threat Detection",
    ],
  },
  {
    title: "Offensive Testing Concepts",
    skills: [
      "Metasploit",
      "Burp Suite",
      "Vuln Assessment",
      "Pen Testing Concepts",
    ],
  },
  {
    title: "App & Infra Security",
    skills: ["OWASP Top 10", "OAuth 2.0", "MFA", "LDAP", "API Security"],
  },
];

const certifications = [
  "IT Fundamentals for Cybersecurity — Coursera | IBM",
  "Network Security Associate (NSE 1-3) — Fortinet",
  "Splunk Core Fundamentals — Splunk Training",
  "Cyber Security & Ethical Hacking — IIT Kanpur (Summer)",
   "Martian Internship Program — Persistent Systems",
];

const experience = [
  {
    title: "Security Engineer",
    company: "Jio Platforms Ltd. – Navi Mumbai, Maharashtra",
    date: "Dec 2023 – Present",
    points: [
      // "Built secure full-stack apps with React.js, Node.js, Spring Boot, and Material UI, reducing vulnerabilities by 35%.",
      // "Strengthened access control using RBAC, OAuth 2.0, and MFA, cutting unauthorized access incidents by up to 60%.",
      // "Improved security visibility and alert accuracy in ELK dashboards by 25%.",
      // "Automated data retrieval and alert enrichment in threat detection tools, speeding up response by 25%.",
      // "Conducted security code reviews and implemented encryption for full compliance with data protection standards.",
      // "Hardened APIs with token-based auth, rate limiting, and TLS, improving performance and security.",
      "Developed and secured full-stack applications using React.js, Node.js, Spring Boot, and Material UI with a strong focus on secure coding practices. Enhanced access control through RBAC, OAuth 2.0, and MFA, improved visibility and accuracy of security alerts using the ELK Stack, and automated data retrieval and alert enrichment to streamline threat detection. Conducted comprehensive security code reviews, implemented encryption to ensure data protection compliance, and hardened APIs with token-based authentication, rate limiting, and TLS for robust performance and security.",
    ],
  },
];

/* -------------------------
  Helper: Tech icons mapping
   ------------------------- */
const techIcons = [
  { icon: <FaPython size={36} />, label: "Python" },
  { icon: <SiJavascript size={36} />, label: "JavaScript" },
  { icon: <FaAngular size={36} />, label: "Angular" },
  { icon: <FaReact size={36} />, label: "React" },
  { icon: <FaNodeJs size={36} />, label: "Node.js" },
  { icon: <SiSpring size={36} />, label: "Spring" },
  { icon: <SiMysql size={36} />, label: "MySQL" },
  { icon: <FaGithub size={36} />, label: "GitHub" },
  { icon: <FaLinux size={36} />, label: "Linux" },
  { icon: <SiElasticsearch size={36} />, label: "Elasticsearch" },
  { icon: <SiSplunk size={36} />, label: "Splunk" },
  { icon: <SiBurpsuite size={36} />, label: "Burp Suite" },
  { icon: <SiKalilinux size={36} />, label: "Kali Linux" },
  { icon: <SiMetasploit size={36} />, label: "Metasploit" },
  { icon: <SiOwasp size={36} />, label: "OWASP" },
  { icon: <SiUbuntu size={36} />, label: "Ubuntu" },
  { icon: <SiVmware size={36} />, label: "VMware" },
];

/* -------------------------
  Main App
   ------------------------- */
export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  /* ---------- contact send (EmailJS) ---------- */
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   // replace with your EmailJS values
  //   const SERVICE_ID = "YOUR_SERVICE_ID";
  //   const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  //   const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  //   if (!form.name || !form.email || !form.message) {
  //     alert("Please fill all fields.");
  //     return;
  //   }

  //   setSending(true);
  //   emailjs
  //     .send(SERVICE_ID, TEMPLATE_ID, {
  //       from_name: form.name,
  //       from_email: form.email,
  //       message: form.message,
  //     }, PUBLIC_KEY)
  //     .then(
  //       (res) => {
  //         setSending(false);
  //         alert("Message sent — thank you!");
  //         setForm({ name: "", email: "", message: "" });
  //       },
  //       (err) => {
  //         setSending(false);
  //         console.error(err);
  //         alert("Failed to send — please check console or configure EmailJS keys.");
  //       }
  //     );
  // };

  /* ---------- styles for animated gradient (hero) ---------- */
  const gradientSx = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(-45deg, #07101a, #001726, #002a33, #001b26)",
    backgroundSize: "400% 400%",
    animation: "gradientMove 14s ease infinite",
    opacity: 0.65,
    zIndex: 0,
    "@keyframes gradientMove": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
  };

  return (
    //<Box sx={{ bgcolor: theme.background, color: theme.text, minHeight: "100vh", fontFamily: "Inter, Arial, sans-serif" }}>
    // <Box sx={{ position: "relative", bgcolor: theme.background, color: theme.text, minHeight: "100vh", fontFamily: "Inter, Arial, sans-serif" }}>
    <Box
      sx={{
        position: "relative",
        color: theme.text,
        minHeight: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
        backgroundColor: "transparent", // 🔥 make outer layer transparent
        overflowX: "hidden",
      }}
    >
      <ParticleBackground /> {/* ✅ background layer */}
      {/* smooth scrolling */}
      <style>{`html { scroll-behavior: smooth; }`}</style>
      {/* Navbar */}
      {/* <AppBar position="sticky" sx={{
        bgcolor: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)", zIndex: 1,
        position: "relative"
      }} >
        <Toolbar sx={{
          display: "flex", justifyContent: "space-between", zIndex: 1,
          position: "relative"
        }}>
          <Typography variant="h6" sx={{ color: theme.accent, fontWeight: 700 }}>
            Ishita Pal
          </Typography>

          <Box sx={{
            display: { xs: "none", md: "flex" }, gap: 2, zIndex: 1,
            position: "relative"
          }}>
            {sections.map((sec) => (
              <Button key={sec.id} href={`#${sec.id}`} sx={{ color: theme.accent, fontWeight: 600 }}>
                {sec.label}
              </Button>
            ))}
          </Box>

          <IconButton color="inherit" edge="end" sx={{ display: { xs: "block", md: "none" } }} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      {/* Drawer */}
      {/* <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{
          width: 220, bgcolor: theme.background, height: "100%", zIndex: 1,
          position: "relative"
        }}>
          <List>
            {sections.map((sec) => (
              <ListItem key={sec.id} disablePadding>
                <ListItemButton component="a" href={`#${sec.id}`} onClick={toggleDrawer}>
                  <ListItemText primary={sec.label} sx={{ color: theme.accent }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer> */}
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.9)", // darker background for contrast
          boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)", // subtle neon glow
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid rgba(0,229,255,0.3)",
          zIndex: 10, // ensure it's above container and particles
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: theme.accent, fontWeight: 700, letterSpacing: 0.5 }}
          >
            Ishita Pal
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {sections.map((sec) => (
              <Button
                key={sec.id}
                href={`#${sec.id}`}
                sx={{
                  color: theme.accent,
                  fontWeight: 600,
                  "&:hover": { color: "#fff" },
                }}
              >
                {sec.label}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 220,
            bgcolor: "rgba(0,0,0,0.92)",
            height: "100%",
            borderLeft: "1px solid rgba(0,229,255,0.3)",
          }}
        >
          <List>
            {sections.map((sec) => (
              <ListItem key={sec.id} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${sec.id}`}
                  onClick={toggleDrawer}
                >
                  <ListItemText
                    primary={sec.label}
                    sx={{ color: theme.accent, textAlign: "center" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {/* <Container maxWidth="md" sx={{
        pb: 8, zIndex: 1,
        position: "relative"
      }}> */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          //bgcolor: "rgba(0, 0, 0, 0.01)", // opaque black center block
          borderRadius: 3,
          boxShadow: "0 0 40px rgba(0, 229, 255, 0.95)",
          my: 4,
          //py: 4,
        }}
      >
        <Card
          sx={{
            //mb: 3,
            p: 2,
            background: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            boxShadow: `0 0 20px ${theme.cardShadow}`,
            backdropFilter: "blur(8px)",
            borderRadius: 3,
            textAlign: "left",
          }}
        >
          <CardContent>
            {/* HERO */}
            <Box
              sx={{
                position: "relative",
                height: { xs: 320, md: 400 },
                overflow: "hidden",
                mt: 3,
                borderRadius: 3,
              }}
            >
              {/* animated gradient */}
              <Box sx={gradientSx} />

              {/* subtle texture image (low opacity) */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.06,
                  zIndex: 1,
                }}
              />

              {/* dark overlay for contrast */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.35)",
                  zIndex: 2,
                }}
              />

              {/* Hero content */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 3,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 3,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: theme.accent,
                      fontWeight: 800,
                      textAlign: "center",
                      mb: 1,
                    }}
                  >
                    Hi, I’m Ishita Pal
                  </Typography>
                  <Typography
                    variant="h6"
                    color="#cfd8dc"
                    sx={{ textAlign: "center", mb: 3 }}
                  >
                    {/* <Typed
                      strings={[
                        "Securing Applications",
                        "Detecting Threats",
                        "Engineering Resilience",
                      ]}
                      typeSpeed={60}
                      backSpeed={30}
                      loop
                    /> */}
                    <Typewriter
                      options={{
                        strings: [
                          "Securing Applications | Detecting Threats | Engineering Resilience",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 40,
                      }}
                    />
                  </Typography>
                </motion.div>
              </Box>
            </Box>

            {/* ABOUT */}
            <InView triggerOnce rootMargin="-100px">
              {({ inView, ref }) => (
                <Box
                  id="about"
                  ref={ref}
                  sx={{ py: 6, scrollMarginTop: "80px" }}
                >
                  {/* <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={sectionVariant}
                    custom={0}
                  >
                    <Typography variant="h4" color={theme.accent} gutterBottom>
                      About Me
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#b0bec5"
                      sx={{ maxWidth: 900 }}
                    >
                      I’m a Security Engineer specializing in automating
                      analysis, application security, threat detection, API
                      hardening and creating systems that bridge development and
                      defense. I focus on building systems that are secure by
                      design, implementing RBAC, OAuth 2.0, MFA, and encryption
                      to protect data and access. I leverage the ELK Stack for
                      log analysis, alert correlation, and incident response to
                      enhance visibility and reduce risk.
                    </Typography>
                  </motion.div> */}
                  <Typography variant="h4" color={theme.accent} gutterBottom>
                    About Me
                  </Typography>
                  <motion.div {...cardMotion}>
                    <Card
                      sx={{
                        background: theme.cardBg,
                        border: `1px solid ${theme.cardBorder}`,
                        boxShadow: `0 0 15px ${theme.cardShadow}`,
                        backdropFilter: "blur(8px)",
                        borderRadius: 3,
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="#b0bec5"
                          sx={{ maxWidth: 900 }}
                        >
                          I’m a Security Engineer specializing in automating
                          analysis, application security, threat detection, API
                          hardening and creating systems that bridge development
                          and defense. I focus on building systems that are
                          secure by design, implementing RBAC, OAuth 2.0, MFA,
                          and encryption to protect data and access. I leverage
                          the ELK Stack for log analysis, alert correlation, and
                          incident response to enhance visibility and reduce
                          risk.
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              )}
            </InView>

            {/* METRICS */}
            <InView triggerOnce rootMargin="-100px">
              {({ inView, ref }) => (
                <Box ref={ref} sx={{ my: 3 }}>
                  <Grid container spacing={2} justifyContent="center">
                    {[
                      {
                        label: "Vulnerabilities Reduced",
                        value: 35,
                        suffix: "%",
                      },
                      {
                        label: "Faster Alert Response",
                        value: 25,
                        suffix: "%",
                      },
                      { label: "Access Incidents Cut", value: 60, suffix: "%" },
                    ].map((s, i) => (
                      <Grid item key={i}>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: inView ? 1 : 0 }}
                          transition={{ delay: i * 0.12 }}
                        >
                          <Card
                            sx={{
                              p: 2,
                              background: theme.cardBg,
                              border: `1px solid ${theme.cardBorder}`,
                              borderRadius: 2,
                            }}
                          >
                            <CardContent
                              sx={{ textAlign: "center", minWidth: 180 }}
                            >
                              <Typography
                                variant="h4"
                                sx={{ color: theme.accent, fontWeight: 800 }}
                              >
                                {inView ? (
                                  <CountUp
                                    end={s.value}
                                    duration={1.4}
                                    suffix={s.suffix}
                                  />
                                ) : (
                                  `0${s.suffix}`
                                )}
                              </Typography>
                              <Typography variant="body2" color="#cfd8dc">
                                {s.label}
                              </Typography>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </InView>

            {/* SKILLS */}
            <InView triggerOnce rootMargin="-120px">
              {({ inView, ref }) => (
                <Box id="skills" ref={ref} sx={{ py: 5 }}>
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={sectionVariant}
                    custom={0}
                  >
                    <Typography variant="h4" color={theme.accent} gutterBottom>
                      Technologies & Skills
                    </Typography>

                    {/* icon row */}
                    {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap", mb: 3 }}>
                  {techIcons.map((t, idx) => (
                    <Box key={idx} sx={{ textAlign: "center" }}>
                      <Avatar sx={{ bgcolor: "transparent", width: 64, height: 64 }}>
                        {t.icon}
                      </Avatar>
                      <Typography variant="caption" color="#b9dfe6">{t.label}</Typography>
                    </Box>
                  ))}
                </Box> */}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 3,
                        flexWrap: "wrap",
                        mb: 3,
                      }}
                    >
                      {techIcons.map((t, idx) => (
                        <Box key={idx} sx={{ textAlign: "center" }}>
                          <Avatar
                            component={motion.div}
                            whileHover={{
                              scale: 1.2,
                              boxShadow: "0 0 20px #00e5ff",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 10,
                            }}
                            sx={{
                              bgcolor: "transparent",
                              width: 64,
                              height: 64,
                              borderRadius: "50%",
                              border: "1px solid rgba(0,229,255,0.3)",
                              overflow: "hidden",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              "& svg": {
                                fontSize: 36,
                                color: "#b9dfe6",
                                transition: "color 0.3s ease",
                              },
                              "&:hover svg": {
                                color: "#00e5ff",
                              },
                            }}
                          >
                            {t.icon}
                          </Avatar>
                          <Typography
                            variant="caption"
                            color="#b9dfe6"
                            sx={{ mt: 1, display: "block" }}
                          >
                            {t.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* skill category cards */}
                    {/* <Grid container spacing={2}>
                  {skillCategories.map((cat, i) => (
                    <Grid item xs={12} md={6} key={i}>
                      <motion.div variants={sectionVariant} initial="hidden" animate={inView ? "visible" : "hidden"} custom={i}>
                        <Card sx={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}`, p: 2 }}>
                          <CardContent>
                            <Typography variant="h6" sx={{ color: theme.accent, fontWeight: 700, mb: 1 }}>{cat.title}</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                              {cat.skills.map((s, idx) => (
                                <Chip key={idx} label={s} size="small" sx={{
                                  m: 0.5, bgcolor: "rgba(255,255,255,0.03)", color: "#cfeff6", border: `1px solid rgba(0,229,255,0.06)`,
                                }} />
                              ))}
                            </Stack>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid> */}
                  </motion.div>
                </Box>
              )}
            </InView>

            {/* EXPERIENCE */}
            {/* Experience Section */}
            <Box id="experience" sx={{ py: 6, scrollMarginTop: "30px" }}>
              <Typography variant="h4" gutterBottom color={theme.accent}>
                Professional Experience
              </Typography>
              {experience.map((exp, i) => (
                <motion.div key={i} {...cardMotion}>
                  <Card
                    sx={{
                      mb: 3,
                      p: 2,
                      background: theme.cardBg,
                      border: `1px solid ${theme.cardBorder}`,
                      boxShadow: `0 0 20px ${theme.cardShadow}`,
                      backdropFilter: "blur(8px)",
                      borderRadius: 3,
                      textAlign: "left",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={theme.accent}
                      >
                        {exp.title} — {exp.company}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="#b0bec5"
                        sx={{ mb: 1 }}
                      >
                        {exp.date}
                      </Typography>
                      <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
                        {exp.points.map((point, idx) => (
                          <li key={idx}>
                            <Typography variant="body2" color="#cfd8dc">
                              {point}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>

            {/* Certifications Section */}
            <Box id="certifications" sx={{ py: 6, scrollMarginTop: "30px" }}>
              <Typography variant="h4" gutterBottom color={theme.accent}>
                Training & Certifications
              </Typography>
              {certifications.map((cert, i) => (
                <motion.div key={i} {...cardMotion}>
                  <Card
                    sx={{
                      mb: 2,
                      background: theme.cardBg,
                      border: `1px solid ${theme.cardBorder}`,
                      boxShadow: `0 0 15px ${theme.cardShadow}`,
                      backdropFilter: "blur(8px)",
                      borderRadius: 2,
                    }}
                  >
                    <CardContent>
                      <Typography variant="body2" color="#cfd8dc">
                        {cert}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>

            {/* Education Section */}
            <Box id="education" sx={{ py: 6, scrollMarginTop: "30px" }}>
              <Typography variant="h4" gutterBottom color={theme.accent}>
                Education
              </Typography>
              <motion.div {...cardMotion}>
                <Card
                  sx={{
                    background: theme.cardBg,
                    border: `1px solid ${theme.cardBorder}`,
                    boxShadow: `0 0 15px ${theme.cardShadow}`,
                    backdropFilter: "blur(8px)",
                    borderRadius: 3,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" color="#cfd8dc">
                      B.Tech. in Computer Science & Engineering
                    </Typography>
                    <Typography variant="body2" color="#cfd8dc">
                      Lakshmi Narain College of Technology & Science (LNCT&S),
                      Bhopal — CGPA: 9.15 / 10 (2019–2023)
                    </Typography>
                  </CardContent>
                  <CardContent>
                    {" "}
                    <Typography variant="h6" color="#cfd8dc">
                      Senior School Examination (Class XII)
                    </Typography>
                    <Typography variant="body2" color="#cfd8dc">
                      St. Thomas Convent Higher Secondary School (CBSE) —
                      Percentage: 74.2% (2018–2019)
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h6" color="#cfd8dc">
                      Secondary School Examination (Class X)
                    </Typography>
                    <Typography variant="body2" color="#cfd8dc">
                      St. Thomas Convent Higher Secondary School (CBSE) — CGPA:
                      8.6 / 10 (2016–2017)
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>

            {/* CONTACT */}
            <InView triggerOnce rootMargin="-120px">
              {({ inView, ref }) => (
                <Box id="contact" ref={ref} textAlign="center" sx={{ py: 6 }}>
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={sectionVariant}
                  >
                    <Typography variant="h5" color={theme.accent} gutterBottom>
                      Get In Touch
                    </Typography>

                    {/* <Box component="form" onSubmit={sendEmail} sx={{ maxWidth: 640, mx: "auto", mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField name="name" value={form.name} onChange={onChange} fullWidth size="small" label="Your name" variant="filled" sx={{ background: "rgba(0,0,0,0.25)", borderRadius: 1 }} InputProps={{ sx: { color: "#e0f7fa" } }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField name="email" value={form.email} onChange={onChange} fullWidth size="small" label="Email" variant="filled" sx={{ background: "rgba(0,0,0,0.25)", borderRadius: 1 }} InputProps={{ sx: { color: "#e0f7fa" } }} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="message" value={form.message} onChange={onChange} fullWidth multiline rows={4} label="Message" variant="filled" sx={{ background: "rgba(0,0,0,0.25)", borderRadius: 1 }} InputProps={{ sx: { color: "#e0f7fa" } }} />
                    </Grid>

                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                      <Button type="submit" variant="contained" disabled={sending} sx={{ bgcolor: theme.accent, "&:hover": { bgcolor: theme.accentHover } }}>
                        {sending ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box> */}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 3,
                        mt: 4,
                      }}
                    >
                      <a
                        href="mailto:310ishitapal@gmail.com"
                        style={{ color: theme.accent }}
                      >
                        <EmailIcon fontSize="large" />
                      </a>
                      <a
                        href="https://github.com/ishi-tapal/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: theme.accent }}
                      >
                        <GitHubIcon fontSize="large" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ishita-pal-"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: theme.accent }}
                      >
                        <LinkedInIcon fontSize="large" />
                      </a>
                    </Box>

                    <Typography variant="body2" color="#90a4ae" sx={{ mt: 3 }}>
                      © {new Date().getFullYear()} Ishita Pal. All rights
                      reserved.
                    </Typography>
                  </motion.div>
                </Box>
              )}
            </InView>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
