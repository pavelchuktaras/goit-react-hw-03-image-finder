import React from 'react';
import { Component } from 'react';
import styled from './Searchbar.module.css'

export class Searchbar extends Component {
    state = {
        query: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }
    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }
    
    render() {
        return (
            <header className={styled.searchbar}>
                <form onSubmit={this.handleSubmit} className={styled.form}>
                    <button type="submit" className={styled.button}>
                        <span className={styled['button-label']}>Search</span>
                    </button>

                    <input
                        className={styled.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}