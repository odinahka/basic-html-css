$("h1").css("color", "red");
$(document).keydown((event) => {
    const h1 = $("h1").text();
    if(event.key !== "Shift" || event.key !== "Backspace")
    $("h1").text(event.key)
})