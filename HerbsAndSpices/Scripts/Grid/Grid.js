
function RenderGrid(allData, selector) {
    var stringToAdd = $(selector).html();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    

    allData.forEach(function (data) {
        stringToAdd += ("<tr class='hasStock_" + (data.UnitsInStock * 1 > 0 ? "true" : "false") + "'>" +
            "<td class='id '>" + data.ProductID +
            '<td class="name">' + data.ProductName + '</td>' +
            '<td class="price">' + data.UnitPrice + '</td>' +
            '<td class="stock">' +   data.UnitsInStock + '</td>' +
            '<td class="date">' + data.DeliveryOn.toLocaleDateString("en-US", options)  +"<tr>"
        )
    })
    $('#data').html(stringToAdd)
}
