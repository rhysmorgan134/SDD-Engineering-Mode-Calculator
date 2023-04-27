export const calculatePassword = function(type, option, vin, seed) {
    const cipherKey = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const seedCipher = 'G7HM8CPLFAQW2R9Y1DE3SVU4O5KTJB6XNIZ0'
    const passwordCipher = 'CPLFAQW2R9Y1DB3SVU4E5K8JO6XNGZTH7IM0'

    let seedObj = {}
    let passwordObj = {}

    for(let i=0;i<cipherKey.length;i++) {
        seedObj[cipherKey[i]] = seedCipher[i]
    }

    for(let i=0;i<seedCipher.length;i++) {
        passwordObj[seedCipher[i]] = passwordCipher[i]
    }

    let pwd = []

    pwd[0] = seed[5]
    pwd[1] = seed[3]
    pwd[2] = seed[0]
    pwd[3] = seed[6]
    pwd[4] = seed[9]
    pwd[5] = seed[1]
    pwd[6] = seed[7]
    pwd[7] = seed[8]
    pwd[8] = seed[2]
    pwd[9] = seed[4]

    for(let i=0;i<pwd.length;i++) {
        pwd[i] = passwordObj[pwd[i]]
    }
    if(type === "Jaguar") {
        return (pwd.join("") + option + "CC")
    } else if (type === "Land Rover") {
        return (pwd.join("") + "CC" + option)
    }
}