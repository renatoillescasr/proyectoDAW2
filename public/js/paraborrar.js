// funcion para capturar el _id del registro a borrar

$(document).ready(function(){
  $('.delete-usuario').on('click',function(e) {
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/usuario/'+id,
      success: function(response){
        alert('se borrara el registro');
        window.location.href='/cargarUsuarios';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
