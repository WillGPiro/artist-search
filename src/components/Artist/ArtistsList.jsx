import Artist from '../Artist/Artist.jsx';
import withList from '../withList';

const ArtistList = withList(Artist, 'artistResults');

export default ArtistList;

