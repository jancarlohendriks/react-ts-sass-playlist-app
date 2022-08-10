import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Playlist } from "../@types/playlist";
import { Song } from "../@types/song";
import { Store } from "../@types/store";

const addPlaylist = (
  playlists: Playlist[],
  name: string,
  songs = [] as Song[]
): Playlist[] => [
  ...playlists,
  {
    id: Math.max(0, Math.max(...playlists.map(({ id }) => id))) + 1,
    name,
    songs,
  },
];

const removePlaylist = (playlists: Playlist[], id: number): Playlist[] =>
  playlists.filter((playlist) => playlist.id !== id);

const addSong = (playlists: Playlist[], id: number, song: Song): Playlist[] =>
  playlists.map((playlist) => ({
    ...playlist,
    songs:
      playlist.id === id
        ? playlist.songs.some((s) => s.id === song.id)
          ? playlist.songs
          : [...playlist.songs, song]
        : playlist.songs,
  }));

const removeSong = (
  playlists: Playlist[],
  id: number,
  song: Song
): Playlist[] =>
  playlists.map((playlist) => ({
    ...playlist,
    songs:
      playlist.id === id
        ? playlist.songs.filter((s) => s.id !== song.id)
        : playlist.songs,
  }));

const useStore = create(
  persist<Store>((set) => ({
    playlists: [],
    newPlaylist: "",
    setNewPlaylist: (newPlaylist: string) =>
      set((state: Store) => ({
        ...state,
        newPlaylist,
      })),
    setPlaylists: (playlists: Playlist[]) =>
      set((state: Store) => ({
        ...state,
        playlists,
      })),
    addPlaylist: () =>
      set((state: Store) => ({
        ...state,
        playlists: addPlaylist(state.playlists, state.newPlaylist),
        newPlaylist: "",
      })),
    removePlaylist: (id: number) =>
      set((state: Store) => ({
        ...state,
        playlists: removePlaylist(state.playlists, id),
      })),
    addSong: (id: number, song: Song) =>
      set((state: Store) => ({
        ...state,
        playlists: addSong(state.playlists, id, song),
      })),
    removeSong: (id: number, song: Song) =>
      set((state: Store) => ({
        ...state,
        playlists: removeSong(state.playlists, id, song),
      })),
  }))
);

export default useStore;
