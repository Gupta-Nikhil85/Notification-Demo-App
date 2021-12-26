import {createStore } from 'redux';
import {reducer} from './notify/notificationReducer';

const store= createStore(reducer);

export default store;