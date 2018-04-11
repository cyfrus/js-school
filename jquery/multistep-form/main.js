var data = {
  "Home or Condo": [
    { name: "Single Home or Condo(Valued up to $300K)", value: "46" },
    { name: "Single Home or Condo($300 to $500K)", value: "47" },
    { name: "Single Home or Condo($500K to $1 Million)", value: "48" },
    { name: "Single Home or Condo(Over $1 Million)", value: "49" }
  ],
  "Apartment Building": [
    { name: "Multi - Family(2 - 4 units)", value: "50" },
    { name: "Multi-Family(5 - 19 units)", value: "51" },
    { name: "Multi-Family(20 - 99 units)", value: "52" },
    { name: "Multi-Family(100 + units)", value: "69" }
  ],
  HOA: [
    { name: "Homeowners Association(2 - 49 units)", value: "71" },
    { name: "Homeowners Association(50 - 99 units)", value: "73" },
    { name: "Homeowners Association(100 + units)", value: "76" }
  ],
  COA: [
    { name: "Condominium Association(2 - 49 units)", value: "74" },
    { name: "Condominium Association(50 - 99 units)", value: "75" },
    { name: "Condominium Association(100 + units)", value: "77" }
  ],
  Commercial: [
    { name: "Retail(Up to 9, 999 sqft)", value: "57" },
    { name: "Retail(10,000 - 100,000 sqft)", value: "58" },
    { name: "Retail(100,000 + sqft)", value: "59" },
    { name: "Office(Up to 9,999 sqft)", value: "54" },
    { name: "Office(10,000 - 100,000 sqft)", value: "55" },
    { name: "Office(100,000 + sqft)", value: "56" },
    { name: "Warehouse/Distribution (Up to 100,000 sqft)", value: "63" },
    { name: "Warehouse/Distribution (100,000+ sqft)", value: "64" },
    { name: "Light Manufacturing(Up to 100, 000 sqft)", value: "61" },
    { name: "Light Manufacturing(100, 000 + sqft)", value: "62" },
    { name: "Parking Garage", value: "67" },
    { name: "Biotech/Mission-Critical", value: "70" }
  ],
  "Short-Term Stay": [
    { name: "Vacation(1 - 2 units)", value: "65" },
    { name: "Vacation(3 + units)", value: "66" }
  ],
  "Other Associations": [
    { name: "Other Associations(Hotel, Resort etc.)", value: "68" },
    { name: "Mobile Home Community", value: "78" }
  ]
};

$(document).ready(function() {
  var test = "test";
  for (var index in data) {
    var $value = $(
      "<option class='type_property_value'>" + index + "</option>"
    );
    $(".type_of_property").append($value);
  }
  var displayedIcon2 = false;
  $(".type_of_property").change(function() {
    if ($(".type_of_property").val() !== "Select property type") {
      populatePropertyValue($(".type_of_property").val());
      if (!displayedIcon2) {
        $(".second_container").removeClass("disabled");
        $(".icon2").show(250);
        $(".row_number2").addClass("active_row_number");
        displayedIcon2 = true;
      }
    } else {
      $(".second_container").addClass("disabled");
      $(".icon2, .icon3").hide(250);
      $(".row_number2, .row_number3").removeClass("active_row_number");
      $(".property_size option:not(:first-child").remove();
      displayedIcon2 = false;
    }
  });
  var displayedIcon3 = false;
  $(".property_size").change(function() {
    if ($(".property_size").val() !== "Select property size") {
      if (!displayedIcon3) {
        $(".icon3").show(250);
        $(".row_number3").addClass("active_row_number");
        $(".third_container").removeClass("disabled");
      }
      displayedIcon3 = true;
    } else {
      $(".third_container").addClass("disabled");
      $(".row_number3").removeClass("active_row_number");
      $(".icon3").hide(250);
      displayedIcon3 = false;
    }
  });

  $(".property_size, .type_of_property").change(buttonHandler);
  $(".zip_input").on("input", buttonHandler);

  function buttonHandler() {
    if (
      $(".property_size").val() !== "Select property size" &&
      $(".type_of_property").val() !== "Select property type" &&
      $(".zip_input").val().length >= 5
    ) {
      $(".main_button")
        .prop("disabled", false)
        .addClass("regular")
        .removeClass("disabled_button");
    } else {
      $(".main_button")
        .addClass("disabled_button")
        .removeClass("regular")
        .prop("disabled", true);
    }
  }

  function populatePropertyValue(key) {
    $(".property_size option:not(:first-child)").remove();
    data[key].forEach(element => {
      $(".property_size").append(
        "<option value=" + element.value + ">" + element.name + "</option>"
      );
    });
  }
});

(function($, window, document) {
  var step = 1;
  for (var index in data) {
    var $value = $(
      "<option class='type_property_value'>" + index + "</option>"
    );
    $(".type_of_property2").append($value);
  }
  $(".type_of_property2, .property_size2").change(buttonHandler);
  $(".zip_input2").on("input", buttonHandler);
  function buttonHandler() {
    console.log($(".property_size2").val() === "Select property size");
    if (
      ($(".type_of_property2").val() !== "Select property type" &&
        step === 1) ||
      ($(".property_size2").val() !== "Select property size" && step === 2) ||
      ($(".zip_input2").val().length >= 5 && step === 3)
    ) {
      $(".main_button2")
        .prop("disabled", false)
        .removeClass("main_button2_disabled")
        .addClass("main_button2_active");
    } else {
      $(".main_button2")
        .prop("disabled", true)
        .removeClass("main_button2_active")
        .addClass("main_button2_disabled");
    }
  }
  $(".main_button2").click(function() {
    if (step === 1) {
      $(".second_row")
        .show()
        .css("display", "flex");
      $(".first_row").hide();
      $(".line_1").animate({
        height: "4px",
        backgroundColor: "#eb825f"
      });
      $(".progress_circle2").animate({
        backgroundColor: "#eb825f",
        borderColor: "#e26c44"
      });
      populatePropertyValue($(".type_of_property2").val());

      $(".main_button2")
        .prop("disabled", true)
        .removeClass("main_button2_active")
        .addClass("main_button2_disabled");
      step = 2;
    } else if (step === 3) {
      $(".main_button2").prop("type", "submit");
    } else {
      $(".third_row")
        .show()
        .css("display", "flex");
      $(".second_row").hide();
      $(".main_button2")
        .prop("disabled", true)
        .removeClass("main_button2_active")
        .addClass("main_button2_disabled");
      $(".line_2").animate({
        height: "4px",
        backgroundColor: "#eb825f"
      });
      $(".progress_circle3").animate({
        backgroundColor: "#eb825f",
        borderColor: "#e26c44"
      });
      step = 3;
    }
  });

  function populatePropertyValue(key) {
    $(".property_size2 option:not(:first-child)").remove();
    data[key].forEach(element => {
      $(".property_size2").append(
        "<option value=" + element.value + ">" + element.name + "</option>"
      );
    });
  }
})(window.jQuery, window, document);
