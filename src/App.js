import React, { useState, useEffect } from "react";

var cookies = 0;
var cps = 0;

// Buildings
var cursor, grandma, factory, mine, shipment, alchemy_lab, portal, time_machine;

var generators;

var gameTickDelta = 1000/60;


function App() {
  cursor = new Generator(15, 1, 5000, "cursor");
  grandma = new Generator(100, 4, 5000, "grandma");
  factory = new Generator(500, 20, 5000, "factory", 1);
  mine = new Generator(2000, 50, 5000, "mine", 2);
  shipment = new Generator(7000, 100, 5000, "shipment", 3);
  alchemy_lab = new Generator(50000, 500, 5000, "alchemy lab", 4);
  portal = new Generator(1000000, 6666, 5000, "portal", 5);
  time_machine = new Generator(123456000, 123456, 5000, "time machine", 6);

  generators = [cursor, grandma, factory, mine, shipment, alchemy_lab, portal, time_machine];

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
        <div>
          <button id="cursorbutton" type="button" onClick={() => BuyGenerator(cursor)}>{cursor.count} {cursor.name} ({cursor.price})</button>
          <button hidden id="grandmabutton" type="button" onClick={() => BuyGenerator(grandma)}>{grandma.count} {grandma.name} ({grandma.price})</button>
          <button hidden id="factorybutton" type="button" onClick={() => BuyGenerator(factory)}>{factory.count} {factory.name} ({factory.price})</button>
          <button hidden id="minebutton" type="button" onClick={() => BuyGenerator(mine)}>{mine.count} {mine.name} ({mine.price})</button>
          <button hidden id="shipmentbutton" type="button" onClick={() => BuyGenerator(shipment)}>{shipment.count} {shipment.name} ({shipment.price})</button>
          <button hidden id="alchemy labbutton" type="button" onClick={() => BuyGenerator(alchemy_lab)}>{alchemy_lab.count} {alchemy_lab.name} ({alchemy_lab.price})</button>
          <button hidden id="portalbutton" type="button" onClick={() => BuyGenerator(portal)}>{portal.count} {portal.name} ({portal.price})</button>
          <button hidden id="time machinebutton" type="button" onClick={() => BuyGenerator(time_machine)}>{time_machine.count} {time_machine.name} ({time_machine.price})</button>
        </div>
      </body>
    </div>
  );
}

class Generator 
{
  constructor(basePrice, baseProduction, interval, name, grandmaboostamount = 0)
  {
    this.name = name;
    this.basePrice = basePrice;
    this.price = basePrice;
    this.count = 0;
    this.baseProduction = baseProduction;
    this.production = baseProduction;
    this.interval = interval
    this.clickProgress = 0;
    this.grandmaboostamount = grandmaboostamount;
  }
}

function BuyGenerator(generator)
{
  if (cookies >= generator.price)
    {
      if (generator.count == 0)
      {
          grandma.production += generator.grandmaboostamount;
      }
      AddToCookies(-generator.price);
      generator.count++;
      generator.price = Math.ceil(generator.price * 1.1);
      cps = CalculateCPS();
      UpdateCounters();
    }
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

  UpdateCounters();
}

function ClickCookie() {
  AddToCookies(1);
  UpdateCounters();
}

export default App;
