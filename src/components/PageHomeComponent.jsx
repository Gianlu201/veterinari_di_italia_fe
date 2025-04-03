import { Button, Container } from "react-bootstrap";

const PageHomeComponent = () => {
  return (
    <>
      <Container>
        <h1 className="text-center">Clinica Veterinaria Benessere Animali</h1>
        <div className="d-flex justify-content-center ">
          <Button
            className="mx-1"
            style={{ backgroundColor: "#89D9E3", border: "#89D9E3" }}
          >
            CONTATTI
          </Button>
          <Button
            className="mx-1"
            style={{ backgroundColor: "#89D9E3", border: "#89D9E3" }}
          >
            REPARTI
          </Button>
          <Button
            className="mx-1"
            style={{ backgroundColor: "#89D9E3", border: "#89D9E3" }}
          >
            MEDICI
          </Button>
        </div>

        <form>
          <div className="form-group">
            <label>
              Inserisci il Microchip ID per poter accedere ai dati del tuo amico
              a 4 zampe
            </label>
            <br />
            <input
              placeholder="Inserisci Codice riportato sulla targhetta"
              type="search"
              style={{ width: "20em" }}
            />

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <hr />
      </Container>
      <div className="bg-warning">
        <Container>
          <h2 className="display-5">INFORMAZIONI DI CONTATTO</h2>
        </Container>
      </div>
      <Container>
        <div className="row g-5">
          <div className="col-5 border border-primary">
            <p>
              Direttore Sanitario Regionale Dott.Mario Rossi -<br />
              Clinica Veterinaria Benessere Animale P.IVA 12345678901
            </p>
          </div>
          <div className="col-5 border border-danger">
            <p>Via Milano,15</p>
            <p>20122 Milano Mi</p>
            <p>Tel:02 9786 5487</p>
            <p>info@benssereanimali.it</p>
          </div>
        </div>
        <div></div>
      </Container>
    </>
  );
};

export default PageHomeComponent;
