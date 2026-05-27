
/*

// Получить модальное окно
var modal = document.getElementById("myModal1");

// Получить кнопку, которая открывает модальное окно
var btn = document.getElementById("myBtn1");

// Получить элемент <span>, закрывающий модальное окно
var span = document.getElementsByClassName("close")[0];

}

// Когда пользователь нажимает кнопку, открыть модальное окно
btn.onclick = function() {
modal.style.display = "block";
idproduct = document.getElementById("myBtn1").getAttribute("idproduct")
init_code(idproduct, document.getElementById("modaldiv1"), json[idproduct].quantity, 1)
}

// Когда пользователь нажимает на <span> (x), закрыть модальное окно
span.onclick = function() {
modal.style.display = "none";
}

// Когда пользователь нажимает в любом месте за пределами модального окна, закрыть его
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
*/
function createModalWindow(modalWindowID) { 
    divmodal = document.createElement("div")
    divmodal.id = modalWindowID
    divmodal.setAttribute("class", "modal")
        
        divmodalcontent = document.createElement("div")
        divmodalcontent.setAttribute("class", "modal-content")
        divmodalcontent.id = "modal-content" + modalWindowID
            span = document.createElement("span")
            span.textContent = "х"  
            span.setAttribute("class", "close")

            divworkingzone = document.createElement("div")
            divworkingzone.id = "workingzone" + modalWindowID

            span.onclick = function() {
            modalwindow = document.getElementById(modalWindowID);
            modalwindow.style.display = "none"
            modalwindow.remove()
            
            }   
        divmodalcontent.append(span, divworkingzone)
        divmodal.append(divmodalcontent)
        return divmodal 
}

function addTreesModalWindow(parentmodalWindow) { 
    h6_1 = document.createElement("h6")
    h6_1.textContent = "Полная рецептура продукции"
    h6_1.style.margin = "0px 0px 0px 15px"
    
    divBaseTree = document.createElement("div")
    divBaseTree.setAttribute("class", "modaldiv1")
    divBaseTree.id = "modaldiv1"

    h6_2 = document.createElement("h6")
    h6_2.textContent = "Полная рецептура продукции c учётом оптимизации"
    h6_2.style.margin = "0px 0px 0px 15px"

    divOptimizationTree = document.createElement("div")
    divOptimizationTree.setAttribute("class", "modaldiv1")
    divOptimizationTree.id = "modaldiv2" 
    workingZone = parentmodalWindow.querySelector("#workingzone" + parentmodalWindow.id)
    workingZone.append(h6_1, divBaseTree, h6_2, divOptimizationTree)
    return parentmodalWindow
}

function insertTreesModalWindowToDocument(modalWindowID) { 
    modalWindow = createModalWindow(modalWindowID) 
    treeModalWindow = addTreesModalWindow(modalWindow)
    document.body.append(treeModalWindow)
}
/*
function clickingButtonFullRecipe(modalWindowID) { 
   btn = document.getElementById("myBtn1")
   insertTreesModalWindowToDocument(modalWindowID)
   btn.onclick = function() {
   document.getElementById().style.display = "block";
   idproduct = document.getElementById("myBtn1").getAttribute("idproduct")
   init_code(idproduct, document.getElementById("modaldiv1"), json[idproduct].quantity, 1)
}
   
}
*/
var file

