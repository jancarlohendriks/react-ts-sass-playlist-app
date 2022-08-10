import { Song } from "../@types/song";
import styles from "./List.module.scss";
import useStore from "../stores/store";
import { useState } from "react";
import { Playlist } from "../@types/playlist";
import { RowSong } from "./RowSong";

interface Props {
  songs: Song[];
}

export const ListOfSongs = ({ songs }: Props) => {
  const { playlists, addSong } = useStore();
  const [selectedSong, setSelectedSong] = useState<Song>({} as Song);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist>(
    {} as Playlist
  );

  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    song: Song
  ) => {
    setSelectedPlaylist(playlists[e.target.selectedIndex - 1]);
    setSelectedSong(song);
  };

  const handleAdd = () => {
    addSong(selectedPlaylist.id, selectedSong);
  };

  const Selector = ({ song }: { song: Song }) => {
    return (
      <select onChange={(e) => handleSelect(e, song)}>
        <option value="Select playlist">Select playlist</option>
        {playlists.map((playlist) => (
          <option key={playlist.id} value={playlist.name}>
            {playlist.name}
          </option>
        ))}
      </select>
    );
  };

  const ButtonAdd = () => <button onClick={handleAdd}>Add to playlist</button>;

  return (
    <ul className={styles.root}>
      {songs.map((song) => (
        <li key={song.id}>
          <RowSong name={song.name} action={<ButtonAdd />}>
            <Selector song={song} />
          </RowSong>
        </li>
      ))}
    </ul>
  );
};
