
function rand_int(n) {
	return Math.floor(Math.random() * n)
}

function roll() {
	var equip_key = equips.value;
	if (equip_key == "") return;
	for (const line of lines) {
		var potential_keys = Object.keys(potential[equip_key])
		var randi_key = rand_int(potential_keys.length)
		var potential_values = Object.values(potential[equip_key])[randi_key]
		var randi_values = rand_int(potential_values.length)
		line.innerHTML = potential_keys[randi_key] + " +" + potential_values[randi_values] + "%"
	}
}

const potential = {

	"hat": {
		"LUK": [3, 6, 9, 12],
		"INT": [3, 6, 9, 12],
		"STR": [3, 6, 9, 12],
		"DEX": [3, 6, 9, 12],
	},
	"top": {
		"LUK": [3, 6, 9, 12],
		"INT": [3, 6, 9, 12],
		"STR": [3, 6, 9, 12],
		"DEX": [3, 6, 9, 12],
	},
	"bottom": {
		"LUK": [3, 6, 9, 12],
		"INT": [3, 6, 9, 12],
		"STR": [3, 6, 9, 12],
		"DEX": [3, 6, 9, 12],
	},
	"shoes": {
		"LUK": [3, 6, 9, 12],
		"INT": [3, 6, 9, 12],
		"STR": [3, 6, 9, 12],
		"DEX": [3, 6, 9, 12],
	},
};

console.clear()
// console.log(Object.keys(potential))
// console.log(Object.values(potential))

let hat_ranks_unformatted = [
	//Common
	`STR +6 	1
DEX +6 	1
INT +6 	1
LUK +6 	1
Max HP +60 	1
Max MP +60 	1
DEF +60 	1`
	,//Rare
	`STR +12 	3
DEX +12 	3
INT +12 	3
LUK +12 	3
Max HP +120 	3
Max MP +120 	3
DEF +120 	2
STR +3% 	3
DEX +3% 	3
INT +3% 	3
LUK +3% 	3
Max HP +3% 	2
Max MP +3% 	2
DEF +3% 	2
All Stats +5 	2`
	,//Epic
	`STR +6% 	5
DEX +6% 	5
INT +6% 	5
LUK +6% 	5
Max HP +6% 	5
Max MP +6% 	5
DEF +6% 	3
All Stats +3% 	2`
	,//Unique
	`STR +9% 	5
DEX +9% 	5
INT +9% 	5
LUK +9% 	5
Max HP +9% 	6
Max MP +9% 	6
DEF +9% 	4
All Stats +6% 	4
All Skill Levels +1 	4
All Skill Levels +2 	2
5% chance to ignore 20% damage when hit 	4
5% chance to ignore 40% damage when hit 	4
Increase efficiency of HP recovery items and skills by 30% 	4
Decent Mystic Door enabled 	4`
	,//Legendary
	`STR +12% 	4
DEX +12% 	4
INT +12% 	4
LUK +12% 	4
Max HP +12% 	4
Max MP +12% 	4
DEF +12% 	4
All Stats +9% 	3
All Skill Levels +2 	3
All Skill Levels +3 	2
10% chance to ignore 20% damage when hit 	3
10% chance to ignore 40% damage when hit 	3
Skill cooldown -1 second 	3
Skill cooldown -2 seconds 	2
Decent Advanced Bless enabled 	3`
];

// let top_ranks_unformatted = [
// 	//Common
// 	`STR +6 	1
// DEX +6 	1
// INT +6 	1
// LUK +6 	1
// Max HP +60 	1
// Max MP +60 	1
// DEF +60 	1`
// 	,//Rare
// 	`STR +12 	3
// DEX +12 	3
// INT +12 	3
// LUK +12 	3
// Max HP +120 	3
// Max MP +120 	3
// DEF +120 	2
// STR +3% 	3
// DEX +3% 	3
// INT +3% 	3
// LUK +3% 	3
// Max HP +3% 	2
// Max MP +3% 	2
// DEF +3% 	2
// All Stats +5 	2`
// 	,//Epic
// 	`STR +6% 	5
// DEX +6% 	5
// INT +6% 	5
// LUK +6% 	5
// Max HP +6% 	5
// Max MP +6% 	5
// DEF +6% 	3
// All Stats +3% 	2
// Invincibility time +1 second when hit 	3`
// 	,//Unique
// 	`STR +9% 	5
// DEX +9% 	5
// INT +9% 	5
// LUK +9% 	5
// Max HP +9% 	6
// Max MP +9% 	6
// DEF +9% 	4
// All Stats +6% 	4
// 5% chance to ignore 20% damage when hit 	4
// 5% chance to ignore 40% damage when hit 	4
// Invincibility time +2 seconds when hit 	4
// 2% chance of being invincible for 7 seconds when hit 	4
// 30% chance to reflect 50% of damage taken 	4
// 30% chance to reflect 70% of damage taken 	2
// Increase efficiency of HP recovery items and skills by 30% 	4`
// 	,//Legendary
// 	`STR +12% 	4
// DEX +12% 	4
// INT +12% 	4
// LUK +12% 	4
// Max HP +12% 	4
// Max MP +12% 	4
// DEF +12% 	4
// All Stats +9% 	3
// Elemental Resistance +10% 	2
// 10% chance to ignore 20% damage when hit 	3
// 10% chance to ignore 40% damage when hit 	3
// Invincibility time +3 seconds when hit 	3
// 4% chance of being invincible for 7 seconds when hit 	3`
// ];

