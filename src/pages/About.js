import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './About.css'

const About = (props) => {
    const barang = props.barang
    return (
        <div className="about">
            <h2>About Page</h2>
                <span>Banyaknya barang: </span><span><strong>{barang}</strong></span><br/>
                <Link to = "/">Back to Home</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        barang: state.barang.jumlahBarang
    }
}

export default connect(mapStateToProps, null)(About);