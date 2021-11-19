const $form = document.querySelector('#form');
$form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
});
var array = [];

$('form.ajax').on('submit',function () {
    let that = $(this)
    that.find('[name]').each(function(index, value){
        let that = $(this),
            name = that.attr('name');
        value = that.val(); 
        
            array[name]=value;
            that.val('');
    });
    console.log(array);
})

console.log("Estas usando: registration.js");