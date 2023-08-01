import { BsDot } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Recommendation({recommendations}) {
  return (
    <>
      <div className="quotation-mark">
        <FaQuoteLeft />
        <span className="line"></span>
      </div>
      <div className="recommendations">
        {recommendations.map((recommendation, i) => (
          <div key={i}>
            <i className="text">{recommendation.text}</i>
            <span className="person">
              - {recommendation.person} <BsDot /> {recommendation.role}
            </span>
          </div>
        ))}
      </div>
      <div className="quotation-mark">
        <span className="line"></span>
        <FaQuoteRight />
      </div>
    </>
  );
}

export default Recommendation;
