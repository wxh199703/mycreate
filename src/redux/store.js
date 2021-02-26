import { createStore} from 'redux'

import { data }  from './reducer.js'
export var store=createStore(data)