import { Container } from "react-bootstrap";
import DropdownCustomComponents from "./DropDown";
import { useEffect, useState } from "react";

const FormVisitaComponent = () => {
  const [Farmaci, setFarmaci] = useState([]);
  const [DataVisita, setDataVisita] = useState("");
  const [EsameObbiettivo, setEsameObbiettivo] = useState("");
  const [Descrizione, setDescrizione] = useState("");
  const [Farmaco, setFarmaco] = useState([]);

  const PostVisita = async () => {
    try {
      const Visita = {
        DataVisita: DataVisita,
        EsameObbiettivo: EsameObbiettivo,
        Descrizione: Descrizione,
        Farmaco: [{ Farmaco }],
      };
      const response = await fetch("https://localhost:7019/api/Visite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Visita),
      });
    } catch {
      throw new Error();
    }
  };

  const GetFarmaci = async () => {
    const response = await fetch("https://localhost:7019/api/Farmaci", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        PostVisita();
      }}
    >
      <div className="mb-3">
        <label htmlFor="DataVisita" className="form-label">
          Data Visita
        </label>
        <input
          type="datetime-local"
          className="form-control"
          id="dataVisita"
          onChange={(e) => {
            setDataVisita(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="EsameObbiettivo" className="form-label">
          Esame Obbiettivo
        </label>
        <input
          type="text-area"
          className="form-control"
          id="esameObbiettivo"
          placeholder="Inserisci qui un esame obbiettivo"
          onChange={(e) => {
            setEsameObbiettivo(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Descrizione" className="form-label">
          Descrizione
        </label>
        <input
          type="text-area"
          className="form-control"
          id="Descrizione"
          placeholder="Inserisci qui un'eventuale descrizione della visita"
          onChange={(e) => {
            setDescrizione(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Farmaco" className="form-label">
          Farmaco
        </label>
        <select
          className="form-select"
          id="farmaco"
          multiple
          size={5}
          onChange={(e) => {
            setFarmaco(e.target.value);
          }}
        >
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormVisitaComponent;
