

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


let hat_ranks = hat_ranks_unformatted.map(s => s.split("\n").map(e => {
	e = e.split(" \t");
	return { "stat": e[0], "weight": Number(e[1]) };
}));


Array.prototype.sum = function () {
	let sum = 0;
	for (let el of this) sum += el;
	return sum;
};

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
function potential_table_to_lines(potential_table, rank_num, cube_type) {
	const cube_mod_num = cube_type == "r" ? 10 : 5

	const norm_base = 100;

	const rank_weight_prime = potential_table[rank_num + 1].map(entry => entry.weight)
	const rank_weight = potential_table[rank_num].map(entry => entry.weight)

	const l1 = rank_weight_prime.map(weight => weight * norm_base / sumArray(rank_weight_prime))

	const l2p = l1.map(x => x / cube_mod_num)
	const l2pp = rank_weight.map(x => x * (norm_base - sumArray(l2p)) / sumArray(rank_weight))
	const l2 = [...l2p, ...l2pp]

	const l3p = l2p.map(x => x / cube_mod_num)
	const l3pp = rank_weight.map(x => x * (norm_base - sumArray(l3p)) / sumArray(rank_weight))
	const l3 = [...l3p, ...l3pp]

	const stats = [
		...potential_table[rank_num + 1].map(entery => entery.stat),
		...potential_table[rank_num].map(entery => entery.stat)
	];

	// console.log(l1)
	// console.log(l2)
	// console.log(l3)

	return { stats, l1, l2, l3 }
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

try {

	let pt = potential_table_to_lines(hat_ranks, 0, "r")

	let pl1 = line_index_roller(pt.l1)
	let pl2 = line_index_roller(pt.l2)
	let pl3 = line_index_roller(pt.l3)

	console.log(pt.stats[pl1])
	console.log(pt.stats[pl2])
	console.log(pt.stats[pl3])

	document.body.innerText = JSON.stringify(pt, 0, "\t");
	document.body.style.whiteSpace = " pre";

} catch (e) {
	console.log(String(e))
}











// ['r'][2]


//[0]=={"stat":"STR +6%", "w":5}


// Math.random() * sumArray(...)


// console.log([1,2,"a"].map(x=>x + 2))

// "a"+2


// s = s.match(/^(?<stat>.*) \t(?<weight>\d*)/mg)

// void async function() {
// 	console.log(await (await fetch("./potentials.json")).json())
// }();

// fetch('./potentials.json')
// .then((response) => response.json())
// .then((json) => console.log(json));




var roller = document.createElement("button");
var equips = document.createElement("select");

var tier = document.createElement("h3");
var line0 = document.createElement("p");
var line1 = document.createElement("p");
var line2 = document.createElement("p");
var lines = [line0, line1, line2];
var rand_keys;
var rand_values;

const categories = Object.keys(potential)

var defaultValue = document.createElement("option");
defaultValue.innerHTML = "choose equipment";
defaultValue.value = ""
defaultValue.selected = true;
defaultValue.disabled = true;
equips.appendChild(defaultValue)


for (const category of categories) {
	let option = document.createElement("option");
	option.innerHTML = category;
	option.value = category;
	equips.appendChild(option)
}

// var hat = document.createElement("option");
// hat.innerHTML = "hat";
// hat.value = "hat";
// equips.appendChild(hat)

// var ttop = document.createElement("option");
// ttop.innerHTML = "top";
// ttop.value = "top";
// equips.appendChild(ttop)


roller.innerHTML = "click to roll";
tier.innerHTML = "rare";



roll()


document.body.appendChild(equips)
document.body.appendChild(roller);
document.body.appendChild(tier)
// document.body.appendChild(line0);
// document.body.appendChild(line1);
// document.body.appendChild(line2);

lines.forEach(line => document.body.appendChild(line))


// console.log([1,2,3].map(v => v * 2))

equips.addEventListener("change", roll)

roller.addEventListener("click", roll);

// setInterval(roll, 1000);


