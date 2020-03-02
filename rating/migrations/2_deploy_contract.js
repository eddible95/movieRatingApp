var Rating = artifacts.require("./Rating.sol");
var MovieNames = [web3.utils.asciiToHex("Star Wars"), web3.utils.asciiToHex("Avatar"), web3.utils.asciiToHex("Inception")];
module.exports = function(deployer) {
   deployer.deploy(Rating, MovieNames);
};
