// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import { toast } from '../../node_modules/react-toastify/dist/index';
// import Axios from '../../node_modules/axios/index';

// export default function ResetPasswordScreen()
// {
//     const navigate = useNavigate();
//     const { token } = useParams();
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const { state } = useContext(store);
//     const { userInfo } = state;

//     useEffect(() =>
//     {
//         if (userInfo || !token)
//         {
//             navigate('/');
//         }
//     }, [navigate, userInfo, token]);

//     const submitHandler = async (e) =>
//     {
//         e.preventDefault();
//         if (password !== confirmPassword)
//         {
//             toast.error('Password do not match');
//             return;
//         }
//         try
//         {
//             await Axios.post('api/users/reset-ps')
//         }
//     }
//     return (
//         <div>

//         </div>
//     )
// }
