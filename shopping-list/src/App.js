import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ShoppingListPage from './ShoppingListPage'
import LoginPage from './LoginPage'

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/login" component={LoginPage} />
            <Route path="/list" component={ShoppingListPage} />
        </BrowserRouter>
    )
}

export default App
