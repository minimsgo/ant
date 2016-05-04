import React from 'react'
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router'

import Main from './views/layout/Main.jsx'
import Home from './views/modules/Home'
import CreateProduct from './views/modules/products/Create.jsx'
import EditProduct from './views/modules/products/Edit.jsx'
import ListProduct from './views/modules/products/List.jsx'
import CreateOrder from './views/modules/orders/Create.jsx'
import ListOrder from './views/modules/orders/List.jsx'

const Routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Redirect from="products" to="/products/list"/>
    <Route path="products">
      <Route path="list" component={ListProduct}/>
      <Route path="edit" component={EditProduct}/>
      <Route path="create" component={CreateProduct}/>
    </Route>

    <Redirect from="orders" to="/orders/list"/>
    <Route path="orders">
      <Route path="list" component={ListOrder}/>
      <Route path="create" component={CreateOrder}/>
    </Route>
  </Route>
)

export default Routes
