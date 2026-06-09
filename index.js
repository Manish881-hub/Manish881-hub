// -------------------------------------------------------------------------------------
// USER CONFIGURATION - UPDATE THESE DETAILS
// -------------------------------------------------------------------------------------
const userData = {
    githubUsername: "Manish881-hub",
    name: "Manish Bhakti Sagar",
    social: {
        twitter: "manishbhakti",
        linkedin: "manishbhaktisagar",
        discord: "Manish881",
    },
};
// -------------------------------------------------------------------------------------

const readme = `\
<h1 align="center">${userData.name}</h1>
<p align="center">
  Frontend Engineer · Founder @ <a href="https://adtext.org">Adtext</a>
</p>

<p align="center">
  <a href="https://linkedin.com/in/${userData.social.linkedin}">LinkedIn</a> ·
  <a href="https://adtext.org">Adtext</a> ·
  <a href="https://x.com/${userData.social.twitter}">X</a>
</p>

---

## About

Building <a href="https://adtext.org">Adtext</a> — monetization infrastructure for AI applications.

**Currently focused on:**
- Next.js · React · TypeScript
- Product Engineering
- AI Applications

**Interested in:**
- Startups · Developer Tools · SaaS · AI Infrastructure

---

## Tech Stack

**Frontend**  
React · Next.js · TypeScript · Tailwind CSS

**Backend**  
Node.js · PostgreSQL · REST APIs

**Tools**  
Git · Docker · Vercel · Figma

---

## Featured Projects

### Adtext
Monetization infrastructure for AI applications.

### Portfolio
Personal website showcasing projects and experiments.

### AI Experiments
Small products and prototypes exploring AI workflows.

---

## GitHub Stats

<img src="https://github-readme-stats.vercel.app/api?username=${userData.githubUsername}&show_icons=true&theme=dark&hide_border=true&count_private=true&include_all_commits=true" />
\`
console.log(readme)

