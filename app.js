// The year is 1985. Your job is to build a text-based (console) RPG game.

// The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.


const  readline = require('readline-sync')
const chalk = require('chalk');
let name = readline.question('If you please, what is your name? ');
const winnings = 500

function WildEnemy(name, items, points, damage, isAlive, hasWon) {
    this.name = name;
    this.items = items;
    this.points = points;
    this.damage = damage
    this.isAlive = isAlive;
    this.hasWon = hasWon
}

const wolfczar = new WildEnemy("Wolfczar", ["staff", "knife", "herbs"],5, Math.floor(Math.random() * 5), true, false);
const chimeraphant = new WildEnemy('Chimeraphant', ["gold", "wine", "sword"],5, Math.floor(Math.random() * 5),  true, false);
const leomander = new WildEnemy("Leomander", ["silver", "gems","food"],5, Math.floor(Math.random()* 5), true, false);
const rhinilda = new WildEnemy("Rhinilda", ["saber","potion"],5, Math.floor(Math.random()* 5), true, false);
const sequoiasquatch = new WildEnemy("Sequoiasquatch", ["fire", "wood", "ax"], 5, Math.floor(Math.random()* 5), true, false);



function Player(name, items, points, damage, isAlive, hasWon) {
    this.name = name;
    this.items = items;
    this.points = points;
    this.damage = damage;
    this.isAlive = isAlive;
    this.hasWon = hasWon
}

const player = new Player( name, ["coins", "water", "daggar"],100 , Math.floor(Math.random()* 5)+ 2, true, false)

readline.question(chalk.yellowBright.bold(`Welcome to the Wonderworld, ${name}. Please press enter to continue on your journey`));


let isAlive = true;
let hasWon = false

let enemiesArray = [sequoiasquatch, wolfczar, chimeraphant, leomander, rhinilda] 



 while(isAlive && !hasWon){
    let action = readline.keyIn('Would you like to walk [w], print inventory [p], or quit [q]?', {limit: 'wqp'})
    if(action === 'w'){
         walk()
     }else if(action === 'p'){
         printInventory()
     }else {
          isAlive = false
          console.log('you quit')
      }
 }

 function walk (){

    let randomWalk = Math.floor(Math.random() * 4)

    if(randomWalk === 1) {
         enemyEncounter()
     }else{
         console.log('keep walking')
     }
 }
 


function enemyEncounter (){
   
    const randomEnemy = Math.floor(Math.random() * enemiesArray.length)
    const enemy = enemiesArray[randomEnemy]
    const action = readline.keyIn(chalk.red.bold(`You are faced with a fierce enemy, ${enemy.name}! Would you like to fight [f], run [r], or quit[q]?`),{limit: 'frq'})

     if(action === 'f'){
        fight(enemy) 
     }else if(action === 'r') {
         run(enemy)
     }else {
     isAlive = false
     console.log('you quit')
    }
}

function fight(enemy) {
    
     while(enemy.points > 0 && player.points > 0){

            enemy.points -= player.damage
            player.points -= enemy.damage

        let action = readline.keyIn(`${name}, you have ${player.points} HP and have recieved ${player.damage} damage. ${enemy.name} has ${enemy.points} HP and you have delt them ${enemy.damage} damage. Keep fighting [f] `, {limit: 'f'})
        if(action === 'f'){

    
        }
        
    }

     if(enemy.points <= 0 && player.points > 0) {
         player.points += winnings
         readline.question(`${name}, you have defeated ${enemy.name}.You will recieve 500 HP from their inventory. You now have ${player.points}HP. Please press enter to continue on your journey` )
         
         let enemyIndex = enemiesArray.findIndex( loser => enemy === loser)
         console.log(enemyIndex)
         let removed = enemiesArray.splice(enemyIndex, 1)
         
     }
     if(enemiesArray.length === 0) {
         console.log("You are the Magnificent Winner of All Enemies! Game Over")
         hasWon = true
     }
     if (player.points < 0 && enemy.points > 0) {
         isAlive = false
         readline.question(`${name}, you have met your match and then some. Your death has come too soon. May your afterlife give you a chance for peace. Game Over`)
     }
     if (player.points < 0 && enemy.points < 0) {
         readline.question(`You, ${name} and your enemy, ${enemy.name} have both died. Nobody wins. Game Over`)
         isAlive = false
     }
     
 }


function run(enemy) {
    let randomRun = Math.floor(Math.random()* 2);
    if(randomRun === 1) {
        console.log('You escaped. Keep walking.')
        
    }else {
        
        console.log('You did not escape. Now you must fight.')
        fight(enemy)
    }

}

function printInventory() {
   
        console.log(`Player Name:  ${name}     Items: ${player.items}     HP(Health Points): ${player.points} Damage Points: ${player.damage}`)
    
    
}





