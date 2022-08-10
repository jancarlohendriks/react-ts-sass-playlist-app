export interface Song {
  id: number;
  name: string;
  year: number;
  artist: string;
  shortname: string;
  bpm?: number | null;
  duration: number;
  genre: string;
  spotifyId?: string | null;
  album?: string | null;
}
