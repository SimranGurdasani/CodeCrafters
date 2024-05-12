// let date= document.getElementById('date')
// let time= document.getElementById('time')



// function append(){
//     localStorage.getItem("name")
//     localStorage.getItem("experience")
//     localStorage.getItem("date")
//     localStorage.getItem("time")
// }

// window.onload=append


function append() {
            // Retrieve data from localStorage
            var name = localStorage.getItem("name");
            var experience = localStorage.getItem("experience");
            var date = localStorage.getItem("date");
            var time = localStorage.getItem("time");

            // Append data to the table
            var newRow = document.createElement('tr');

            var nameCell = document.createElement('td');
            nameCell.textContent = name;
            newRow.appendChild(nameCell);

            var locationCell = document.createElement('td');
            locationCell.textContent = experience; 
            newRow.appendChild(locationCell);

            var dateCell = document.createElement('td');
            dateCell.textContent = date;
            newRow.appendChild(dateCell);

            var timeCell = document.createElement('td');
            timeCell.textContent = time;
            newRow.appendChild(timeCell);

            document.getElementById('book-body').appendChild(newRow);
        }

        window.onload = append;