new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameisRunning: false,
    },
    methods:{
        startGAME: function(){
            this.gameisRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){  
            this.monsterHealth -= this.calculateDamage(3,10);
            
            if(this.checkWin()){
                return
            }
            max = 12;
            min = 5; 
            this.playerHealth -= this.calculateDamage(5,12);
              
            this.checkWin();
            
        },
        specialAttack: function(){
            
        },
        heal: function(){
            
        },
        giveUp: function(){
            
        }, 
        calculateDamage: function(min,max){
            return Math.max(Math.floor(Math.random()* max)+ 1 ,min)
        },
        checkWin: function(){ 
            if(this.monsterHealth <= 0){
                if (confirm('YOU WON! NEW GAME?')){;
                this.startGAME()
                                                  }
                else{
                    this.gameisRunning = false
                }
                return true;                      
            }else if(this.playerHealth<= 0){
                if (confirm('YOU lost! NEW GAME?')){;
                this.startGAME()                 }
                else{
                    this.gameisRunning = false
                }
                return true;                      
            }
            return false;
            
        }
    }
});