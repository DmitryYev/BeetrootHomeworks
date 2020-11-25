import React from 'react'
import PropTypes from 'prop-types'

const Description = ({ handler, description }) => {

    return (
        <div onClick={handler}>
            {description ? <i className="icon link eye  slash" /> : <i className="icon link eye" />}
        </div>
    )
}

Description.propTypes = {
    description: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired
}

export default Description;