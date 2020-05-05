import Artist from '../Artist/Artist.jsx';
import withList from '../withList.js';

const ArtistList = withList(Artist, 'artistResults');

export default ArtistList;

