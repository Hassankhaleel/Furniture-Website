

// function deleteElement() {
//     var element = document.getElementById('wtsapp');

//     element.remove(`  <div class="wtsapp-div" id="wtsapp">
//         <div class="text">
//             <p>Chat to Quick Shopping</p>
//         </div>
//         <a href="https://wa.me/923122363230" target="_blank"> <i class="fa-brands fa-whatsapp"></i></a>

//     </div>`)
//     var cross = document.getElementById("cross").addEventListener("click", function () {
//         cross.remove(`<div class="cross" id="cross" onclick="deleteElement()">
//         <i class="fa-solid fa-xmark"></i>
//     </div>`)
//     })

// }
function deleteElement() {
    var wtsappDiv = document.getElementById("wtsapp");
    var crossDiv = document.getElementById("cross");

    if (wtsappDiv && crossDiv) {
        wtsappDiv.parentNode.removeChild(wtsappDiv);
        crossDiv.parentNode.removeChild(crossDiv);
    }
}

