$(document).ready(onReady);

function onReady() {
    $('#submitB').on('click', submitWolf);
    $.ajax({
        method: 'GET',
        url: '/names'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let name = response[i];
            $('#nameTableBody').append(`
                <tr>
                    <td>${name}</td>
                    
                   
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
        url: '/names',
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
                    <td>${name}</td>
        
                   
                </tr>
            `);
    }
})};