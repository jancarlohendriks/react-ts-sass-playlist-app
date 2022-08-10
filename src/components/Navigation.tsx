import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <ul className={styles.root}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/playlist">Playlist</Link>
      </li>
    </ul>
  );
};
