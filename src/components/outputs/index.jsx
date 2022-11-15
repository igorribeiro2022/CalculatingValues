import { useContext } from "react";
import { ResponseContext } from "../../providers/response";
import { Response } from "./style";

function OutputInfo() {
    const { resp } = useContext(ResponseContext);
    const data = resp.data
    console.log("CONSOLE.LOG AQUIIIII -----> ", data);

    let entriesObj = Object.entries(data);

    return (
        <Response>
            <h2>Você Receberá:</h2>

            {
                entriesObj.forEach(entrie => {
                    <p>{entrie[0][0] === 1 ? "Amanhã" : `Em ${entrie[0][0]} dias` }: <span>{entrie[0][1]}</span></p>
                })
            }

            <p>Amanhã: <span>R$ 0,00</span></p>
            <p>Em 15 dias: <span>R$ 0,00</span></p>
            <p>Em 30 dias: <span>R$ 0,00</span></p>
            <p>Em 60 dias: <span>R$ 0,00</span></p>
        </Response>
    );
}
  
export default OutputInfo;
