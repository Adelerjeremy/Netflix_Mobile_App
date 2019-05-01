import Config from '../Config';

class ApiPopular {
  getPopularMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Config.API_KEY}&page=1`)
      .then(res => res.json())
      .then(data => data.results);
  }

}

export default new ApiPopular();