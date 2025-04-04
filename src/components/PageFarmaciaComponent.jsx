import DataTable from 'datatables.net-dt';
import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const PageFarmaciaComponet = () => {
  const [farmaci, setFarmaci] = useState([]);
  const [vendite, setVendite] = useState([]);

  const getAllFarmaci = async () => {
    setVendite([]);

    try {
      const response = await fetch('https://localhost:7019/api/Farmaci', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();

        console.log(data);
        setFarmaci(data);
      } else {
        throw new Error();
      }
    } catch {
      console.log('error');
    }
  };

  const getAllVendite = async () => {
    setFarmaci([]);

    try {
      const response = await fetch(
        'https://localhost:7019/api/VenditaFarmaco',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        console.log(data);
        setVendite(data.vendite);
      } else {
        throw new Error();
      }
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    let farmaciTable = document.getElementById('myFarmaciTable');
    if (farmaciTable) {
      // eslint-disable-next-line no-unused-vars
      let table = new DataTable('#myFarmaciTable');
    }
    let venditeTable = document.getElementById('myVenditeTable');
    if (venditeTable) {
      // eslint-disable-next-line no-unused-vars
      let table = new DataTable('#myVenditeTable');
    }
  });

  return (
    <Container>
      <h1>Pagina farmacia</h1>
      <div className=' d-flex gap-2'>
        <Button
          className=' btn btn-sm'
          onClick={() => {
            getAllFarmaci();
          }}
        >
          Vedi tutti i farmaci
        </Button>
        <Button
          className=' btn btn-sm'
          onClick={() => {
            getAllVendite();
          }}
        >
          Elenco vendite
        </Button>
      </div>

      {farmaci.length > 0 && (
        <div>
          <table
            id='myFarmaciTable'
            className=' table table-striped table-hover'
          >
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ditta fornitrice</th>
                <th>Elenco usi</th>
                <th>Tipologia</th>
                <th>Posizione</th>
              </tr>
            </thead>
            <tbody>
              {farmaci.map((farmaco) => {
                return (
                  <tr key={farmaco.idFarmaco}>
                    <td>{farmaco.nome}</td>
                    <td>{farmaco.dittaFornitrice}</td>
                    <td>{farmaco.elencoUsi}</td>
                    <td>{farmaco.farmaco ? 'Medicinale' : 'Alimentare'}</td>
                    <td>{farmaco.posizione}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {vendite.length > 0 && (
        <div>
          <table
            id='myVenditeTable'
            className=' table table-striped table-hover'
          >
            <thead>
              <tr>
                <th>Numero ricetta</th>
                <th>Codice fiscale acq.</th>
                <th>Data acquisto</th>
                <th>Prodotti</th>
              </tr>
            </thead>
            <tbody>
              {vendite.map((vendita) => {
                return (
                  <tr key={vendita.idVendita}>
                    <td>{vendita.numeroRicetta}</td>
                    <td>{vendita.acquirente.codiceFiscale}</td>
                    <td className='text-end'>
                      {vendita.dataAcquisto.slice(0, 10)}
                    </td>
                    <td className='text-end'>
                      {vendita.farmaciaVenditaFarmaco.map((farmaco) => {
                        return (
                          <span
                            key={farmaco.farmaciaIdFarmaco}
                            className='d-block'
                          >
                            {farmaco.farmaco.nome}
                          </span>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
};

export default PageFarmaciaComponet;
