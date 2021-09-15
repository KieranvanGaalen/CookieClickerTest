import React, { useState, useEffect } from "react";

var cookies = 0;
var cps = 0;
var cursor;
var grandma;

function App() {
  cursor = new Generator(15, 0.1);
  grandma = new Generator(100, 1);
  useEffect(() => {
    setInterval(() => {
      UpdateCookies();
    }, 1000);
  }, []);
  return (
    <div className="App">
      <body>
        <p id="cookiecount">{cookies}</p>

        <p id="cps">{cps} Cookies per Second</p>

        <button type="button" onClick={ClickCookie}>Cookies</button>
        <button id="cursorbutton" type="button" onClick={() => BuyGenerator(cursor)}>{cursor.count} Cursors ({cursor.price})</button>
        <button id="grandmabutton" type="button" onClick={() => BuyGenerator(grandma)}>{grandma.count} Grandmas ({grandma.price})</button>
      </body>
    </div>
  );
}

class Generator 
{
  constructor(basePrice, baseProduction)
  {
    this.basePrice = basePrice;
    this.price = basePrice;
    this.count = 0;
    this.baseProduction = baseProduction;
    this.productionModifier = 1;
    this.production = baseProduction;
  }
}

function BuyGenerator(generator)
{
  console.log(generator.count)
  if (cookies >= generator.price)
    {
      AddToCookies(-generator.price);
      generator.count++;
      generator.price = Math.round(generator.basePrice * Math.pow(1.15, generator.count));
      cps = CalculateCPS();
      UpdateCounters();
    }
}

function UpdateCounters()
{
  document.getElementById("cookiecount").innerHTML = cookies;
  document.getElementById("cps").innerHTML = cps + " Cookies per Second";
  document.getElementById("cursorbutton").innerHTML = cursor.count + " Cursors (" + cursor.price + ")";
  document.getElementById("grandmabutton").innerHTML = grandma.count + " Grandmas (" + grandma.price + ")";
}

function CalculateCPS()
{
  return Math.round((cursor.count * cursor.production + grandma.count * grandma.production) * 10) / 10;
}

function AddToCookies(num)
{
  cookies += num;
  cookies = Math.round(cookies * 10) / 10;
}

function UpdateCookies()
{
  AddToCookies(cps)
  UpdateCounters();
}

function ClickCookie() {
  AddToCookies(1);
  UpdateCounters();
}

export default App;
