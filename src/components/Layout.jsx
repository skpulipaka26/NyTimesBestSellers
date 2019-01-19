import React from 'react';

const Layout = (props) => ({
    render() {
        return (
            <div className="app-container">
                <div className="header shadow">
                    <h2 className="heading">Best Sellers</h2>
                </div>
                <main>{props.children}</main>
            </div>
        );
    }
});

export default Layout;