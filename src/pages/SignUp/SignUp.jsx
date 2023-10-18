import { useContext, useState } from "react";
import showIcon from "../../assets/showIcon.png"
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
    const [error, setError] = useState("")
    const { googleSingIn, userCreateWithEmail, sendVerification,profileUpdate   } = useContext(AuthContext)
    const navigate=useNavigate()
    const googleSign = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => {
                console.log(error);
            })
    }


    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError(' ')

        if (password.length < 6) {
            return setError("Password should have at least 6 charecter")
        }
        else if (password !== confirm) {
            return setError("password does not match.")
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            return setError("Ensure password have special charecter.")
        }


        userCreateWithEmail(email, password)
            .then(result => {
                const looggedUser = result.user;
                
                profileUpdate(looggedUser,name)
              
                sendVerification(looggedUser)
                    .then(result => {
                        navigate('/verify')
                    })

            })
            .then(error => {
                console.log(error);
            })


        form.reset()

    }

    // const profileUpdate = (user,name)=>{
    //     return  updateProfile(user,{
    //         displayName:name
    //         })
    //     }
    


    return (
        <div className="bg-secondary">
            <div className="w-25 mt-5  mx-auto">
                <h2 className="text-center text-primary">Sign Up</h2>

                <form onSubmit={handleSignUp}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" name="name" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                        <img src={showIcon} width={"30px"} alt="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputConfrimPassword1" className="form-label">Confirm Password</label>
                        <input type="password" name="confirm" className="form-control" id="confirm" />

                    </div>
                    <p className="text-white">{error}</p>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <h4 className="text-secondary text-center">Or</h4 >
                <button onClick={() => { googleSign() }} className=" btn btn-info">Google signIn</button>
            </div>

        </div>
    );
};

export default SignUp;