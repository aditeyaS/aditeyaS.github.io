import { useEffect } from "react";
import CodingIcon from "../icons/CodingIcon";
import PageContainer from "../components/PageContainer";
import Card from "../components/Card";

interface SkillModel {
  name: string;
  slug?: string;
  rating: number;
}

const languageList: SkillModel[] = [
  { name: "Python", slug: "python", rating: 7 },
  { name: "Java", rating: 6 },
  { name: "typescript", slug: "typescript", rating: 7 },
  { name: "JavaScript", slug: "javascript", rating: 7 },
  { name: "C", slug: "c", rating: 4 },
  { name: "PHP", slug: "php", rating: 5 },
  { name: "R", slug: "r", rating: 5 },
  { name: "Scala", slug: "scala", rating: 5 },
  { name: "Markdown", slug: "markdown", rating: 8 },
  { name: "YAML", slug: "yaml", rating: 7 },
];

const feList: SkillModel[] = [
  { name: "React", slug: "react", rating: 7 },
  { name: "Angular", slug: "angular", rating: 7 },
  { name: "Tailwind CSS", slug: "tailwindcss", rating: 8 },
  { name: "Bootstrap", slug: "bootstrap", rating: 6 },
  { name: "HTML", slug: "html5", rating: 8 },
  { name: "CSS", slug: "css3", rating: 8 },
  { name: "jQuery", slug: "jquery", rating: 6 },
  { name: "React Hook Form", slug: "reacthookform", rating: 7 },
  { name: "React Router", slug: "reactrouter", rating: 7 },
  { name: "Redux", slug: "redux", rating: 7 },
  { name: "Sass", slug: "sass", rating: 7 },
  { name: "DaisyUI", slug: "daisyui", rating: 9 },
  { name: "MUI", slug: "mui", rating: 8 },
  { name: "NgRx", slug: "ngrx", rating: 8 },
  { name: "Vite", slug: "vite", rating: 8 },
  { name: "Webpack", slug: "webpack", rating: 6 },
  { name: "Autoprefixer", slug: "autoprefixer", rating: 2 },
  { name: "PostCSS", slug: "postcss", rating: 8 },
];

const beList: SkillModel[] = [
  { name: "AWS", slug: "amazonwebservices", rating: 6 },
  { name: "Django", slug: "django", rating: 7 },
  { name: "Express", slug: "express", rating: 7 },
  { name: "Flask", slug: "flask", rating: 5 },
  { name: "Spring Boot", slug: "springboot", rating: 6 },
  { name: "MySQL", slug: "mysql", rating: 8 },
  { name: "MongoDB", slug: "mongodb", rating: 6 },
  { name: "Node.js", slug: "nodedotjs", rating: 8 },
  { name: "phpMyAdmin", slug: "phpmyadmin", rating: 8 },
  { name: "PostgreSQL", slug: "postgresql", rating: 8 },
  { name: "Nodemon", slug: "nodemon", rating: 6 },
];

const mobileList: SkillModel[] = [
  { name: "Android", slug: "android", rating: 6 },
  { name: "React Native", slug: "react", rating: 5 },
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
  { name: "pandas", slug: "pandas", rating: 7 },
  { name: "NumPy", slug: "numpy", rating: 8 },
];

const othersList: SkillModel[] = [
  { name: "Docker", slug: "docker", rating: 6 },
  { name: "Postman", slug: "postman", rating: 9 },
  { name: "Qt", slug: "qt", rating: 6 },
  { name: ".env", slug: "dotenv", rating: 10 },
  { name: "Git", slug: "git", rating: 8 },
  { name: "Anaconda", slug: "anaconda", rating: 6 },
  { name: "Jira", slug: "jira", rating: 6 },
  { name: "Figma", slug: "figma", rating: 5 },
  { name: "GitHub Pages", slug: "githubpages", rating: 10 },
  { name: "Bash", slug: "gnubash", rating: 5 },
  { name: "Google Analytics", slug: "googleanalytics", rating: 4 },
  { name: "Homebrew", slug: "homebrew", rating: 8 },
  { name: "JSON", slug: "json", rating: 10 },
  { name: "JSON Web Tokens", slug: "jsonwebtokens", rating: 6 },
  { name: "Jupyter", slug: "jupyter", rating: 5 },
  { name: "macOS", slug: "macos", rating: 9 },
  { name: "npm", slug: "npm", rating: 8 },
  { name: "OpenAI", slug: "openai", rating: 5 },
  { name: "PowerShell", slug: "powershell", rating: 6 },
  { name: "Prettier", slug: "prettier", rating: 7 },
  { name: "scikit-learn", slug: "scikitlearn", rating: 5 },
  { name: "swagger", slug: "swagger", rating: 6 },
  { name: "Render", slug: "render", rating: 7 },
  { name: "vercel", slug: "vercel", rating: 7 },
  { name: "Android Studio", slug: "androidstudio", rating: 7 },
  { name: "Visual Studio Code", slug: "visualstudiocode", rating: 7 },
];

