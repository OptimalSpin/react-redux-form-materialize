import React, {Component} from 'react'
import classNames from 'classnames'

import getTruthyProps from '../helpers/truthyProps'
import omit from '../helpers/omit'

const TextArea = (props) => {
    const errors = props.innerState.touched
        ? getTruthyProps(props.innerState.errors || {}).map(val => props.messages[val[1]]).join(', ')
        : ''

    const focus = props.innerState.focus

    const inputClassName = classNames('materialize-textarea', 'validate', {
        'invalid': errors.length,
        [props.className]: props.className
    })

    const labelClassName = classNames({
        'active': focus || props.innerState.value || errors.length
    })

    const inputProps = omit(props, ['placeholder', 'innerState', 'className', 'messages'])

    return (
        <div className="input-field">
            <textarea {...inputProps} className={inputClassName}/>
            <label htmlFor={props.id} className={labelClassName} data-error={errors}>{props.placeholder}</label>
        </div>
    )
}

TextArea.propTypes = {
    innerState: React.PropTypes.object.isRequired
}

export default TextArea