{/* API KEY : b72ed5a5eb0e9de005c665262d9d1261
EXAMPLE API REQUEST : https://api.themoviedb.org/3/movie/550?api_key=b72ed5a5eb0e9de005c665262d9d1261
API TOKEN : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzJlZDVhNWViMGU5ZGUwMDVjNjY1MjYyZDlkMTI2MSIsInN1YiI6IjYxMWNhYjM0ODVjMGEyMDAyYTRmNDRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NTMUGh1cE2URJO4zxKGTrt4XRA9yqBwpKZe5UptdJ9g */}
const API_KEY = "b72ed5a5eb0e9de005c665262d9d1261";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

};

export default requests;