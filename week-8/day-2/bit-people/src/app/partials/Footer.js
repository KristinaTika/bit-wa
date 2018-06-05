import React from 'react';

export const Footer = (props) =>
    (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Kristina i Milica
                </div>
            </div>
        </footer>
    )