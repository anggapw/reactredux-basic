import { combineReducers } from 'redux';

import { pemainReducer } from './pemainReducer'
import { keuanganReducer } from './keuanganReducer'

export const rootReducer = combineReducers ({
    pemain: pemainReducer,
    keuangan: keuanganReducer
})