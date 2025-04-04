import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import TableFarmaciListComponent from './TableFarmaciListComponent';
import TableVenditeListComponent from './TableVenditeListComponent';
import { useNavigate } from 'react-router-dom';

const PageFarmaciaComponet = () => {
  const [farmaci, setFarmaci] = useState([]);
  const [vendite, setVendite] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const getAllFarmaci = async () => {
    let tokenObj = localStorage.getItem('veterinari_token');

    if (!tokenObj) {
      navigate('/login');
    }

    let token = JSON.parse(tokenObj).token;

    setVendite([]);
    setErrorMessage('');

    try {
      const response = await fetch('https://localhost:7019/api/Farmaci', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      if (response.ok) {
        const data = await response.json();

        setFarmaci(data);
      } else if (response.status === 403) {
        setErrorMessage('Non sei autorizzato');
      } else {
        throw new Error();
      }
    } catch {
      console.log('error');
    }
  };

  // const createFarmaco = async () => {
  //   try {
  //     const newFarmaco = {
  //       nome:
  //       dittaFornitrice:
  //     }

  //     const response = await fetch('', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newFarmaco)
  //     });
  //   } catch {
  //     console.log('error');
  //   }
  // };

  const getAllVendite = async () => {
    let tokenObj = localStorage.getItem('veterinari_token');

    if (!tokenObj) {
      navigate('/login');
    }

    let token = JSON.parse(tokenObj).token;

    setVendite([]);
    setErrorMessage('');

    setFarmaci([]);

    try {
      const response = await fetch(
        'https://localhost:7019/api/VenditaFarmaco',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setVendite(data.vendite);
      } else if (response.status === 403) {
        setErrorMessage('Non sei autorizzato');
      } else {
        throw new Error();
      }
    } catch {
      console.log('error');
    }
  };

  return (
    <Container>
      <h1>Pagina farmacia</h1>
      <div>
        {/* opzioni farmaci */}
        <div className='d-flex gap-2 my-2'>
          <Button
            className=' btn btn-sm'
            onClick={() => {
              getAllFarmaci();
            }}
          >
            Vedi tutti i farmaci
          </Button>
          {/* <Button
            className=' btn btn-sm'
            onClick={() => {
              createFarmaco();
            }}
          >
            Inserisci nuovo farmaco
          </Button> */}
        </div>

        {/* opzioni vendite */}
        <div className='d-flex gap-2 my-2'>
          <Button
            className=' btn btn-sm'
            onClick={() => {
              getAllVendite();
            }}
          >
            Elenco vendite
          </Button>
        </div>
      </div>

      {errorMessage && <p>{errorMessage}</p>}

      {farmaci.length > 0 && (
        <div>
          <TableFarmaciListComponent farmaci={farmaci} />
        </div>
      )}

      {vendite.length > 0 && (
        <div>
          <TableVenditeListComponent vendite={vendite} />
        </div>
      )}
    </Container>
  );
};

export default PageFarmaciaComponet;
