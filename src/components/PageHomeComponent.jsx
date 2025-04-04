import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const PageHomeComponent = () => {
  const [MicrochipId, setMicrochipId] = useState("");
  const [animale, setAnimale] = useState({});
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://localhost:7019/api/GestioneRicoveri/RicercaRicoverato?NumeroMicroChip=${MicrochipId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data) {
          setError("");
          setAnimale(data);
        } else {
          setError("Qualcosa è andato storto!");
        }
      } else {
        throw new Error();
      }
    } catch {
      setError("Animale non trovato!");
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
            <div className="d-flex gap-2 mt-2">
              <input
                placeholder="Inserisci Codice riportato sulla targhetta"
                type="search"
                value={MicrochipId}
                onChange={(e) => setMicrochipId(e.target.value)}
                style={{ width: "22em" }}
                className="form-control"
              />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          <div className="d-inline-block border border-1 rounded-3 m-2 p-3 pe-5">
            {error ? (
              <p className="m-0 p-0">{error}</p>
            ) : (
              animale.nome && (
                <div key={animale.IdAnimale}>
                  <p>Nome: {animale.nome}</p>
                  <p>
                    Data della Registrazione:{" "}
                    {animale.dataRegistrazione.slice(0, 10)}
                  </p>
                  <p>Colore: {animale.colore}</p>
                  <p>Nascita: {animale.dataDiNascita}</p>
                  <p>
                    Proprietario: {animale.proprietarioAnimale.nome},{" "}
                    {animale.proprietarioAnimale.cognome}
                  </p>
                  <p>
                    CodiceFiscale: {animale.proprietarioAnimale.codiceFiscale}
                  </p>
                  <p>Email: {animale.proprietarioAnimale.email}</p>
                </div>
              )
            )}
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
