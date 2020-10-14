import React from 'react'
import Banner from './components/banner/banner'
import Category from './components/category/category'
import Nav from './components/nav/nav'
import requests from './api/requests';
import './App.scss'



export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Category title="Netflix Originals" isLarge fetchURL={requests.fetchNetflixOriginals}/>
      <Category title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Category title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Category title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Category title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Category title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Category title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Category title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  )
}


export default App;
