import { viaggi, viaggiatori } from "../db.js";
import { useParams } from "react-router-dom";
export default function ViaggioDettagli() {
const {id}= useParams()
    return (
        <>
            <div className="container">
            <h1>Dettagli</h1>
            <h2>Destinazione</h2>
            <h3>data inizio-data fine</h3>
            <p>tipologia</p>
            <p>numero totale partecipanti</p>
            </div>

        </>
    )
}