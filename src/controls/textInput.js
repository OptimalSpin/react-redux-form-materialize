import React from 'react'
import cn from 'classnames'
import omit from 'lodash/omit'

import {getErrors, getIconColor, getLabelClassName} from '../helpers/inputHelpers'

const TextInput = (props) => {
    const errors = getErrors(props)
    
    const fieldClassName = cn('input-field', props.className)

    const iconColor = getIconColor(props)

    const inputClassName = cn('validate', {
        'invalid': errors.length
    })

    const labelClassName = getLabelClassName(props, errors)

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
    iconFactory: React.PropTypes.func,
    messages: React.PropTypes.object
}

export default TextInput
