import { useParams } from "react-router-dom";
import { Song } from "../@types/song";
import { List } from "../components/List";
import useFetch from "../hooks/useFetch";
import { DefaultLayout } from "../layouts/DefaultLayout";
import styles from "./ArtistDetail.module.scss";

function Artist() {
  const params = useParams();

  const url = `http://127.0.0.1:3000/songs?artist=${params.name}`;
  const { data, error } = useFetch<Song[]>(url);

  return (
    <DefaultLayout preTitle="Artist" title={params.name}>
      {error && <p>There is an error.</p>}
      {!data && <p>Loading...</p>}
      <List songs={data} />
    </DefaultLayout>
  );
}

export default Artist;
