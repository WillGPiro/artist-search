export const artistRequest = (text) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${text}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      name: artist.name,
      id: artist.id,
      disambiguation: artist.disambiguation
    })));
};



