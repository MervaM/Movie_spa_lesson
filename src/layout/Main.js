import React from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Prelodader';
import { InputSearch } from '../components/InputSearch';


class Main extends React.Component {
    state = {
        movieList: [],
        loading: true,
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=545d2dce&s=titanic')
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=545d2dce&s=${str}&{type !== 'all' ? '&type=${type}' : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }

    render() {
        const { movieList, loading } = this.state;
        return (
            <main className='main container'>
                <InputSearch searchMovies={this.searchMovies}/>
                {
                    loading ?  <Preloader/>
                    // movieList.length ?
                       : (<MovieList movieList={this.state.movieList} />)
                        
                }
            </main>
        )
    }
}

export { Main };