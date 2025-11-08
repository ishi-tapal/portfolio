// import React from "react";
// import { Button, Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
// import { motion } from "framer-motion";
// import DownloadIcon from "@mui/icons-material/Download";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";

// export default function App() {
//   const projects = [
//     {
//       title: "Network Log Analysis",
//       desc: "Built an ELK-based SIEM processing 50GB+ logs daily for faster security incident detection.",
//       stack: "Elasticsearch, Logstash, Kibana, Python",
//     },
//     {
//       title: "Firewall Audit Automation",
//       desc: "Automated firewall rule parsing using Python, reducing manual review time by 90%.",
//       stack: "Python, Regex, YAML",
//     },
//     {
//       title: "Secure Web Application",
//       desc: "Developed a secure full-stack app following OWASP Top 10 practices.",
//       stack: "React, Node.js, Spring Boot",
//     },
//   ];

//   const skills = [
//     "C, C++, Python, Node.js, React.js, Spring Boot, RESTful APIs, Git (Version Control)",
//     "Elasticsearch, Splunk, SIEM, Log Analysis, Threat Detection, Anomaly Investigation",
//     "Metasploit, Burp Suite, Vulnerability Assessment Concepts, Penetration Testing Concepts",
//     "OWASP Top 10, OAuth 2.0, Multi-Factor Authentication (MFA), LDAP, API Security",
//     "MySQL, NoSQL (Elasticsearch Indexing)",
//     "Apache Tomcat, Linux (RHEL, Ubuntu, CentOS), Windows Server",
//   ];

//   const certifications = [
//     "IT Fundamentals for Cybersecurity (Specialization) — Coursera | IBM",
//     "Network Security Associate (NSE 1, NSE 2 & NSE 3) — Fortinet",
//     "Splunk Core Fundamentals — Splunk Training",
//     "Cyber Security & Ethical Hacking Summer Training — E&ICT Academy, IIT Kanpur",
//     "Martian Internship Program — Persistent Systems",
//   ];

//   const experience = [
//     {
//       title: "Security Engineer",
//       company: "Jio Platforms Ltd. – Navi Mumbai, Maharashtra",
//       date: "December 2023 – Present",
//       points: [
//         "Developed secure full-stack applications using React.js, Node.js, Spring Boot, and Material UI, reducing security vulnerabilities by 35% through OWASP Top 10 coding standards.",
//         "Created dashboards for security event visibility, aiding quicker incident investigation and response.",
//         "Verified session management and input validation controls against OWASP benchmarks, preventing recurring application-layer vulnerabilities.",
//         "Collaborated with the InfoSec team to fine-tune correlation rules and alert thresholds in ELK-based detection systems, improving alert accuracy by 25%.",
//         "Integrated REST APIs for automated data retrieval and alert enrichment in an in-house threat deception tool, improving detection accuracy and response time by 25%.",
//         "Integrated authentication and authorization with RBAC and OAuth 2.0, strengthening access control and reducing unauthorized access incidents by 40%.",
//         "Performed detailed security code reviews, identifying and remediating critical CVSS 8+ vulnerabilities before deployment.",
//         "Monitored and analyzed application security logs, improving detection of anomalous activity by 25% using ELK stack.",
//         "Implemented encryption for data at rest and in transit, achieving 100% compliance with company data protection standards.",
//         "Deployed Multi-Factor Authentication (MFA) for all administrative accounts, reducing credential-based breaches by 60%.",
//         "Managed patch management cycles, ensuring 95% compliance with monthly security updates.",
//         "Hardened API endpoints using token-based authentication, rate limiting, and TLS encryption, preventing unauthorized data access and improving response latency by 30%.",
//       ],
//     },
//   ];

//   return (
//     <Container maxWidth="md" sx={{ py: 6 }}>
//       {/* Hero Section */}
//       <Box textAlign="center" sx={{ py: 10 }}>
//         <Typography variant="h3" fontWeight="bold" gutterBottom>
//           Hi, I’m <span style={{ color: "#2196f3" }}>Ishita Pal</span>
//         </Typography>
//         <Typography variant="h6" color="text.secondary" gutterBottom>
//           Securing applications |  Detecting threats | Engineering resilience 
//         </Typography>

//         <Box sx={{ mt: 4 }}>
//           <Button
//             variant="contained"
//             startIcon={<DownloadIcon />}
//             href="/Your_Resume.pdf"
//             sx={{ mr: 2 }}
//           >
//             Download Resume
//           </Button>
//           <Button variant="outlined" href="#projects">
//             View Projects
//           </Button>
//         </Box>
//       </Box>

//       {/* About Section */}
//       <Box sx={{ py: 6 }}>
//         <Typography variant="h4" gutterBottom color="primary">
//           About Me
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           I’m a Security Engineer specializing in automating analysis, application security, threat detection, API hardening and creating systems that bridge development and defense. I focus on building systems that are secure by design, implementing RBAC, OAuth 2.0, MFA, and encryption to protect data and access.
//           I leverage the ELK Stack for log analysis, alert correlation, and incident response to enhance visibility and reduce risk. I combine security expertise with full-stack development skills to create resilient, compliant, and threat-aware applications.
//         </Typography>
//       </Box>

//       {/* Skills Section */}
//       <Box id="skills" sx={{ py: 6 }}>
//         <Typography variant="h4" gutterBottom color="primary">
//           Skills, Tools & Programming Languages
//         </Typography>
//         <Grid container spacing={2}>
//           {skills.map((skill, i) => (
//             <Grid item xs={12} key={i}>
//               <Card elevation={2}>
//                 <CardContent>
//                   <Typography variant="body2">{skill}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Experience Section */}
//       <Box id="experience" sx={{ py: 6 }}>
//         <Typography variant="h4" gutterBottom color="primary">
//           Professional Experience
//         </Typography>
//         {experience.map((exp, i) => (
//           <Box key={i} sx={{ mb: 4 }}>
//             <Typography variant="h6" fontWeight="bold">
//               {exp.title} — {exp.company}
//             </Typography>
//             <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
//               {exp.date}
//             </Typography>
//             <ul style={{ paddingLeft: "1.5rem" }}>
//               {exp.points.map((point, idx) => (
//                 <li key={idx}>
//                   <Typography variant="body2" color="text.secondary">
//                     {point}
//                   </Typography>
//                 </li>
//               ))}
//             </ul>
//           </Box>
//         ))}
//       </Box>

//       {/* Certifications Section */}
//       <Box sx={{ py: 6 }}>
//         <Typography variant="h4" gutterBottom color="primary">
//           Training & Certifications
//         </Typography>
//         <Grid container spacing={2}>
//           {certifications.map((cert, i) => (
//             <Grid item xs={12} key={i}>
//               <Card elevation={1}>
//                 <CardContent>
//                   <Typography variant="body2">{cert}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Education Section */}
//       <Box sx={{ py: 6 }}>
//         <Typography variant="h4" gutterBottom color="primary">
//           Education
//         </Typography>
//         <Card elevation={2}>
//           <CardContent>
//             <Typography variant="h6">B.Tech. in Computer Science & Engineering</Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lakshmi Narain College of Technology & Science (LNCT&S), Bhopal — CGPA: 9.15 / 10 (2019–2023)
//             </Typography>
//           </CardContent>
//         </Card>
//       </Box>

