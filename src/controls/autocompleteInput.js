import React from 'react'
import cn from 'classnames'
import omit from 'lodash/omit'
import Autosuggest from 'react-autosuggest'

import {getErrors, getIconColor, getLabelClassName} from '../helpers/inputHelpers'

const autosuggestTheme = {
    container: {
        marginLeft: '3rem',
        width: 'calc(100% - 3rem)'
    },
    suggestionsContainer: {
        position: 'absolute',
        zIndex: 100
    },
    suggestionsList: 'autocomplete-content dropdown-content'
}

const defaultAutosuggest = {
    renderSuggestion: ({name}, {query}) => {
        const lowerName = name.toLowerCase()
        const lowerQuery = query.toLowerCase()
        const qIndex = lowerName.indexOf(lowerQuery)
        const firstPart = name.substr(0, qIndex)
        const secondPart = name.substr(qIndex, query.length)
        const thirdPart = name.substr(qIndex + query.length)

        return (
            <span>
                {firstPart}
                <span className="highlight">{secondPart}</span>
                {thirdPart}
            </span>
        )
    },
    onSuggestionsFetchRequested: () => {
    },
    onSuggestionsClearRequested: () => {
    },
    getSuggestionValue: ({name}) => name
}

const AutocompleteInput = (props) => {
    const fieldClass = cn('input-field', props.className)

    const errors = getErrors(props)

    const iconColor = getIconColor(props)   

    const inputClassName = cn('autocomplete', 'validate', {
        'invalid': errors.length
    })

    const labelClassName = getLabelClassName(props, errors)

    const autosuggestProps = Object.assign({
        theme: Object.assign({
            input: inputClassName
        }, autosuggestTheme),
        onSuggestionSelected: (event, {suggestionValue}) => props.onChange(suggestionValue)
    }, defaultAutosuggest, omit(props.autosuggestProps, ['inputProps']))

    const inputProps = Object.assign({
        onChange: props.onChange,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onKeyPress: props.onKeyPress,
        value: props.value,
    }, props.inputProps)

    return (
        <div className={fieldClass}>
            {
                (() => {
                    if (props.iconPrefix) {
                        const PrefixIcon = props.iconFactory(props.iconPrefix)
                        return <PrefixIcon className="prefix" color={iconColor} style={{left: 0}}/>
                    }
                })()
            }
            <Autosuggest {...autosuggestProps} inputProps={inputProps} />
            <input type="text" style={{ display: 'none'}} className={inputClassName}/>
            <label htmlFor={props.id} className={labelClassName} style={{pointerEvents: 'none'}}
                   data-error={errors}>{props.placeholder}</label>
        </div>
    )
}

AutocompleteInput.propTypes = {
    innerState: React.PropTypes.object.isRequired,
    iconPrefix: React.PropTypes.string,
    iconFactory: React.PropTypes.func,
    messages: React.PropTypes.object,
    autosuggestProps: React.PropTypes.object
}

export default AutocompleteInput