import Song from '../Song/Song.jsx';
import withList from '../withList';

const SongsList = withList(Song, 'songResults');

export default SongsList;
