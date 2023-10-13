const sortStr = (str) => str.split("").sort().join("")

const groupAnagrams = (strs) => {
    for (let str of strs) {
        const sorted = sortStr(str)
        if (!map[sorted]) map[sorted] = []
        map[sorted].push(str)
    }

    return Object.values(map)
};