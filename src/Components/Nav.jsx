import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faFile,
  faUsers,
  faBriefcase,
  faChartColumn,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav-icon">
      <div className="nav-contaent">
        <FontAwesomeIcon icon={faTableCellsLarge} />
        <p>Catagerious</p>
      </div>
      <div className="nav-contaent">
        <FontAwesomeIcon icon={faFile} />
        <p>vacancies</p>
      </div>
      <div className="nav-contaent">
        <FontAwesomeIcon icon={faUsers} />
        <p>Candidates</p>
      </div>
      <div className="nav-contaent">
        <FontAwesomeIcon icon={faBriefcase} />
        <p>Application</p>
      </div>
      <div className="nav-contaent">
        <FontAwesomeIcon icon={faChartColumn} />
        <p>Analytics</p>
      </div>
      <div className="nav-contaent">
        <FontAwesomeIcon icon={faGear} />
        <p>Adminstartion</p>
      </div>
    </div>
  );
}

export default Nav;

