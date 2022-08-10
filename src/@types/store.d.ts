import { Song } from "./song";

export type Store = {
  playlists: Playlist[];
  newPlaylist: string;
  setNewPlaylist: (newPlaylist: string) => void;
  setPlaylists: (playlists: Playlist[]) => void;
  addPlaylist: () => void;
  removePlaylist: (id: number) => void;
  addSong: (id: number, song: Song) => void;
  removeSong: (id: number, song: Song) => void;
};
