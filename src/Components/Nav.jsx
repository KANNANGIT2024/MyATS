import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTableCellsLarge,
  faFile,
  faUsers,
  faBriefcase,
  faChartColumn,
  faGear
} from '@fortawesome/free-solid-svg-icons'
import './Nav.css'
function Nav() {
  return (
    <div className='nav-icon'>
      <FontAwesomeIcon icon={faTableCellsLarge} />
      <FontAwesomeIcon icon={faFile} />
      <FontAwesomeIcon icon={faUsers} />
      <FontAwesomeIcon icon={faBriefcase} />
      <FontAwesomeIcon icon={faChartColumn} />
      <FontAwesomeIcon icon={faGear} />
    </div>
  )
}

export default Nav