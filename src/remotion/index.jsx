import React from 'react';
import {registerRoot, Composition} from 'remotion';
import {FirstTrace,FILM} from './FirstTrace';
const Root=()=> <Composition id="TheFirstTrace" component={FirstTrace} {...FILM}/>;
registerRoot(Root);
