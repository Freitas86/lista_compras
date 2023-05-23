import React from 'react'
import axios from 'axios'
import ListItem from './ListItem'
import AddItemsForm from './AddItemsForm'
import LoadingItem from './LoadingItem'

class ShoppingList extends React.Component {
  state = {
    shoppingList: [],
    loading: true,
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:8080/items', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (res.status === 200) {
      this.setState({ shoppingList: res.data })
    }

    this.setState({ loading: false })
  }

  handleCheckChanged = itemId => {
    const { shoppingList } = this.state
    const item = shoppingList.find(entry => entry.id === itemId)
    item.checked = !item.checked

    this.setState({ shoppingList })
  }

  handleItemRemoved = async itemId => {
    const res = await axios.post(
      'http://localhost:8080/removeitem',
      { id: itemId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )

    if (res.status !== 200) return

    const { shoppingList } = this.state
    const newShoppingList = shoppingList.filter(entry => entry.id !== itemId)

    this.setState({ shoppingList: newShoppingList })
  }

  handleItemAdded = async item => {
    const res = await axios.post(
      'http://localhost:8080/newitem',
      { item },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )

    if (res.status !== 200) return

    const { shoppingList } = this.state
    this.setState({
      shoppingList: [...shoppingList, { ...item, id: res.data.id }],
    })
  }

  render() {
    const { shoppingList, loading } = this.state

    return (
      <div>
        {loading ? <LoadingItem /> : null}
        {shoppingList.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onCheckChanged={() => this.handleCheckChanged(item.id)}
            onItemRemoved={() => this.handleItemRemoved(item.id)}
          />
        ))}
        <AddItemsForm onItemAdded={this.handleItemAdded} />
      </div>
    )
  }
}

export default ShoppingList