/*while(isAlive && !hasWon ) {

   
    let attack = attacks[Math.floor(Math.random() * attacks.length)];
    let hasEscaped = Math.floor(Math.random() * 2)
    const winnings = sequoiasquatch.points + 500
    const damage =  Math.floor(Math.random() * 500)
    const winningUpdate = user.points - damage + winnings
    const update  = user.points - damage
    let enemyUpdate = sequoiasquatch.points - damage //enemy.points//
   
    //let winningPoints = player.points //lara.points + 500 //
    //let currentPoints = player.points//lara.points - damage //
    //I have hard coded in the player and enemy names so as to access the constructor function information. I need help here.

    //const choice = readline.keyIn("Enter w for walk, i for inventory, or q to quit the game. Type 'p' in the console to print your stats.", {limit:'wiqp'})
    //keyin will go here in a conditional if else for specific keys call functions here too walk function, etc the actual function can be outside this loop.
    if(choice === 'w') {
        // Every time the player walks(key Event), a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
       
        readline.question('a ' + enemy.name + ' has appeared and is attacking. Watch out '+ user.name +  '! ')
    
        
    }else if(choice === 'i') {

         readline.question(`you have ${user.items} in your inventory. `)

    }else if(choice === 'q') {
            
            readline.question('Goodbye')

    } else if (choice === "p") {
        //create an alert that will show stats// If the user enters 'Print' in the console,
        // the console will print the players name, HP, and each item in their inventory. I need help with this.
        readline.question
                                         
    }
     
    if (attack === "attacked") {

        readline.question(WildEnemy.name + ' is a fierce enemy. Be wary!')    
    } 

    let attacked = readline.keyIn('You are being attacked by ' + WildEnemy.name + " and you have recieved " + damage + " points of damage. Do you want to attack or run? press a for attack or r for run.", {limit: 'ar'})

    if (attacked === 'r') {

        readline.question("RUUUNNNNNNNNNANAAAAAAAWWWWWWAAAAAAAYYYYYYYYYYYYYYYYY!............")

        if (hasEscaped === 1) {

            readline.question('You have escaped.')

        } else {

            const keepFighting = readline.keyIn('You currently have ' + update + " HP. Do you want to keep going on your journey? y or n ",{limit: 'yn'}); 

            if (keepFighting === 'y') {

                readline.question( user.name + " continue on your journey. Be safe and watch out for enemies.")

            }else{

                readline.question('Goodbye')
            }
        }
        //then run
        // If running, there will be a 50% chance of escaping
    } else if (attacked === 'a') {

        readline.question('ATTACK!!!@@#@!!@##%%&!!!!!&**&^#@!!!!@###$$%??!!!!!!)(&%$#@!!!!!!!')
    
        readline.question(user.name + ", you have delt " + damage + " HP damage to " + WildEnemy.name+ "!")
        
        readline.question(enemy + " has " + enemyUpdate + "HP.")
        //then attack
        // If attacking, a random amount of damage will be delt between a min and max
        // If the player kills the enemy you can give the Player some HP and a special item that is stored in the 
        //inventory. After this, the player will continue walking. Use a while loop to control this flow.
        // Inventory
        // When the player kills enemies, they are awarded with items
    }
    
    if (sequoiasquatch.points <= 0) {

        readline.question('The enemy '+ WildEnemy.name + " is dead. You have won the battle and will move on to more battles for a chance at further victory!")
        readline.question('You will recieve ' + sequoiasquatch.points + ' HP in your inventory. Your winnings bring your HP up to ' + winningUpdate + ' and you have new items: ' + WildEnemy.items + ' from your dead enemy.')
        WildEnemy.isAlive = false;
        //add points to inventory and add new item to inventory how do I add these to the inventory? Class getters and setters
         
        WildEnemy.hasWon = true;
        //I need to make the player exit the loop at this point and continue on with altered points inventory. How?
    }
    
    // After the player attacks or runs the enemy attacks back for a random damage amount
   
if(WildEnemy.isAlive) {

const keepFighting = readline.keyIn('You currently have ' + update + " HP. Do you want to keep going on your journey? y or n ", {limit:'yn'}); 

    if (keepFighting === 'y') {

        readline.question( player + " continue on your journey. Be safe and watch out for enemies.")

    }else{

        readline.question('Goodbye')
    }
    //game just stops here. Actually it loops back to the beginning and resets the variables. 
    //How do I get it to keep going while maintaining current points?




}else if (!user.isAlive) {// If the enemy kills the player the console prints a cool death message and the game ends

    readline.question(user.name+ ", you have zero to negative HP which is too low to survive. You have been ushered into the Underworld where you will be known as dead. You lose. Game Over")
    let isAlive = false 
}
 

}
*/



// Passing Criteria: Demo to the Instructor/TA & Code Review
// An instructor or TA will look through your code with you and make sure you have a solid grasp on using functions, loops, and conditionals in JavaScript, as well as to verify that you're following JavaScript code standards and good general programming practices.

// This project passes off the following levels of the Skills Tree:

// Programming Principles, Level 2
