import React from 'react';

export const Header = (props) => {

    const { layout, viewMode, loadData } = props;
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
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
            </nav>
        </header>
    )
}