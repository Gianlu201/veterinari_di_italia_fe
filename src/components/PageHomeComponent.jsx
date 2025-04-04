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
        <div className="webImg mb-4" style={{ height: "22vw" }}>
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

              <button
                type="submit"
                class="btn btn-primary backgroundRed"
                style={{ border: "#F04D31" }}
              >
                CERCA
              </button>
            </div>
          </div>

          {error ? (
            <div className="d-inline-block border border-1 rounded-3 m-2 p-3 pe-5">
              <p className="m-0 p-0">{error}</p>
            </div>
          ) : (
            animale.nome && (
              <div className="d-inline-block border border-1 rounded-3 m-2 p-3 pe-5">
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
              </div>
            )
          )}
        </form>
        <hr />
      </Container>
      <div className="littleTitle">
        <Container>
          <h2 className="display-5">INFORMAZIONI DI CONTATTO</h2>
        </Container>
      </div>
      <Container>
        <div className="row g-5">
          <div className="col-4 border border-primary">
            <p>
              Direttore Sanitario Regionale Dott.Mario Rossi -<br />
              Clinica Veterinaria Benessere Animale P.IVA 12345678901
            </p>
          </div>
          <div className="col-4"></div>
          <div className="col-4 border border-danger">
            <p>Via Milano,15</p>
            <p>20122 Milano Mi</p>
            <p>Tel:02 9786 5487</p>
            <p>info@benssereanimali.it</p>
          </div>
        </div>
        <div>
          <h2 className="littleTitle">VISITE SPECIALISTICHE</h2>
          <p>
            Presso la nostra struttura è possibile effettuare visite
            specialistiche per:
          </p>
          <ul>
            <li>Medicina Interna</li>
            <li>Endocrinologia</li>
            <li>Oftalmologia</li>
            <li>Cardiologia</li>
            <li>Ortopedia</li>
            <li>Oncologia e Chemioterapia</li>
          </ul>
        </div>
        <div>
          <h2 className="littleTitle">
            CERTIFICAZIONE PER IL BENESSERE ANIMALE
          </h2>
          <h3>Certificata AVEC e BAYER</h3>
          <p>
            Pensando soprattutto i nostri amici gatti &#40;ma non solo&#41;
            siamo<br></br> fieri di aver ottenuto l&#39;importante
            CERTIFICAZIONE PER IL<br></br>
            BENESSERE ANIMALE.
          </p>
          <p>
            Questo rende la struttura un ambiente confortevole per tutti i{" "}
            <br></br>
            pazienti, liberandoli dallo stress della visita. Ci prendiamo cura
            del <br></br> loro benessere fisico, psicologico e garantiamo
            un&#39;adeguata <br></br>
            terapia del dolore.
          </p>
        </div>
      </Container>
    </>
  );
};

export default PageHomeComponent;
