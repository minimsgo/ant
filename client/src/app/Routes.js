import React from 'react'
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router'

import Main from './views/layout/Main.jsx'
import Home from './views/modules/Home'
import ProductList from './views/modules/product/List.jsx'
import ProductDetail from './views/modules/product/Detail.jsx'
import ProductCreate from './views/modules/product/Create.jsx'

const Routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Redirect from="product" to="/product/list" />
    <Route path="product">
      <Route path="list" component={ProductList} />
      <Route path="detail" component={ProductDetail} />
      <Route path="create" component={ProductCreate} />
    </Route>
  </Route>
)

export default Routes
