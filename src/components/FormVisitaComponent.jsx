import { useEffect, useState } from 'react';

const FormVisitaComponent = () => {
  const [Farmaci, setFarmaci] = useState([]);

  const GetFarmaci = async () => {
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
    }
  };

  useEffect(() => {
    GetFarmaci();
  }, []);

  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='DataVisita' className='form-label'>
          Data Visita
        </label>
        <input type='datetime-local' className='form-control' id='dataVisita' />
      </div>
      <div className='mb-3'>
        <label htmlFor='EsameObbiettivo' className='form-label'>
          Esame Obbiettivo
        </label>
        <input
          type='text-area'
          className='form-control'
          id='esameObbiettivo'
          placeholder='Inserisci qui un esame obbiettivo'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='Descrizione' className='form-label'>
          Descrizione
        </label>
        <input
          type='text-area'
          className='form-control'
          id='Descrizione'
          placeholder="Inserisci qui un'eventuale descrizione della visita"
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='Farmaco' className='form-label'>
          Farmaco
        </label>
        <select className='form-select' id='farmaco' multiple size={5}>
          {Farmaci.length > 0 &&
            Farmaci.map((element) => {
              return (
                <option key={element.idFarmaco} value={element.idFarmaco}>
                  {element.nome}
                </option>
              );
            })}
        </select>
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default FormVisitaComponent;
