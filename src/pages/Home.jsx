import { viaggi, } from "../db.js"
import ViaggioCard from "../components/ViaggioCard.jsx"

export default function Home() {




    return (
        <>
            <h1 className="my-3">benvenuti nella miao corporation</h1>
            <div className="">

                <div className="">
                    {viaggi.map((viaggio) => {
                        
                        return (
                            <>
                                <div>
                                    <ViaggioCard key={viaggio.id} Viaggio={viaggio} />
                                </div>
                            </>

                        )
                    })}
                </div>
            </div>

        </>


    )
}