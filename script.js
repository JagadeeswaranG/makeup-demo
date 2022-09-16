//Creat container
let container=document.createElement("div");
container.setAttribute("class","container");
let row=document.createElement("div");
row.classList.add("row","m-3");


// <div class="container">
// <div class="row m-3">
//     <div class="custom-file">
//         <input type="file" class="custom-file-input" id="customFile">
//         <label class="custom-file-label" for="customFile">Choose file</label>
//       </div>
// </div>
// </div>


let div=document.createElement("div");
div.setAttribute("class","input-group");
let select=document.createElement("select");
select.setAttribute("calss","custom-select");
select.setAttribute("id","inputGroupSelect04");
select.setAttribute("aria-label","Example select with button addon");
select.innerHTML=`<option>Choose your Product</option>
<option>blush</option>
<option>bronzer</option>
<option>eyebrow</option>
<option>eyeliner</option>
<option>eyeshadow</option>
<option>foundation</option>
<option>lip_liner</option>
<option>lipstick</option>
<option>mascara</option>
<option>nail_polish</option>`;
let div2=document.createElement("div");
div2.setAttribute("class","input-group-append");
let button=document.createElement("button");
button.classList.add("btn","btn-outline-primary")
button.setAttribute("type","button");
button.innerHTML="Go";
button.addEventListener("click",makeup);

div2.append(button);
div.append(select,div2);
row.append(div);
container.append(row);
document.body.append(container);




async function makeup(){
    try {
        let product_type=document.getElementById("inputGroupSelect04").value;
        console.log(product_type);
        let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`);
        let data=await res.json();
        console.log(data);

        for(let i=0;i<data.length;i++){
            row.innerHTML+=`<div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${data[i].api_featured_image}" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data[i].brand}</h5>
                  <p class="card-text">${data[i].name}</p>
                  <p class="card-text"><small class="text-muted">${data[i].description}</small></p>
                  <p class="card-text">Price $: ${data[i].price}</p>                  
                  <p class="card-text">To Know More: ${data[i].product_link}</p>
                </div>
              </div>
            </div>
          </div>`; 
                    }
    } catch (error) {
       console.log("Error");
     } 
                
 }
makeup();

                                       
                     
                                                               
                    
                                
            
             
                                       
         
        
   



