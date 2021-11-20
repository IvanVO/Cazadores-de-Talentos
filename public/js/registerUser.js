const $form = document.querySelector('#form');
$form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
});
$('form.ajax').on('submit', function(){
    
    let that = $(this),
        url = that.attr('action'),
        type = that.attr('method')
        data = {};
    that.find('[name]').each(function(index, value){
        let that = $(this),
            name = that.attr('name');
        value = that.val(); 
        
            data[name]=value;
            that.val('');
    });
    //console.log(data);
    $.ajax({
        url:url,
        type: type,
        data: data,//JSON.stringify(data),
        dataType: "application/json",
        success: function(res){
            console.log(res);
        }
    });

});


console.log('Hello World sice cliente controller ');