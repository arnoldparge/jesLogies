
function showAllCust(myObj) {

    var i = 0;

    for (i = 0 ; i < myObj.length ; i++) {

        document.getElementsByClassName("_body")[0].innerHTML += '<div class="_card">' +
            '<div class="_cardHead">' + myObj[i].cust_name + '</div>' +
            '<div class="_cardContainer">' +
                'Total Cost: <b>' + myObj[i].tot_cost + '</b>' +
                '<br />' +
                'App Name: ' + myObj[i].app_name + '' +
                '<br />' +
                'App Type: ' + myObj[i].app_type + '' +
            '</div>' +
            '<div class="_cardFoot">' +
                '<div class="row">' +
                    '<div class="col-xs-3">' +
                        'Edit' +
                    '</div>' +
                    '<div class="col-xs-6">' +
                        'View Instlmnts' +
                    '</div>' +
                    '<div class="col-xs-3">' +
                        'Del' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<br />';
    }

}