
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let a = document.getElementById('input').value;
            let result;
            switch (a) {
                case "1": {
                    result = "Western Digital",
                    document.getElementById("output").style.background = "brown";
                    break;
                }
                case "2": {
                    result = "3M Corporation"
                    document.getElementById("output").style.background = "black";
                    break;
                }
                case "3": {
                    result = "Maxell Corporation"
                    document.getElementById("output").style.background = "green";
                    break;
                }
                case "4": {
                    result = "Sony Corporation"
                    document.getElementById("output").style.background = "black";
                    break;
                }
                case "5": {
                    result = "Verbatim Corporation"
                    document.getElementById("output").style.background = "purple";
                    break;
                }
                default:{
                    result = "Please Write a Valid Input"
                    document.getElementById("output").style.background = "red";
                    break;
                }
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;
            document.getElementById("input").value = "";
        }
  