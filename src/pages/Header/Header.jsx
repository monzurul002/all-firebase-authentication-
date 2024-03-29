import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate()
    const LogOut = () => {
        navigate("/login")
        logOut()
            .then(result => {
            })
    }
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg bg-body-secondary fw-medium ">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">Relaxation Hotel</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <h2>{user?.displayname}</h2>
                            <li className="nav-item">
                                <Link className="nav-link" to="/details"> Rooms & Suits</Link>
                            </li>

                        </ul>

                        <form className="d-flex" role="search">

                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav  mb-2 mb-lg-0">

                            {

                                !user ? <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                                    </li> </> : <button className="btn text-white bg-danger  active" onClick={() => LogOut()} >
                                    Logout
                                </button>
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;