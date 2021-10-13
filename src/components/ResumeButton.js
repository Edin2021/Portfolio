import resumeEN from "../resume/resumeEN.pdf";
import resumeBA from "../resume/resumeBA.pdf";
import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";

function ResumeButton({ position }) {
  const [resume, setResume] = useState(resumeEN);

  const handleLanguage = (e) => {
    if (e.target.value === "EN") setResume(resumeEN);
    else setResume(resumeBA);
  };
  return (
    <div className={`resume ${position}`}>
      <button type="button">
        <a href={resume} download="edinsikira">
          Resume{" "}
          <span>
            <FaFileDownload />
          </span>
        </a>
      </button>
      <select className="language" onChange={handleLanguage}>
        <option value="EN">EN</option>
        <option value="BA">BA</option>
      </select>
    </div>
  );
}

export default ResumeButton;
