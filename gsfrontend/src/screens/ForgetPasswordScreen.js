// import React, { useContext, useEffect } from 'react'
// import { Form, useNavigate } from '../../node_modules/react-router-dom/dist/index'

// import store from '../store';
// import Axios from '../../node_modules/axios/index';
// import { getError } from '../utils';
// import { toast } from '../../node_modules/react-toastify/dist/index';
// export default function ForgetPasswordScreen()
// {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('');

//     const { state } = useContext(store);
//     const { userInfo } = state;

//     useEffect(() =>
//     {
//         if (userInfo)
//         {
//             navigate('/');
//         }
//     }, [navigate, userInfo]);

//     const submitHandler = async (e) =>
//     {
//         e.preventDefault();
//         try
//         {
//             const { data } = await Axios.post('/api/users/forget-password', {
//                 email,
//             });
//             toast.success(data.message);
//         } catch (err)
//         {
//             toast.error(getError(data.message));
//         }
//     }
//     return (
//         <Container className="small-container">
//             <Helmet>
//                 <title>
//                     Forget Password
//                 </title>
//             </Helmet>
//             <h1 className="my-3">Forget Password</h1>
//             <Form onSubmit={submitHandler}>
//                 <Form.Group className="mb-3" controlId="email">
//                     <Form.Label>
//                         Email
//                     </Form.Label>
//                     <Form.Control type="email"
//                         required
//                         onChange={(e) => setEmail(e.target.value)} />
//                 </Form.Group>
//                 <div className='mb-3'>
//                     <Button type="submit">submit</Button>
//                 </div>
//             </Form>
//         </Container>
//     )
// }
