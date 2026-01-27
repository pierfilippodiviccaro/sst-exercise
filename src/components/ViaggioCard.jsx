import { Link } from "react-router-dom"

export default function ViaggioCard({Viaggio}) {
    return (
        <>
            <div className="card h-100">
       

                <div className="card-body">
                    <h5 className="card-title">{Viaggio.localita}</h5> 
                    <Link  to={`/${Viaggio.id}`} className="card-link ">
                        Dettagli 
                    </Link>

              
                </div>

            </div>
        </>
    )
}