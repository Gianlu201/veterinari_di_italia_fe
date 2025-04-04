import { useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const PageSignInComponent = () => {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [codiceFiscale, setCodiceFiscale] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const navigate = useNavigate();

  const sendRegistration = async () => {
    try {
      const registrationRequest = {
        nome: nome,
        cognome: cognome,
        email: email,
        codiceFiscale: codiceFiscale,
        telefono: telefono,
        password: password,
      };

      const response = await fetch(
        'https://localhost:7019/api/Account/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationRequest),
        }
      );
      if (response.ok) {
        navigate('/login');
      } else {
        throw new Error();
      }
    } catch {
      setShowErrorAlert(true);
    }
  };

  return (
    <Container className='d-flex justify-content-center'>
      <form
        className='w-50 mt-4 border border-1 p-4 rounded-3'
        onSubmit={(e) => {
          e.preventDefault();
          sendRegistration();
        }}
      >
        <div className='my-2'>
          <label className='form-label m-0 mb-1'>Nome</label>
          <input
            className=' form-control'
            placeholder='Nome'
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </div>

        <div className='my-2'>
          <label className='form-label m-0 mb-1'>Cognome</label>
          <input
            className=' form-control'
            placeholder='Cognome'
            value={cognome}
            onChange={(e) => {
              setCognome(e.target.value);
            }}
          />
        </div>

        <div className='my-2'>
          <label className='form-label m-0 mb-1'>Codice fiscale</label>
          <input
            maxLength={16}
            className=' form-control'
            placeholder='Codice fiscale'
            value={codiceFiscale}
            onChange={(e) => {
              setCodiceFiscale(e.target.value);
            }}
          />
        </div>

        <div className='my-2'>
          <label className='form-label m-0 mb-1'>Email</label>
          <input
            type='email'
            className=' form-control'
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className='my-2'>
          <label className='form-label m-0 mb-1'>Telefono</label>
          <input
            type='tel'
            className=' form-control'
            placeholder='Telefono'
            value={telefono}
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
        </div>

        <div className='my-2'>
          <label className='form-label m-0 mb-1'>Password</label>
          <input
            type='password'
            className=' form-control'
            placeholder='Password'
            value={password}
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
          <Link to='/login' className='btn btn-sm btn-warning'>
            Accedi
          </Link>
          <Button type='submit' className='btn btn-sm btn-success'>
            Registrati
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default PageSignInComponent;
