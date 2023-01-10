import CertificationUI from "../../UI/Certification";

const certificationsList = [
  {
    name: "Hackerrank Skill Certifications: SQL(Basic,Intermediate), JavaScript(Basic,Intermediate), React, CSS.",
    link: "https://www.hackerrank.com/guru75000",
  },
  {
    name: "Let's Upgrade Certifications for JavaScript and React js Bootcamp.",
    link: null,
  },
 
];

const Certifications = () => {
  return <CertificationUI certificationsList={certificationsList} />;
};
export default Certifications;
