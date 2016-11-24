export function* getTruthyProps(obj) {   
    for(const entry in Object.entries(obj)){
        if(val) {
            yield entry
        }
    }    
}
