# react-redux-form-materialize

[![Build Status](https://travis-ci.org/nasushkov/react-redux-form-materialize.svg?branch=master)](https://travis-ci.org/nasushkov/react-redux-form-materialize)

Material input controls for the second popular React/Redux library for a form manipulation [React Redux Form](https://github.com/davidkpiano/react-redux-form) 
leveraged by [Materialize](https://github.com/Dogfalo/materialize) Material UI CSS framework under the hood. It does not use any js code from Materialize since 
it is tightly coupled with jQuery.  

`npm install react-redux-form-materialize@latest --save`

## Installation

```bash
# Dependencies 
npm install materialize react-redux react-redux-form redux --save

npm install react-redux-form-materialize@latest --save
```

##Controls
Currently this package supports several basic controls which are based on Materialize styles: **TextInput**, **TextArea**, **DropdownInput**, **CheckedInput** (used both for radio and checkbox), **FileInput** and **SwitcherInput**.
In addition two more opinionated controls are provided: **AucompleteInput** (which is based on highly popular [React Autosuggest](https://github.com/moroshko/react-autosuggest) compoment and uses materialize styles for rendering) 
and **DatePicker** (which is not compliant with Materialize date picker styles but uses [React Infinite Calendar](https://github.com/clauderic/react-infinite-calendar) which is also designed with Material UL concepts in mind). 
You can use each control as a *component* property of an appropriate react-redux-form *Control* component. For some controls (**TextInput**, **TextArea**, **DropdownInput**, **AutocompleteInput**, **DatePicker** and **FileInput**) 
you should also provide *mapProps* property which is included in this package (it is used to connect some internals of React Redux Form). Here is a full example:

```jsx
import React from 'react'
import {Control, Form} from 'react-redux-form'
import {TextInput, TextArea, FileInput, CheckedInput, mapProps} from 'react-redux-form-materialize'

class MyForm extends React.Component {
  handleSubmit(val) {    
  }

  render() {
    return (
      <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <div className="row">
           <Control.text type="text" model="user.name" placeholder="My name" 
           component={TextInput} mapProps={mapProps}/>
        </div> 
        <div className="row">
           <Control.text model="user.info"  placeholder="My info" 
           component={TextArea} mapProps={mapProps}/>
        </div> 
        <div className="row">
           <Control.checkbox type="checkbox" model="user.checked" 
           component={CheckedInput} />
        </div> 
        <div className="row">
           <Control.file model="user.doc" placeholder="Input file" 
           buttonText="File" component={FileInput} mapProps={mapProps}/>
        </div>               
        <button>Submit!</button>
      </Form>
    )
  }
}

export default MyForm
```

##Validation
**TextInput**, **TextArea**, **DropdownInput** and **AutocompleteInput** supports React Redux Form validation and can be used in conjunction with [React Intl](https://github.com/yahoo/react-intl) to provide internalized error messages (set *messages* property for that purpose).

##Fancy input icons
You can also provide fancy Material icons (for example [React Icons](https://gorangajic.github.io/react-icons/fa.html)) to accompany your TextInput (set *iconPrefix* and *iconFactory* properties to make it work) 