//       {/* Contact Section */}
//       <Box textAlign="center" sx={{ py: 8 }}>
//         <Typography variant="h4" gutterBottom color="primary">
//           Get In Touch
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 3,
//             mt: 2,
//           }}
//         >
//           <a href="mailto:310ishitapal@gmail.com" style={{ color: "inherit" }}>
//             <EmailIcon fontSize="large" />
//           </a>
//           <a
//             href="https://github.com/yourgithub"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "inherit" }}
//           >
//             <GitHubIcon fontSize="large" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/ishita-pal"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "inherit" }}
//           >
//             <LinkedInIcon fontSize="large" />
//           </a>
//         </Box>
//         <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
//           © {new Date().getFullYear()} Ishita Pal. All rights reserved.
//         </Typography>
//       </Box>
//     </Container>
//   );
// }


// import React from "react";
// import {
//   Button,
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Chip,
//   Stack,
//   Divider,
//   IconButton,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import DownloadIcon from "@mui/icons-material/Download";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";
// import SecurityIcon from "@mui/icons-material/Security";
// import TerminalIcon from "@mui/icons-material/Terminal";
// import CodeIcon from '@mui/icons-material/Code';
// import BugReportIcon from '@mui/icons-material/BugReport';
// import StorageIcon from '@mui/icons-material/Storage';
// import DnsIcon from '@mui/icons-material/Dns';

// export default function App() {
//   const projects = [
//     {
//       title: "Network Log Analysis",
//       desc: "Built an ELK-based SIEM processing 50GB+ logs daily for faster security incident detection.",
//       stack: "Elasticsearch, Logstash, Kibana, Python",
//     },
//     {
//       title: "Firewall Audit Automation",
//       desc: "Automated firewall rule parsing using Python, reducing manual review time by 90%.",
//       stack: "Python, Regex, YAML",
//     },
//     {
//       title: "Secure Web Application",
//       desc: "Developed a secure full-stack app following OWASP Top 10 practices.",
//       stack: "React, Node.js, Spring Boot",
//     },
//   ];


//   const certifications = [
//     "IT Fundamentals for Cybersecurity (Specialization) — Coursera | IBM",
//     "Network Security Associate (NSE 1, NSE 2 & NSE 3) — Fortinet",
//     "Splunk Core Fundamentals — Splunk Training",
//     "Cyber Security & Ethical Hacking Summer Training — E&ICT Academy, IIT Kanpur",
//     "Martian Internship Program — Persistent Systems",
//   ];

//   const skillCategories = [
//     {
//       title: 'Secure Development & Automation',
//       icon: <CodeIcon sx={{ color: '#00e5ff' }} />,
//       skills: ['C', 'C++', 'Python', 'Node.js', 'React.js', 'Spring Boot', 'RESTful APIs', 'Git (Version Control)']
//     },
//     {
//       title: 'Security Monitoring & Analysis',
//       icon: <SecurityIcon sx={{ color: '#00e5ff' }} />,
//       skills: ['Elasticsearch', 'Splunk', 'SIEM', 'Log Analysis', 'Threat Detection', 'Anomaly Investigation']
//     },
//     {
//       title: 'Offensive Security & Testing',
//       icon: <BugReportIcon sx={{ color: '#00e5ff' }} />,
//       skills: ['Metasploit', 'Burp Suite', 'Vulnerability Assessment concepts', 'Penetration Testing concepts']
//     },
//     {
//       title: 'Application & Infrastructure Security',
//       icon: <TerminalIcon sx={{ color: '#00e5ff' }} />,
//       skills: ['OWASP Top 10', 'OAuth 2.0', 'Multi-Factor Authentication (MFA)', 'LDAP', 'API Security']
//     },
//     {
//       title: 'Databases',
//       icon: <StorageIcon sx={{ color: '#00e5ff' }} />,
//       skills: ['MySQL', 'NoSQL (Elasticsearch Indexing)']
//     },
//     {
//       title: 'Server Technologies & Operating Systems',
//       icon: <DnsIcon sx={{ color: '#00e5ff' }} />,
//       skills: ['Apache Tomcat', 'Linux (RHEL, Ubuntu, CentOS)', 'Windows Server']
//     }
//   ];

//   const experience = [
//     {
//       title: "Security Engineer",
//       company: "Jio Platforms Ltd. – Navi Mumbai, Maharashtra",
//       date: "December 2023 – Present",
//       points: [
//         "Developed secure full-stack applications using React.js, Node.js, and Spring Boot, reducing security vulnerabilities by 35% through OWASP Top 10 compliance.",
//         "Created dashboards and automated reports for enhanced visibility into application and network security events.",
//         "Fine-tuned ELK-based correlation rules and alert logic, improving detection precision by 25%.",
//         "Integrated RBAC, OAuth 2.0, and MFA to strengthen authentication and authorization frameworks.",
//         "Automated REST API-driven log ingestion and alert enrichment processes to accelerate detection and response.",
//         "Implemented TLS encryption and patch management policies ensuring 95%+ compliance with organizational standards.",
//       ],
//     },
//   ];

//   const theme = {
//     background: "linear-gradient(180deg, #060b14 0%, #0d192b 100%)",
//     color: "#e0f7fa",
//     accent: "#00e5ff",
//   };

//   return (
//     <Box
//       sx={{
//         ...theme,
//         minHeight: "100vh",
//         py: 6,
//         animation: "pulse 6s ease-in-out infinite",
//         "@keyframes pulse": {
//           "0%": { boxShadow: "0 0 10px #00e5ff" },
//           "50%": { boxShadow: "0 0 40px #00e5ff" },
//           "100%": { boxShadow: "0 0 10px #00e5ff" },
//         },
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Hero Section */}
//         <Box textAlign="center" sx={{ py: { xs: 6, md: 10 }, px: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Typography
//               variant="h3"
//               fontWeight="bold"
//               gutterBottom
//               sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
//             >
//               Hi, I’m <span style={{ color: theme.accent }}>Ishita Pal</span>
//             </Typography>
//             <Typography
//               variant="h6"
//               color="rgba(224,247,250,0.8)"
//               gutterBottom
//               sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
//             >
//               Securing applications • Detecting threats • Engineering resilience
//             </Typography>

//             <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
//               <Button
//                 component={motion.a}
//                 whileHover={{ scale: 1.05, boxShadow: `0 0 10px ${theme.accent}` }}
//                 variant="contained"
//                 startIcon={<DownloadIcon />}
//                 href="/Your_Resume.pdf"
//                 sx={{
//                   background: theme.accent,
//                   color: "#001",
//                   fontWeight: 600,
//                 }}
//               >
//                 Download Resume
//               </Button>
//               <Button
//                 component={motion.a}
//                 whileHover={{ scale: 1.05, color: theme.accent }}
//                 variant="outlined"
//                 href="#projects"
//                 sx={{ color: theme.accent, borderColor: theme.accent }}
//               >
//                 View Projects
//               </Button>
//             </Box>
//           </motion.div>
//         </Box>

//         {/* About Section */}
//         <Box sx={{ py: 6, px: 2 }}>
//           <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: theme.accent, textAlign: 'center' }}>
//             About Me
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ color: "rgba(224,247,250,0.85)", lineHeight: 1.7, fontSize: { xs: "0.9rem", md: "1rem" } }}
//           >
//             I’m a Security Engineer specializing in automation, application security, and detection engineering. I bridge development and defense by building systems that are secure by design — implementing RBAC, OAuth 2.0, MFA, and encryption to safeguard data and identities. Skilled in ELK-based log analysis, threat correlation, and response automation for enhanced visibility and resilience.
//           </Typography>
//         </Box>

