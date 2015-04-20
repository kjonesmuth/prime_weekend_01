function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma){
	this.monsterName = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
}

function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass){
	this.__proto__ = Monster;
	this.playerClass = playerClass;
}

Monster.prototype.attack = function (){
	return (Math.floor(Math.random() * 20) + 1 + this.strength);
}

Player.prototype.attack = function(){
	return (Math.floor(Math.random() * 20) + 1 + this.dexterity);
}

function addTableCell(value){
	var cell = document.createElement("td");
	var cellText = document.createTextNode(value);
	cell.appendChild(cellText);
	return cell;
}

function addTableRow(creature){
	// get the table and create a tr object
	var table = document.getElementById("stats");
	var newRow = document.createElement("tr");

	//call helper function which creates td objects, append to row
	newRow.appendChild(addTableCell(creature.monsterName));
	newRow.appendChild(addTableCell(creature.strength));
	newRow.appendChild(addTableCell(creature.dexterity));
	newRow.appendChild(addTableCell(creature.constitution));
	newRow.appendChild(addTableCell(creature.wisdom));
	newRow.appendChild(addTableCell(creature.intelligence));
	newRow.appendChild(addTableCell(creature.charisma))
	if (creature.hasOwnProperty("playerClass")){
		newRow.appendChild(addTableCell(creature.playerClass));
	} else {
		newRow.appendChild(addTableCell(""));
	}
	//add the row to the table
	console.log(newRow);
	table.appendChild(newRow);
}


function addMonsterData(){
	var creature;
	var name = document.getElementById('ccc').value;
	console.log(name);
	//if (document.getElementById('playerClass').value == null) {
		creature = new Monster(name, 
			document.getElementById('str').value,
			document.getElementById('dex').value, 
			document.getElementById('con').value,
			document.getElementById('wis').value,
			document.getElementById('int').value,
			document.getElementById('char').value);
	/*} else {
		creature = new Player(document.getElementbyId('name'), document.getElementbyId('str'), document.getElementbyId('dex'), document.getElementbyId('con'), document.getElementbyId('wis'), document.getElementbyId('int'), document.getElementbyId('char'));
	*/
	console.log(creature);
	listOfMonsters.push(creature);
	addTableRow(creature);
}

var listOfMonsters = [];
document.getElementById('addMonster').addEventListener('click', addMonsterData());