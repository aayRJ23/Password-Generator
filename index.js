function generate()
{
    let dictionary='';

    if(document.getElementById('lowercaseCb').checked)
    {
        dictionary+='qwertyuiopasdfghjklzxcvbnm';
    }
    if(document.getElementById('uppercaseCb').checked)
    {
        dictionary+='QWERTYUIOPASDFGHJKLZXCVBNM';
    }
    if(document.getElementById('digitsCb').checked)
    {
        dictionary+='1234567890';
    }
    if(document.getElementById('specialsCb').checked)
    {
        dictionary+='!@#$%^&*()_-+={}[]/';
    }

    const len=document.querySelector('input[type="range"]').value;

    if(len<1 || dictionary.length===0)
    {
        return;
    }

    let password='';
    for(let i=0 ; i<len ;i++)
    {
        const pos=Math.floor(Math.random()* dictionary.length);
        password+=dictionary[pos];
    }

    document.querySelector('input[type="text"]').value=password;
}

// generate();

[...document.querySelectorAll('input[type="checkbox"] , button.generate')].forEach((ele)=>
{
    ele.addEventListener("click",generate);
})

document.querySelector('input[type="range"]').addEventListener('input',(e)=>{
    document.querySelector('div.range span').innerHTML=e.target.value;
    generate();
})

document.querySelector('div.password button').addEventListener('click', () => {
    const pass = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(() => {
      document.querySelector('div.password button').innerHTML = 'copied!';
      setTimeout(() => {
        document.querySelector('div.password button').innerHTML = 'copy';
      }, 1000);
    })
  });


generate();
