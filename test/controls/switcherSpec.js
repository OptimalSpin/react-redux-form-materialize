import React from 'react'
import {shallow} from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import SwitcherInput from '../../src/controls/switcherInput.js'

chai.use(chaiEnzyme())
const {expect} = chai

function setupNew(){
    const props = {
        id: '1',
        checked: true,
        onChange: () => {},
        onLabel: 'On',
        offLabel: 'Off'
    }

    const enzymeWrapper = shallow(<SwitcherInput {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('SwitcherInput', () => {
    it('should render itself', () => {
        const {enzymeWrapper} = setupNew()
        expect(enzymeWrapper).to.have.length(1)
    })
})