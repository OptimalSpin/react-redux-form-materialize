export default (obj) => {
    const result = []
    for(const [key, val] in Object.entries(obj)){
        val && result.push([key, val])
    }
    return result
}
