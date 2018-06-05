import React from 'react';

export const Header = (props) =>
    (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo center">{props.headline}</a>
                </div>
            </nav>
        </header>
    )
