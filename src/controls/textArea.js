import React, {Component} from 'react'
import cn from 'classnames'
import omit from 'lodash/omit'

import {getErrors, getLabelClassName} from '../helpers/inputHelpers'

const TextArea = (props) => {
    const errors = getErrors(props)    
    
    const filedClassName = cn('input-field', props.className)

    const inputClassName = cn('materialize-textarea', 'validate', {
        'invalid': errors.length
    })

    const labelClassName = getLabelClassName(props, errors)

    const inputProps = omit(props, ['placeholder', 'innerState', 'className', 'messages'])

    return (
        <div className={filedClassName}>
            <textarea {...inputProps} className={inputClassName}/>
            <label htmlFor={props.id} className={labelClassName} data-error={errors}>{props.placeholder}</label>
        </div>
    )
}

TextArea.propTypes = {
    innerState: React.PropTypes.object.isRequired,
    messages: React.PropTypes.object
}

export default TextArea