import { Artist } from "../@types/artist";
import { Song } from "../@types/song";
import styles from "./RowSong.module.scss";

interface Props {
  name?: string;
  artist?: string;
  action?: JSX.Element;
  children?: React.ReactNode;
}

export const RowSong = ({ name, artist, children, action }: Props) => {
  const hasMain = name || artist || children;
  return (
    <article className={styles.root}>
      {hasMain && (
        <main className={styles.main}>
          {name && <span className={styles.name}>{name}</span>}
          {artist && <span className={styles.artist}>{artist}</span>}
          {children && <div>{children}</div>}
        </main>
      )}
      {action && <footer>{action}</footer>}
    </article>
  );
};
