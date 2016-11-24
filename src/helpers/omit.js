export default (obj, omitList) => {
    const result = {}
    for(const [key, val] of Object.entries(obj)){
        if(omitList.indexOf(key) > -1){
            continue
        }
        result[key] = val
    }
    return result
}