//         {/* Skills Section */}
//         {/* <Box id="skills" sx={{ py: 6, px: 2 }}>
//           <Typography variant="h4" gutterBottom sx={{ color: theme.accent }}>
//             Skills, Tools & Programming Languages
//           </Typography>
//           <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
//             {skills.map((s) => (
//               <Chip
//                 key={s}
//                 label={s}
//                 component={motion.div}
//                 whileHover={{ scale: 1.1, boxShadow: `0 0 8px ${theme.accent}` }}
//                 sx={{
//                   m: 0.5,
//                   color: theme.color,
//                   border: `1px solid ${theme.accent}`,
//                   transition: "0.3s",
//                 }}
//               />
//             ))}
//           </Stack>

//           <Divider sx={{ my: 3, borderColor: "rgba(0,229,255,0.1)" }} />

//           <Typography variant="subtitle1" sx={{ color: theme.accent, mb: 1 }}>
//             Tools
//           </Typography>
//           <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
//             {tools.map((t) => (
//               <Chip
//                 key={t}
//                 label={t}
//                 component={motion.div}
//                 whileHover={{ scale: 1.1, boxShadow: `0 0 8px ${theme.accent}` }}
//                 sx={{
//                   m: 0.5,
//                   color: theme.color,
//                   border: `1px solid ${theme.accent}`,
//                   transition: "0.3s",
//                 }}
//               />
//             ))}
//           </Stack>

//           <Divider sx={{ my: 3, borderColor: "rgba(0,229,255,0.1)" }} />

//           <Typography variant="subtitle1" sx={{ color: theme.accent, mb: 1 }}>
//             Programming Languages
//           </Typography>
//           <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
//             {languages.map((l) => (
//               <Chip
//                 key={l}
//                 label={l}
//                 component={motion.div}
//                 whileHover={{ scale: 1.1, boxShadow: `0 0 8px ${theme.accent}` }}
//                 sx={{
//                   m: 0.5,
//                   color: theme.color,
//                   border: `1px solid ${theme.accent}`,
//                   transition: "0.3s",
//                 }}
//               />
//             ))}
//           </Stack>
//         </Box> */}


//         <Box sx={{ background: 'linear-gradient(180deg, #0a0f18 0%, #02070a 100%)', color: '#e6f7ff', py: 8 }}>
//           <Container maxWidth="lg">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: theme.accent, textAlign: 'center' }}>
//                 Technologies & Skills
//               </Typography>
//               <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'rgba(230,247,255,0.7)', mb: 6 }}>
//                 Tools, frameworks, and platforms empowering secure engineering and automated defense.
//               </Typography>

//               <Grid container spacing={1}>
//                 {skillCategories.map((cat, i) => (
//                   <Grid item xs={12} key={i}>
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ type: 'spring', stiffness: 200, damping: 15 }}
//                     >
//                       <Card
//                         sx={{
//                           background: 'rgba(0, 10, 20, 0.6)',
//                           border: '1px solid rgba(0,229,255,0.12)',
//                           boxShadow: '0 0 15px rgba(0,229,255,0.04)',
//                           backdropFilter: 'blur(6px)',
//                           borderRadius: 2,
//                           width: '100%',
//                           '&:hover': {
//                             boxShadow: '0 0 25px rgba(0,229,255,0.15)',
//                             borderColor: 'rgba(0,229,255,0.25)'
//                           }
//                         }}
//                       >
//                         <CardContent alignItems="center">
//                           <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
//                             {cat.icon}
//                             <Typography variant="h6" sx={{ fontWeight: 600, color: '#00e5ff' }}>
//                               {cat.title}
//                             </Typography>
//                           </Stack>
//                           <Stack direction="row" spacing={1} flexWrap="wrap">
//                             {cat.skills.map((s, idx) => (
//                               <Chip
//                                 key={idx}
//                                 label={s}
//                                 size="small"
//                                 component={motion.div}
//                                 whileHover={{ scale: 1.1, boxShadow: '0 0 10px #00e5ff' }}
//                                 sx={{
//                                   m: 0.5,
//                                   bgcolor: 'rgba(255,255,255,0.05)',
//                                   color: '#e6f7ff',
//                                   border: '1px solid rgba(0,229,255,0.15)',
//                                   '&:hover': {
//                                     bgcolor: 'rgba(0,229,255,0.08)',
//                                     color: '#00e5ff'
//                                   }
//                                 }}
//                               />
//                             ))}
//                           </Stack>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   </Grid>
//                 ))}
//               </Grid>
//             </motion.div>
//           </Container>
//         </Box>




//         {/* Experience Section */}
//         <Box id="experience" sx={{ py: 6, px: 2 }}>
//           <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: theme.accent, textAlign: 'center' }}>
//             Professional Experience
//           </Typography>
//           {experience.map((exp, i) => (
//             <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="h6" fontWeight="bold" sx={{ color: theme.color }}>
//                   {exp.title} — {exp.company}
//                 </Typography>
//                 <Typography variant="subtitle2" sx={{ color: "rgba(224,247,250,0.7)", mb: 2 }}>
//                   {exp.date}
//                 </Typography>
//                 <ul style={{ paddingLeft: "1.5rem" }}>
//                   {exp.points.map((p, idx) => (
//                     <li key={idx}>
//                       <Typography variant="body2" sx={{ color: "rgba(224,247,250,0.8)" }}>
//                         {p}
//                       </Typography>
//                     </li>
//                   ))}
//                 </ul>
//               </Box>
//             </motion.div>
//           ))}
//         </Box>

//         {/* Certifications */}
//         <Box sx={{ py: 6, px: 2 }}>
//           <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: theme.accent, textAlign: 'center' }}>
//             Training & Certifications
//           </Typography>
//           <Grid container spacing={2}>
//             {certifications.map((cert, i) => (
//               <Grid item xs={12} sm={6} key={i}>
//                 <motion.div whileHover={{ scale: 1.02, boxShadow: `0 0 10px ${theme.accent}` }}>
//                   <Card sx={{ bgcolor: "rgba(0,0,0,0.3)", border: `1px solid ${theme.accent}`, transition: "0.3s" }}>
//                     <CardContent>
//                       <Typography variant="body2" sx={{ color: theme.color }}>
//                         {cert}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Education */}
//         <Box sx={{ py: 6, px: 2 }}>
//           <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: theme.accent, textAlign: 'center' }}>
//             Education
//           </Typography>
//           <motion.div whileHover={{ scale: 1.02, boxShadow: `0 0 10px ${theme.accent}` }}>
//             <Card sx={{ bgcolor: "rgba(0,0,0,0.3)", border: `1px solid ${theme.accent}`, transition: "0.3s" }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ color: theme.color }}>
//                   B.Tech. in Computer Science & Engineering
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "rgba(224,247,250,0.8)" }}>
//                   Lakshmi Narain College of Technology & Science (LNCT&S), Bhopal — CGPA: 9.15 / 10 (2019–2023)
//                 </Typography>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </Box>

//         {/* Contact */}
//         <Box textAlign="center" sx={{ py: 8 }}>
//           <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: theme.accent, textAlign: 'center' }}>
//             Get In Touch
//           </Typography>
//           <Stack direction="row" justifyContent="center" spacing={3} sx={{ mt: 2, flexWrap: "wrap" }}>
//             <motion.a whileHover={{ scale: 1.2 }} href="mailto:310ishitapal@gmail.com" style={{ color: theme.color }}>
//               <EmailIcon fontSize="large" />
//             </motion.a>
//             <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" style={{ color: theme.color }}>
//               <GitHubIcon fontSize="large" />
//             </motion.a>
//             <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ishita-pal-" target="_blank" rel="noopener noreferrer" style={{ color: theme.color }}>
//               <LinkedInIcon fontSize="large" />
//             </motion.a>
//           </Stack>
//           <Typography variant="body2" sx={{ mt: 3, color: "rgba(224,247,250,0.7)" }}>
//             © {new Date().getFullYear()} Ishita Pal. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }


