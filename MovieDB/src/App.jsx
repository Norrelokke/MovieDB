import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import Navigation from './components/Navigation'
import PageNotFound from './pages/PageNotFound'
import AllMovies from './pages/MovieList'
import Genres from './pages/Genres'
import SingleGenre from './pages/SingleGenre'
import Popular from './components/Popular'
import SingleMovie from './pages/SingleMovie'
import SingleActor from './pages/SingleActor'

function App() {
  return (
    <>
      <Navigation />
      <div id="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/genres">
            <Genres />
          </Route>
          <Route exact path="/genres/:id">
            <SingleGenre />
          </Route>
          <Route exact path="/AllMovies">
            <AllMovies />
          </Route>
          <Route exact path="/movie/:id">
            <SingleMovie />
          </Route>
          <Route exact path="/actor/:id">
            <SingleActor />
          </Route>
          <Route exact path="/popular">
            <Popular />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
