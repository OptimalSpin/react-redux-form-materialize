import React from 'react'
import {shallow} from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import DropdownInput from '../../src/controls/dropdownInput.js'

chai.use(chaiEnzyme())
const {expect} = chai

const PrefixIcon = () => (<img></img>)
const PrefixIconFactory = (iconPrefix) => {
    return PrefixIcon
}

function setupNew(){
    const props = {
        id: '1',
        type: 'select',
        innerState: {},
        placeholder: 'Dropdown',
        children: [
            React.createElement('option', { value: 'none', disabled: 'disabled', text: 'Select values'}),
            React.createElement('option', { value: 1, text: 'One'}),
            React.createElement('option', { value: 2, text: 'Two'})
        ]
    }

    const enzymeWrapper = shallow(<DropdownInput {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

function setupIconPrefix(){
    const props = {
        id: '1',
        type: 'text',
        innerState: {},
        placeholder: 'Dropdown',
        children: [
            React.createElement('option', { value: 'none', disabled: 'disabled', text: 'Select values'}),
            React.createElement('option', { value: 1, text: 'One'}),
            React.createElement('option', { value: 2, text: 'Two'})
        ],
        iconPrefix: 'phone',
        iconFactory: PrefixIconFactory
    }

    const enzymeWrapper = shallow(<DropdownInput {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

function setupTouched(){
    const props = {
        id: '1',
        type: 'text',
        innerState: {
            value: 1,
            touched: true,
            errors: {
                required: 'requiredMes'
            }
        },
        messages: {
            'requiredMes': 'Required!'
        },
        placeholder: 'Dropdown',
        children: [
            React.createElement('option', { value: 'none', disabled: 'disabled', text: 'Select values'}),
            React.createElement('option', { value: 1, text: 'One'}),
            React.createElement('option', { value: 2, text: 'Two'})
        ]
    }

    const enzymeWrapper = shallow(<DropdownInput {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('DropdownInput', () => {
    it('should render itself', () => {
        const {enzymeWrapper} = setupNew()
        expect(enzymeWrapper).to.have.length(1)
    })

    it('should render prefix icon when it is set', () => {
        const {enzymeWrapper} = setupIconPrefix()
        expect(enzymeWrapper.find('[className="input-field"]').children()).to.have.length(3)
    })

    it('should add data-error attribute for error messages', () => {
        const {enzymeWrapper} = setupTouched()
        expect(enzymeWrapper.find('label')).to.have.data('error', 'Required!')
    })
})