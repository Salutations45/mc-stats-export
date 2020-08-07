
const fs = require('fs');
const axios = require('axios');

const timeout = 5000

var namesArray
try {
	namesArray = JSON.parse(fs.readFileSync('./names.json'));
}catch(e){
	namesArray = []
}

const names = new Map();

namesArray.forEach(e=>{
	//console.log(e);
	names.set(e[0],e[1]);
})
const statFiles = fs.readdirSync('./stats').filter(file => file.endsWith('.json'));

console.log(names.size+'/'+statFiles.length+' names already found');

let x = setTimeout(end, 10000);

let count = 0;

statFiles.forEach(e=>{
	let uuid = e.slice(0,-5);

	if(names.get(uuid)==undefined) {
		axios.get('https://sessionserver.mojang.com/session/minecraft/profile/'+uuid)
		.then(res => {
			clearTimeout(x);
			x = setTimeout(end, timeout);
			console.log(uuid + " " + res.data.name);
			names.set(uuid, res.data.name);
			count++;
		}).catch(error => {
			console.log(error);
		});
	}
});

function end() {
	fs.writeFileSync('./names.json', JSON.stringify(Array.from(names)));
	console.log(count+' names added');
	console.log(names.size+'/'+statFiles.length+' found');
	process.exit(0);
}

