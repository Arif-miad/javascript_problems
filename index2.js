//Qusen No 2 find out total sales amount
function  totalSales(s,p,j){
    var S_prise=100;
    var P_prise=200;
    var J_prise=500;
    var salesOf_S=S_prise*s;
    var salesOf_P=P_prise*p;
    var salesOf_J=J_prise*j;
    var totalamount=salesOf_S+salesOf_P+salesOf_J;
    return totalamount;
} 
console.log(totalSales(3,4,6));