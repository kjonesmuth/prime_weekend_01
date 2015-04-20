var listOfMonsters = [];

function addMonsterData(){
	var creature;
	if (document.getElementById('playerClass').value) {
		creature = new Player(
			document.getElementById('creatureName').value,
			document.getElementById('str').value,
			document.getElementById('dex').value, 
			document.getElementById('con').value,
			document.getElementById('wis').value,
			document.getElementById('int').value,
			document.getElementById('char').value,
			document.getElementById('playerClass').value);
	} else {
		creature = new Monster(
			document.getElementById('creatureName').value,
			document.getElementById('str').value,
			document.getElementById('dex').value, 
			document.getElementById('con').value,
			document.getElementById('wis').value,
			document.getElementById('int').value,
			document.getElementById('char').value);

	}
	console.log(creature);
	listOfMonsters.push(creature);
	console.log(listOfMonsters);
	addTableRow(creature);
	blankInputs();
}

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
	this.playerClass = playerClass;
	Monster.apply(this, [name, strength, dexterity, constitution, wisdom, intelligence, charisma]);
}

Monster.prototype.attack = function(){
	return parseInt(this.strength) + (Math.floor(Math.random() * 20) + 1);
}

Player.prototype.attack = function(){
	return parseInt(this.dexterity) + (Math.floor(Math.random() * 20) + 1);
}

function addAttackButton(creature){
	var cell = document.createElement("td");
	var attackButton = document.createElement("input");
	attackButton.id = "attackButton";
	attackButton.value = creature.monsterName;
	attackButton.type = "button";
	attackButton.onclick = function(){
		alert(creature.monsterName +" attacks for " +creature.attack()+" damage!");
	};
	cell.appendChild(attackButton);
	return cell;
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
	newRow.appendChild(addAttackButton(creature));
	newRow.appendChild(addTableCell(creature.strength));
	newRow.appendChild(addTableCell(creature.dexterity));
	newRow.appendChild(addTableCell(creature.constitution));
	newRow.appendChild(addTableCell(creature.wisdom));
	newRow.appendChild(addTableCell(creature.intelligence));
	newRow.appendChild(addTableCell(creature.charisma))
	if (creature.playerClass){
		newRow.appendChild(addTableCell(creature.playerClass));
	} else {
		newRow.appendChild(addTableCell(""));
	}
	//add the row to the table
	console.log(newRow);
	table.appendChild(newRow);
}

function blankInputs(){
	var inputs = document.getElementsByTagName("input");
	for (var i=0; i<inputs.length-1; i++){
		if (inputs[i].id != "attackButton"){
			inputs[i].value = null;
		}
	}
}
