const initialState = {
    jumlahBarang: 11
}

export const barangReducer = (state = initialState, action) => {
    if(action.type==="TAMBAH_BARANG") {
        const newState = {
            jumlahBarang: state.jumlahBarang + 1
        }
        return newState
    } else if(action.type==="KURANGI_BARANG") {
        if(state.jumlahBarang > 0) {
            const newState= {
                jumlahBarang: state.jumlahBarang-1
        }
        return newState
    }
}
    return state
}