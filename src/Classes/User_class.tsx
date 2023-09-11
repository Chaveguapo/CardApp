import Card from "./Card_class";

class User {
  id: number;
  name: string;
  age: number = 18;
  cards: Card[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  /**
   * Compare the age of users, and identify if have the age to get the card
   * @param age is required to compare if the user could have a card
   */
  isApprovedUser(age: number) {
    if (age < this.age) {
      console.log("The user is underage! Sorry, try later!");
    }
    console.log("Welcome User");
  }
}

export default User;
