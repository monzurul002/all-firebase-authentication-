import { useContext, useRef } from "react";
import showIcon from "../../assets/showIcon.png"
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef()
    const { googleSingIn,emailPasswordLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

    const googleSign = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;

                if (user) {
                    toast("Succesfully created user.")
                    return navigate("/home")
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        emailPasswordLogin(email,password)
        .then(result=>{
            const user =result.user;
            navigate( location?.state?.from?.pathname || "/",{replace:true})
        })
        .then(error=>{
            console.log(error);
        })

    }



    return (
        <div className="w-25 mt-5  mx-auto">
            <h2 className="text-center text-primary">Login</h2>

            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" />
                    <img src={showIcon} width={"30px"} alt="" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <h4 className="text-secondary text-center">Or</h4 >
            <button onClick={() => googleSign()} className=" btn btn-info">Google signIn</button>

        </div>
    );
};

export default Login;