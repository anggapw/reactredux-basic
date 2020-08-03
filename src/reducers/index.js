import { combineReducers } from 'redux';

import { barangReducer } from './barangReducer'
import { keuanganReducer } from './keuanganReducer'

export const rootReducer = combineReducers ({
    barang: barangReducer,
    keuangan: keuanganReducer
})