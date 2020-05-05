export const artistRequest = (text) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${text}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      name: artist.name,
      id: artist.id,
      disambiguation: artist.disambiguation
    })));
};

export const releaseRequest = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.releases.map(release => ({
      title: release.title,
      image: release.id
    })));
};






