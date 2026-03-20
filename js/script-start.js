$(document).ready(function () {

  // When a filter button is clicked...
  $(".filter-btn").click(function () {

    // Save the filter value from the clicked button
    var selectedFilter = $(this).attr("data-filter");

    // Update the active button style
    // $(".filter-btn").removeClass("active");
    // $(this).addClass("active");

    // If the user clicked "All", show every card
    if (selectedFilter === "all") {
      // $(".card").hide().fadeIn(250);
    } else {
      // Hide all cards first
      // $(".card").hide();

      // Show only the cards that match the selected category
      // $("." + selectedFilter).fadeIn(250);
    }

  });

});
