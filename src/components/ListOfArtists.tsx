import { Link } from "react-router-dom";
import { Artist } from "../@types/artist";
import styles from "./List.module.scss";
import { RowSong } from "./RowSong";

interface Props {
  artists: Artist[];
}

const ButtonLink = ({ artist }: { artist: Artist }) => {
  return <Link to={`artist/${artist.name}`}>{artist.name}</Link>;
};

export const ListOfArtists = ({ artists }: Props) => {
  return (
    <ul className={styles.root}>
      {artists.map((artist, index) => (
        <li key={artist.id}>
          <RowSong action={<ButtonLink artist={artist} />} />
          {/* <span>{index + 1}.&nbsp;</span>
          <Link to={`artist/${artist.name}`}>{artist.name}</Link> */}
        </li>
      ))}
    </ul>
  );
};
