import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import Navigation from './components/Navigation'
import PageNotFound from './pages/PageNotFound'
import AllMovies from './pages/AllMovies'
import Movie from './pages/Movie'

function App() {
  return (
    <>
      <Navigation />
      <div id="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/AllMovies">
            <AllMovies />
          </Route>
          <Route exact path="/movie/:id">
            <Movie />
          </Route>
          <Route exact path="/movie">
            <Movie />
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
