import React from "react";

function cardItems(ele) {
    return (
        <div className='row'>
            <div className='colmun25'>{ele.name}</div>
            <div className='colmun25'>{ele.qty}</div>
            <div className='colmun25'>{ele.price}</div>
            <div className='colmun25'>{ele.qty * ele.price}</div>
        </div>
    );
}

function Cart(props) {
    
    if (props.data == undefined || (props.data != undefined && props.data.length < 1)) {
        return ("");
    }
    var totalAmount=0;
    var totalItems=0;
    props.data.forEach(itm=>{
        var amt=itm.price*itm.qty;
        totalAmount=totalAmount+amt;
        totalItems=totalItems+itm.qty;
    });
    var discAmount=totalAmount*10/100;
    var netAmt=totalAmount-discAmount;
    
    return (
        <div className='cart'>
            <div className='row'><h3> {totalItems} Item in your Cart</h3></div>
            <div className='row'>
                <div className='colmun25Header'>Item</div>
                <div className='colmun25Header'>Qty</div>
                <div className='colmun25Header'>Price</div>
                <div className='colmun25Header'>Total Price</div>
                {    
                    props.data.map(cardItems)
                   
                }
            </div>
            <div className='row'><div className='amtDesc'>Total</div><div className='amtVal'>{totalAmount}</div></div>
            <div className='row'><div className='amtDesc'>Discount 10%</div><div className='amtVal'>{discAmount}</div></div>
            <div className='row'><div className='amtDesc'>Net Amount</div><div className='amtVal'>{netAmt}</div></div>
            <div className='rowPayment'><input className='paymentBtn' type="button" value="Make Payment" /></div>
        </div>
    );
}

export default Cart;