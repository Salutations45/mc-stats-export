
const fs = require('fs');

const namesArray = JSON.parse(fs.readFileSync('./names.json'));
var names = new Map();
namesArray.forEach(e=>{
	names.set(e[0],e[1]);
});

if (!fs.existsSync('./output')){
    fs.mkdirSync('./output');
}

const types = ["custom","crafted","mined","used","killed","picked_up","broken","killed_by","dropped"];

var statFiles = fs.readdirSync('./stats').filter(file => file.endsWith('.json'));

types.forEach(type=>{

	var keys =[];
	let output = "";

	statFiles.forEach(e=>{
		let uuid = e.slice(0,-5);
		let name = names.get(uuid);
		let stats = JSON.parse(fs.readFileSync('./stats/'+e)).stats["minecraft:"+type];

		if (stats) {
			let line = new Array(keys.length);
			Object.keys(stats).forEach(k=>{
				if(!keys.includes(k)) {
					keys.push(k);
				}
				line[keys.indexOf(k)] = stats[k];
			});
			output+="\n"+name+","+line.join(',');
		}
	});
	output = "name,"+keys.join(',') + output;
	fs.writeFileSync('./output/'+type+'.csv', output);
	console.log('exported '+type);
});










