import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
           <h2>Uncle</h2> 
           <section className="flex"> 
           <Cousin name={'rafsan'}></Cousin>
           <Cousin name={'sohana'}></Cousin>

           </section>

        </div>
    );
};

export default Uncle;