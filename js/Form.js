class Form {

  constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("example@email.com");
    this.button = createButton('Yes');
    this.button1 = createButton('No');
    this.greeting = createElement('h2');
    this.greeting1 = createElement('h3');
    this.title = createElement('h2');
    this.title1 = createElement('h3');
  }
  hide(){
    this.greeting.hide();
    this.greeting1.hide();
    this.button.hide();
    this.button1.hide();
    this.input.hide();
    this.input1.hide();
    this.title.hide();
    this.title1.hide();
  }

  display(){
    this.title.html("Voting Survey");
    this.title.position(displayWidth/2 - 90, 170);

    this.title1.html("For Children Welfare");
    this.title1.position(displayWidth/2 - 90, 270);

    this.input.position(displayWidth/2 - 90 , displayHeight/2 - 120);
    this.input1.position(displayWidth/2 - 90 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 90, displayHeight/2);
    this.button1.position(displayWidth/2 + 130, displayHeight/2);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.title1.hide();
      this.input.hide();
      this.input1.hide();
      this.button.hide();
      this.button1.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);

      
      //this.greeting1.html("Thank You" + player.name)
     // this.greeting1.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
