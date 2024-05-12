
    function redirectToAddServiceProvider(name, experience, flexibility) {
       
       localStorage.setItem("name", name);
       localStorage.setItem("experience", experience);
       localStorage.setItem("flexibility", flexibility);


        
        var url = `/AddServiceProvider/addservice.html`;

        
        window.location.href = url;
       
    }

     
