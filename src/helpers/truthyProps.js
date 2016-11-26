export default function* getTruthyProps(obj) {
    for(const entry of Object.entries(obj)){
        if(entry[1]) {
            yield entry
        }
    }
}
