import React from 'react';
// import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default class HeaderComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.header}>
                <h1>Welcome to React-Next APP!</h1>
            </div>
        );
    }
}