function productAddModalWindow(parentmodalWindow) {
    DIV_verticalBlockAddProduct = document.createElement("div")
    DIV_verticalBlockAddProduct.id = "verticalBlockAddProduct"
      DIV_Pic = document.createElement("div"); 
        IMGImagePreview = document.createElement("img")
        IMGImagePreview.className = "image-preview"
        IMGImagePreview.id = "imagePreview"
        IMGImagePreview.src = "https://placehold.co/300x300/png"
        IMGImagePreview.alt="Предпросмотр изображения"
        IMGImagePreview.width = "300"
        IMGImagePreview.height = "300"
    DIV_Pic.append(IMGImagePreview)

        INPUTFile = document.createElement("input") 
        INPUTFile.type = "file"
        INPUTFile.id = "fileInput"
        INPUTFile.accept = "image/*"
        INPUTFile.style.display = "none"
        INPUTFile.addEventListener('change', () => {
        fileInput = document.getElementById('fileInput')
        file = fileInput.files[0];
        console.log(file)
        if (file) {
        reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            imagePreview = document.getElementById('imagePreview');
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; // Показываем изображение
        };
        }
        });

        BUTTONUpload = document.createElement("button")
        BUTTONUpload.className = "upload-button" 
        BUTTONUpload.id = "uploadButton" 
        BUTTONUpload.textContent = "Выбрать изображение"
        BUTTONUpload.addEventListener('click', () => {
        fileInput = document.getElementById('fileInput')
        fileInput.click(); // Имитируем клик по скрытому input)
    });



    DIV_verticalBlockAddProduct.append(DIV_Pic, INPUTFile, BUTTONUpload)

    DIV_horizontalBlockAddProduct =  document.createElement("div");
    DIV_horizontalBlockAddProduct.id = "horizontalBlockAddProduct"
        DIV_productard1 = document.createElement("div");
        DIV_productard1.className = "product-card"
            LABELinput1 = document.createElement("label")
            LABELinput1.htmlFor  = "product-name"
            LABELinput1.textContent = "Название продукции:"
                DIV_noName1 = document.createElement("div")
                DIV_noName1.style.display = "flex"
                    INPUTProductName = document.createElement("input")
                    INPUTProductName.className = "input-field"
                    INPUTProductName.type = "text"
                    INPUTProductName.id = "product-name"
                    INPUTProductName.autocomplete = "off"
                    INPUTProductName.placeholder = "Введите название товара"
                    /*INPUTProductName.oninput = function() { this.value = this.value.replace(/[^a-zA-Zа-яА-Я ]/g, ''); } */
                DIV_noName1.append(INPUTProductName)
        DIV_productard1.append(LABELinput1, DIV_noName1)

        DIV_productard2 = document.createElement("div");
        DIV_productard2.className = "product-card"
            LABELinput2 = document.createElement("label")
            LABELinput2.setAttribute("for", "product-name")
            LABELinput2.textContent = "Кол-во производимое/покупаемое за раз:"
                DIV_noName2 = document.createElement("div")
                DIV_noName2.style.display = "flex"
                    INPUTProductQuantity = document.createElement("input")
                    INPUTProductQuantity.className = "input-field"
                    INPUTProductQuantity.type = "number"
                    INPUTProductQuantity.id = "product-quantity"
                    INPUTProductQuantity.placeholder = "Введите количество продукции"

                    Paragraph = document.createElement("p")
                    Paragraph.style.fontSize = "15px"
                    Paragraph.textContent = "шт"
                DIV_noName2.append(INPUTProductQuantity, Paragraph)    
        DIV_productard2.append(LABELinput2, DIV_noName2)

        BUTTONSave = document.createElement("button")
        BUTTONSave.style.backgroundColor = "green"
        BUTTONSave.textContent = "Сохранить"
        BUTTONSave.onclick = async function() { 
            mybutton01 =  document.getElementById("SaveButton1") 
        
            if (document.getElementById("product-name").value === "" || document.getElementById("product-quantity").value === "") { 
                alert("Заполните все поля!")
                return
            } 
            if (document.getElementById("imagePreview").src === "https://placehold.co/300x300/png") {
                alert("Выберите изображение для продукции!")
                return
            }
            

            var fd = new FormData();
            fd.append("image", file);
        
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://api.imageban.ru/v1");
            xhr.setRequestHeader('Authorization', 'TOKEN WYrTjQZQAng3xoxNHjHe');
            xhr.send(fd);
            xhr.onreadystatechange = function() {
 
            if (xhr.readyState === 4 && xhr.status === 200) {
                response = JSON.parse(xhr.responseText); // Получаем текст ответа
                link1 = response["data"]["link"]
                myobject1 = {}
                myobject1.id = json.length; 
                myobject1.name = document.getElementById("product-name").value;
                myobject1.quantity =  document.getElementById("product-quantity").value
                myobject1.recipe = null;
                myobject1.pic = link1;

                json.push(myobject1)
                setLocalStorage(basekey1, json)
                window.location.reload()
                 } 
            };
    
        }

            
    DIV_horizontalBlockAddProduct.append(DIV_productard1, DIV_productard2, BUTTONSave)
    workingZone = parentmodalWindow.querySelector("#workingzone" + parentmodalWindow.id)
    workingZone.style.display = "flex"
    workingZone.append(DIV_verticalBlockAddProduct, DIV_horizontalBlockAddProduct)
    return parentmodalWindow
            
}

function insertProductAddModalWindow(modalWindowID) { 
    modalWindow = createModalWindow(modalWindowID)   
    productadd = productAddModalWindow(modalWindow)
    document.body.append(modalWindow)
    modalWindow.style.display = "block"
}

