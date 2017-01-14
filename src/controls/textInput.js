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
    
    const fieldClassName = classNames('input-field', props.className)

    const iconColor = focus ? (props.activeIconColor || ACTIVE_COLOR) : (props.defaultIconColor || DEFAULT_COLOR)

    const inputClassName = classNames('validate', {
        'invalid': errors.length
    })

    const labelClassName = classNames({
        'active': focus || props.innerState.value || errors.length
    })

    const inputProps = omit(props, ['placeholder', 'innerState', 'iconPrefix',
        'className', 'messages', 'iconFactory', 'type', 'inputType'])

    return (
        <div className={fieldClassName}>
            {
                (() => {
                    if(props.iconPrefix){
                        const PrefixIcon = props.iconFactory(props.iconPrefix)
                        return <PrefixIcon className="prefix" color={iconColor}/>
                    }
                })()
            }
            <input {...inputProps} type={props.inputType || props.type} className={inputClassName}/>
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
