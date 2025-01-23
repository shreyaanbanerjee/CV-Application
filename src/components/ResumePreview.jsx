import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faGlobe, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function ResumePreview({ data, reference }) {
  // Format skills into comma-separated values
  const formattedSkills = data.skills.map(skill => skill.text).join(', ');

  return (
    <div className="ResumePreview" ref={reference} style={{ background: `linear-gradient(to right, ${data.color1}, ${data.color2})`, padding: "20px", borderRadius: "8px" }}>
      <div className="ResumeTop">
        <h1>{data.info[0].text} {data.info[1].text}</h1>
        <p>{data.info[2].text}</p>
      </div>
      <div className="BottomSection" style={{ marginTop: "20px" }}>
        <div 
          className="ColumnContainer" 
          style={{ 
            display: "flex", 
            justifyContent: "space-around", 
            alignItems: "center", 
            flexWrap: "nowrap", 
            gap: "20px" // Ensures spacing between items
          }}
        >
          <div className="sec" style={{ display: "flex", alignItems: "center" }}>
            {/* <FontAwesomeIcon icon={faPhone} size="lg" style={{ marginRight: "10px" }} /> */}
            <p>{data.info[8].text}</p>
          </div>
          <div className="sec" style={{ display: "flex", alignItems: "center" }}>
            {/* <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: "10px" }} /> */}
            <p>{data.info[7].text}</p>
          </div>
          <div className="sec" style={{ display: "flex", alignItems: "center" }}>
            {/* <FontAwesomeIcon icon={faGlobe} size="lg" style={{ marginRight: "10px" }} /> */}
            <p>{data.info[9].text}</p>
          </div>
        </div>
      </div>
      <div className="ResumeMiddle">
        <h2>Experience</h2>
        {
          data.experiences.map(element => (
            <div className="experienceContainer" key={element.id} style={{ marginBottom: "10px" }}>
              <h3>{element.position}</h3>
              <p>{element.company} | {element.startDate} - {element.endDate}</p>
              <p>{element.description}</p>
            </div>
          ))
        }
        <div className="educationSkills" style={{ marginTop: "20px" }}>
          <div className="educationContainer">
            <h2>Education</h2>
            <h3>{data.info[4].text}</h3>
            <p>{data.info[5].text}</p>
          </div>
          <div className="skillsContainer" style={{ marginTop: "20px" }}>
            <h2>Skills</h2>
            <p>{formattedSkills}</p> {/* Displaying skills as comma-separated */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;