import "./App.css";
import Card from "./Classes/Card_class";
import Card_class from "./Classes/Card_class";
import User from "./Classes/User_class";

function App() {
  const myCard: Card = new Card(45, 500);
  const myOtherCard: Card = new Card(200, 6000);
  myOtherCard.color = "red";

  myCard.spend(230);

  const user1: User = new User(41, "Fabian Garcia");
  user1.cards.push(myCard, myOtherCard);
  user1.age = 25;

  console.log(myCard.balance);

  console.log(user1);

  return <div>{user1.name}</div>;
}

export default App;
