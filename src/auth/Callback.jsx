import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const state = params.get('state');

      if (code && state === 'autoposter') {
        console.log('Code => ', code);
        console.log('State => ', state);
        try {
          // Send the code to the backend to get the access token and other data
          const response = await axios.post('http://localhost:8081/api/auth/linkedin', { code, state }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log('Response => ', response);
          console.log('Response.data => ', response.data);

          // Assuming the backend response contains the login data including access token and user info
          const loginData = response.data.data; // Assuming response is structured as { accessToken, refreshToken, userInfo }

          if (loginData) {
            // Store tokens and user info in localStorage or sessionStorage
            localStorage.setItem('accessToken', loginData.accessToken);
            localStorage.setItem('refreshToken', loginData.refreshToken);
            localStorage.setItem('userEmail', loginData.email);
            localStorage.setItem('fullName', loginData.name);
            localStorage.setItem('profilePic', loginData.profilePicture);

            // Redirect to dashboard
            navigate('/dashboard');
          } else {
            console.error('No login data returned from backend');
          }
        } catch (error) {
          console.error('Error during LinkedIn authentication:', error);
        }
      }
    };

    fetchAccessToken();
  }, []); // Empty dependency array means this will only run once after the component mounts

  return <div>Loading...</div>;
};

export default Callback;

















// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Callback = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAccessToken = async () => {
//       const params = new URLSearchParams(window.location.search);
//       const code = params.get('code');
//       const state = params.get('state');

//       if (code && state === 'autoposter') {
//         console.log('Code => ', code);
//         console.log('State => ', state);
//         try {
//           const response = await axios.post('http://localhost:8081/api/auth/linkedin', { code, state }, {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           });
//           console.log('Response => ', response);
//           console.log('Response.data => ', response.data);

//           // Since the access token is returned as a plain string, use response.data directly
//           const accessToken = response.data;
//           console.log('accessToken => ', accessToken);

//           if (accessToken) {
//             // Store the access token in local storage or state
//             localStorage.setItem('lin_Acc_Tkn', accessToken);
//             const savedToken = localStorage.getItem('lin_Acc_Tkn');
//             console.log('savedToken => ', savedToken);

//             // Fetch user info using the access token
//             const res = await axios.post('http://localhost:8081/api/auth/user-info', { accessToken: savedToken }, {
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//             });
//             console.log('Res => ', res);
//             console.log('Res.data.name => ', res.data.data.name);
//             console.log('Res.data.email => ', res.data.data.email);
//             console.log('Res.data.picture => ', res.data.data.picture);

//             // localStorage.setItem('fullName', `${res.data.firstName} ${res.data.lastName}`);
//             localStorage.setItem('fullName', res.data.data.name);
//             localStorage.setItem('userEmail', res.data.data.email);

//             // Redirect to dashboard
//             navigate('/dashboard');
//           } else {
//             console.error('Access token is undefined');
//           }
//         } catch (error) {
//           console.error('Error fetching access token:', error);
//         }
//       }
//     };

//     fetchAccessToken();
//   }, []); // Removed navigate from the dependency array

//   return <div>Loading...</div>;
// };

// export default Callback;











