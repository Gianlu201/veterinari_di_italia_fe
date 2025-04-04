import { useEffect, useState } from "react";

const FormVisitaComponent = () => {
  const [Farmaci, setFarmaci] = useState([]);
  const [DataVisita, setDataVisita] = useState("");
  const [EsameObbiettivo, setEsameObbiettivo] = useState("");
  const [Descrizione, setDescrizione] = useState("");
  const [Farmaco, setFarmaco] = useState([]);
  const [IdAnagraficaAnimale, setIdAnagraficaAnimale] = useState("");

  //   const CicloFarmaci = () => {
  //     var farmaci = [];
  //     Farmaco.forEach((element) => {
  //       farmaci.push({
  //         farmacoId: element,
  //       });
  //     });
  //     return farmaci;
  //   };

  const PostVisita = async () => {
    try {
      //   var pincoPallino = CicloFarmaci();
      console.log(Farmaco);
      const Visita = {
        dataDellaVisita: `${DataVisita.concat(":00.000")}`,
        esameObiettivo: EsameObbiettivo,
        descrizione: Descrizione,
        idAnagraficaAnimale: IdAnagraficaAnimale,
        farmaco: Farmaco,
      };
      console.log(Visita);
      const response = await fetch("https://localhost:7019/api/Visite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Visita),
      });

      console.log(response);
    } catch {
      throw new Error();
    }
  };

  const handelChanges = (e) => {
    let listaFarmaci = [];
    e.target.selectedOptions.forEach((nino) => {
      listaFarmaci.push({ farmacoId: nino.value });
    });
    console.log(listaFarmaci);
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
        <div className="mb-3">
          <label htmlFor="IdAnagraficaAnimale" className="form-label">
            Id Anagrafica Animale
          </label>
          <input
            type="text"
            className="form-control"
            id="IdAnagrafica"
            placeholder="iserisci qui l'id univoco dell'animale visitato"
            onChange={(e) => {
              setIdAnagraficaAnimale(e.target.value);
            }}
          />
        </div>
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
            // const options = Array.from(
            //   e.target.selectedOptions,
            //   (option) => {farmacoId: option.value}
            // );
            handelChanges(e);
            // var listaFarmaci = e.target.selectedOptions;
            // let lista2 = [];
            // console.log(e.target.selectedOptions);
            // listaFarmaci.((nino) => {
            //   lista2.push({ farmacoId: nino.value });
            // });
            // console.log();
            // setFarmaco(listaFarmaci);
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
