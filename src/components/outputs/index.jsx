import { useContext } from "react";
import { ResponseContext } from "../../providers/response";
import { Response } from "./style";

function OutputInfo() {
  const { resp } = useContext(ResponseContext);

  let ent = null;

  if (resp !== null) {
    ent = Object.entries(resp.data);
  }

  return (
    <Response>
      <h2>Você Receberá:</h2>

      {ent !== null ? (
        ent.map((ent) => (
          <p>
            {ent[0] === "1" ? "Amanhã" : `Em ${ent[0]} dias`}:{" "}
            <span>{ent[1].toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
          </p>
        ))
      ) : (
        <>
          <p>Amanhã: <span>R$ 0,00</span></p>
          <p>Em 15 dias: <span>R$ 0,00</span></p>
          <p>Em 30 dias: <span>R$ 0,00</span></p>
          <p>Em 60 dias: <span>R$ 0,00</span></p>
        </>
      )}
    </Response>
  );
}

export default OutputInfo;
