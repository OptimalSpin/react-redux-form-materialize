import {ACTIVE_COLOR, DEFAULT_COLOR, DISABLED_COLOR} from './colors'
import getTruthyProps from '../helpers/truthyProps'
import cn from 'classnames'

export const getErrors = ({innerState, messages}) => (innerState.touched
    ? Array.from(getTruthyProps(innerState.errors || {})).map(val => messages[val[1]]).join(', ')
    : '')

export const getIconColor = ({disabled, innerState, activeIconColor, defaultIconColor}) => (disabled
    ? DISABLED_COLOR
    : (innerState.focus ? (activeIconColor || ACTIVE_COLOR) : (defaultIconColor || DEFAULT_COLOR)))

export const getLabelClassName = ({innerState}, errors) => (cn({
    'active': innerState.focus || innerState.value || errors.length
}))