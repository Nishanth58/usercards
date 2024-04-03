import PropTypes from "prop-types";
function User(props) {
    return <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="Image"></img>
        <h3 className="user-name">{props.name}</h3>
        <h3 className="user-city">{props.city}</h3>
        <p>{props.description}r</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index) =>(
                  <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}
export const UserCard = () => {
  return <User name="Nishanth" city="Chennai" description="Front - End Developer" skills={["HTML", "CSS", "JavaScript", "Bootstrap","React JS", "Node JS", "Flutter"]} online={true} profile="images/card 1.jpg"/>;
};

User.PropTypes = {
    name : PropTypes.string.isRequired,
    city : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    skills : PropTypes.arrayOf(PropTypes.string).isRequired,
    online : PropTypes.bool.isRequired,
    profile : PropTypes.string.isRequired,
}