// import React from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   Stack,
//   Chip,
// } from "@mui/material";
// import Grid from '@mui/material/GridLegacy';
// import { motion } from "framer-motion";
// import DownloadIcon from "@mui/icons-material/Download";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";

// export default function App() {
//   const skillCategories = [
//     {
//       title: "Secure Development & Automation",
//       skills: [
//         "C",
//         "C++",
//         "Python",
//         "Node.js",
//         "React.js",
//         "Spring Boot",
//         "RESTful APIs",
//         "Git (Version Control)",
//       ],
//     },
//     {
//       title: "Security Monitoring & Analysis",
//       skills: [
//         "Elasticsearch",
//         "Splunk",
//         "SIEM",
//         "Log Analysis",
//         "Threat Detection",
//         "Anomaly Investigation",
//       ],
//     },
//     {
//       title: "Offensive Security & Testing",
//       skills: [
//         "Metasploit",
//         "Burp Suite",
//         "Vulnerability Assessment Concepts",
//         "Penetration Testing Concepts",
//       ],
//     },
//     {
//       title: "Application & Infrastructure Security",
//       skills: [
//         "OWASP Top 10",
//         "OAuth 2.0",
//         "Multi-Factor Authentication (MFA)",
//         "LDAP",
//         "API Security",
//       ],
//     },
//     {
//       title: "Databases",
//       skills: ["MySQL", "NoSQL (Elasticsearch Indexing)"],
//     },
//     {
//       title: "Server Technologies & Operating Systems",
//       skills: [
//         "Apache Tomcat",
//         "Linux (RHEL, Ubuntu, CentOS)",
//         "Windows Server",
//       ],
//     },
//   ];

//   const certifications = [
//     "IT Fundamentals for Cybersecurity (Specialization) — Coursera | IBM",
//     "Network Security Associate (NSE 1, NSE 2 & NSE 3) — Fortinet",
//     "Splunk Core Fundamentals — Splunk Training",
//     "Cyber Security & Ethical Hacking Summer Training — E&ICT Academy, IIT Kanpur",
//     "Martian Internship Program — Persistent Systems",
//   ];

//   const experience = [
//     {
//       title: "Security Engineer",
//       company: "Jio Platforms Ltd. – Navi Mumbai, Maharashtra",
//       date: "Dec 2023 – Present",
//       points: [
//         "Developed secure full-stack applications using React.js, Node.js, Spring Boot, and Material UI, reducing security vulnerabilities by 35%.",
//         "Created dashboards for security event visibility, aiding faster incident investigation and response.",
//         "Integrated RBAC and OAuth 2.0 to strengthen access control, reducing unauthorized access by 40%.",
//         "Collaborated with InfoSec team to fine-tune ELK-based detection systems, improving alert accuracy by 25%.",
//         "Deployed Multi-Factor Authentication (MFA) for administrative accounts, reducing credential-based breaches by 60%.",
//       ],
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         bgcolor: "#0a0f1a",
//         color: "#e0e0e0",
//         minHeight: "100vh",
//         py: 6,
//       }}
//     >
//       <Container maxWidth="md" sx={{ textAlign: "center" }}>
//         {/* Hero Section */}
//         <Box sx={{ py: 10 }}>
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//             Hi, I’m <span style={{ color: "#00e5ff" }}>Ishita Pal</span>
//           </Typography>
//           <Typography variant="h6" color="#cfd8dc" gutterBottom>
//             Securing Applications • Detecting Threats • Engineering Resilience
//           </Typography>
//           <Box sx={{ mt: 4 }}>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               href="/Your_Resume.pdf"
//               sx={{
//                 mr: 2,
//                 bgcolor: "#00e5ff",
//                 color: "#0a0f1a",
//                 "&:hover": { bgcolor: "#00bcd4" },
//               }}
//             >
//               Download Resume
//             </Button>
//             <Button
//               variant="outlined"
//               href="#skills"
//               sx={{
//                 color: "#00e5ff",
//                 borderColor: "#00e5ff",
//                 "&:hover": { borderColor: "#00bcd4", color: "#00bcd4" },
//               }}
//             >
//               View Skills
//             </Button>
//           </Box>
//         </Box>

//         {/* About Section */}
//         <Box sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color="#00e5ff">
//             About Me
//           </Typography>
//           <Typography
//             variant="body1"
//             color="#b0bec5"
//             sx={{ maxWidth: 800, mx: "auto" }}
//           >
//             I’m a Security Engineer specializing in automating analysis,
//             application security, and threat detection. I build systems that are
//             secure by design using RBAC, OAuth 2.0, MFA, and encryption. My work
//             blends security expertise with full-stack development to deliver
//             resilient and compliant solutions.
//           </Typography>
//         </Box>

//         {/* Skills Section */}
//         <Box id="skills" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color="#00e5ff">
//             Technologies & Skills
//           </Typography>
//           <Grid container spacing={3}>
//             {skillCategories.map((cat, i) => (
//               <Grid item xs={12} key={i}>
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                 >
//                   <Card
//                     sx={{
//                       width: "100%",
//                       background: "rgba(255, 255, 255, 0.05)",
//                       border: "1px solid rgba(0,229,255,0.15)",
//                       boxShadow: "0 0 20px rgba(0,229,255,0.05)",
//                       backdropFilter: "blur(8px)",
//                       borderRadius: 3,
//                       textAlign: "center",
//                       "&:hover": {
//                         boxShadow: "0 0 25px rgba(0,229,255,0.2)",
//                         borderColor: "rgba(0,229,255,0.25)",
//                       },
//                     }}
//                   >
//                     <CardContent>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 600,
//                           color: "#00e5ff",
//                           mb: 2,
//                         }}
//                       >
//                         {cat.title}
//                       </Typography>
//                       <Stack
//                         direction="row"
//                         spacing={1}
//                         flexWrap="wrap"
//                         justifyContent="center"
//                       >
//                         {cat.skills.map((s, idx) => (
//                           <Chip
//                             key={idx}
//                             label={s}
//                             size="small"
//                             component={motion.div}
//                             whileHover={{
//                               scale: 1.1,
//                               boxShadow: "0 0 10px #00e5ff",
//                             }}
//                             sx={{
//                               m: 0.5,
//                               bgcolor: "rgba(255,255,255,0.05)",
//                               color: "#e0f7fa",
//                               border: "1px solid rgba(0,229,255,0.15)",
//                               "&:hover": {
//                                 bgcolor: "rgba(0,229,255,0.1)",
//                                 color: "#00e5ff",
//                               },
//                             }}
//                           />
//                         ))}
//                       </Stack>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Experience Section */}
//         <Box id="experience" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color="#00e5ff">
//             Professional Experience
//           </Typography>
//           {experience.map((exp, i) => (
//             <Card
//               key={i}
//               sx={{
//                 mb: 3,
//                 p: 2,
//                 background: "rgba(255, 255, 255, 0.05)",
//                 border: "1px solid rgba(0,229,255,0.15)",
//                 boxShadow: "0 0 20px rgba(0,229,255,0.05)",
//                 backdropFilter: "blur(8px)",
//                 borderRadius: 3,
//                 textAlign: "left",
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold" color="#00e5ff">
//                   {exp.title} — {exp.company}
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   color="#b0bec5"
//                   sx={{ mb: 1 }}
//                 >
//                   {exp.date}
//                 </Typography>
//                 <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
//                   {exp.points.map((point, idx) => (
//                     <li key={idx}>
//                       <Typography variant="body2" color="#cfd8dc">
//                         {point}
//                       </Typography>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>

