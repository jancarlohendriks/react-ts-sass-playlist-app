import { Artist } from "../@types/artist";
import { Song } from "../@types/song";
import { ListOfSongs } from "./ListOfSongs";
import { ListOfArtists } from "./ListOfArtists";
import { Playlist } from "../@types/playlist";
import { ListOfPlaylists } from "./ListOfPlaylists";

interface Props {
  songs?: Song[];
  artists?: Artist[];
  playlists?: Playlist[];
}

export const List = ({ songs, artists, playlists }: Props) => {
  if (songs) return <ListOfSongs songs={songs} />;
  if (artists) return <ListOfArtists artists={artists} />;
  if (playlists) return <ListOfPlaylists />;
  return null;
};
