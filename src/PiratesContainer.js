export default function PiratesContainer({pirates}) {
    const renderPirates = () => {
        return pirates.map(pirate => {
            return (
                <div key={pirate.id} className="pirate-card">
                    <h1>{pirate.name}</h1>
                    <p>{pirate.ship}</p>
                    <p>{pirate.age}</p>
                </div>
                
            )
        })
    }
    return(
        <section className="pirate-container">
            {renderPirates()}
        </section>
    )
}
