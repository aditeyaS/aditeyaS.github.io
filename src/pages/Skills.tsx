import CodingIcon from "../icons/CodingIcon";

interface SkillModel {
  name: string;
  slug?: string;
  rating: number;
}

const languageList: SkillModel[] = [
  { name: "Java", rating: 6 },
  { name: "Python", slug: "python", rating: 7 },
  { name: "C", slug: "c", rating: 4 },
  { name: "JavaScript", slug: "javascript", rating: 7 },
  { name: "Markdown", slug: "markdown", rating: 8 },
  { name: "PHP", slug: "php", rating: 5 },
  { name: "R", slug: "r", rating: 5 },
  { name: "Scala", slug: "scala", rating: 5 },
  { name: "typescript", slug: "typescript", rating: 7 },
  { name: "YAML", slug: "yaml", rating: 7 },
];

const feList: SkillModel[] = [
  { name: "Angular", slug: "angular", rating: 7 },
  { name: "React", slug: "react", rating: 7 },
  { name: "React Hook Form", slug: "reacthookform", rating: 7 },
  { name: "React Router", slug: "reactrouter", rating: 7 },
  { name: "Redux", slug: "redux", rating: 7 },
  { name: "Sass", slug: "sass", rating: 7 },
  { name: "Autoprefixer", slug: "autoprefixer", rating: 2 },
  { name: "Bootstrap", slug: "bootstrap", rating: 6 },
  { name: "CSS", slug: "css3", rating: 8 },
  { name: "HTML", slug: "html5", rating: 8 },
  { name: "jQuery", slug: "jquery", rating: 6 },
  { name: "DaisyUI", slug: "daisyui", rating: 9 },
  { name: "MUI", slug: "mui", rating: 8 },
  { name: "NgRx", slug: "ngrx", rating: 8 },
  { name: "PostCSS", slug: "postcss", rating: 8 },
  { name: "Tailwind CSS", slug: "tailwindcss", rating: 8 },
  { name: "Vite", slug: "vite", rating: 8 },
  { name: "Webpack", slug: "webpack", rating: 6 },
];

const beList: SkillModel[] = [
  { name: "AWS", slug: "amazonwebservices", rating: 6 },
  { name: "Django", slug: "django", rating: 7 },
  { name: "Express", slug: "express", rating: 7 },
  { name: "Flask", slug: "flask", rating: 5 },
  { name: "MongoDB", slug: "mongodb", rating: 6 },
  { name: "MySQL", slug: "mysql", rating: 8 },
  { name: "Node.js", slug: "nodedotjs", rating: 8 },
  { name: "Nodemon", slug: "nodemon", rating: 6 },
  { name: "phpMyAdmin", slug: "phpmyadmin", rating: 8 },
  { name: "PostgreSQL", slug: "postgresql", rating: 8 },
  { name: "Spring Boot", slug: "springboot", rating: 6 },
];

const mobileList: SkillModel[] = [
  { name: "Android", slug: "android", rating: 6 },
];

const cloudList: SkillModel[] = [
  { name: "Amazon API Gateway", slug: "amazonapigateway", rating: 9 },
  { name: "Amazon CloudWatch", slug: "amazoncloudwatch", rating: 9 },
  { name: "Amazon DynamoDB", slug: "amazondynamodb", rating: 6 },
  { name: "Amazon EC2", slug: "amazonec2", rating: 7 },
  { name: "Amazon IAM", slug: "amazoniam", rating: 8 },
  { name: "Amazon RDS", slug: "amazonrds", rating: 6 },
  { name: "AWS Lambda", slug: "awslambda", rating: 6 },
  { name: "Firebase", slug: "firebase", rating: 5 },
];

const testingList: SkillModel[] = [
  { name: "Chai", slug: "chai", rating: 6 },
  { name: "Cypress", slug: "cypress", rating: 8 },
  { name: "Jest", slug: "jest", rating: 6 },
  { name: "Jasmine", slug: "jasmine", rating: 7 },
  { name: "Mocha", slug: "mocha", rating: 6 },
  { name: "Puppeteer", slug: "puppeteer", rating: 6 },
  { name: "Selenium", slug: "selenium", rating: 6 },
];

const librariesList: SkillModel[] = [
  { name: "Axios", slug: "axios", rating: 8 },
  { name: "i18next", slug: "i18next", rating: 6 },
];

