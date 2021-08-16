
function RenderCards(allData) {
    var stringToAdd = $('#cardsContainer').html();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    

    allData.forEach(function (data) {
        stringToAdd += ("<div class='cardPadding floating-card col-sm-4'><card class='card container border-card col-sm-12 cardPadding hasStock_" + (data.UnitsInStock * 1 > 0 ? "true" : "false") + "'>" +
            '<h5 class="name">' + data.ProductName + '</h5>' +
            '<div class="row"><div class="price col-sm-5">' + formatter.format(data.UnitPrice) + '</div>' +
            '<div class="stock col-sm-5"> In stock: ' + data.UnitsInStock + '</div></div>' +
            '<p class="date"> Delivery date: ' + data.DeliveryOn.toLocaleDateString("en-US", options)  +"</p></card></div>"
        )
    })
    $('#cardsContainer').html(stringToAdd)
}
