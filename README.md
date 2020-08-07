# mc-stats-export
NodeJS tool to export Minecraft world statistics to CSV format

# How to use
1) Run `npm i` to install dependencies.

2) Copy the `/stats` folder of your world to the project root. It should contain the json statistics files for each player, named by their uuid.

3) Run `node getNames.js` to get the name of each player with their uuid using the mojang API. If there are too many players you may need to run it multiple times.

4) Run `node export.js` it will generate a csv file for each statistic [type](https://minecraft.gamepedia.com/Statistics) in the output folder.