const equipment_and_potential_table_unformatted = {
	"hat": [
		//Common
	`STR +6 	1
DEX +6 	1
INT +6 	1
LUK +6 	1
Max HP +60 	1
Max MP +60 	1
DEF +60 	1`
	,//Rare
	`STR +12 	3
DEX +12 	3
INT +12 	3
LUK +12 	3
Max HP +120 	3
Max MP +120 	3
DEF +120 	2
STR +3% 	3
DEX +3% 	3
INT +3% 	3
LUK +3% 	3
Max HP +3% 	2
Max MP +3% 	2
DEF +3% 	2
All Stats +5 	2`
	,//Epic
	`STR +6% 	5
DEX +6% 	5
INT +6% 	5
LUK +6% 	5
Max HP +6% 	5
Max MP +6% 	5
DEF +6% 	3
All Stats +3% 	2`
	,//Unique
	`STR +9% 	5
DEX +9% 	5
INT +9% 	5
LUK +9% 	5
Max HP +9% 	6
Max MP +9% 	6
DEF +9% 	4
All Stats +6% 	4
All Skill Levels +1 	4
All Skill Levels +2 	2
5% chance to ignore 20% damage when hit 	4
5% chance to ignore 40% damage when hit 	4
Increase efficiency of HP recovery items and skills by 30% 	4
Decent Mystic Door enabled 	4`
	,//Legendary
	`STR +12% 	4
DEX +12% 	4
INT +12% 	4
LUK +12% 	4
Max HP +12% 	4
Max MP +12% 	4
DEF +12% 	4
All Stats +9% 	3
All Skill Levels +2 	3
All Skill Levels +3 	2
10% chance to ignore 20% damage when hit 	3
10% chance to ignore 40% damage when hit 	3
Skill cooldown -1 second 	3
Skill cooldown -2 seconds 	2
Decent Advanced Bless enabled 	3`
],
"top":
[
	//Common
	`STR +6 	1
DEX +6 	1
INT +6 	1
LUK +6 	1
Max HP +60 	1
Max MP +60 	1
DEF +60 	1`
	,//Rare
	`STR +12 	3
DEX +12 	3
INT +12 	3
LUK +12 	3
Max HP +120 	3
Max MP +120 	3
DEF +120 	2
STR +3% 	3
DEX +3% 	3
INT +3% 	3
LUK +3% 	3
Max HP +3% 	2
Max MP +3% 	2
DEF +3% 	2
All Stats +5 	2`
	,//Epic
	`STR +6% 	5
DEX +6% 	5
INT +6% 	5
LUK +6% 	5
Max HP +6% 	5
Max MP +6% 	5
DEF +6% 	3
All Stats +3% 	2
Invincibility time +1 second when hit 	3`
	,//Unique
	`STR +9% 	5
DEX +9% 	5
INT +9% 	5
LUK +9% 	5
Max HP +9% 	6
Max MP +9% 	6
DEF +9% 	4
All Stats +6% 	4
5% chance to ignore 20% damage when hit 	4
5% chance to ignore 40% damage when hit 	4
Invincibility time +2 seconds when hit 	4
2% chance of being invincible for 7 seconds when hit 	4
30% chance to reflect 50% of damage taken 	4
30% chance to reflect 70% of damage taken 	2
Increase efficiency of HP recovery items and skills by 30% 	4`
	,//Legendary
	`STR +12% 	4
DEX +12% 	4
INT +12% 	4
LUK +12% 	4
Max HP +12% 	4
Max MP +12% 	4
DEF +12% 	4
All Stats +9% 	3
Elemental Resistance +10% 	2
10% chance to ignore 20% damage when hit 	3
10% chance to ignore 40% damage when hit 	3
Invincibility time +3 seconds when hit 	3
4% chance of being invincible for 7 seconds when hit 	3`
	]
}
// console.log(hat_ranks_unformatted)

// let hat_ranks = hat_ranks_unformatted.map(s => s.split("\n").map(e => {
// 	e = e.split(" \t");
// 	return { "stat": e[0], "weight": Number(e[1]) };
// }
// ));

function rank_table_reformatting(table_unformatted){
	let table_formatted = table_unformatted.map(s => s.split("\n").map(e => {
		e = e.split(" \t");
		return { "stat": e[0], "weight": Number(e[1]) };
}
	))
return table_formatted;
}

// Array.prototype.sum = function () {
// 	let sum = 0;
// 	for (let el of this) sum += el;
// 	return sum;
// };

/**
 * 
 * @param {number[]} arr 
*/
function sumArray(arr) {
	let sum = 0;
	for (let el of arr) sum += el;
	return sum;
}

