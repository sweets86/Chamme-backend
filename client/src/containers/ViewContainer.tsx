import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MasterView from './MasterView'
import PrivacyView from './PrivacyView'
import GalleryView from './GalleryView'
import NewsView from './NewsView'
import BlogView from './BlogView'
import ProductsView from './ProductsView'
import DetailView from './DetailView'
import OrderView from './OrderView'
import ConfirmationView from './ConfirmationView'

export default function ViewContainer() {
    return (
        <Switch>
            <Route exact path='/' component={MasterView} />
            <Route path='/privacy' component={PrivacyView} />
            <Route path='/gallery' component={GalleryView} />
            <Route path='/news' component={NewsView} />
            <Route path='/blog' component={BlogView} />
            <Route path='/products' component={ProductsView} />
            <Route path='/product/:id' component={DetailView} />
            <Route path='/order' component={OrderView} />
            <Route path='/confirmation' component={ConfirmationView} />
        </Switch>
    )
}