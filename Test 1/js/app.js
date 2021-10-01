var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard();
})

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,employee){
        let strHTML = '<div class="text-center">';
        strHTML += '<div class="mt-3 mb-3">';
        strHTML += '<img class="mb-3" src="images/profile.jpg" alt="Profile" style="margin:auto; max-width:100%;">';
        strHTML += '</div>';
        strHTML += '<div class="mt-4">';
        strHTML += '<h3 class="text-info">' + employee.FirstName + ' ' + employee.LastName + '</h3>';
        strHTML += '</div>';
        strHTML += '<div>';
        strHTML += '<h4>Code Name: ' + employee.CodeName + '</h4>';
        strHTML += '</div>';
        strHTML += '<div>';
        strHTML += '<h4>Billing Agency: ' + employee.Agency + '</h4>';
        strHTML += '<h4>Position: ' + employee.Job + '</h4>';
        strHTML += '<h4>Hire Date: ' + employee.HireDate + '</h4>';
        strHTML += '</div>';
        strHTML += '<div class="text-center mb-3">';
        strHTML += '<div class="btn btn-primary btn-block btnToggleContact">Toggle Contact Details</button>';
        $('#divProfileCard').append(strHTML);
    })
}

var arrDetails;
$.getJSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrDetails = result;
    buildDetailsCard();
})

$(document).on('click','.btnToggleContact',function(){
    $('#divContactDetails').slideToggle();
})

function buildDetailsCard(){
    $.each(arrDetails,function(i,employee){
        let strHTML = '<div class="text-left mt-3">'
        strHTML += '<p class="mt-3">Email: <a href="mailto:' + employee.Email + '" class="aEmail">' + employee.Email + '</a></p>';
        strHTML += '<p>Phone: <a href="tel' + employee.Phone + '" class="aPhone">' + employee.Phone + '</a></p>';
        strHTML += '<p>Street Address: ' + employee.Street1 + '</p>';
        strHTML += '<p>City: ' + employee.City + '</p>';
        strHTML += '<p>State: ' + employee.State + '</p>';
        strHTML += '<p>Zip Code: ' + employee.ZIP + '</p>';
        strHTML += '<p>Emergency Contact: ' + employee.Econtact + '</p>';
        strHTML += '<p>Phone: <a href="tel:' + employee.EContactNumber + '" class="aPhone">' + employee.EContactNumber + '</a></p>';
        strHTML += '</div>'
        $('#divContactDetails').append(strHTML);
    })
}

var arrTable
$.getJSON("https://www.swollenhippo.com/getPayStubsByAPIKey.php?APIKey=DuffManSays,Phrasing!",function(result){
    console.log(result);
    arrTable = result;
    buildTable();
})

function buildTable(){
    $.each(arrTable,function(i,employee){
        $('#tblPayStubs tbody').append('<tr><td>' + employee.Month + '</td><td>' + employee.Year + '</td><td>' + employee.Sales + '</td><td>' + employee.Hours + '</td><td>' + employee.Rate + '</td><td>' + employee.CommissionRate + '</td><td>' + ((employee.Hours * employee.Rate) + ( employee.CommissionRate * employee.Sales)) + '</td></tr>');
    })
    $('#tblPayStubs').DataTable();
}