const othersList: SkillModel[] = [
  { name: ".env", slug: "dotenv", rating: 10 },
  { name: "Anaconda", slug: "anaconda", rating: 6 },
  { name: "Android Studio", slug: "androidstudio", rating: 7 },
  { name: "Jira", slug: "jira", rating: 6 },
  { name: "Docker", slug: "docker", rating: 6 },
  { name: "Figma", slug: "figma", rating: 5 },
  { name: "Git", slug: "git", rating: 8 },
  { name: "GitHub Pages", slug: "githubpages", rating: 10 },
  { name: "Bash", slug: "gnubash", rating: 5 },
  { name: "Google Analytics", slug: "googleanalytics", rating: 4 },
  { name: "Homebrew", slug: "homebrew", rating: 8 },
  { name: "JSON", slug: "json", rating: 10 },
  { name: "JSON Web Tokens", slug: "jsonwebtokens", rating: 6 },
  { name: "Jupyter", slug: "jupyter", rating: 5 },
  { name: "macOS", slug: "macos", rating: 9 },
  { name: "npm", slug: "npm", rating: 8 },
  { name: "NumPy", slug: "numpy", rating: 8 },
  { name: "OpenAI", slug: "openai", rating: 5 },
  { name: "pandas", slug: "pandas", rating: 7 },
  { name: "Postman", slug: "postman", rating: 9 },
  { name: "PowerShell", slug: "powershell", rating: 6 },
  { name: "Prettier", slug: "prettier", rating: 7 },
  { name: "Qt", slug: "qt", rating: 6 },
  { name: "Render", slug: "render", rating: 7 },
  { name: "scikit-learn", slug: "scikitlearn", rating: 5 },
  { name: "swagger", slug: "swagger", rating: 6 },
  { name: "vercel", slug: "vercel", rating: 7 },
  { name: "Visual Studio Code", slug: "visualstudiocode", rating: 7 },
];

const Skills = () => {
  return (
    <section className="py-10">
      <div className="flex justify-center flex flex-col items-center py-10 gap-4">
        <div className="motion-safe:animate-bounce">
          <CodingIcon size="lg" />
        </div>
        <h1 className="text-primary text-4xl font-bold md:text-8xl">Skills</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="card bg-base-200">
          <div className="card-body py-4 px-2">
            <h2 className="text-center text-secondary">Languages</h2>
            <div className="flex gap-2 flex-wrap justify-center">
              {languageList.map((lang, index) =>
                lang.slug ? (
                  <img
                    key={index}
                    className="w-12 h-12"
                    src={`https://cdn.simpleicons.org/${lang.slug}`}
                  />
                ) : (
                  <span className="px-2 py-1 bg-accent rounded flex justify-center items-center">
                    {lang.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body py-4 px-2">
            <h2 className="text-center text-secondary">Frontend</h2>
            <div className="flex gap-2 flex-wrap justify-center">
              {feList.map((lang, index) =>
                lang.slug ? (
                  <img
                    key={index}
                    className="w-12 h-12"
                    src={`https://cdn.simpleicons.org/${lang.slug}`}
                  />
                ) : (
                  <span className="px-2 py-1 bg-accent rounded flex justify-center items-center">
                    {lang.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body py-4 px-2">
            <h2 className="text-center text-secondary">Backend</h2>
            <div className="flex gap-2 flex-wrap justify-center">
              {beList.map((lang, index) =>
                lang.slug ? (
                  <img
                    key={index}
                    className="w-12 h-12"
                    src={`https://cdn.simpleicons.org/${lang.slug}`}
                  />
                ) : (
                  <span className="px-2 py-1 bg-accent rounded flex justify-center items-center">
                    {lang.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body py-4 px-2">
            <h2 className="text-center text-secondary">Mobile</h2>
            <div className="flex gap-2 flex-wrap justify-center">
              {mobileList.map((lang, index) =>
                lang.slug ? (
                  <img
                    key={index}
                    className="w-12 h-12"
                    src={`https://cdn.simpleicons.org/${lang.slug}`}
                  />
                ) : (
                  <span className="px-2 py-1 bg-accent rounded flex justify-center items-center">
                    {lang.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body py-4 px-2">
            <h2 className="text-center text-secondary">Cloud</h2>
            <div className="flex gap-2 flex-wrap justify-center">
              {cloudList.map((lang, index) =>
                lang.slug ? (
                  <img
                    key={index}
                    className="w-12 h-12"
                    src={`https://cdn.simpleicons.org/${lang.slug}`}
                  />
                ) : (
                  <span className="px-2 py-1 bg-accent rounded flex justify-center items-center">
                    {lang.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body py-4 px-2">
            <h2 className="text-center text-secondary">Testing</h2>
            <div className="flex gap-2 flex-wrap justify-center">
              {testingList.map((lang, index) =>
                lang.slug ? (
                  <img
                    key={index}
                    className="w-12 h-12"
                    src={`https://cdn.simpleicons.org/${lang.slug}`}
                  />
                ) : (
                  <span className="px-2 py-1 bg-accent rounded flex justify-center items-center">
                    {lang.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body py-4 px-2">
            <h2 className="text-center text-secondary">Libraries</h2>
            <div className="flex gap-2 flex-wrap justify-center">
              {librariesList.map((lang, index) =>
                lang.slug ? (
                  <img
                    key={index}
                    className="w-12 h-12"
                    src={`https://cdn.simpleicons.org/${lang.slug}`}
                  />
                ) : (
                  <span className="px-2 py-1 bg-accent rounded flex justify-center items-center">
                    {lang.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body py-4 px-2">
            <h2 className="text-center text-secondary">Others</h2>
            <div className="flex gap-2 flex-wrap justify-between">
              {othersList.map((lang, index) =>
                lang.slug ? (
                  <img
                    key={index}
                    className="w-12 h-12"
                    src={`https://cdn.simpleicons.org/${lang.slug}`}
                  />
                ) : (
                  <span className="px-2 py-1 bg-accent rounded flex justify-center items-center">
                    {lang.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div role="alert" className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>These are the things that I have worked on.</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
