import { useState } from "react";

function TeamList({ items }) {
  const [activeMember, setActiveMember] = useState(null);

  const handleMemberClick = (id) => {
    setActiveMember((currentId) => (currentId === id ? null : id));
  };

  const featuredMember = items.find((member) => member.id === activeMember);

  return (
    <>
      {/* Десктопная сетка */}
      <ul className="team__list team__list--desktop">
        {items.map((member) => (
          <li
            key={member.id}
            className={`team__item ${
              activeMember === member.id ? "active" : ""
            }`}
            onClick={() => handleMemberClick(member.id)}
          >
            <div className="team__img-box">
              <img src={member.image} alt={member.name} className="team__img" />
            </div>

            <button
              type="button"
              className="team__name"
              aria-expanded={activeMember === member.id}
              onClick={(event) => {
                event.stopPropagation();
                handleMemberClick(member.id);
              }}
            >
              {member.name}
            </button>

            <div className="team__desc">
              <p className="team__role">{member.role}</p>
              <p className="team__text">{member.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Планшетная и мобильная композиция */}
      <div className="team__accordion">
        {featuredMember && (
          <div className="team__featured" onClick={() => setActiveMember(null)}>
            <img
              src={featuredMember.image}
              alt={featuredMember.name}
              className="team__featured-img"
            />

            <h3 className="team__featured-name">{featuredMember.name}</h3>

            <p className="team__featured-role">{featuredMember.role}</p>

            <p className="team__featured-text">{featuredMember.description}</p>
          </div>
        )}

        <ul className="team__list team__list--accordion">
          {items
            .filter((member) => member.id !== activeMember)
            .map((member) => (
              <li className="team__row" key={member.id}>
                <button
                  type="button"
                  className="team__row-button"
                  aria-expanded={false}
                  onClick={() => setActiveMember(member.id)}
                >
                  <img src={member.image} alt="" className="team__row-img" />

                  <span className="team__row-info">
                    <span className="team__row-name">{member.name}</span>
                    <span className="team__row-role">{member.role}</span>
                  </span>

                  <span className="team__row-arrow" aria-hidden="true">
                    ⌄
                  </span>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default TeamList;
