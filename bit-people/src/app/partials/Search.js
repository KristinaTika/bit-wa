import React, { Component } from 'react';

export const Search = (props) => {
    const { searchInput, inputValue } = props;
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">Search</i>
                        <input id="icon_prefix" type="text" className="validate" onChange={(event) => { searchInput(event) }} value={inputValue} placeholder="Search Users" />
                        <label htmlFor="icon_prefix"></label>
                    </div>
                </div>
            </form>
        </div>
    )
}    