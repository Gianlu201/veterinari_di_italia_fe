import DataTable from 'datatables.net-dt';
import { useEffect } from 'react';

const TableVenditeListComponent = (vendite) => {
  useEffect(() => {
    let venditeTable = document.getElementById('myVenditeTable');
    if (venditeTable) {
      // eslint-disable-next-line no-unused-vars
      let table = new DataTable('#myVenditeTable');
    }
  });

  return (
    <table id='myVenditeTable' className=' table table-striped table-hover'>
      <thead>
        <tr>
          <th>Numero ricetta</th>
          <th>Codice fiscale acq.</th>
          <th>Data acquisto</th>
          <th>Prodotti</th>
        </tr>
      </thead>
      <tbody>
        {vendite.vendite.map((vendita) => {
          return (
            <tr key={vendita.idVendita}>
              <td>{vendita.numeroRicetta}</td>
              <td>{vendita.acquirente.codiceFiscale}</td>
              <td className='text-end'>{vendita.dataAcquisto.slice(0, 10)}</td>
              <td className='text-end'>
                {vendita.farmaciaVenditaFarmaco.map((farmaco) => {
                  return (
                    <span key={farmaco.farmaciaIdFarmaco} className='d-block'>
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
  );
};

export default TableVenditeListComponent;
