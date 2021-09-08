$('#btnTest').click(function() {
    const decTaxRate = .0925;
    let decHours = $('#txtHours').val();
    let decRate = $('#txtPayRate').val();
    console.log(decHours * decRate);
});
$('#txtPayRate').change(function() {
    if($('#cboEmployeeType').val() == 'FULL'){
        $('#divHours').slideup();
        //$('divHours').css('display','none');
    }else {
        $('divHours').slideDown();
    }
})                                                            