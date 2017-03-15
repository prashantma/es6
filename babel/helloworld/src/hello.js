'use strict';

/**************************************************************************
 * ********* ALWAYS PUT 'use strict'; *************************************
 * ********* ADD "export" and "default" IN CLASS DECLARATION **************
 * ********* USE BRACKETS AROUND return JSX, use strict'; WIILL CATCH *****
 **************************************************************************/

import React from 'react';
import {Component} from 'react';

export default class Hello extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <h1>Hello, world - by {this.props.name}!</h1>
        );
    }
}
