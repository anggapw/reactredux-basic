import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { store } from '../store'
import './home.css'
import { tambahPemain, kurangiPemain } from '../actions/pemain'


const PlusButton = styled.button `
    background-color: blue;
    padding: 10px 20px;
    margin: 15px;
`
const MinusButton = styled(PlusButton) `
    background-color: red;
    color: white;
`
class Home extends Component {
    constructor () {
        super();
        this.state = {
            pemain: 0
        }
    }


componentDidMount() {
//untuk nampilin state pertama
    this.setState ({
        pemain: store.getState().pemain.pemainInti
    })
    store.subscribe(() => {
        console.log('There are changes here');
        //untuk nampilin perubahan
        this.setState ({
            pemain:store.getState().pemain.pemainInti
        })
    })
}

render() {
    console.log(this.props);
    console.log(store.getState())
    const pemain = store.getState().pemain.pemainInti
    return (
        <div className="home">
            <h2>Welcome to Football Team App</h2>
                <span>Jumlah Pemain:</span><span><strong>{pemain}</strong></span><br/>
                <MinusButton onClick={this.props.kurangiPemain}>Kurang</MinusButton>
                <PlusButton onClick={this.props.tambahPemain}>Tambah</PlusButton>
        </div>
    )
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        tambahPemain: () => dispatch(tambahPemain),
        kurangiPemain: () => dispatch(kurangiPemain)
    }
}
//connect perlu 2 parameter, maka ada null, (Home) agar home bisa tetap dipakai di app.js
export default connect(null, mapDispatchToProps)(Home);