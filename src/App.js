import React, { useState, useEffect } from "react";

var cookies = 0;
var cps = 0;

var gameTickFrequence = 24;
var maxDisplayFrequence = 30;

// Buildings
var cursor;
var grandma;
var farm;
var mine;
var factory;
var bank;
var temple;

var generators;


function App() {
  cursor = new Generator(15, 0.1, "cursor");
  grandma = new Generator(100, 1, "grandma");
  farm = new Generator(1100, 8, "farm");
  mine = new Generator(12000, 47, "mine");
  factory = new Generator(130000, 260, "factory");
  bank = new Generator(1400000, 1400, "bank");
  temple = new Generator(20000000, 7800, "temple");

  generators = [cursor, grandma, farm, mine, factory, bank, temple];

  useEffect(() => {
    setInterval(() => {
      UpdateCookies();
    }, 1000/gameTickFrequence);
  }, []);

  useEffect(() => {
    setInterval(() => {
      UpdateView();
    }, 1000/maxDisplayFrequence);
  }, []);

  return (
    <div className="App">
      <body>
        <p id="cookiecount">{cookies}</p>

        <p id="cps">{cps} Cookies per Second</p>

        <button type="button" onClick={ClickCookie}>Cookies</button>
        <button id="cursorbutton" type="button" onClick={() => BuyGenerator(cursor)}>{cursor.count} {cursor.name} ({cursor.price})</button>
        <button id="grandmabutton" type="button" onClick={() => BuyGenerator(grandma)}>{grandma.count} {grandma.name} ({grandma.price})</button>
        <button id="farmbutton" type="button" onClick={() => BuyGenerator(farm)}>{farm.count} {farm.name} ({farm.price})</button>
        <button id="minebutton" type="button" onClick={() => BuyGenerator(mine)}>{mine.count} {mine.name} ({mine.price})</button>
        <button id="factorybutton" type="button" onClick={() => BuyGenerator(factory)}>{factory.count} {factory.name} ({factory.price})</button>
        <button id="bankbutton" type="button" onClick={() => BuyGenerator(bank)}>{bank.count} {bank.name} ({bank.price})</button>
        <button id="templebutton" type="button" onClick={() => BuyGenerator(temple)}>{temple.count} {temple.name} ({temple.price})</button>
      </body>
    </div>
  );
}

class Generator 
{
  constructor(basePrice, baseProduction, name)
  {
    this.name = name;
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

function UpdateView()
{
  UpdateCounters();
}

function UpdateCounters()
{
  document.getElementById("cookiecount").innerHTML = cookies;
  document.getElementById("cps").innerHTML = cps + " Cookies per Second";
  
  document.getElementById("cursorbutton").innerHTML = cursor.count + " Cursors (" + cursor.price + ")";

  for (var i = 1; i < generators.length; i++)
  {
    if (generators[i - 1].count > 0)
    {
      document.getElementById(generators[i].name + "button").hidden = false;
      document.getElementById(generators[i].name + "button").innerHTML = generators[i].count + " "+ generators[i].name +" (" + generators[i].price + ")";
    }
    else
    {
      document.getElementById(generators[i].name + "button").hidden = true;
    }
  }
}

function CalculateCPS()
{
  var cpsGuess = 0;
  for (var i = 0; i < generators.length; i++)
  {
    cpsGuess += generators[i].count * generators[i].production
  }
  return Math.round((cpsGuess) * 10) / 10;
}

function AddToCookies(num)
{
  cookies += num;
  cookies = Math.round(cookies * 10) / 10;
}

var coockieStashLowCps = 0;
function UpdateCookies()
{
  coockieStashLowCps += cps/gameTickFrequence
  if (coockieStashLowCps >= 1)
  {
    AddToCookies(coockieStashLowCps)
    coockieStashLowCps = 0;
  }
}

function ClickCookie() {
  AddToCookies(1);
  UpdateCounters();
}

export default App;
