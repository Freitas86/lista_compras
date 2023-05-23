import React from 'react'

const form = 'pa3 flex justify-between'
const input = 'br3 f5 pa1 b--solid b--moon-gray outline-0 flex-auto mr3'
const button =
    'bg-purple white br3 b--none ph3 pv2 pointer hover-bg-light-purple'

class AddItemsForm extends React.Component {
    state = {
        name: '',
        amount: 0,
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = () => {
        const { name, amount } = this.state
        this.props.onItemAdded({ name, amount })
        this.setState({ name: '', amount: 0 })
    }

    render() {
        const { name, amount } = this.state

        return (
            <div className={form}>
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    className={input}
                    value={name}
                    onChange={this.handleChange}
                />
                <input
                    type="number"
                    placeholder="Quantidade"
                    name="amount"
                    className={input}
                    value={amount}
                    onChange={this.handleChange}
                />
                <button className={button} onClick={this.handleClick}>
                    Adicionar
                </button>
            </div>
        )
    }
}

export default AddItemsForm
