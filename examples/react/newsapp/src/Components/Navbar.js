import React, { Component } from 'react'
import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);

    }
    
    handleChange = (value) => {
        this.props.setCatey(value);
    }
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsLibrary</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><button className="dropdown-item" onClick={() => this.handleChange("business")}>Business</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.handleChange("entertainement")}>Entertainement</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.handleChange("health")}>Health</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.handleChange("science")}>Science</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.handleChange("sports")}>Sports</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.handleChange("technology")}>Technology</button></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;