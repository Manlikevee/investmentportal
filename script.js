let activeprofile= []
let myprofilearray = []
const activeid = localStorage.getItem('activeuserid')
myprofilearray =  localStorage.getItem('profiles');

 


function showinvestmentslists() {
    const investmentlistmodal = document.getElementById('myoverlay')

    investmentlistmodal.classList.toggle('showlist')

}

function showpopup(){
    let status = 'false'
    if (myprofilearray){
        Ppofile = JSON.parse(myprofilearray);
        const activeprofile = Ppofile.find(detail => detail.userid == activeid );
        
        if (activeprofile) {
            status = activeprofile.Profile_updated
        }
    
    }
   

    



    const popup = `
    <div class="loading-over2" style="display: block;">
    <div class="popup">
        <p id="close2"></p>
        <br>
    <div class="secoact">
    <div class="logoac">
    <img src="img/upd.png" alt="" style="height: 100px; width: 100%; object-fit: contain;">
    </div>


    <div class="logomen"> Kindly Update Your Profile </div>


    <div class="logobod">

    You have not yet updated your profile. Please take the necessary steps to provide the required information.

    </div>
    <div class="logobtn">

                <a href="profileupdate.html" type="button"  class="arwbtn"> Proceed </a>
                <a href="profileupdate.html" type="button"  class="arwbtn"> Proceed </a>

    </div>
    </div>
    </div>
    </div>
    ` 
    if (status == 'false'){
        document.body.innerHTML += popup;

    } else{
        console.log(status)
    }
}
showpopup()


function custompopup(){
// coming soon
}