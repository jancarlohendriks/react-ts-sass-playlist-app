import Song from "./song";

export interface PlaylistsContextType {
  playlists: Playlist[];
}

export interface PlaylistsContextType {
  playlists: Playlist[];
}

export interface Playlist {
  id: number;
  name: string;
  songs: Song[];
}
