export const API_KEY ='7def7709cd03d790933a885b5f6a7de0'
console.log(API_KEY)


const requests =  {
    fetchTrending : {
        title: 'Trending', 
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
     fetchTopRated : {
        title: 'TopRated', 
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies : {
        title: 'Action', 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    }, 
    fetchComedyMovies : {
        title: 'Comedy', 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
      fetchHorrorMovies : {
        title: 'Horror', 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    }, 
    fetchRomanceMovies : {
        title: 'Romance', 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    }, 
    fetchMystery : {
        title: 'Mystery', 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    }, 
    fetchScifi : {
        title: 'Scifi', 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    }, 
    fetchWester : {
        title: 'Wester', 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    }, 
    fetchAnimation : {
        title: 'Animation', 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    }, 
    fetchTv : {
        title: 'Tv movie', 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }, 
}
export default requests