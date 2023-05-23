import React from 'react'

const entry = 'pa3 bb b--moon-gray flex items-center justify-between'
const checkbox =
    'w2 h2 br-100 ba bw2 b--light-silver mr3 pointer flex justify-center items-center'
const checkboxX = 'f3 purple fw6'
const itemName = 'f4 fw5 dark-gray w5 mr-auto'
const button =
    'bg-purple white br3 b--none ph3 pv2 pointer hover-bg-light-purple'

const ListItem = ({ item, onCheckChanged, onItemRemoved }) => {
    return (
        <div className={entry}>
            <div className={checkbox} onClick={onCheckChanged}>
                {item.checked ? <span className={checkboxX}>X</span> : null}
            </div>
            <span className={itemName}>
                {item.name}:<span className="purple">{item.amount}</span>
            </span>
            <button className={button} onClick={onItemRemoved}>
                Remover
            </button>
        </div>
    )
}

export default ListItem
