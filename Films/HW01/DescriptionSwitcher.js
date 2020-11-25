import React from 'react'
import PropTypes from 'prop-types'

const DescriptionSwitcher = ({ handler, description }) => {

    return (
        <div onClick={handler}>
            {description ? <i className="icon link eye  slash" /> : <i className="icon link eye" />}
        </div>
    )
}

DescriptionSwitcher.propTypes = {
    description: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired
}

export default DescriptionSwitcher;