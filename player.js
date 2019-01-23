//generic stats object

let p1Name = "Gnar";

let p1Stats = {
  hp:50,
  mp:150,
  atk:60,
  def:20,
  sp:40

}

let p2Name = "Sion";

let p2Stats = {
  hp:150,
  mp:50,
  atk:20,
  def:60,
  sp:40

}

let battle = {

  attack: function(){
    if(mv=1){
      return this.move.punch;
    }
  },
  defend: function(){
    let rawDamage = atkmv - this.stats.def;
    this.stats.hp = this.stats.hp - rawDamage;
    if (this.stats.hp <0){
      this.tats.hp = 0;
    }
  }

}

let physical={
  razorPunch: function(){
    let baseDamage = this.stats.atk*0.75;
    let bonus = 0.5*this.stats.atk*Math.random();
    return baseDamage+bonus;
  },
  charge: function(){
    let pain = Math.random;
    let bonus = 0.5*this.stats.atk*Math.random();
    if (pain <0.50){
      this.stats.hp = this.stats.hp - this.stats.atk/4;
      return this.stats.atk+bonus;
    }
    else{
      return this.stats.atk+bonus;
    }
  },
  gohun: function(){
    let baseDamage = this.stats.atk;
    let bonus = 0.5*this.stats.atk*Math.random()*2;
    return baseDamage+bonus;
  },
  furyStrike: function(){
    let pain = Math.random;
    let bonus = 0.5*this.stats.atk*Math.random()*q;
    if (pain <0.50){
      this.stats.hp = this.stats.hp - this.stats.atk/2;
      return this.stats.atk+bonus;
    }
    else{
      return this.stats.atk+bonus;

  }
}
}

let magic ={
  hydroPump: function(){
    if (this.stats.mp  >= 8){
      this.stats.mp = this.stats.mp - 8;
      let tetradice = Math.random();
      let pump = Math.ceil(this.stats.sp/3);
      if (tetradice<0.10){
        return pump;
      }
      else if (tetradice<0.30){
        return 2*pump;
      }
      else if (tetradice<0.60){
        return 3*pump;
      }
      else{
        return 4*pump;
      }
    }
  },
  hyperBeam: function(){
    if (this.stats.mp  >= 20){
      this.stats.mp= this.stats.sp - 20;
      let beam = Math.ceil(this.stats.sp*1.5);
      return beam
    }    
  },
  pyroBall:function(){
    if (this.stats.mp  >= 6){
      this.stats.mp = this.stats.mp - 6;
      let baseDamage = 0.88*this.stats.sp;
      let bonus = 0.32* Math.random()
      let ball = Math.ceil(baseDamage+bonus)
      return ball
  }
},
earthquake: function(){
  if (this.stats.mp >= 10)
  let baseDamage = this.stats.sp*1.25;
  let bonus = 0.25*Math.random
  if (pain <0.50){
    this.stats.hp = this.stats.hp - this.stats.sp/3;
    return this.stats.atk+bonus;
  }
  else baseDamage+bonus;
}
}









let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}