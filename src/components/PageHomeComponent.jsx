import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const PageHomeComponent = () => {
  const [MicrochipId, setMicrochipId] = useState("");
  const [animale, setAnimale] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://localhost:7019/api/GestioneRicoveri/RicercaRicoverato?NumeroMicroChip=${MicrochipId}`
      );
      if (!response.ok) {
        throw new Error("Qualcosa è andato Giovanni Storti");
      }
      const Data = await response.json();
      setAnimale(data);
    } catch (err) {
      setError(err.message);
    }
  };

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

        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label>
              Inserisci il Microchip ID per poter accedere ai dati del tuo amico
              a 4 zampe
            </label>
            <br />
            <input
              placeholder="Inserisci Codice riportato sulla targhetta"
              type="search"
              value={MicrochipId}
              onChange={(e) => setMicrochipId(e.target.value)}
              style={{ width: "20em" }}
            />

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
          <div>
            {animale.map((animale) => (
              <div key={animale.IdAnimale}>
                <p>Nome:{animale.Nome}</p>
                <p>Data della Registrazione:{animale.DataRegistrazione}</p>
                <p>Colore:{animale.Colore}</p>
                <p>Nascita:{animale.DataDiNascita}</p>
                <p>
                  Proprietario:{animale.ProprietarioAnimale.Nome},
                  {animale.ProprietarioAnimale.Cognome}
                </p>
                <p>CodiceFiscale:{animale.ProprietarioAnimale.CodiceFiscale}</p>
                <p>Email:{animale.ProprietarioAnimale.Email}</p>
              </div>
            ))}
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
