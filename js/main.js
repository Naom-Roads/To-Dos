function newItem() {

    // Adds a new item to the list //

    let listItem = $('<li></li>');
    let inputValue = $('#input').val();
    listItem.append(inputValue);

    if (inputValue === '') {
        alert('You must write something');
    } else {
        $('#list').append(listItem);
    }

    // // Crossing out the items on the list // 

    function crossOut() {
        listItem.toggleClass('strike');
    }

    listItem.on('dblclick', crossOut);

    // Delete Button //
    let crossOutButton = $('<button class="crossOutButton"></button>');
    crossOutButton.append("X");
    listItem.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    // Delete Class (DISPLAY: NONE)

    function deleteListItem() {
        listItem.addClass("delete");
    }

    // Sorting // 

    $('#list').sortable(newItem, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });

}