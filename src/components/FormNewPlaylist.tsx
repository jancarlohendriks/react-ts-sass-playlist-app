import useStore from "../stores/store";
import { RowFlex } from "./RowFlex";

export const FormNewPlaylist = () => {
  const { newPlaylist, setNewPlaylist, addPlaylist } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPlaylist();
  };
  return (
    <form onSubmit={handleSubmit}>
      <RowFlex>
        <input
          type="text"
          placeholder="Add new Playlist"
          value={newPlaylist}
          onChange={(evt) => setNewPlaylist(evt.target.value)}
        />
        <button type="submit">Add</button>
      </RowFlex>
    </form>
  );
};
