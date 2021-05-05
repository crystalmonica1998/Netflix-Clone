const API_KEY = 'a286a1f01e9a8a3ef065f80090acb4c0';

const requests = {
    fetchTrending: '/trending/all/week?api_key=a286a1f01e9a8a3ef065f80090acb4c0&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=a286a1f01e9a8a3ef065f80090acb4c0&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=a286a1f01e9a8a3ef065f80090acb4c0&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=a286a1f01e9a8a3ef065f80090acb4c0&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=a286a1f01e9a8a3ef065f80090acb4c0&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=a286a1f01e9a8a3ef065f80090acb4c0&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=a286a1f01e9a8a3ef065f80090acb4c0&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=a286a1f01e9a8a3ef065f80090acb4c0&with_genres=99',
};

export default requests;
