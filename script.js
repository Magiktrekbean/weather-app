let name = prompt("Hi! What's your name?");
if (name) {
  if (name.toLowerCase() === "patrick") {
    alert("Hi! Snickerdoodle cupcake loverman!😘");
    document.getElementById("output").innerHTML = "I miss you Tuna🍥";
  } else if (name.toLowerCase() === "clyde") {
    alert(
      "Psalm 103:13 As a father has compassion on his children, so the Lord has compassion on those who fear him."
    );
    document.getElementById("output").innerHTML = "Hi Dad👨🏿 I love you💖!";
  } else {
    alert("Hi " + name + "! Welcome!");
    document.getElementById("output").innerHTML = "Thanks " + name + "❣";
  }
}
