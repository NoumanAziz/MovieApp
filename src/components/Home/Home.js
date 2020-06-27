import React,{Component} from 'react';
import Header from '../elements/Header/Header';
import HeroImage from '../elements/HeroImage/HeroImage';
import {API_URL , API_KEY , IMAGE_BASE_URL , POSTER_SIZE , BACKDROP_SIZE} from '../../config'
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import CategorySelection from '../category/CategorySelection';
import './Home.css';

let category = 'now_playing';
class Home extends Component{
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''   
    }

componentDidMount(){
if(localStorage.getItem(`${category}`)){
    const state = JSON.parse(localStorage.getItem(`${category}`))
    this.setState({...state})
}
else{
this.setState({loading : true});
this.fetchItems(this.endpointTerm(`movie/${category}`, false, ''));
}
}

endpointTerm = (type ,loadMore ,searchTerm)=>
`${API_URL}${type}?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=
${loadMore && this.state.currentPage+1}`;

fetchItems= (endpoint)=>{
fetch(endpoint)
.then(result => result.json())
.then(result=>{
    console.log(result)
    this.setState({
        movies : [...this.state.movies , ...result.results ],
        heroImage: this.state.heroImage || result.results[0],
        loading : false,
        currentPage : result.page,
        totalPages  :result.total_pages
    } , ()=>{
        localStorage.setItem(`${category}`, JSON.stringify(this.state))
        })
    })
.catch(error => console.error('Error: ',error)) 
}

onButtonClick = (category) => {
let endpoint = '';
this.setState({ loading : true,
                movies : [],
                heroImage : null}); 
this.fetchItems(this.endpointTerm(`movie/${category}`, false, ''));
}

updateItems= (loadMore ,searchTerm )=>{
this.setState ({
    loading : true,
    movies  : loadMore? [...this.state.movies]:[],
    searchTerm : loadMore? this.state.searchTerm : searchTerm
}, ()=>{
        this.fetchItems(
        !this.state.searchTerm ?
        this.endpointTerm(`movie/${category}`, loadMore,'' ):
        this.endpointTerm(`search/movie`, loadMore, this.state.searchTerm));
        })
}


   render(){
    return(
        <div className = 'rmdb-home'>
             <Header/>  
            {this.state.heroImage ?
            <div>
             <HeroImage 
             image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${this.state.heroImage.backdrop_path}`} 
             title = {this.state.heroImage.original_title} 
             text = {this.state.heroImage.overview} 
              /></div> : null }
             <div>
            <SearchBar callback = {this.updateItems}/>
            <CategorySelection callback = {this.onButtonClick}/>
            {this.state.movies ? 
            <div className='rmdb-home-grid'>
                <FourColGrid
                    
                    loading = {this.state.loading}>
                    { this.state.movies.map((element,i)=>{
                    return (
                    <MovieThumb 
                        key = {i}
                        image = {element.poster_path? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`: './images/no_image.jpg'}
                        movieId = {element.id}
                        movieName = {element.original_title}
                        clickable = {true}
                        rating = {element.vote_average}/>
                    )
                    }) }
                </FourColGrid>
                {this.state.loading ? <Spinner/> : null}
                {console.log(this.state.totalPages)}
                {(this.state.currentPage < this.state.totalPages && !this.state.loading )?
                 <LoadMoreBtn onLoad = {this.updateItems} />: null } 
            </div>: null }
        </div>

        </div>
    )
   }
}
export default Home;  