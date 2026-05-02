class Cart{

    constructor() {
    if (Cart.instance) {
        return Cart.instance;
    }
    this.cartList = [];
}

    static getInstance() {
    if (!Cart.instance) {
        Cart.instance = new Cart();
    }
    return Cart.instance;
}


    findItem(name){
        return this.cartList.find((item)=> name === item.name)
    }

    addItem(name, quantity, price){
        if(this.isCartEmpty()){
            this.cartList.push({name, quantity, price })
            
        }else{
            const duplicateItem = this.findItem(name)
            if(!duplicateItem){
                this.cartList.push({name, quantity, price })
          
            }else{
                duplicateItem.quantity += quantity

            }
        }
        this.showCartList()
    }

    reduceQuantity(name){
        const foundItem = this.findItem(name)
        if(foundItem.quantity>1){
            foundItem.quantity = foundItem.quantity-1
        }else{
            this.removeItem(name)
        }
        this.showCartList()

    }

    removeItem(name){
        this.cartList= this.cartList.filter((item)=> item.name !== name);
        this.showCartList()
    }


    showCartList(){
        let total = 0;
        this.cartList?.forEach((item)=>{
            total += item.quantity * item.price
        })
        console.log({...this.cartList, total})
    }

    isCartEmpty(){
        return this.cartList.length ? false : true
    }

    clearCart(){
        this.cartList=[]
        this.showCartList()
    }

    
}


const vardCart = Cart.getInstance()
vardCart.addItem("Orange", 2, 2);
vardCart.addItem("Pineapple", 3, 4)
vardCart.reduceQuantity("Orange")
