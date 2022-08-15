import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { login, signUp } from '../../Store/actions/AuthAction.js'
//import { Navigate, useNavigate } from 'react-router-dom'

const Auth = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const loading = useSelector((state)=>state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true);
    const [data, setData] = useState({ firstname: '', lastname: '', username: '', password: '', confirmpass: '' });
    const [confirmPass, setConfirmPass] = useState(false);
    const changeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        // console.log(data);
    };
    const handSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
            // navigate('/home');
        }else{
            dispatch(login(data));
            // <Navigate to='/home' replace={true}/>
        }
    };

    const restData = () => {
        setConfirmPass(false);
        setData({ firstname: '', lastname: '', username: '', password: '', confirmpass: '' });
    }

    const colLogin = 'colLogin';
    return (
        <div className="Auth">
            <div className="a-left">
                <img className='logoSign' src={Logo} alt="" />
                <div className="webName">
                    <h1>Nader Media</h1>
                    <h6>#Explor the ideas throughout the world</h6>
                </div>
            </div>

            <div className="a-right">
                <form onSubmit={handSubmit} className="infoForm authForm">
                    <h3>{isSignUp ? 'Sign up' : 'Log In'}</h3>

                    {isSignUp && <div>
                        <input
                            onChange={changeData}
                            type="text"
                            placeholder="First Name"
                            className="infoInput"
                            name="firstname"
                            value={data.firstname}
                        />
                        <input
                            onChange={changeData}
                            type="text"
                            placeholder="Last Name"
                            className="infoInput"
                            name="lastname"
                            value={data.lastname}
                        />
                    </div>}



                    <div>
                        <input
                            onChange={changeData}
                            type="text"
                            className="infoInput"
                            name="username"
                            placeholder="Usernames"
                            value={data.username}
                        />
                    </div>

                    <div className={!isSignUp ? colLogin : ''}>
                        <input
                            onChange={changeData}
                            type="password"
                            className="infoInput"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                        />
                        {isSignUp && <input
                            onChange={changeData}
                            type="password"
                            className="infoInput"
                            name="confirmpass"
                            placeholder="Confirm Password"
                            value={data.confirmpass}
                        />}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ display: `${confirmPass ? 'flex' : 'none'}`, color: 'red', fontSize: '.8rem', marginRight: `${isSignUp ? '-14rem' : ''}` }}>
                            *confirm password is not same
                        </span>
                        <span onClick={() => { setIsSignUp(prev => !prev); restData() }} style={{ fontSize: '12px', cursor: 'pointer' }}>
                            {isSignUp ? 'Already have an account. Login!' : 'do not have acount ? sign Up'}
                        </span>
                    </div>
                    <button disabled={loading} className="Button infoButton" type="submit">{loading?'Loading...':isSignUp ? 'Signup' : 'Login'}</button>
                </form>
            </div>
        </div>
    )
}

// function LogIn() {
//     return (
//         <div className="a-right">
//             <form className="infoForm authForm">
//                 <h3>Log In</h3>

//                 <div>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         className="infoInput"
//                         name="username"
//                     />
//                 </div>

//                 <div>
//                     <input
//                         type="password"
//                         className="infoInput"
//                         placeholder="Password"
//                         name="password"
//                     />
//                 </div>

//                 <div>
//                     <span style={{ fontSize: "12px" }}>
//                         Don't have an account Sign up
//                     </span>
//                     <button className="Button infoButton">Login</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// function SignUp() {
//     return (
//         <div className="a-right">
//             <form className="infoForm authForm">
//                 <h3>Sign up</h3>

//                 <div>
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         className="infoInput"
//                         name="firstname"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         className="infoInput"
//                         name="lastname"
//                     />
//                 </div>

//                 <div>
//                     <input
//                         type="text"
//                         className="infoInput"
//                         name="username"
//                         placeholder="Usernames"
//                     />
//                 </div>

//                 <div>
//                     <input
//                         type="text"
//                         className="infoInput"
//                         name="password"
//                         placeholder="Password"
//                     />
//                     <input
//                         type="text"
//                         className="infoInput"
//                         name="confirmpass"
//                         placeholder="Confirm Password"
//                     />
//                 </div>

//                 <div>
//                     <span style={{ fontSize: '12px' }}>Already have an account. Login!</span>
//                 </div>
//                 <button className="Button infoButton" type="submit">Signup</button>
//             </form>
//         </div>
//     );
// }

export default Auth