//         {/* Certifications Section */}
//         <Box id="certifications" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color="#00e5ff">
//             Training & Certifications
//           </Typography>
//           {certifications.map((cert, i) => (
//             <Card
//               key={i}
//               sx={{
//                 mb: 2,
//                 background: "rgba(255,255,255,0.05)",
//                 border: "1px solid rgba(0,229,255,0.15)",
//                 boxShadow: "0 0 15px rgba(0,229,255,0.05)",
//                 backdropFilter: "blur(8px)",
//                 borderRadius: 2,
//               }}
//             >
//               <CardContent>
//                 <Typography variant="body2" color="#cfd8dc">
//                   {cert}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>

//         {/* Education Section */}
//         <Box id="education" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color="#00e5ff">
//             Education
//           </Typography>
//           <Card
//             sx={{
//               background: "rgba(255,255,255,0.05)",
//               border: "1px solid rgba(0,229,255,0.15)",
//               boxShadow: "0 0 15px rgba(0,229,255,0.05)",
//               backdropFilter: "blur(8px)",
//               borderRadius: 3,
//             }}
//           >
//             <CardContent>
//               <Typography variant="h6" color="#cfd8dc">
//                 B.Tech. in Computer Science & Engineering
//               </Typography>
//               <Typography variant="body2" color="#cfd8dc">
//                 Lakshmi Narain College of Technology & Science (LNCT&S), Bhopal
//                 — CGPA: 9.15 / 10 (2019–2023)
//               </Typography>
//             </CardContent>
//           </Card>
//         </Box>

//         {/* Contact Section */}
//         <Box textAlign="center" sx={{ py: 8 }}>
//           <Typography variant="h4" gutterBottom color="#00e5ff">
//             Get In Touch
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               gap: 3,
//               mt: 2,
//             }}
//           >
//             <a href="mailto:310ishitapal@gmail.com" style={{ color: "inherit" }}>
//               <EmailIcon fontSize="large" />
//             </a>
//             <a
//               href="https://github.com/yourgithub"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "inherit" }}
//             >
//               <GitHubIcon fontSize="large" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/ishita-pal"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "inherit" }}
//             >
//               <LinkedInIcon fontSize="large" />
//             </a>
//           </Box>
//           <Typography variant="body2" color="#90a4ae" sx={{ mt: 3 }}>
//             © {new Date().getFullYear()} Ishita Pal. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// import React from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   Stack,
//   Chip,
// } from "@mui/material";
// import Grid from "@mui/material/GridLegacy";
// import { motion } from "framer-motion";
// import DownloadIcon from "@mui/icons-material/Download";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";

// export default function App() {
//   const skillCategories = [
//     {
//       title: "Secure Development & Automation",
//       skills: [
//         "C",
//         "C++",
//         "Python",
//         "Node.js",
//         "React.js",
//         "Spring Boot",
//         "RESTful APIs",
//         "Git (Version Control)",
//       ],
//     },
//     {
//       title: "Security Monitoring & Analysis",
//       skills: [
//         "Elasticsearch",
//         "Splunk",
//         "SIEM",
//         "Log Analysis",
//         "Threat Detection",
//         "Anomaly Investigation",
//       ],
//     },
//     {
//       title: "Offensive Security & Testing",
//       skills: [
//         "Metasploit",
//         "Burp Suite",
//         "Vulnerability Assessment Concepts",
//         "Penetration Testing Concepts",
//       ],
//     },
//     {
//       title: "Application & Infrastructure Security",
//       skills: [
//         "OWASP Top 10",
//         "OAuth 2.0",
//         "Multi-Factor Authentication (MFA)",
//         "LDAP",
//         "API Security",
//       ],
//     },
//     {
//       title: "Databases",
//       skills: ["MySQL", "NoSQL (Elasticsearch Indexing)"],
//     },
//     {
//       title: "Server Technologies & Operating Systems",
//       skills: [
//         "Apache Tomcat",
//         "Linux (RHEL, Ubuntu, CentOS)",
//         "Windows Server",
//       ],
//     },
//   ];

//   const certifications = [
//     "IT Fundamentals for Cybersecurity (Specialization) — Coursera | IBM",
//     "Network Security Associate (NSE 1, NSE 2 & NSE 3) — Fortinet",
//     "Splunk Core Fundamentals — Splunk Training",
//     "Cyber Security & Ethical Hacking Summer Training — E&ICT Academy, IIT Kanpur",
//     "Martian Internship Program — Persistent Systems",
//   ];

//   const experience = [
//     {
//       title: "Security Engineer",
//       company: "Jio Platforms Ltd. – Navi Mumbai, Maharashtra",
//       date: "Dec 2023 – Present",
//       points: [
//         "Developed secure full-stack applications using React.js, Node.js, Spring Boot, and Material UI, reducing security vulnerabilities by 35%.",
//         "Created dashboards for security event visibility, aiding faster incident investigation and response.",
//         "Integrated RBAC and OAuth 2.0 to strengthen access control, reducing unauthorized access by 40%.",
//         "Collaborated with InfoSec team to fine-tune ELK-based detection systems, improving alert accuracy by 25%.",
//         "Deployed Multi-Factor Authentication (MFA) for administrative accounts, reducing credential-based breaches by 60%.",
//       ],
//     },
//   ];

//   const theme = {
//     background: "#0a0f1a",
//     text: "#e0e0e0",
//     accent: "#00e5ff",
//     accentHover: "#00bcd4",
//     cardBg: "rgba(255, 255, 255, 0.05)",
//     cardBorder: "rgba(0,229,255,0.15)",
//     cardShadow: "rgba(0,229,255,0.05)",
//   };

//   const cardMotion = {
//     whileHover: { scale: 1.03, boxShadow: `0 0 25px ${theme.accent}` },
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: "easeOut" },
//   };

//   return (
//     <Box
//       sx={{
//         bgcolor: theme.background,
//         color: theme.text,
//         minHeight: "100vh",
//         py: 6,
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <Container maxWidth="md" sx={{ textAlign: "center" }}>
//         {/* Hero Section */}
//         <Box sx={{ py: 10 }}>
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//             Hi, I’m <span style={{ color: theme.accent }}>Ishita Pal</span>
//           </Typography>
//           <Typography variant="h6" color="#cfd8dc" gutterBottom>
//             Securing Applications • Detecting Threats • Engineering Resilience
//           </Typography>
//           <Box sx={{ mt: 4 }}>
//             <Button
//               variant="contained"
//               startIcon={<DownloadIcon />}
//               href="/Your_Resume.pdf"
//               sx={{
//                 mr: 2,
//                 bgcolor: theme.accent,
//                 color: theme.background,
//                 "&:hover": { bgcolor: theme.accentHover },
//               }}
//             >
//               Download Resume
//             </Button>
//             <Button
//               variant="outlined"
//               href="#skills"
//               sx={{
//                 color: theme.accent,
//                 borderColor: theme.accent,
//                 "&:hover": { borderColor: theme.accentHover, color: theme.accentHover },
//               }}
//             >
//               View Skills
//             </Button>
//           </Box>
//         </Box>

//         {/* About Section */}
//         <Box sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             About Me
//           </Typography>
//           <Typography
//             variant="body1"
//             color="#b0bec5"
//             sx={{ maxWidth: 800, mx: "auto" }}
//           >
//             I’m a Security Engineer specializing in automating analysis,
//             application security, and threat detection. I build systems that are
//             secure by design using RBAC, OAuth 2.0, MFA, and encryption. My work
//             blends security expertise with full-stack development to deliver
//             resilient and compliant solutions.
//           </Typography>
//         </Box>

