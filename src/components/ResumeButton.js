import iconDownload from "../images/icons/download-icon.svg";
import resume from "../resume/resume.pdf";

function ResumeButton() {
  return (
    <div className={`resume`}>
      <button type="button">
        <a href={resume} download={`EdinSikiraResume`}>
          Resume <img src={iconDownload} alt="download" />
        </a>
      </button>
    </div>
  );
}

export default ResumeButton;
