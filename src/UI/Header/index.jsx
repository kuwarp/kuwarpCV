// import pic from "../../assets/pic2.jpeg";
import styles from "./style.module.css";
const ResumeHeader = ({headline,summary}) => {
  return (
    <div className={styles.resume_header}>
      {/* <img src={pic} alt="" className={styles.img_main} /> */}
      <div className={styles.resume_section_text}>
        <h1 className={styles.resume_header_name}>KUWAR PRATAP SINGH</h1>
        {/* <h2 className={styles.resume_header_subname}>{headline}</h2> */}
        <div className={styles.resume_header_info}>
          {summary}
        </div>
      </div>

      <div className={styles.resume_section_meta}>
        <div className={styles.resume_section_meta_right}>
          {/* <div className={styles.resume_section_meta_row}>
            <a className={styles.red} href="https://tusharrajpoot.com/">
              {" "}
              tusharrajpoot.com{" "}
            </a>
          </div> */}
          <div className={styles.resume_section_meta_row}>
            <a className={styles.red} href>
              {" "}
             kuwar0560@gmail.com{" "}
            </a>
          </div>
          <div className={styles.resume_section_meta_row}>(+91)7017949440 </div>
          <div className={styles.resume_section_meta_row}>
            <a
              className={styles.red}
              href="https://www.linkedin.com/in/kps70/"
            >
              https://www.linkedin.com/in/kps70/{" "}
            </a>
          </div>
          <div className={styles.resume_section_meta_row}>
            <a className={styles.red} href="https://github.com/kuwarp">
              {" "}
              github.com/kuwarp{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeHeader;