//         {/* Skills Section */}
//         <Box id="skills" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Technologies & Skills
//           </Typography>
//           <Grid container spacing={3}>
//             {skillCategories.map((cat, i) => (
//               <Grid item xs={12} key={i}>
//                 <motion.div {...cardMotion}>
//                   <Card
//                     sx={{
//                       width: "100%",
//                       background: theme.cardBg,
//                       border: `1px solid ${theme.cardBorder}`,
//                       boxShadow: `0 0 20px ${theme.cardShadow}`,
//                       backdropFilter: "blur(8px)",
//                       borderRadius: 3,
//                       textAlign: "center",
//                     }}
//                   >
//                     <CardContent>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 600,
//                           color: theme.accent,
//                           mb: 2,
//                         }}
//                       >
//                         {cat.title}
//                       </Typography>
//                       <Stack
//                         direction="row"
//                         spacing={1}
//                         flexWrap="wrap"
//                         justifyContent="center"
//                       >
//                         {cat.skills.map((s, idx) => (
//                           <Chip
//                             key={idx}
//                             label={s}
//                             size="small"
//                             component={motion.div}
//                             whileHover={{
//                               scale: 1.1,
//                               boxShadow: `0 0 10px ${theme.accent}`,
//                             }}
//                             sx={{
//                               m: 0.5,
//                               bgcolor: "rgba(255,255,255,0.05)",
//                               color: "#e0f7fa",
//                               border: `1px solid rgba(0,229,255,0.15)`,
//                               "&:hover": {
//                                 bgcolor: "rgba(0,229,255,0.1)",
//                                 color: theme.accent,
//                               },
//                             }}
//                           />
//                         ))}
//                       </Stack>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Experience Section */}
//         <Box id="experience" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Professional Experience
//           </Typography>
//           {experience.map((exp, i) => (
//             <motion.div key={i} {...cardMotion}>
//               <Card
//                 sx={{
//                   mb: 3,
//                   p: 2,
//                   background: theme.cardBg,
//                   border: `1px solid ${theme.cardBorder}`,
//                   boxShadow: `0 0 20px ${theme.cardShadow}`,
//                   backdropFilter: "blur(8px)",
//                   borderRadius: 3,
//                   textAlign: "left",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold" color={theme.accent}>
//                     {exp.title} — {exp.company}
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     color="#b0bec5"
//                     sx={{ mb: 1 }}
//                   >
//                     {exp.date}
//                   </Typography>
//                   <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
//                     {exp.points.map((point, idx) => (
//                       <li key={idx}>
//                         <Typography variant="body2" color="#cfd8dc">
//                           {point}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </Box>

//         {/* Certifications Section */}
//         <Box id="certifications" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Training & Certifications
//           </Typography>
//           {certifications.map((cert, i) => (
//             <motion.div key={i} {...cardMotion}>
//               <Card
//                 sx={{
//                   mb: 2,
//                   background: theme.cardBg,
//                   border: `1px solid ${theme.cardBorder}`,
//                   boxShadow: `0 0 15px ${theme.cardShadow}`,
//                   backdropFilter: "blur(8px)",
//                   borderRadius: 2,
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="body2" color="#cfd8dc">
//                     {cert}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </Box>

//         {/* Education Section */}
//         <Box id="education" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Education
//           </Typography>
//           <motion.div {...cardMotion}>
//             <Card
//               sx={{
//                 background: theme.cardBg,
//                 border: `1px solid ${theme.cardBorder}`,
//                 boxShadow: `0 0 15px ${theme.cardShadow}`,
//                 backdropFilter: "blur(8px)",
//                 borderRadius: 3,
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" color="#cfd8dc">
//                   B.Tech. in Computer Science & Engineering
//                 </Typography>
//                 <Typography variant="body2" color="#cfd8dc">
//                   Lakshmi Narain College of Technology & Science (LNCT&S), Bhopal
//                   — CGPA: 9.15 / 10 (2019–2023)
//                 </Typography>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </Box>

//         {/* Contact Section */}
//         <Box textAlign="center" sx={{ py: 8 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Get In Touch
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               gap: 3,
//               mt: 2,
//             }}
//           >
//             <a href="mailto:310ishitapal@gmail.com" style={{ color: "inherit" }}>
//               <EmailIcon fontSize="large" />
//             </a>
//             <a
//               href="https://github.com/yourgithub"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "inherit" }}
//             >
//               <GitHubIcon fontSize="large" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/ishita-pal"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "inherit" }}
//             >
//               <LinkedInIcon fontSize="large" />
//             </a>
//           </Box>
//           <Typography variant="body2" color="#90a4ae" sx={{ mt: 3 }}>
//             © {new Date().getFullYear()} Ishita Pal. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// import React from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   Stack,
//   Chip,
// } from "@mui/material";
// import Grid from "@mui/material/GridLegacy";
// import { motion } from "framer-motion";
// import DownloadIcon from "@mui/icons-material/Download";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";

// export default function App() {
//   const skillCategories = [
//     {
//       title: "Secure Development & Automation",
//       skills: [
//         "C",
//         "C++",
//         "Python",
//         "Node.js",
//         "React.js",
//         "Spring Boot",
//         "RESTful APIs",
//         "Git (Version Control)",
//       ],
//     },
//     {
//       title: "Security Monitoring & Analysis",
//       skills: [
//         "Elasticsearch",
//         "Splunk",
//         "SIEM",
//         "Log Analysis",
//         "Threat Detection",
//         "Anomaly Investigation",
//       ],
//     },
//     {
//       title: "Offensive Security & Testing",
//       skills: [
//         "Metasploit",
//         "Burp Suite",
//         "Vulnerability Assessment Concepts",
//         "Penetration Testing Concepts",
//       ],
//     },
//     {
//       title: "Application & Infrastructure Security",
//       skills: [
//         "OWASP Top 10",
//         "OAuth 2.0",
//         "Multi-Factor Authentication (MFA)",
//         "LDAP",
//         "API Security",
//       ],
//     },
//     {
//       title: "Databases",
//       skills: ["MySQL", "NoSQL (Elasticsearch Indexing)"],
//     },
//     {
//       title: "Server Technologies & Operating Systems",
//       skills: [
//         "Apache Tomcat",
//         "Linux (RHEL, Ubuntu, CentOS)",
//         "Windows Server",
//       ],
//     },
//   ];

//   const certifications = [
//     "IT Fundamentals for Cybersecurity (Specialization) — Coursera | IBM",
//     "Network Security Associate (NSE 1, NSE 2 & NSE 3) — Fortinet",
//     "Splunk Core Fundamentals — Splunk Training",
//     "Cyber Security & Ethical Hacking Summer Training — E&ICT Academy, IIT Kanpur",
//     "Martian Internship Program — Persistent Systems",
//   ];

//   const experience = [
//     {
//       title: "Security Engineer",
//       company: "Jio Platforms Ltd. – Navi Mumbai, Maharashtra",
//       date: "Dec 2023 – Present",
//       points: [
//         "Developed secure full-stack applications using React.js, Node.js, Spring Boot, and Material UI, reducing security vulnerabilities by 35%.",
//         "Created dashboards for security event visibility, aiding faster incident investigation and response.",
//         "Integrated RBAC and OAuth 2.0 to strengthen access control, reducing unauthorized access by 40%.",
//         "Collaborated with InfoSec team to fine-tune ELK-based detection systems, improving alert accuracy by 25%.",
//         "Deployed Multi-Factor Authentication (MFA) for administrative accounts, reducing credential-based breaches by 60%.",
//       ],
//     },
//   ];

