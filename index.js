//update profile
var profile = document.getElementById('profile')
var input_file = document.getElementById('input-file')
input_file.onchange = function(){
    profile.src = URL.createObjectURL(input_file.files[0]);
}
// var input_file1 = document.getElementById('input-file1')
// input_file1.onchange = function(){
//     profile.src = URL.createObjectURL(input_file1.files[0]);
// }
// function updateprofile(id){
//     document.querySelector("#"+id).addEventListener('change',function(e){
//         if(e.target.files.length == 0){
//             return;
//         }
//         let file =e.target.files[0];
//         let URL = URL.createObjectURL(file);
//         document.querySelector("#"+id+"-preview div").innerText = file.name;
//         document.querySelector("#"+id+"-preview img").src = URL;
//     })
// }
// updateprofile("input-file");
// updateprofile("input-file1");
//add more button
var box1 = document.querySelectorAll('.box1')
var btn = document.querySelector('.btn')
var currentitem = 0;
btn.addEventListener('click',addmorebtn)
function addmorebtn(){
    for(var i =currentitem; i <currentitem+1; i++){
        if(box1[i]){
            box1[i].style.display ='inline-block'
        }
    }
    currentitem +=1;
    if(currentitem>=box1.length){
        event.target.style.display ='none'
    }
}