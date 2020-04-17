function hideNotes() {

    let table = document.getElementById("taskTable");

    for (let i = 1; i < table.rows.length; i++) {

        let taskID = i

        let hit = document.getElementById('icon' + taskID)

        if (hit.getAttribute("hit") === "1") {

            document.querySelectorAll('#myDiv' + taskID).forEach(function(a) {

                a.remove()

            })

            hit.setAttribute('hit', 0)

            hit.innerHTML = '+'

        }

    }

}



function sortTable(n) {

    hideNotes()

    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    table = document.getElementById("taskTable");

    switching = true;



    dir = "asc";


    while (switching) {



        switching = false;

        rows = table.rows;



        for (i = 1; i < (rows.length - 1); i++) {


            shouldSwitch = false;



            x = rows[i].getElementsByTagName("TD")[n];

            y = rows[i + 1].getElementsByTagName("TD")[n];



            if (dir == "asc") {

                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {



                    shouldSwitch = true;

                    break;

                }

            } else if (dir == "desc") {

                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {


                    shouldSwitch = true;

                    break;

                }

            }

        }

        if (shouldSwitch) {


            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

            switching = true;



            switchcount++;

        } else {


            if (switchcount == 0 && dir == "asc") {

                dir = "desc";

                switching = true;

            }

        }

    }

}







function sortPriority(n) {

    hideNotes()

    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    table = document.getElementById("taskTable");

    switching = true;



    dir = "asc";



    while (switching) {



        switching = false;

        rows = table.rows;


        for (i = 1; i < (rows.length - 1); i++) {


            shouldSwitch = false;


            x = rows[i].getElementsByTagName("TD")[n];

            y = rows[i + 1].getElementsByTagName("TD")[n];


            if (dir == "asc") {

                if (x.innerHTML.toLowerCase() === 'high') {

                    if (y.innerHTML.toLowerCase() !== 'high') {

                        shouldSwitch = true;

                        break

                    }

                } else if (x.innerHTML.toLowerCase() === 'medium') {

                    if (y.innerHTML.toLowerCase() === 'low') {

                        shouldSwitch = true;

                        break

                    }

                }

            } else if (dir == "desc") {

                if (x.innerHTML.toLowerCase() === 'low') {

                    if (y.innerHTML.toLowerCase() !== 'low') {

                        shouldSwitch = true;

                        break

                    }

                } else if (x.innerHTML.toLowerCase() === 'medium') {

                    if (y.innerHTML.toLowerCase() === 'high') {

                        shouldSwitch = true;

                        break

                    }

                }

            }

        }

        if (shouldSwitch) {


            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

            switching = true;



            switchcount++;

        } else {

            if (switchcount == 0 && dir == "asc") {

                dir = "desc";

                switching = true;

            }

        }

    }
}