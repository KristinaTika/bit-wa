import React from 'react';
import { Search } from './Search';

export const Header = (props) => {

    const { layout, viewMode, loadData } = props;
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <a className="brand-logo center">{props.headline}</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a><i className="material-icons" onClick={() => loadData()}>refresh</i></a></li>
                            {
                                viewMode
                                    ? <li><i className="tiny material-icons" onClick={() => layout(viewMode)}>view_list</i></li>
                                    : <li><i className="tiny material-icons" onClick={() => layout(viewMode)}>view_module</i></li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required placeholder="Search Users" /*value={this.state.inputText} onChange={this.handleChange} */ />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    )
}
