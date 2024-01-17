function* contador() {
    let i = 0
    while(true){
        yield i++
        if(i>5){
            break
        }
    }
}
const itc = contador()
for(c of itc){
    console.log(c)
}
