import { useState, useEffect } from "react";
import resumeEN from "../resume/resumeEN.pdf";
import resumeBA from "../resume/resumeBA.pdf";
import iconDownload from "../images/icons/download-icon.svg";

function ResumeButton({ position }) {
  const [resume, setResume] = useState(resumeEN);
  const [language, setLanguage] = useState("EN");

  const handleLanguage = (e) => {
    setLanguage(() => {
      if (language === "EN") {
        return "BA";
      }
      if (language === "BA") {
        return "EN";
      }
    });
  };

  useEffect(() => {
    if (language === "EN") {
      setResume(resumeEN);
    }
    if (language === "BA") {
      setResume(resumeBA);
    }
  }, [language]);

  return (
    <div className={`resume`}>
      <button type="button">
        <a href={resume} download={`edinsikira${language}`}>
          Resume <sub>{language}</sub> <img src={iconDownload} alt="download" />
        </a>
      </button>
      <button
        className={`btn-language ${language === "BA" ? "bottom" : ""}`}
        onClick={handleLanguage}
      >
        <div>{language}</div>
      </button>
    </div>
  );
}

export default ResumeButton;
