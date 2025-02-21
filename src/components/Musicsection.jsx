import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MusicSection = ({ genre, query }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
        if (response.ok) {
          let { data } = await response.json();
          setSongs(data.slice(0, 4));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchSongs();
  }, [query]);

  return (
    <div className="col-10 text-white">
      <div id={genre.toLowerCase()}>
        <h2>{genre}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {songs.map((song, index) => (
            <div className="col text-center" key={index}>
              <img className="img-fluid" src={song.album.cover_medium} alt="track" />
              <p>
                Track: &quot;{song.title}&quot;
                <br />
                Artist: {song.artist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
MusicSection.propTypes = {
  genre: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default MusicSection;