//   const theme = {
//     background: "#0a0f1a",
//     text: "#e0e0e0",
//     accent: "#00e5ff",
//     accentHover: "#00bcd4",
//     cardBg: "rgba(255, 255, 255, 0.05)",
//     cardBorder: "rgba(0,229,255,0.15)",
//     cardShadow: "rgba(0,229,255,0.05)",
//   };

//   const cardMotion = {
//     whileHover: { scale: 1.03, boxShadow: `0 0 25px ${theme.accent}` },
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: "easeOut" },
//   };

//   return (
//     <Box
//       sx={{
//         bgcolor: theme.background,
//         color: theme.text,
//         minHeight: "100vh",
//         py: 6,
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <Container maxWidth="md" sx={{ textAlign: "center" }}>
//         {/* Hero Section */}
//         <Box sx={{ py: 10 }}>
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//             Hi, I’m <span style={{ color: theme.accent }}>Ishita Pal</span>
//           </Typography>
//           <Typography variant="h6" color="#cfd8dc" gutterBottom>
//             Securing Applications • Detecting Threats • Engineering Resilience
//           </Typography>
//         </Box>

//         {/* About Section */}
//         <Box sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             About Me
//           </Typography>
//           <Typography
//             variant="body1"
//             color="#b0bec5"
//             sx={{ maxWidth: 800, mx: "auto" }}
//           >I’m a Security Engineer specializing in automating analysis, application security, threat detection, API hardening and creating systems that bridge development and defense. I focus on building systems that are secure by design, implementing RBAC, OAuth 2.0, MFA, and encryption to protect data and access.
//             I leverage the ELK Stack for log analysis, alert correlation, and incident response to enhance visibility and reduce risk. I combine security expertise with full-stack development skills to create resilient, compliant, and threat-aware applications.
//           </Typography>
//         </Box>

//         {/* Skills Section */}
//         <Box id="skills" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Technologies & Skills
//           </Typography>
//           <Grid container spacing={3}>
//             {skillCategories.map((cat, i) => (
//               <Grid item xs={12} key={i}>
//                 <motion.div {...cardMotion}>
//                   <Card
//                     sx={{
//                       width: "100%",
//                       background: theme.cardBg,
//                       border: `1px solid ${theme.cardBorder}`,
//                       boxShadow: `0 0 20px ${theme.cardShadow}`,
//                       backdropFilter: "blur(8px)",
//                       borderRadius: 3,
//                       textAlign: "center",
//                     }}
//                   >
//                     <CardContent>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 600,
//                           color: theme.accent,
//                           mb: 2,
//                         }}
//                       >
//                         {cat.title}
//                       </Typography>
//                       <Stack
//                         direction="row"
//                         spacing={1}
//                         flexWrap="wrap"
//                         justifyContent="center"
//                       >
//                         {cat.skills.map((s, idx) => (
//                           <Chip
//                             key={idx}
//                             label={s}
//                             size="small"
//                             component={motion.div}
//                             whileHover={{
//                               scale: 1.1,
//                               boxShadow: `0 0 10px ${theme.accent}`,
//                             }}
//                             sx={{
//                               m: 0.5,
//                               bgcolor: "rgba(255,255,255,0.05)",
//                               color: "#e0f7fa",
//                               border: `1px solid rgba(0,229,255,0.15)`,
//                               "&:hover": {
//                                 bgcolor: "rgba(0,229,255,0.1)",
//                                 color: theme.accent,
//                               },
//                             }}
//                           />
//                         ))}
//                       </Stack>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Experience Section */}
//         <Box id="experience" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Professional Experience
//           </Typography>
//           {experience.map((exp, i) => (
//             <motion.div key={i} {...cardMotion}>
//               <Card
//                 sx={{
//                   mb: 3,
//                   p: 2,
//                   background: theme.cardBg,
//                   border: `1px solid ${theme.cardBorder}`,
//                   boxShadow: `0 0 20px ${theme.cardShadow}`,
//                   backdropFilter: "blur(8px)",
//                   borderRadius: 3,
//                   textAlign: "left",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold" color={theme.accent}>
//                     {exp.title} — {exp.company}
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     color="#b0bec5"
//                     sx={{ mb: 1 }}
//                   >
//                     {exp.date}
//                   </Typography>
//                   <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
//                     {exp.points.map((point, idx) => (
//                       <li key={idx}>
//                         <Typography variant="body2" color="#cfd8dc">
//                           {point}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </Box>

//         {/* Certifications Section */}
//         <Box id="certifications" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Training & Certifications
//           </Typography>
//           {certifications.map((cert, i) => (
//             <motion.div key={i} {...cardMotion}>
//               <Card
//                 sx={{
//                   mb: 2,
//                   background: theme.cardBg,
//                   border: `1px solid ${theme.cardBorder}`,
//                   boxShadow: `0 0 15px ${theme.cardShadow}`,
//                   backdropFilter: "blur(8px)",
//                   borderRadius: 2,
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="body2" color="#cfd8dc">
//                     {cert}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </Box>

//         {/* Education Section */}
//         <Box id="education" sx={{ py: 6 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Education
//           </Typography>
//           <motion.div {...cardMotion}>
//             <Card
//               sx={{
//                 background: theme.cardBg,
//                 border: `1px solid ${theme.cardBorder}`,
//                 boxShadow: `0 0 15px ${theme.cardShadow}`,
//                 backdropFilter: "blur(8px)",
//                 borderRadius: 3,
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" color="#cfd8dc">
//                   B.Tech. in Computer Science & Engineering
//                 </Typography>
//                 <Typography variant="body2" color="#cfd8dc">
//                   Lakshmi Narain College of Technology & Science (LNCT&S), Bhopal
//                   — CGPA: 9.15 / 10 (2019–2023)
//                 </Typography>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </Box>

//         {/* Contact Section */}
//         <Box textAlign="center" sx={{ py: 8 }}>
//           <Typography variant="h4" gutterBottom color={theme.accent}>
//             Get In Touch
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               gap: 3,
//               mt: 2,
//             }}
//           >
//             <a href="mailto:310ishitapal@gmail.com" style={{ color: "inherit" }}>
//               <EmailIcon fontSize="large" />
//             </a>
//             <a
//               href="https://github.com/yourgithub"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "inherit" }}
//             >
//               <GitHubIcon fontSize="large" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/ishita-pal"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "inherit" }}
//             >
//               <LinkedInIcon fontSize="large" />
//             </a>
//           </Box>
//           <Typography variant="body2" color="#90a4ae" sx={{ mt: 3 }}>
//             © {new Date().getFullYear()} Ishita Pal. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/GridLegacy";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import image from "./assets/rough-black-lines-textured-background.jpg";

