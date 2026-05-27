

function createMenuElement(object) { 
    li1 = document.createElement("li")
    li1.setAttribute("left_menu", object.id)
 
    section1 = document.createElement("section")
    section1.setAttribute("left_menu", object.id)
    div1 = document.createElement("div")
    div1.setAttribute("left_menu", object.id)

    img1 = document.createElement("img")
    img1.setAttribute("src", object.pic)
    img1.setAttribute("left_menu", object.id)

    div2 = document.createElement("div")
    div2.setAttribute("left_menu", object.id)
    p1 = document.createElement("p")
    p1.setAttribute("left_menu", object.id)
    p1.textContent = "Код продукции: " + object.id 
    p2 = document.createElement("p") 
    p2.setAttribute("left_menu", object.id)
    p2.textContent = "Наименование: " + object.name 
    if (object.recipe === null) { 
        p3 = document.createElement("p") 
        p3.textContent = "Нет рецепта"
        p3.setAttribute("left_menu", object.id)
    } else { 
        p3 = document.createElement("p") 
        p3.setAttribute("left_menu", object.id)
        p3.textContent = "Есть рецепт"
    }  


    

    div2.appendChild(p1)
    div2.appendChild(p2)
    div2.appendChild(p3)
    div1.appendChild(img1)

    section1.appendChild(div1)
    section1.appendChild(div2)

    li1.appendChild(section1)

    li1.addEventListener('click', (event) => {
    product = json[event.target.getAttribute("left_menu")];
    fullRecipeButton = document.getElementById("myBtn1")
    fullRecipeButton.setAttribute("idproduct", product.id)

    selectIngProduct = document.getElementById("selectIngProduct")
    selectIngProduct.textContent = ""
     json.forEach(object => {
        console.log(json[product.id].id)
      if (Object.keys(object).length > 0 && json[product.id].id != object.id) {
        newOption = new Option("Название: " + object.name + " " + "Код: " + object.id, object.id);
        selectIngProduct.add(newOption, undefined)
      }
    });

    addRowMaterialBtn = document.getElementById("addRowMaterialBtn");
    addRowMaterialBtn.setAttribute("idproduct", product.id)
    addRowMaterialBtn.onclick = function() { 
        if (document.getElementById("QuantityProductTableInput").value === "" || document.getElementById("selectIngProduct").value == "") { 
            alert("Выберите сырьё и укажите его количество!")
            return
        }

        addRowMaterialid = this.getAttribute("idproduct")
        selectIngProductID = document.getElementById("selectIngProduct").value
        selectIngProductOBJECT = json[selectIngProductID]
        
        secondTbody = document.getElementById("secondTableTBODY")
        
        
        for (const row of secondTbody.rows) {
        if (row.children[1].textContent == selectIngProductID) {
            document.getElementById("selectIngProduct").selectedIndex = 0 
            document.getElementById("QuantityProductTableInput").value = ""
            alert("Такое сырьё уже есть в таблице!")
            return
        }
        }

        for (const row of secondTbody.rows) {
           row.children[5].textContent = "x"
        }
        

        NewRow = secondTbody.insertRow();

        var C1 = NewRow.insertCell(0)
        var C2 = NewRow.insertCell(1)
        var C3 = NewRow.insertCell(2)
        var C4 = NewRow.insertCell(3)
        var C5 = NewRow.insertCell(4)
        var C6 = NewRow.insertCell(5) 
        var C7 = NewRow.insertCell(6) 

        C1.textContent = secondTbody.rows.length
        C2.textContent = selectIngProductOBJECT.id; 
        C3.textContent = selectIngProductOBJECT.name
        C4.textContent = document.getElementById("QuantityProductTableInput").value
        C5.textContent = "шт"
        C6.textContent = "x"; 
        document.getElementById("OptimalAmountOfRawMaterials").textContent = "x"
        C7.textContent = "шт"

        document.getElementById("selectIngProduct").selectedIndex = 0; 
        document.getElementById("QuantityProductTableInput").value = ""

    }

    console.log(object[document.getElementById("myBtn1").getAttribute("idproduct")])

    
    deletebutton = document.getElementById("myBtnDeleteProduct")
    deletebutton.setAttribute("idproduct", product.id) 
    
    deletebutton.onclick = function() { 
     dbutton = document.getElementById("myBtnDeleteProduct")
     dbuttonid = dbutton.getAttribute("idproduct")
     console.log(json) 
     dbuttonid == (json.length - 1) ? json.pop() : json[dbuttonid] = {}
     setLocalStorage(basekey1, json)
     console.log(json) 
     window.location.reload();
    }

    myBtnSAVEProduct = document.getElementById("myBtnSAVEProduct")
    myBtnSAVEProduct.setAttribute("idproduct", product.id)
    myBtnSAVEProduct.onclick = function() {
        savebutProdID = this.getAttribute("idproduct")
        newRecipe1 = []
        for (const row of document.getElementById("secondTableTBODY").rows) { 
        saveObject1 = {}
        saveObject1.ingredient_id = row.children[1].textContent 
        saveObject1.quantity = row.children[3].textContent
        saveObject1.unit = row.children[4].textContent
        saveObject1.pic = document.getElementById("picarticle").src     
        newRecipe1.push(saveObject1)

        }
        console.log(newRecipe1)
        json[savebutProdID].recipe = newRecipe1;
        console.log(json) 
        setLocalStorage(basekey1, json)
        window.location.reload()
    }
    fullRecipeButton.onclick = function() {
    insertTreesModalWindowToDocument("modal-content" + "craft")
    modal = document.getElementById("modal-content" + "craft")

    modal.style.display = "block";
    idproduct = document.getElementById("myBtn1").getAttribute("idproduct")
    console.log(document.getElementById("modaldiv1"))
    init_code(idproduct, document.getElementById("modaldiv1"), json[idproduct].quantity, 1)
    deleteID(idproduct)
    init_code(idproduct, document.getElementById("modaldiv2"), json[idproduct].quantity, initCalculateOptimalProductionQuantity(idproduct) / json[idproduct].quantity)
    deleteID(idproduct)
    }

    myarticle = document.getElementById("my_article")
    myarticle.style.display = ""

    picarticle = document.getElementById("picarticle")
    picarticle.src = object.pic

    firstTable = document.getElementById("firstTable")
    tbody1 = document.getElementById("firstTableTBODY")
    paretTbody = tbody1.parentNode
    tbody1.remove()
    tbody2 = document.createElement("tbody")
    tbody2.id = "firstTableTBODY"

    tr1 = document.createElement("tr");

    td1 = document.createElement("td")
    td1.textContent = product.id;
    td2 = document.createElement("td")
        td2.textContent = product.name
    td3 = document.createElement("td")
        td3.textContent = product.quantity
    td4 = document.createElement("td")
        td4.textContent = "шт"
    td5 = document.createElement("td") 
    td3.setAttribute("id", "MinProd")   
        console.log(product.recipe != null)
        td5.textContent = product.recipe != null ? initCalculateOptimalProductionQuantity(product.id) : td5.textContent = product.quantity;
        td5.id = "OptimalAmountOfRawMaterials"
    td6 = document.createElement("td")
        td6.textContent = "шт"
    

    tr1.append(td1,td2,td3,td4,td5,td6)
    tbody2.append(tr1)
    paretTbody.appendChild(tbody2)
    
    tbody3 = document.getElementById("secondTableTBODY")
    paretTbody2 = tbody3.parentNode;
    tbody3.remove()
    tbody4 = document.createElement("tbody")
    tbody4.id = "secondTableTBODY"
    paretTbody2.append(tbody4)

    product2 = json[event.target.getAttribute("left_menu")] 
    i = 0;
    product2.recipe.forEach(value => {
        i = i + 1
        td00 = document.createElement("td")
        td00.textContent = i
    tr01 = document.createElement("tr");

    tdcode = document.createElement("td")
        tdcode.textContent = value.ingredient_id;
    td01 = document.createElement("td")
        td01.textContent = value.ingredient_id;
    td02 = document.createElement("td")
        td02.textContent = json[value.ingredient_id].name
    td03 = document.createElement("td")
        td03.textContent = value.quantity
    td04 = document.createElement("td")
        td04.textContent = "шт"
    td05 = document.createElement("td")      
        td05.textContent = (td5.textContent * value.quantity); 
        if (document.getElementById("MinProd").textContent == document.getElementById("OptimalAmountOfRawMaterials").textContent) {
        td05.textContent =  value.quantity;    
        }
    td06 = document.createElement("td")
        td06.textContent = "шт"
    
    tr01.append(td00, td01, td02, td03, td04, td05, td06)
    tbody4.append(tr01)
    })


    
});
 
    document.getElementById("left_menu_ul").appendChild(li1)

}      

function createListProduct() {
    json.forEach(object => {
      if (Object.keys(object).length > 0) {
       createMenuElement(object) 
      }
    });

}

function createDisplay() {
    
}
    
               
               
               
            /*   
               <li onclick="test(this)">
                    <section>
                        <div>
                            <img src="https://placehold.co/175x75/png">
                        </div>
                        <div>
                            <p>Код изделия: <span>101</span></p>
                            <p>Наименование: <span>Яблочный пирог</span></p>
                        </div>
                    </section> 
                </li>

                */
