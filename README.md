# react-redux-form-materialize

[![Build Status](https://travis-ci.org/nasushkov/react-redux-form-materialize.svg?branch=master)](https://travis-ci.org/nasushkov/react-redux-form-materialize)

Input controls for [React Redux Form](https://github.com/davidkpiano/react-redux-form) leveraged by [Materialize](https://github.com/Dogfalo/materialize) Material UI framework

`npm install react-redux-form-materialize@latest --save`

## Installation

```bash
# Dependencies 
npm install materialize react-redux react-redux-form redux --save

npm install react-redux-form-materialize@latest --save
```

##Controls
Currently this package supports several basic controls which are based on Materialise styles: **TextInput**, **TextArea**, **FileInput** and **CheckedInput**(used both for radio and checkbox).
You can use each control as a component property of an appropriate react-redux-form Control component. For some controls (TextInput, TextArea and FileInput) you should
also provide mapProps property which is included in this package. Here is a full example:

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
           <Control.text type="text" model="user.name" placeholder="My name" component={TextInput} mapProps={mapProps}/>
        </div> 
        <div className="row">
           <Control.text model="user.info"  placeholder="My info" component={TextArea} mapProps={mapProps}/>
        </div> 
        <div className="row">
           <Control.checkbox type="checkbox" model="user.checked" component={CheckedInput} />
        </div> 
        <div className="row">
           <Control.file model="user.doc" component={FileInput} mapProps={mapProps}/>
        </div>               
        <button>Submit!</button>
      </Form>
    )
  }
}

export default MyForm
```

##Validation
**TextInput** and **TextArea** supports React Redux Form validation and can be used in conjunction with [React Intl](https://github.com/yahoo/react-intl) to provide internalized error messages (set *messages* property for that purpose).

##Fancy input icons
You can also provide fancy Material icons to accompany your TextInput (set *iconPrefix* and *iconFactory* properties to make it work) 