export default function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const skillCategories = [
    {
      title: "Secure Development & Automation",
      skills: ["C", "C++", "Python", "Node.js", "React.js", "Spring Boot", "RESTful APIs", "Git (Version Control)"],
    },
    {
      title: "Security Monitoring & Analysis",
      skills: ["Elasticsearch", "Splunk", "SIEM", "Log Analysis", "Threat Detection", "Anomaly Investigation"],
    },
    {
      title: "Offensive Security & Testing",
      skills: ["Metasploit", "Burp Suite", "Vulnerability Assessment Concepts", "Penetration Testing Concepts"],
    },
    {
      title: "Application & Infrastructure Security",
      skills: ["OWASP Top 10", "OAuth 2.0", "Multi-Factor Authentication (MFA)", "LDAP", "API Security"],
    },
    { title: "Databases", skills: ["MySQL", "NoSQL (Elasticsearch Indexing)"] },
    {
      title: "Server Technologies & Operating Systems",
      skills: ["Apache Tomcat", "Linux (RHEL, Ubuntu, CentOS)", "Windows Server"],
    },
  ];

  const certifications = [
    "IT Fundamentals for Cybersecurity (Specialization) — Coursera | IBM",
    "Network Security Associate (NSE 1, NSE 2 & NSE 3) — Fortinet",
    "Splunk Core Fundamentals — Splunk Training",
    "Cyber Security & Ethical Hacking Summer Training — E&ICT Academy, IIT Kanpur",
    "Martian Internship Program — Persistent Systems",
  ];

  const experience = [
    {
      title: "Security Engineer",
      company: "Jio Platforms Ltd. – Navi Mumbai, Maharashtra",
      date: "Dec 2023 – Present",
      points: [
        "Built secure full-stack apps with React.js, Node.js, Spring Boot, and Material UI, reducing vulnerabilities by 35%.",
        "Strengthened access control using RBAC, OAuth 2.0, and MFA, cutting unauthorized access incidents by up to 60%.",
        "Improved security visibility and alert accuracy in ELK dashboards by 25%.",
        "Automated data retrieval and alert enrichment in threat detection tools, speeding up response by 25%.",
        "Conducted security code reviews and implemented encryption for full compliance with data protection standards.",
        "Hardened APIs with token-based auth, rate limiting, and TLS, improving performance and security.",
      ],
    },
  ];

  const theme = {
    background: "#0a0f1a",
    text: "#e0e0e0",
    accent: "#00e5ff",
    accentHover: "#00bcd4",
    cardBg: "rgba(255, 255, 255, 0.05)",
    cardBorder: "rgba(0,229,255,0.15)",
    cardShadow: "rgba(0,229,255,0.05)",
  };

  const cardMotion = {
    whileHover: { scale: 1.03, boxShadow: `0 0 25px ${theme.accent}` },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Box sx={{ bgcolor: theme.background, color: theme.text, minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      {/* <AppBar position="sticky" sx={{ bgcolor: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: { xs: "center", sm: "center" }, flexWrap: "wrap", gap: 2 }}>
          {sections.map((sec) => (
            <Button
              key={sec.id}
              href={`#${sec.id}`}
              sx={{ color: theme.accent, fontWeight: 600, "&:hover": { color: theme.accentHover }, fontSize: { xs: 12, sm: 14, md: 16 } }}
            >
              {sec.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar> */}

      <AppBar position="sticky" sx={{ bgcolor: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: theme.accent, fontWeight: 600 }}>
            Home
          </Typography>

          {/* Desktop Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {sections.map((sec) => (
              <Button
                key={sec.id}
                href={`#${sec.id}`}
                sx={{ color: theme.accent, fontWeight: 600, "&:hover": { color: theme.accentHover } }}
              >
                {sec.label}
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu Icon */}
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

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 200, bgcolor: theme.background, height: "100%" }}>
          <List>
            {sections.map((sec) => (
              <ListItem key={sec.id} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${sec.id}`}
                  onClick={toggleDrawer}
                >
                  <ListItemText primary={sec.label} sx={{ color: theme.accent }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Container maxWidth="md">
        {/* Hero Section */}
        <Box
          sx={{
            py: { xs: 8, sm: 12, md: 15 },
            textAlign: "center",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0,0,0,0.6)",
              zIndex: 1,
            }}
          />
          <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <Typography variant="h4" sm="h3" md="h3" fontWeight="bold" gutterBottom sx={{ color: theme.accent, fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }}>
                Hi, I’m Ishita Pal
              </Typography>
              <Typography variant="h6" color="#cfd8dc" gutterBottom sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" } }}>
                Securing Applications • Detecting Threats • Engineering Resilience
              </Typography>
            </motion.div>
          </Box>
        </Box>

        {/* About Section */}
        <Box id="about" sx={{ py: { xs: 4, sm: 6 }, scrollMarginTop: "80px" }}>
          <Typography variant="h5" sm="h4" color={theme.accent} gutterBottom>
            About Me
          </Typography>
          <Typography variant="body2" color="#b0bec5" sx={{ maxWidth: 800, mx: "auto", fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" } }}>
            I’m a Security Engineer specializing in automating analysis, application security, threat detection, API hardening and creating systems that bridge development and defense. I focus on building systems that are secure by design, implementing RBAC, OAuth 2.0, MFA, and encryption to protect data and access. I leverage the ELK Stack for log analysis, alert correlation, and incident response to enhance visibility and reduce risk.
          </Typography>
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={{ py: { xs: 4, sm: 6 }, scrollMarginTop: "80px" }}>
          <Typography variant="h5" color={theme.accent} gutterBottom>
            Technologies & Skills
          </Typography>
          <Grid container spacing={2}>
            {skillCategories.map((cat, i) => (
              <Grid item xs={12} sm={6} md={12} key={i}>
                <motion.div {...cardMotion}>
                  <Card
                    sx={{
                      width: "100%",
                      background: theme.cardBg,
                      border: `1px solid ${theme.cardBorder}`,
                      boxShadow: `0 0 20px ${theme.cardShadow}`,
                      backdropFilter: "blur(8px)",
                      borderRadius: 3,
                      textAlign: "center",
                      mb: 2,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: theme.accent, mb: 1 }}>
                        {cat.title}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                        {cat.skills.map((s, idx) => (
                          <Chip
                            key={idx}
                            label={s}
                            size="small"
                            component={motion.div}
                            whileHover={{ scale: 1.1, boxShadow: `0 0 10px ${theme.accent}` }}
                            sx={{
                              m: 0.5,
                              bgcolor: "rgba(255,255,255,0.05)",
                              color: "#e0f7fa",
                              border: `1px solid rgba(0,229,255,0.15)`,
                              "&:hover": { bgcolor: "rgba(0,229,255,0.1)", color: theme.accent },
                              fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.85rem" },
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

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
                  <Typography variant="h6" fontWeight="bold" color={theme.accent}>
                    {exp.title} — {exp.company}
                  </Typography>
                  <Typography variant="subtitle2" color="#b0bec5" sx={{ mb: 1 }}>
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
                  Lakshmi Narain College of Technology & Science (LNCT&S), Bhopal
                  — CGPA: 9.15 / 10 (2019–2023)
                </Typography></CardContent>
              <CardContent> <Typography variant="h6" color="#cfd8dc">
                Senior School Examination (Class XII)
              </Typography>
                <Typography variant="body2" color="#cfd8dc">
                  St. Thomas Convent Higher Secondary School (CBSE)
                  — Percentage: 74.2% (2018–2019)
                </Typography></CardContent>
              <CardContent><Typography variant="h6" color="#cfd8dc">
                Secondary School Examination (Class X)
              </Typography>
                <Typography variant="body2" color="#cfd8dc">
                  St. Thomas Convent Higher Secondary School (CBSE)
                  — CGPA: 8.6 / 10 (2016–2017)
                </Typography></CardContent>


            </Card>
          </motion.div>
        </Box>

        {/* Contact Section */}
        <Box id="contact" textAlign="center" sx={{ py: 8, scrollMarginTop: "30px" }}>
          <Typography variant="h4" gutterBottom color={theme.accent}>
            Get In Touch
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
            <a href="mailto:310ishitapal@gmail.com" style={{ color: "inherit" }}>
              <EmailIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/ishi-tapal/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/ishita-pal-"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </Box>
          <Typography variant="body2" color="#90a4ae" sx={{ mt: 3 }}>
            © {new Date().getFullYear()} Ishita Pal. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

