//The kitchen app chapter 3
import './App.css';
import restaurant from "./restaurant.jpg";

const dishes = [
  "Stoverij van varkenswangetjes met frieten en appelmoes",
  "Kiek met frieten en appelmoes",
  "Op vel gebakken makreeltjes met puree en prei in room",
  "Kippenvleugeltjes uit de oven met honing, rijst en fruitsla",
  "Huisgemaakte vol-au-vent met rösti's",
  "Spaghetti Brushynese (gehakt, rode pesto, paprika, pepers)",
  "Vissticks met eiers (Belly's suggestiemenu)"
];

const dishObj = dishes.map((dish, indx) => ({id: indx, title:dish }));

//dishes.map((dish) => console.log(dish));
console.log(dishObj);

function Header(props) {
//  console.log(props);
  return (
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  )  
}

function Main(params) {
  return (
    <section>
      <p>We serve the {params.good} {params.adj} food</p>
      <img src={restaurant} height={200} alt="Bordje op restaurant tafel" />
      <ul style={{textAlign: "left"}}>
        {params.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );  
}

function Footer(props) {
  return (
    <header>
      <p>Copyright {props.year} by CVDB</p>
    </header>
  )  
}

function AppOne() {
  return (
    <div className="App">
      <Header name="Brushy" />
      <Main good="best" adj="Flemish" dishes={dishObj}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default AppOne;
