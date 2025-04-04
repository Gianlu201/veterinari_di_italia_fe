import DataTable from 'datatables.net-dt';
import { useEffect } from 'react';

const TableFarmaciListComponent = (farmaci) => {
  useEffect(() => {
    let farmaciTable = document.getElementById('myFarmaciTable');
    if (farmaciTable) {
      // eslint-disable-next-line no-unused-vars
      let table = new DataTable('#myFarmaciTable');
    }
  });

  return (
    <table id='myFarmaciTable' className=' table table-striped table-hover'>
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
        {farmaci.farmaci.map((farmaco) => {
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
  );
};

export default TableFarmaciListComponent;
