$(document).ready(onReady);

function onReady() {
    $('#submitB').on('click', submitPlayer);
    $.ajax({
        method: 'GET',
        url: '/names'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let name = response[i];
            $('#nameTableBody').append(`
                <tr>
                    <td>${name.name}</td>
                    
                   
                </tr>
            `);
        }
    });

}

function submitPlayer(){
   let newPlayer={ name: $('#val1').val()}
 
 
 
console.log(newPlayer)

    $.ajax({
        method: 'POST',
        url: '/name',
        data: newPlayer
           
    }).then(function () {
       $('#nameTableBody').empty()
       refreshPlayers()
    })}
function refreshPlayers(){
    $.ajax({
    method: 'GET',
    url: '/names'
}).then(function (response) {
    for (let i = 0; i < response.length; i++) {
        let name = response[i];
        $('#nameTableBody').append(`
                <tr>
                    <td>${name.name}</td>
        
                   
                </tr>
            `);
    }
})};