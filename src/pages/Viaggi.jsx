import { viaggi } from "../db"
import { Link } from "react-router-dom"
export default function Viaggi(){
    console.log(viaggi)
    return(
        <>
        {/* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}
<div className="container">
<div className="row">
<div className="col-12 text-center">

        {viaggi.map((viaggio)=>{ return (
            <>
            <div>
            <h2>{viaggio.localita}</h2>
            <Link to={`/viaggi/${viaggio.id}`}>
             miao
            </Link>
            <p>{viaggio.tipologia}</p>
            </div>

            
            </>
        )
        })}


</div>


</div>
</div>
        </>
    )
}