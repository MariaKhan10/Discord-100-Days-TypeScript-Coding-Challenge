// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a programmer knows,like coding languages,tools and software frameworks.Find a way to get three specific skills from this list and shows them.
var programmerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
var languages = programmerSkills.languages, frameworks = programmerSkills.frameworks, tools = programmerSkills.tools;
console.log("Language : ".concat(languages[0], ", Framework : ").concat(frameworks[0], ", Tool : ").concat(tools[0], " "));
