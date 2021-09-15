import React, { useState, useEffect } from "react";

var cookies = 0;
var cps = 0;

// Buildings
var cursor;
var grandma;
var farm;
var mine;
var factory;
var bank;
var temple;

var generators;

var gameTickDelta = 1000/60;


function App() {
  cursor = new Generator(15, 1, 5000, "cursor");
  grandma = new Generator(100, 1, 1000, "grandma");
  farm = new Generator(1100, 8, 1000, "farm");
  mine = new Generator(12000, 47, 1000, "mine");
  factory = new Generator(130000, 260, 1000, "factory");
  bank = new Generator(1400000, 1400, 1000, "bank");
  temple = new Generator(20000000, 7800, 1000, "temple");

  generators = [cursor, grandma, farm, mine, factory, bank, temple];

  useEffect(() => {
    setInterval(() => {
      UpdateCookies();
    }, gameTickDelta);
  }, []);

  //for (var i = 0; i < generators.length; i++)
  //{
  //  SetGeneratorUpdate(generators[i])
  //}

  return (
    <div className="App">
      <body>
        <p id="cookiecount">{cookies}</p>

        <p id="cps">{cps} Cookies per Second</p>

        <button type="button" onClick={ClickCookie}>Cookies</button>
        <button id="cursorbutton" type="button" onClick={() => BuyGenerator(cursor)}>{cursor.count} {cursor.name} ({cursor.price})</button>
        <button hidden id="grandmabutton" type="button" onClick={() => BuyGenerator(grandma)}>{grandma.count} {grandma.name} ({grandma.price})</button>
        <button hidden id="farmbutton" type="button" onClick={() => BuyGenerator(farm)}>{farm.count} {farm.name} ({farm.price})</button>
        <button hidden id="minebutton" type="button" onClick={() => BuyGenerator(mine)}>{mine.count} {mine.name} ({mine.price})</button>
        <button hidden id="factorybutton" type="button" onClick={() => BuyGenerator(factory)}>{factory.count} {factory.name} ({factory.price})</button>
        <button hidden id="bankbutton" type="button" onClick={() => BuyGenerator(bank)}>{bank.count} {bank.name} ({bank.price})</button>
        <button hidden id="templebutton" type="button" onClick={() => BuyGenerator(temple)}>{temple.count} {temple.name} ({temple.price})</button>
      </body>
    </div>
  );
}

class Generator 
{
  constructor(basePrice, baseProduction, interval, name)
  {
    this.name = name;
    this.basePrice = basePrice;
    this.price = basePrice;
    this.count = 0;
    this.baseProduction = baseProduction;
    this.productionModifier = 1;
    this.production = baseProduction;
    this.interval = interval
    this.clickProgress = 0;
  }
}

function SetGeneratorUpdate(generator)
{
  console.log(generator.production)
  useEffect(() => {
    setInterval(() => {
      GeneratorUpdate(generator);
    }, generator.interval);
  }, []);
}

function GeneratorUpdate(generator)
{
  AddToCookies(generator.production * generator.count);
}

function BuyGenerator(generator)
{
  console.log(generator.count)
  if (cookies >= generator.price)
    {
      AddToCookies(-generator.price);
      generator.count++;
      generator.price = Math.round(generator.basePrice * Math.pow(1.1, generator.count));
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
    cpsGuess += generators[i].count * generators[i].production / (generators[i].interval/1000)
  }
  return Math.round((cpsGuess) * 10) / 10;
}

function AddToCookies(num)
{
  cookies += num;
  cookies = Math.round(cookies * 10) / 10;
}

var lastUpdate = Date.now();
var coockieStashLowCps = 0;
function UpdateCookies()
{
  var now = Date.now();
  var dt = (now - lastUpdate); // ms
  lastUpdate = now;

  UpdateView();

  generators.forEach(generator => {
    if (generator.count > 0)
    {
      generator.clickProgress += dt / (generator.interval / generator.count)
    }
    if (generator.clickProgress >= 1)
    {
      var clickCount = Math.floor(generator.clickProgress)
      AddToCookies(clickCount*generator.production)
      generator.clickProgress %= 1;
    }
  });
  
}

function ClickCookie() {
  AddToCookies(1);
  UpdateCounters();
}

export default App;
