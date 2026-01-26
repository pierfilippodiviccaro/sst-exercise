import { Link } from "react-router"

export default function ViaggioCard() {
    return (
        <>
            <div className="card h-100">
                <img src="" alt="" className="card-img-top" />

                <div>
                    <h5 className="card-title">Destinazione viaggio</h5> 
                    <p className=" card-text">Data inizio-fine</p>

                    <Link className="btn btn-outline-primary">
                        Dettagli Viaggio
                    </Link>

                </div>

            </div>
        </>
    )
}