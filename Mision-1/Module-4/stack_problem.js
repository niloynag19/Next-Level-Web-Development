
const isValid =(str)=>{
    const stack=[];
    const brackets={
        ')':'(',
        '}':'{',
        ']':'['
    };

    for(let ch of str)
    {
        const top=stack[stack.length-1];
        if(ch==='(' || ch==='{' || ch==='[')
        {
            stack.push(ch);
        }
        else 
        {
            // if(stack.length===0)
            // {
            //     return false;
            // }
            // else 
            // {
            //     if(ch===')' && top==='(' )
            //     {
            //         stack.pop();
            //     }
            //     else if(ch==='}' && top==='{')
            //     {
            //         stack.pop();
            //     }
            //     else if(ch===']' && top==='[')
            //     {
            //         stack.pop();
            //     }
            //     else 
            //     {
            //         return false
            //     }
            // }
            if(stack.length===0 || top!=brackets[ch])
            {
                return false
            }
            stack.pop();
        }
    }
    return stack.length===0;
};

console.log(isValid("([{}]]"));