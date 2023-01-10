import ExperienceUI from "../../UI/Experience";
import ExperienceWrapper from "../../UI/StyleWrappers/ExperienceWrapper";

const hclExperience = [
  `Working on developing features in  projects (node.js,
      PHP ,Reactjs.)`,
 
  `Developing and maintaining code pipelines for code
      deployment using company local server.`,
  `Integrating APIs  to the projects.`,
  `Creating Admin Dashboard with Web APi integrations .`,
  
];

const NovExperience = [
  `Working on developing features in  projects (node.js,
     Reactjs.)`,
 
  `Developing and maintaining code pipelines for code
      deployment using Reactjs and node js.`,
  `Integrating Monitoring tools, Security Scanners with Github Actions workflows.`,
   `Writing clean code node.js, React based applications for deploying to client domains.`,
  `Working on  deployments, validations and
      configurations in the Projects.`,
 
];
const Experience = () => {
  return (
    <ExperienceWrapper>
      <h3>Experience</h3>
      <ExperienceUI
        companyName="Ims pvt. ltd."
        periodDate="November 2021 - present"
        companyWebLink="https://imsplglobal.com/"
        companyWebSite="imsplglobal.com"
        position="Front End developer"
        tagline=" Working on designing, developing features and automating the
        deployments for our  products ."
        workList={hclExperience}
      />
       <ExperienceUI
        companyName="novarsistech global"
        periodDate="Feburary 2021 - August 2021"
        companyWebLink="https://novarsistech.com/"
        companyWebSite="novarsistech.com"
        position="Front End developer trainee"
        tagline=" Working on designing, developing features and Learning in Internship period ."
        workList={NovExperience}
      />
    </ExperienceWrapper>
  );
};
export default Experience;
