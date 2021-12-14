    var now = new Date().getMonth();
    var x = document.getElementsByClassName("snowflake");
    now = now + 1;
    letGo();

    function letGo() {
        if (now == 12 || now == 11 || now == 1) {
            document.getElementById("winter1").style.display = 'block';
            document.getElementById("winter").style.display = 'block';
            for (var i = 0; i < x.length; i++) {
                x[i].innerHTML = " ❆";
            }
        } else if (now == 7 || now == 5 || now == 6) {

            document.getElementById("summer").style.display = 'block';
            document.getElementById("summer1").style.display = 'block';
            for (var i = 0; i < x.length; i++) {
                x[i].innerHTML = "🍀";
            }

        } else if (now == 7 || now == 9 || now == 8) {
            document.getElementById("autumn1").style.display = 'block';
            document.getElementById("autumn").style.display = 'block';
            for (var i = 0; i < x.length; i++) {
                x[i].innerHTML = "🍁";
            }
        } else if (now == 2 || now == 3 || now == 4) {
            document.getElementById("tet").style.display = 'block';
            document.getElementById("tet1").style.display = 'block';
            for (var i = 0; i < x.length; i++) {
                x[i].innerHTML = "🌺";
            }
        }
    }

    function chuyen1() {
        block();
        now = 3;
        letGo();

    }

    function chuyen2() {
        block();
        now = 7;
        letGo();

    }

    function chuyen3() {
        block();
        now = 9;
        letGo();
    }

    function chuyen4() {
        block();
        now = 11;
        letGo();

    }

    function hamDropdown() {
        document.querySelector(".noidung_dropdown").classList.toggle("hienThi");
    }

    function block() {
        document.getElementById("winter1").style.display = 'none';
        document.getElementById("winter").style.display = 'none';
        document.getElementById("summer").style.display = 'none';
        document.getElementById("summer1").style.display = 'none';
        document.getElementById("tet").style.display = 'none';
        document.getElementById("tet1").style.display = 'none';
        document.getElementById("autumn").style.display = 'none';
        document.getElementById("autumn1").style.display = 'none';
    }

    function myFunction() {
            var copText = document.getElementById("idbank");
            var input = document.createElement("INPUT");
            document.body.appendChild(input);
            input.value = copText.innerHTML;
            input.select();
            input.setSelectionRange(0, 99999);
            document.execCommand("copy");
            document.body.removeChild(input);

            document.getElementById("copy1").style.display = 'block';
            setTimeout(function() {
                document.getElementById("copy1").style.display = 'none';;
            }, 500);
        }
        // function ss(){
        // var x = document.getElementsByClassName("snowflake");
        // // var i;
        // for (var i = 0; i < x.length; i++) {
        //   x[i].innerHTML = "🌺";
        // }
        // }