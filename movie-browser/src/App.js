import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Home } from './components/Home';
import { Search } from './components/Search';
import { MovieDetails } from './components/MovieDetails';
import { NotFound } from './components/NotFound';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  // apiKey = b68ca8ffb62a546da9148ee2f59c2348

  useEffect(() => {
    if (searchText) {
 
      fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=b68ca8ffb62a546da9148ee2f59c2348&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => setSearchResults(data.results))
    }
  }, [searchText])

  return (
    <div >
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={MovieDetails}/>
        <Route>
          <Search path="/search" keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
