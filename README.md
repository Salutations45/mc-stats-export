# mc-stats-export
NodeJS tool to export a Minecraft world statistics to CSV format

# How to use
1) Run the `npm i` command to install dependencies

2) Copy the `/stats` folder of your world to the project root. It should contain the json statistics files for each player, named by their uuid

3) Run `getNames.js` to get all player names using uuid if there is too many you may need to run it multiple times

4) Run `export.js` it will generate a csv file for each statistic type in the output folder

