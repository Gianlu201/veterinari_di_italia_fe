import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import FormVisitaComponent from './FormVisitaComponent';

const PageVeterinarioComponet = () => {
  // const getAllAnimals = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://localhost:7019/api/AnagraficaAnimale',
  //       {
  //         method: 'GET',
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();

  //       console.log(data);
  //     }

  //     // const data = await response.json();
  //   } catch {
  //     // finale cattivo :(
  //   }
  // };

  useEffect(() => {
    // getAllAnimals();
  }, []);

  return (
    <Container>
      <h1>Pagina veterinario</h1>
      <FormVisitaComponent />
    </Container>
  );
};

export default PageVeterinarioComponet;
