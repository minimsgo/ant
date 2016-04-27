import React from 'react'
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router'

import Main from './components/layout/Main.jsx'
import Home from './components/modules/Home'
import ProductList from './components/modules/product/List.jsx'
import ProductDetail from './components/modules/product/Detail.jsx'

const Routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Redirect from="product" to="/product/list" />
    <Route path="product">
      <Route path="list" component={ProductList} />
      <Route path="detail" component={ProductDetail} />
    </Route>
  </Route>
)

export default Routes
