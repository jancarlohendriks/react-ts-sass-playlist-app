import { List } from "../components/List";
import useStore from "../stores/store";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { FormNewPlaylist } from "../components/FormNewPlaylist";

export const Playlists = () => {
  const { playlists } = useStore();
  return (
    <DefaultLayout title="Playlists">
      <FormNewPlaylist />
      <List playlists={playlists} />
    </DefaultLayout>
  );
};
