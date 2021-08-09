function perpectFriend(names){
    let smallest=0;
    for(let i=0;i<names.length;i++)
    {
        if(names[i]<smallest){
            smallest=names[i];
        }
    }
    return smallest;
}
console.log(perpectFriend('arif','medul','minhaz','adi','mehedi','nahidul'));