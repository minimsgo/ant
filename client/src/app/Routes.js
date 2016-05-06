import React from 'react'
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router'

import Main from './views/layout/Main.jsx'
import Home from './views/modules/Home'
import ListServices from './views/modules/services/List.jsx'
import CreateService from './views/modules/services/Create.jsx'
import EditService from './views/modules/services/Edit.jsx'
import ListProducts from './views/modules/products/List.jsx'
import CreateProduct from './views/modules/products/Create.jsx'
import EditProduct from './views/modules/products/Edit.jsx'
import CreateOrder from './views/modules/orders/Create.jsx'

const Routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Redirect from="services" to="/services/list"/>
    <Route path="services">
      <Route path="list" component={ListServices}/>
      <Route path="create" component={CreateService}/>
      <Route path="edit" component={EditService}/>
    </Route>
    <Redirect from="products" to="/products/list"/>
    <Route path="products">
      <Route path="list" component={ListProducts}/>
      <Route path="create" component={CreateProduct}/>
      <Route path="edit" component={EditProduct}/>
    </Route>
    <Redirect from="orders" to="/orders/create"/>
    <Route path="orders">
      <Route path="create" component={CreateOrder}/>
    </Route>
  </Route>
)

export default Routes