/**
 * 
 * @param {{stat: string;weight: number;}[][]} potential_table 
*/
function potential_stats_with_weights(potential_table, rank_num, cube_type) {
	const cube_mod_num = cube_type == "r" ? 10 : 5

	const norm_base = 100;

	const rank_weight_prime = potential_table[rank_num + 1].map(entry => entry.weight)
	const rank_weight = potential_table[rank_num].map(entry => entry.weight)
	const line_1 = rank_weight_prime.map(weight => weight * norm_base / sumArray(rank_weight_prime))

	const line_2_nonprime = line_1.map(x => x / cube_mod_num)
	const line_2_prime = rank_weight.map(x => x * (norm_base - sumArray(line_2_nonprime)) / sumArray(rank_weight))
	const line_2 = [...line_2_nonprime, ...line_2_prime]

	const line_3_nonprime = line_2_nonprime.map(x => x / cube_mod_num)
	const line_3_prime = rank_weight.map(x => x * (norm_base - sumArray(line_3_nonprime)) / sumArray(rank_weight))
	const line_3 = [...line_3_nonprime, ...line_3_prime]
	const stats = [
		...potential_table[rank_num + 1].map(entry => entry.stat),
		...potential_table[rank_num].map(entry => entry.stat)
	];

	return { stats, line_1, line_2, line_3 }
}

/**
 * 
 * @param {number[]} lines 
 */
function line_index_roller(lines) {
	if (!lines?.length) throw Error("no lines!");
	const rand_num = Math.random() * sumArray(lines);
	let index = 0;
	let sum = 0;
	for (let i = 0; i < lines.length; i++) {
		sum += lines[index];
		if (sum >= rand_num)
			return index;
		index++;
	}
}

function potential_lines_instance_console(psww) {
	let rolled_line_1 = line_index_roller(psww.line_1)
	let rolled_line_2 = line_index_roller(psww.line_2)
	let rolled_line_3 = line_index_roller(psww.line_3)
	console.log(psww.stats[rolled_line_1])
	console.log(psww.stats[rolled_line_2])
	console.log(psww.stats[rolled_line_3])
	// document.body.innerText = JSON.stringify(psww, 0, "\t");
	// document.body.style.whiteSpace = " pre";
}

//[0]=={"stat":"STR +6%", "w":5}


// Math.random() * sumArray(...)


// s = s.match(/^(?<stat>.*) \t(?<weight>\d*)/mg)

// void async function() {
// 	console.log(await (await fetch("./potentials.json")).json())
// }();

// fetch('./potentials.json')
// .then((response) => response.json())
// .then((json) => console.log(json));



// HTML
// var roller = document.createElement("button");
// var equips = document.createElement("select");

// var tier = document.createElement("h3");
// var line0 = document.createElement("p");
// var line1 = document.createElement("p");
// var line2 = document.createElement("p");
// var lines = [line0, line1, line2];
// var rand_keys;
// var rand_values;

// const categories = Object.keys(potential)

// var defaultValue = document.createElement("option");
// defaultValue.innerHTML = "choose equipment";
// defaultValue.value = ""
// defaultValue.selected = true;
// defaultValue.disabled = true;
// equips.appendChild(defaultValue)


// for (const category of categories) {
// 	let option = document.createElement("option");
// 	option.innerHTML = category;
// 	option.value = category;
// 	equips.appendChild(option)
// }

// var hat = document.createElement("option");
// hat.innerHTML = "hat";
// hat.value = "hat";
// equips.appendChild(hat)

// var ttop = document.createElement("option");
// ttop.innerHTML = "top";
// ttop.value = "top";
// equips.appendChild(ttop)


// roller.innerHTML = "click to roll";
// tier.innerHTML = "rare";

// roll()

// document.body.appendChild(equips)
// document.body.appendChild(roller);
// document.body.appendChild(tier)
// document.body.appendChild(line0);
// document.body.appendChild(line1);
// document.body.appendChild(line2);

// lines.forEach(line => document.body.appendChild(line))

// equips.addEventListener("change", roll)

// roller.addEventListener("click", roll);

// setInterval(roll, 1000);

function potential_lines_instance() {
	const equipValue = document.getElementById("equipment_selector").value;
	const rankValue = Number(document.getElementById("rank_selector").value);
	table_formatted = rank_table_reformatting(equipment_and_potential_table_unformatted[equipValue]);
	psww = potential_stats_with_weights(table_formatted, rankValue, "r");

	const html_line_0 = document.getElementById("html_line_1");
	const html_line_1 = document.getElementById("html_line_2");
	const html_line_2 = document.getElementById("html_line_3");

	html_line_0.innerHTML = psww.stats[line_index_roller(psww.line_1)]
	html_line_1.innerHTML = psww.stats[line_index_roller(psww.line_2)]
	html_line_2.innerHTML = psww.stats[line_index_roller(psww.line_3)]

	nn += 1;
	document.getElementById("roll_counter").innerText = nn;
	
}
// main() 
try {
	var nn = 0;
	potential_lines_instance()
	console.log(nn)

} catch (e) {

	console.log(String(e))
}
