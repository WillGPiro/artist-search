import Artist from '../Artist/Artist.jsx';
import withList from '../withList';

const ArtistList = withList(Artist, 'searchResults');

export default ArtistList;

