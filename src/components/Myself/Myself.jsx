import Spysal from "../Spysal/Spysal";


const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <Spysal asset={asset}></Spysal>
            </section>
        </div>
    );
};

export default Myself;