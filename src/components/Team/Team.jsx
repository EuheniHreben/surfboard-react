import "./Team.scss";
import TeamList from "./TeamList.jsx";
import { teamMembers } from "./TeamMembers.js";

function Team() {
  

  return (
    <section
      className="team section"
      data-section-id="team"
      data-fixed-menu-theme="white"
    >
      <div className="container">
        <h2>Команда</h2>
        <TeamList items={teamMembers} />
      </div>
    </section>
  );
}

export default Team;
