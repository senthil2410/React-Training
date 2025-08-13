class MyCounter extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode:"open"});
        this.increment=document.createElement("button");
        
        this.displaycount=document.createElement("div");
        this.decrement=document.createElement("button");

        this.countvalue=this.getAttribute('count');
        this.increment.textContent="Increment";

        this.displaycount.textContent=`The count value is ${this.countvalue}`;
        this.decrement.textContent="Decrement";

        this.increment.addEventListener("click",()=>this.updateCount(1));
        this.decrement.addEventListener("click",()=>this.updateCount(-1));

        const style=document.createElement('style');
          style.textContent=`
           div
           {
               text-align:center;
               color:green;
               font-weight:bolder;
           }
           button
           {
              display:block;
              widthL200px;
               margin:20px;
               padding:20px;
               margin:20px auto;

           }`

        this.shadowRoot.append(this.increment,this.displaycount,this.decrement,style);

    }

    static get observedAttributes()
    {
        return['count'];
    }

    attributeChangedCallback(name,oldValue,newValue)
    {
        if(name==='count')
        {
            if(newValue !==oldValue)
            this.displaycount.textContent=`The count value is ${newValue}`;
        }
    }

    updateCount(value)
    {
            const current = parseInt(this.getAttribute('count'));
            this.setAttribute('count', current + value);
    }



}

customElements.define('my-counter',MyCounter);