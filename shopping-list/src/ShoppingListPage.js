import React, { Component } from 'react'
import ShoppingList from './ShoppingList'

// STYLES
const background =
    'w-100 vh-100 bg-light-gray flex justify-center pa4 sans-serif'
const content = 'w-50 bg-white br3 ba b--moon-gray'
const header = 'pa3 f3 fw6 bb b--moon-gray purple'

class ShoppingListPage extends Component {
    render() {
        return (
            <div className={background}>
                <main className={content}>
                    <header className={header}>Lista de Compras</header>
                    <div>
                        <ShoppingList />
                    </div>
                </main>
            </div>
        )
    }
}

export default ShoppingListPage
