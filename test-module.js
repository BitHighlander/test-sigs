let signer = require("eth_mnemonic_signer")
// let signer = require("./dist")


let run_test = async function () {
    try{
        let seed = "alcohol woman abuse must during monitor noble actual mixed trade anger aisle"
        let address = await signer.getAddress(seed,"m/44'/60'/1'/0/0")
       let input = {}
        let payload = {
            "type": "dapp",
            "name": "dapp.name",
            "url": "dapp.name.com"
        }
        console.log("payload: ",payload)
        payload = JSON.stringify(payload)
        input.message = payload
        let signature = await signer.signMessage(payload,seed,"m/44'/60'/1'/0/0")
        input.address = address
        input.signature = signature
        let expected = "2c57f901ec181576b39233d9ab014675437ba0e90c62199bdb59b3ba57f53f0d099cd947999c287a087d16c5928c72c02f8af06ebff1577408fecb1979c769151b"
        console.log("expected: ",expected)
        console.log("signature: ",signature)
        if(signature !== expected) throw Error("Invalid sig! did not match keepkey!")

    }catch(e){
        console.error(e)
    }
}
run_test()