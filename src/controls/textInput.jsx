import React from 'react'
import classNames from 'classnames'

import getTruthyProps from '../helpers/truthyProps'
import omit from '../helpers/omit'

const ACTIVE_COLOR = '#26a69a'
const DEFAULT_COLOR = 'black'

const TextInput = (props) => {
    const errors = props.innerState.touched
        ? Array.from(getTruthyProps(props.innerState.errors || {})).map(val => props.messages[val[1]]).join(', ')
        : ''

    const focus = props.innerState.focus

    const iconColor = focus ? ACTIVE_COLOR : DEFAULT_COLOR

    const inputClassName = classNames('validate', {
        'invalid': errors.length,
        [props.className]: props.className
    })

    const labelClassName = classNames({
        'active': focus || props.innerState.value || errors.length
    })

    const inputProps = omit(props, ['placeholder', 'innerState', 'iconPrefix', 'className', 'messages'])

    return (
        <div className="input-field">
            {
                (() => {
                    if(props.iconPrefix){
                        const PrefixIcon = props.iconFactory(props.iconPrefix)
                        return <PrefixIcon className="prefix" color={iconColor}/>
                    }
                })()
            }
            <input {...inputProps} type={props.type} className={inputClassName}/>
            <label htmlFor={props.id} className={labelClassName} data-error={errors}>{props.placeholder}</label>
        </div>
    )
}

TextInput.propTypes = {
    innerState: React.PropTypes.object.isRequired,
    iconPrefix: React.PropTypes.string,
    iconFactory: React.PropTypes.func
}

export default TextInput
