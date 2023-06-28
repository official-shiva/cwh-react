import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-2`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className="d-flex gap-2">
                            <div className="d-flex">
                                <div className="btn btn-primary mx-2 rounded" style={{ height: "20px", width: '30px', cursor: 'pointer' }} onClick={() => (props.toggleMode('primary'))} />
                                <div className="btn btn-success mx-2 rounded" style={{ height: "20px", width: '30px', cursor: 'pointer' }} onClick={() => (props.toggleMode('success'))} />
                                <div className="btn btn-danger mx-2 rounded" style={{ height: "20px", width: '30px', cursor: 'pointer' }} onClick={() => (props.toggleMode('danger'))} />
                                <div className="btn btn-secondary mx-2 rounded" style={{ height: "20px", width: '30px', cursor: 'pointer' }} onClick={() => (props.toggleMode('secondary'))} />
                                <div className="btn btn-light mx-2 rounded" style={{ height: "20px", width: '30px', cursor: 'pointer' }} onClick={() => (props.toggleMode('light'))} />
                                <div className="btn btn-dark mx-2 rounded" style={{ height: "20px", width: '30px', cursor: 'pointer' }} onClick={() => (props.toggleMode('dark'))} />
                            </div>
                            {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => props.toggleMode(null)} />
                                <label htmlFor="dark-mode">Toggle Mode</label>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: "set title here",
    about: "About"
}