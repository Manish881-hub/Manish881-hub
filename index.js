const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// -------------------------------------------------------------------------------------
// USER CONFIGURATION - UPDATE THESE DETAILS
// -------------------------------------------------------------------------------------
const userData = {
    githubUsername: "Manish881-hub", // Your GitHub username
    name: "Manish Bhakti Sagar", // Your name
    designation: "Student| Software Engineer– Frontend Systems",
    company: "Not Yet",

    // blogUrls: {
    //    hashnode: "https://apoorvtyagi.tech/",
    //    devto: "https://dev.to/apoorvtyagi"
    // },
    social: {
        twitter: "manishbhakti",
        linkedin: "manishbhaktisagar",
        discord: "Manish881",
        //buyMeACoffee: "apoorvtyagi"
    },
    techStack: [
        { name: "Java", icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg", width: 65, height: 65 },
        { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg", width: 55, height: 55 },
        { name: "Spring", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", width: 55, height: 55 },
        { name: "Nodejs", icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg", width: 55, height: 55 },
        { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", width: 55, height: 55 },
        { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", width: 55, height: 55 },
        { name: "Elastic", icon: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg", width: 55, height: 55 },
        { name: "Azure", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg", width: 55, height: 55 },
        { name: "Docker", icon: "https://www.vectorlogo.zone/logos/docker/docker-official.svg", width: 60, height: 50 },
        { name: "MySQL", icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg", width: 45, height: 55 },
        { name: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", width: 45, height: 55 }
    ],
    funFact: "Je connais un peu le français",
    hobbies: "Talk to me about Football, python (neither of these is any insect or animal)",
    currentlyReading: "**The Art of Being Alone** by Renuka Gavrani",
    dailyUsed: "**.js**, **.java**, **.py**,  **.sql**"
};
// -------------------------------------------------------------------------------------

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
# Hi there! <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="35" />
<p align="center">
<a href="https://twitter.com/${userData.social.twitter}" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="${userData.social.twitter}" height="30" width="30" /></a>&nbsp;
<a href="https://linkedin.com/in/${userData.social.linkedin}" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="${userData.social.linkedin}" height="30" width="30" /></a>&nbsp;
<a href="http://discord.com/users/${userData.social.discord}" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/discord.svg" alt="${userData.social.discord}" height="40" width="30" /></a>&nbsp;
</p>

![](https://camo.githubusercontent.com/992babdffd8c74a1502de375fbdf7e4d54773242/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f53576f536b4e36447854737a71494b4571762f67697068792e676966)

### <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Developer.gif" width="45" /> About Me:
- 🏦 I'm a ${userData.designation} working for ${userData.company}
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
- 💻 I use daily: ${userData.dailyUsed}
- 📖 I am currently reading ${userData.currentlyReading}
- 💬 ${userData.hobbies}
- 👯 We can connect to play some games of Chess ♟
- ⚡ Fun fact: ${userData.funFact}
- 🧑‍💻 Tech I work on :

<p align="center">
    ${userData.techStack.map(tech => `<img src="${tech.icon}" alt="${tech.name}" width="${tech.width}" height="${tech.height}"/>`).join(' ')}
</p>

---
### <img src='https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e47x2g034i9pzwtzzsd3xgg2w9nr94t4tflbbgo3008&rid=giphy.gif' width='25' /> My Github Stats:
![${userData.githubUsername}'s github stats](https://github-readme-stats.vercel.app/api?username=${userData.githubUsername}&show_icons=true&title_color=ffc857&icon_color=8ac926&text_color=daf7dc&bg_color=151515&hide=issues&count_private=true&include_all_commits=true)
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${userData.githubUsername}&layout=compact&text_color=daf7dc&bg_color=151515&hide=css,html,php)](https://github.com/anuraghazra/github-readme-stats)
[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${userData.githubUsername}&theme=dark)](https://git.io/streak-stats)

<!--START_SECTION:waka-->

<!--END_SECTION:waka-->

⏳ **Year Progress:** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)}% as on ⏰ ${(new Date().getDate()) + '-' + monthNames[new Date().getMonth()] + '-' + new Date().getFullYear()}

---

### <img src = "https://media1.giphy.com/media/JZ40cnfnN11KycrvMF/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width = '23' /> My Latest Blog posts:
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->


---

### <img alt="GIF" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/hmm.gif" width="20" /> A Famous Fact/Quote:
<a href="https://github.com/marketplace/actions/quote-readme">
<!--STARTS_HERE_QUOTE_README-->
<i>❝IMDb is one of the oldest websites on the internet, and began on Usenet in 1990 as a list of “actresses with beautiful eyes.”❞</i>
<!--ENDS_HERE_QUOTE_README-->
</a>

---

### <img align ='center' src='https://media2.giphy.com/media/UQDSBzfyiBKvgFcSTw/giphy.gif?cid=ecf05e47p3cd513axbek3f56ti3jzizq8hincw20jauyyfyw&rid=giphy.gif' width ='29' /> Here's some humor for you:
<img src="https://readme-jokes.vercel.app/api" alt="Error fetching humour, Refresh again to view the Card" width = '11000' />
`
console.log(readme)

