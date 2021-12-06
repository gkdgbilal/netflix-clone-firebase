import './App.css';
import Row from './Components/Row';
import requests from './Actions/requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        isLargeRow={false}
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        isLargeRow={false}
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        isLargeRow={false}
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        isLargeRow={false}
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        isLargeRow={false}
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        isLargeRow={false}
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        isLargeRow={false}
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
