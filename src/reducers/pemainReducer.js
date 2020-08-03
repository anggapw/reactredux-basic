const initialState = {
    pemainInti: 11
}

export const pemainReducer = (state = initialState, action) => {
    if(action.type==="TAMBAH_PEMAIN") {
        const newState = {
            pemainInti: state.pemainInti + 1
        }
        return newState
    } else if(action.type==="KURANGI_PEMAIN") {
        if(state.pemainInti > 0) {
            const newState= {
            pemainInti: state.pemainInti-1
        }
        return newState
    }
}
    return state
}