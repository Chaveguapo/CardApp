import React, { Component } from "react";
import { NumericLiteral } from "typescript";

class Card {
  color: string = "black";
  chip: boolean = true;
  id: number;
  balance: number;

  constructor(id: number, balance: number) {
    this.id = id;
    this.balance = balance;
  }

  /**
   * Decreace the balance by a received amount
   * @param amount is the value of the purchase
   */
  spend(amount: number): void {
    this.balance = this.balance - amount;
  }
}

export default Card;
