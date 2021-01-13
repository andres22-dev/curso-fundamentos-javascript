const NAMES = ['☆ I Rocket', 'LuisFer S.R', 'VIVAS THE ARROW','蠍 Jaime10 蠍','Canelo','LordSebastian:3'];


class Player{

  constructor(name, wins, playedGames, wr, defeats){

    this.name = NAMES[name];
    this.wins = wins;
    this.playedGames = playedGames;
    this.defeats = defeats = playedGames - wins;
    this.wr = wr = this.playerWR()
    

  }
 
  
  
  
  playerWR(){
     return   Math.abs((this.wins * 100)/this.playedGames).toFixed(2);

  }

  


}


const resultadosPlayer = () =>{

 let newPlayer = [new Player(0,2, 4),new Player(1, 0, 1), new Player(2, 0, 0), new Player(3, 1, 2), 
        new Player(4, 1, 3), new Player(5, 2, 2)];

 for(let i = 0; i< newPlayer.length; i++){   
     
           if(newPlayer[i].wins === 0){
            const CERO_WINS = '00.00';
            console.log(`${newPlayer[i].name}   
            GAMES PLAYED: ${newPlayer[i].playedGames}  WINS: ${newPlayer[i].wins}  DEFEATS: ${newPlayer[i].defeats}
            WINRATE :  ${CERO_WINS}%`);

           }else{
     
           console.log(`${newPlayer[i].name}   
           GAMES PLAYED: ${newPlayer[i].playedGames}  WINS: ${newPlayer[i].wins}  DEFEATS: ${newPlayer[i].defeats}
           WINRATE :  ${newPlayer[i].wr}%`);
             
          }
       
    }

}

resultadosPlayer();












