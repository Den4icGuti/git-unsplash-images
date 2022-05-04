import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navLink} to="clock">
        Clock
      </NavLink>
      <NavLink className={styles.navLink} to="counter">
        Counter
      </NavLink>
      <NavLink className={styles.navLink} to="form">
        Form
      </NavLink>
      <NavLink className={styles.navLink} to="colorpeacker">
        ColorPeacker
      </NavLink>
      <NavLink className={styles.navLink} to="gallery">
        Gallery
      </NavLink>
      <NavLink className={styles.navLink} to="context">
        Context
      </NavLink>

      <hr />
    </nav>
  );
};
export default Navigation;
