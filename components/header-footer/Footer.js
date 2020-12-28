import React from 'react';
// import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default class FooterComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.footer}>
                <h1>Powered by APPWRK</h1>
            </div>
        );
    }
}