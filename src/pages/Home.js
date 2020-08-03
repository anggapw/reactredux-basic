import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { store } from '../store'
import './home.css'
import { tambahBarang, kurangiBarang } from '../actions/barang'


const PlusButton = styled.button`
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 8px;
`
const MinusButton = styled(PlusButton)`
    background-color: #f44336;
`
class Home extends Component {
    constructor() {
        super();
        this.state = {
            barang: 0
        }
    }


    componentDidMount() {
        this.setState({
            barang: store.getState().barang.jumlahBarang
        })
        store.subscribe(() => {
            console.log('There are changes here');
            this.setState({
                barang: store.getState().barang.jumlahBarang
            })
        })
    }

    render() {
        console.log(this.props);
        console.log(store.getState())
        const barang = store.getState().barang.jumlahBarang
        return (
            <div className="home">
                <span>Jumlah Barang: </span><span><strong>{barang}</strong></span><br />
                <MinusButton onClick={this.props.kurangiBarang}>Remove</MinusButton>
                <PlusButton onClick={this.props.tambahBarang}>Add</PlusButton>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tambahBarang: () => dispatch(tambahBarang),
        kurangiBarang: () => dispatch(kurangiBarang)
    }
}

export default connect(null, mapDispatchToProps)(Home);