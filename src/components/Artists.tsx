import { useState, useEffect } from "react";
import { Song } from "../@types/song";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { RowFlex } from "./RowFlex";
import { List } from "./List";

export const Artists = () => {
  const [artists, setArtists] = useState<Song[]>([] as Song[]);
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 500);

  const url = `http://127.0.0.1:3000/artists?name_like=${debouncedSearch}&_limit=50`;
  const { data, error } = useFetch<Song[]>(url);

  useEffect(() => {
    if (data) {
      setArtists(data);
      if (debouncedSearch) setArtists(data);
    }
  }, [debouncedSearch, data]);

  return (
    <DefaultLayout title="List of artists:">
      <RowFlex>
        <input
          type="search"
          placeholder="Search an artist"
          onChange={(e) => setSearch(e.target.value)}
        />
      </RowFlex>
      {error && <p>There is an error.</p>}
      {!data && <p>Loading...</p>}
      {artists && <List artists={artists} />}
    </DefaultLayout>
  );
};
