import "../styles/index.scss";
import Recipes from "./Recipes";


const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                </section>
                <img src={people} alt="people" width="250"/>
                <Recipes />
            </main>
        </>
    );
};

export default App;