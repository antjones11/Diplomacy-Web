$(document).ready(function() {

//dev parameters
$('#name').val(' ');

  var navListItems = $('div.setup-panel div a'),
    allWells = $('.setup-content'),
    allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function(e) {
    e.preventDefault();
    var $target = $($(this).attr('href')),
      $item = $(this);

    if (!$item.hasClass('disabled')) {
      navListItems.removeClass('btn-success').addClass('btn-default');
      $item.addClass('btn-success');
      allWells.hide();
      $target.show();
      $target.find('input:eq(0)').focus();
    }
  });

  allNextBtn.click(function() {
    var curStep = $(this).closest(".setup-content"),
      curStepBtn = curStep.attr("id"),
      nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
      curInputs = curStep.find("input[type='text'],input[type='url']"),
      isValid = true;

    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
      if (!curInputs[i].validity.valid) {
        isValid = false;
        $(curInputs[i]).closest(".form-group").addClass("has-error");
      }
    }

    if (isValid)
      nextStepWizard.removeAttr('disabled').trigger('click');
    }
  );

  $('div.setup-panel div a.btn-success').trigger('click');

  $('#ddGovtType').change(function() {
    console.log('wat');
    var txtResult;
    switch ($("#ddGovtType").val()) {
      case "Anarchy" : txtResult = "A complete lack of government that usually results in a state of lawlessness and disorder.";
        break;
      case "Capitalist" : txtResult = "A government that invests capital in a business (especially a large business).";
        break;
      case "Communist" : txtResult = "A theoretical system of social organization and a political movement based on common ownership of the means of production. As a political movement, communism seeks to establish a classless society.";
        break;
      case "Democracy" : txtResult = "A form of government where all the state's decisions are exercised directly or indirectly by a majority of its citizenry through a fair elective process.";
        break;
      case "Dictatorship" : txtResult = "Government by a single person or group of people who are in no way held responsible to the general population. Their discretion in using the powers and resources of the state is unrestrained by any fixed legal or constitutional rules. ";
        break;
      case "Federal Government" : txtResult = "A government with strong central powers and usually comprised of a system of government where there is a division of legislation, executive and judicial power between two main levels of governments.";
        break;
      case "Monarchy" : txtResult = "Form of government in which political power belongs largely to one ruler, generally called a king or queen, who receives his or her position by claim of divine or inherited right.";
        break;
      case "Republic" : txtResult = "A form of government whose head of state is not a monarch but instead is led by people who do not base their political power on any principle beyond the control of the people living in that state or country.";
        break;
      case "Revolutionary Government" : txtResult = "A government that is formed on radical and revolutionary governing ideals.";
        break;
      case "Totalitarian State" : txtResult = "A form of government that exercises massive, direct control over virtually all the activities of its subjects.";
        break;
      case "Transitional" : txtResult = "A transitional government is a temporary ruling organization usually put into place pending the establishment of a permanent government.";
        break;
      default:
        txtResult = "";
    }
    $("#lblGovtTypeExplanation").html(txtResult);
  });

});
