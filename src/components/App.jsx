import "../styles/index.scss";
import Recipes from "./Recipes";
import people from "../images/people.jpg";

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