import React, {Component} from 'react';
import Header from '../elements/Header/Header';
import {API_URL , API_KEY, IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

import MovieThumb from '../elements/MovieThumb/MovieThumb';
import CategorySelection from '../category/CategorySelection';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
class Movie extends Component{
    state = {
        movie : null,
        actors: null,
        directors: [],
        loading : false,
        movies: [],
        currentPage: 0,
        totalPages: 0,
        
    }

componentDidMount () {
    if(localStorage.getItem(`${this.props.match.params.movieId}`)){
        const state = JSON.params(localStorage.getItem(`${this.props.match.params.movieId}`))
        this.setState({...state})
    }
    else{
    this.setState({loading : true})
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=enUS`;
    this.fetchItems(endpoint);
    }
}

componentWillReceiveProps(nextprops){
   
    const endpoint = `${API_URL}movie/${nextprops.match.params.movieId}?api_key=${API_KEY}&language=enUS`;
     window.scrollTo(0,0);
    this.fetchItems(endpoint);
    
}

fetchItems = (endpoint)=>{
    fetch(endpoint)
    .then(result=>result.json())
    .then(result=>{
        console.log(result);
        if (result.status_code) { 
        this.setState({loading:false})
        
        console.log('No Movie found')
        } 
        else{
            this.setState({movie:result}, () =>{
            const endpoint2 = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
            fetch(endpoint2)
            .then(result=>result.json())
            .then(result=>{
                const directors = result.crew.filter(member=>member.job=='Director')
                const act = result.cast.filter(actor=>actor.profile_path!=null)
                this.setState({
                    actors : act,
                    directors,
                })
               
            const endpoint3 = `${API_URL}movie/${this.props.match.params.movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
            this.fetchMore(endpoint3);
        }, () =>{
            localStorage.setItem(`${this.parops.match.params.movieID}`, JSON.stringify(this.state))
        })})
        }
    })
    .catch(error=>console.error('Error:', error));
}

fetchMore = (endpoint) =>{
    
    fetch(endpoint)
.then(result => result.json())
.then(result=>{
console.log(result)
this.setState({
    movies : [...this.state.movies , ...result.results ],
   
    loading : false,
    currentPage : result.page,
    totalPages  :result.total_pages
})

})

}

loadMore = () =>{ 
    let endpoint4 = '';
    this.setState({loading : true});
    
    endpoint4 = `${API_URL}movie/${this.props.match.params.movieId}/similar?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage+1}`
    
    this.fetchMore(endpoint4);
}

    render(){
        return(
            <div className='rmdb-movie'>
                
                <Header/>
                {this.state.movie ? 
                <MovieInfo movie = {this.state.movie} directors = {this.state.directors}  />
                : null}
                {!this.state.loading ? <h1>Similar Movies</h1>: null}
                {this.state.movies ? 
                <div className='rmdb-home-grid'>
                <FourColGrid
                    header = {this.state.searchTerm ? 'Search Result': 'Popular Movies'} 
                    loading = {this.state.loading}>
                    { this.state.movies.map((element,i)=>{
                    return (
                    <MovieThumb 
                        key = {i}
                        clickable = {true}
                        image = {element.poster_path? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`: './images/no_image.jpg'}
                        movieId = {element.id}
                        movieName = {element.original_title} 
                        rating = {element.vote_average}/>
                    )
                    }) }
                </FourColGrid>
                {this.state.loading ? <Spinner/> : null}
                {(this.state.currentPage < this.state.totalPages && !this.state.loading )?
                 <LoadMoreBtn text = "Load More" onLoad = {this.loadMore} />: null } 
                </div>
                : null }
            </div>
        )
    }
}
export default Movie;