import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";



const Spysal = ({asset}) => {
    const gift =useContext(AssetContext);
    return (
        <div>
            <h2>Spysal</h2>
            <p>Has:{asset}</p>
            <p>Also Has:{gift}</p>
        </div>
    );
};

export default Spysal;