import { Playlist } from "../@types/playlist";
import { Song } from "../@types/song";
import useStore from "../stores/store";
import styles from "./List.module.scss";
import { RowSong } from "./RowSong";

interface ListOfSavedSongsProps {
  playlist: Playlist;
}

interface ButtonRemoveProps {
  playlist: Playlist;
  song: Song;
}

export const ListOfPlaylists = () => {
  const { playlists, removeSong } = useStore();

  const handleClick = (playlist: Playlist, song: Song) => {
    removeSong(playlist.id, song);
  };

  const ButtonRemove = ({ playlist, song }: ButtonRemoveProps) => (
    <button onClick={() => handleClick(playlist, song)}>Remove</button>
  );

  const ListOfSavedSongs = ({ playlist }: ListOfSavedSongsProps) => (
    <ul className={styles.root}>
      {playlist.songs.map((song: Song) => (
        <li key={song.id}>
          <RowSong
            name={song.name}
            artist={song.artist}
            action={<ButtonRemove playlist={playlist} song={song} />}
          ></RowSong>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className={styles.root}>
      {playlists.map((playlist) => (
        <li key={playlist.id}>
          <details>
            <summary>{playlist.name}</summary>
            <ListOfSavedSongs playlist={playlist} />
          </details>
        </li>
      ))}
    </ul>
  );
};
