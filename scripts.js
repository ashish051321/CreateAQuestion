document.addEventListener("DOMContentLoaded", function () {

    var myoptions = [];

    window.addOption = function addOption() {
        var optionText = prompt("Please provide the text that will appear as an option");
        if (optionText != null) {
            newopt = document.querySelector("p.dummyoption").cloneNode(true);
            newopt.classList.remove("dummyoption");
            newopt.querySelector("span:nth-child(1)").innerHTML = optionText;
            // alert(newopt.outerHTML);
            document.querySelector("div.choices").insertBefore(newopt, document.querySelector("p.dummyoption"));
            myoptions.push(optionText);
        }
    }
    console.log(this);

    window.removeOption = function removeOption(evt) {
        evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
        myoptions.splice(myoptions.indexOf(evt.target.parentNode.querySelector("span").textContent), 1);
    }


    var database = firebase.database();

    window.submitForm = function submitForm() {
        var qtype = document.querySelector("select").value;
        var dbObj = {};
        dbObj.qtype = qtype;
        dbObj.question = document.querySelector("textarea").value;
        dbObj.options = myoptions;
        l(dbObj);
    }

    function l() {
        console.log(arguments[0]);
    }

    window.handleScroll = function handleScroll() {
        console.log("scroll event detected");//onscroll works !
        // l(document.querySelector('.mainContainer').clientHeight);
        // l(document.querySelector('.mainContainer').scrollHeight);
        var currentScrollPosition = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        l('Current Scroll Position: '+currentScrollPosition);
        l('Total height of document: '+ getDocHeight());
        l("Total height of doc using universal function: "+ getDocHeight());
    }


    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    window.scrolled = function scrolled()
    {
        l("MainContainer Height: "+ document.querySelector(".mainContainer").clientHeight);
        l("Document Height: "+document.documentElement.clientHeight);
        l("ScrollTop position: "+window.scrollY);
        l("Total height of doc using universal function: "+ getDocHeight());
    }

});
