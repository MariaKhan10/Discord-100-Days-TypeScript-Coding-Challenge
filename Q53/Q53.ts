// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a programmer knows,like coding languages,tools and software frameworks.Find a way to get three specific skills from this list and shows them.

let programmerSkills = {
    languages : ["JavaScript","TypeScript","Python"],
    frameworks : ["React","Angular","Vue"],
    tools : ["Git","Webpack","Docker"]
};

let {languages,frameworks,tools} = programmerSkills;

console.log(`Language : ${languages[0]}, Framework : ${frameworks[0]}, Tool : ${tools[0]} `);