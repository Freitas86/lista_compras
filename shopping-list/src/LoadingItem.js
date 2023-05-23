import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingItem = () => {
    return (
        <div className="f4 gray pa3 bb b--moon-gray tc">
            <FontAwesomeIcon icon={faSpinner} spin className="f3 purple mr3" />
            Carregando...
        </div>
    )
}

export default LoadingItem
