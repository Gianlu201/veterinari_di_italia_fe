import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const PageLoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const sendLogin = async (e) => {
    e.preventDefault();

    const loginRequest = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('https://localhost:7019/api/Account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
      });

      if (response.ok) {
        const data = await response.json();

        // console.log(data);

        // INFO: metodo per decodificare il JWT token
        console.log(jwtDecode(data.token));

        const tokenDecoded = jwtDecode(data.token);

        const userInfos = {
          aud: tokenDecoded.aud,
          exp: tokenDecoded.exp,
          role: tokenDecoded[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
          ],
          email:
            tokenDecoded[
              'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
            ],
          fullName:
            tokenDecoded[
              'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
            ],
          id: tokenDecoded[
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
          ],
          iss: tokenDecoded.iss,
          expiration: data.expires,
        };

        dispatch({
          type: 'SET_LOGGED_USER',
          payload: userInfos,
        });

        // verifico se il token esiste e lo salvo nel localStorage
        if (data.token !== null) {
          localStorage.setItem('veterinari_token', JSON.stringify(data));

          navigate('/');
        } else {
          throw new Error();
        }
      } else {
        throw new Error();
      }
    } catch {
      console.log('qui');
      setShowErrorAlert(true);
    }
  };

  return (
    <Container className='d-flex justify-content-center'>
      <form
        className='w-50 mt-4 border border-1 p-4 rounded-3'
        onSubmit={(e) => {
          sendLogin(e);
        }}
      >
        <div className='my-2'>
          <label className='form-label m-0 mb-1'>Email</label>
          <input
            className=' form-control'
            placeholder='Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className='my-2'>
          <label className='form-label m-0 mb-1'>Password</label>
          <input
            type='password'
            className=' form-control'
            placeholder='Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        {showErrorAlert && (
          <Alert
            variant='danger'
            onClose={() => setShowErrorAlert(false)}
            dismissible
            className='small'
          >
            Qualcosa è andato storto, riprova!
          </Alert>
        )}

        <div className='d-flex justify-content-end gap-2 mt-3'>
          <Link to='/registrazione' className='btn btn-sm btn-warning'>
            Registrati
          </Link>
          <Button type='submit' className='btn btn-sm btn-success'>
            Accedi
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default PageLoginComponent;
