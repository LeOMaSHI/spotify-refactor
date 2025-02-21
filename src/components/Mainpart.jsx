import MusicSection from "./Musicsection";
import "../components/Mainpart.css";

const Main = () => (
  <main className="col-12 col-md-9 offset-md-3 mainPage">
    <div className="row">
      <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </div>
    </div>
    <MusicSection genre="Rock Classics" query="queen" />
    <MusicSection genre="Pop Culture" query="katyperry" />
    <MusicSection genre="Hip-Hop" query="eminem" />
  </main>
);

export default Main;
