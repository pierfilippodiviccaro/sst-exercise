import { viaggi, viaggiatori } from "../db.js";
import { useParams, useNavigate } from "react-router-dom";



export default function Dettagli() {
    const { id } = useParams()
    const navigate = useNavigate();

    const viaggio = viaggi.find(v => v.id === parseInt(id))
    const person = viaggiatori.filter(v=> v.viaggioId === parseInt(id))





    function goBack() {
        navigate(-1)
    }

    console.log(id)

    return (

        <>
            <div className="container">
                <h1>Dettagli</h1>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h2>{viaggio.localita}</h2>
                        <img src={`../../public/img/${viaggio.img}`} alt="" />
                    </div>
                    <div className="col-8">
                        <p>Inizio: {viaggio.dataInizio}</p>
                        <p>Fine: {viaggio.dataFine}</p>
                        <p>Tipologia: {viaggio.tipologia}</p>
                        <p>numero partecipanti:{person.length}</p>
                    </div>
                </div>


                <button className="btn btn-secondary" onClick={goBack}>Torna indietro</button>


            </div>
        </>
    )
}