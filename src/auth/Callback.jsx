import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (code) {
        console.log('Code => ', code);
        try {
          const response = await axios.post('http://localhost:8081/api/auth/linkedin', { code }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Response.data => ', response.data);

          // Since the access token is returned as a plain string, use response.data directly
          const accessToken = response.data;
          console.log('accessToken => ', accessToken);

          if (accessToken) {
            // Store the access token in local storage or state
            localStorage.setItem('lin_Acc_Tkn', accessToken);
            const savedToken = localStorage.getItem('lin_Acc_Tkn');
            console.log('savedToken => ', savedToken);

            // Fetch user info using the access token
            const res = await axios.post('http://localhost:8081/api/auth/user-info', { accessToken: savedToken }, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            console.log('Res.data.firstname => ', res.data.firstName);
            console.log('Res.data.lastname => ', res.data.lastName);
            console.log('Res.data.email => ', res.data.email);
            console.log('Res.data.picture => ', res.data.picture);

            localStorage.setItem('fullName', `${res.data.firstName} ${res.data.lastName}`);
            localStorage.setItem('userEmail', res.data.email);

            // Redirect to dashboard
            navigate('/dashboard');
          } else {
            console.error('Access token is undefined');
          }
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      }
    };

    fetchAccessToken();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
