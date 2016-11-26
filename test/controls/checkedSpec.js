import React from 'react'
import {shallow} from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

import CheckedInput from '../../src/controls/checkedInput.js'

chai.use(chaiEnzyme())
const {expect} = chai

function setupNew(){
    const props = {
        id: '1',
        type: 'ckeckbox',
        placeholder: 'Input'
    }

    const enzymeWrapper = shallow(<CheckedInput {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('CheckedInput', () => {
    it('should render itself', () => {
        const {enzymeWrapper} = setupNew()
        expect(enzymeWrapper).to.have.length(1)
    })
})