const Skills = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <PageContainer
      title="Skills"
      icon={<CodingIcon size="lg" />}
      pageBody={
        <div className="flex flex-col gap-2">
          <Card
            body={
              <div className="flex flex-col gap-5">
                <h2 className="text-center text-secondary text-xl">
                  Programming Languages
                </h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {languageList.map((lang, index) =>
                    lang.slug ? (
                      <div
                        key={index}
                        className="tooltip tooltip-accent"
                        data-tip={`${lang.name} (${lang.rating}/10)`}
                      >
                        <img
                          className="w-12 h-12"
                          src={`https://cdn.simpleicons.org/${lang.slug}/000000/ffffff`}
                        />
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="tooltip tooltip-accent"
                        data-tip={`${lang.name} (${lang.rating}/10)`}
                      >
                        <div className="w-12 h-12 px-2 py-1 bg-base-content text-base-100 rounded flex justify-center items-center">
                          <span>{lang.name}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <h2 className="text-center text-secondary text-xl">
                  Front End Technologies
                </h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {feList.map((lang, index) => (
                    <div
                      key={index}
                      className="tooltip tooltip-accent"
                      data-tip={`${lang.name} (${lang.rating}/10)`}
                    >
                      <img
                        className="w-12 h-12"
                        src={`https://cdn.simpleicons.org/${lang.slug}/000000/ffffff`}
                      />
                    </div>
                  ))}
                </div>

                <h2 className="text-center text-secondary text-xl">
                  Backend Technologies
                </h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {beList.map((lang, index) => (
                    <div
                      key={index}
                      className="tooltip tooltip-accent"
                      data-tip={`${lang.name} (${lang.rating}/10)`}
                    >
                      <img
                        className="w-12 h-12"
                        src={`https://cdn.simpleicons.org/${lang.slug}/000000/ffffff`}
                      />
                    </div>
                  ))}
                </div>

                <h2 className="text-center text-secondary text-xl">
                  Mobile Application
                </h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {mobileList.map((lang, index) => (
                    <div
                      key={index}
                      className="tooltip tooltip-accent"
                      data-tip={`${lang.name} (${lang.rating}/10)`}
                    >
                      <img
                        className="w-12 h-12"
                        src={`https://cdn.simpleicons.org/${lang.slug}/000000/ffffff`}
                      />
                    </div>
                  ))}
                </div>

                <h2 className="text-center text-secondary text-xl">
                  Cloud Services
                </h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {cloudList.map((lang, index) => (
                    <div
                      key={index}
                      className="tooltip tooltip-accent"
                      data-tip={`${lang.name} (${lang.rating}/10)`}
                    >
                      <img
                        className="w-12 h-12"
                        src={`https://cdn.simpleicons.org/${lang.slug}/000000/ffffff`}
                      />
                    </div>
                  ))}
                </div>

                <h2 className="text-center text-secondary text-xl">
                  Testing Frameworks
                </h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {testingList.map((lang, index) => (
                    <div
                      key={index}
                      className="tooltip tooltip-accent"
                      data-tip={`${lang.name} (${lang.rating}/10)`}
                    >
                      <img
                        className="w-12 h-12"
                        src={`https://cdn.simpleicons.org/${lang.slug}/000000/ffffff`}
                      />
                    </div>
                  ))}
                </div>

                <h2 className="text-center text-secondary text-xl">
                  Other popular libraries
                </h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {librariesList.map((lang, index) => (
                    <div
                      key={index}
                      className="tooltip tooltip-accent"
                      data-tip={`${lang.name} (${lang.rating}/10)`}
                    >
                      <img
                        className="w-12 h-12"
                        src={`https://cdn.simpleicons.org/${lang.slug}/000000/ffffff`}
                      />
                    </div>
                  ))}
                </div>

                <h2 className="text-center text-secondary text-xl">Others</h2>
                <div className="flex gap-2 flex-wrap justify-between">
                  {othersList.map((lang, index) => (
                    <div
                      key={index}
                      className="tooltip tooltip-accent"
                      data-tip={`${lang.name} (${lang.rating}/10)`}
                    >
                      <img
                        className="w-12 h-12"
                        src={`https://cdn.simpleicons.org/${lang.slug}/000000/ffffff`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <div role="alert" className="alert alert-info flex justify-center">
            <span>These are the things that I have worked on.</span>
          </div>
        </div>
      }
    />
  );
};

export default Skills;
