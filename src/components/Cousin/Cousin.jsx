
import Friend from "../Friend/Friend";
import Spysal from "../Spysal/Spysal";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>

            <section>
                { asset &&<Spysal asset={asset}></Spysal>}
                {
                    name==="sakiba" && <Friend></Friend>
                }
            </section>
        </div>
    );
};

export default Cousin;