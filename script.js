// Input Elements
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const companyInput = document.getElementById("company");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const websiteInput = document.getElementById("website");
const linkedinInput = document.getElementById("linkedin");
const githubInput = document.getElementById("github");
const locationInput = document.getElementById("location");
const imageInput = document.getElementById("image");
const templateSelect = document.getElementById("template");

// Preview Elements
const previewName = document.getElementById("previewName");
const previewJob = document.getElementById("previewJob");
const previewCompany = document.getElementById("previewCompany");
const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");
const previewWebsite = document.getElementById("previewWebsite");
const previewLocation = document.getElementById("previewLocation");
const previewImage = document.getElementById("previewImage");
const previewLinkedIn = document.getElementById("previewLinkedIn");
const previewGithub = document.getElementById("previewGithub");

const card = document.getElementById("card");

// -----------------------
// Live Preview
// -----------------------

function updateCard() {

    previewName.textContent =
        nameInput.value || "Your Name";

    previewJob.textContent =
        jobInput.value || "Job Title";

    previewCompany.textContent =
        companyInput.value || "Company";

    previewEmail.textContent =
        emailInput.value || "email@example.com";

    previewPhone.textContent =
        phoneInput.value || "+91 XXXXX XXXXX";

    previewWebsite.textContent =
        websiteInput.value || "Website";

    previewLocation.textContent =
        locationInput.value || "Location";

    previewLinkedIn.href =
        linkedinInput.value || "#";

    previewGithub.href =
        githubInput.value || "#";
}



// -----------------------
// Image Upload
// -----------------------

imageInput.addEventListener("change",function(){

    const file=this.files[0];

    if(file){

        const reader=new FileReader();

        reader.onload=function(e){

            previewImage.src=e.target.result;

        }

        reader.readAsDataURL(file);

    }

});

// -----------------------
// Template Switch
// -----------------------

templateSelect.addEventListener("change",()=>{

    card.className="card "+templateSelect.value;

});

// -----------------------
// Generate Button
// -----------------------

document.getElementById("generateBtn")
.addEventListener("click",updateCard);

// -----------------------
// Download PNG
// -----------------------

document.getElementById("downloadPNG")
.addEventListener("click",()=>{

html2canvas(card).then(canvas=>{

const link=document.createElement("a");

link.download="business-card.png";

link.href=canvas.toDataURL("image/png");

link.click();

});

});

// -----------------------
// Download PDF
// -----------------------

document.getElementById("downloadPDF")
.addEventListener("click",()=>{

html2canvas(card).then(canvas=>{

const imgData=canvas.toDataURL("image/png");

const { jsPDF } = window.jspdf;

const pdf=new jsPDF("portrait","mm","a4");

const pageWidth=190;

const ratio=canvas.height/canvas.width;

const height=pageWidth*ratio;

pdf.addImage(
imgData,
"PNG",
10,
10,
pageWidth,
height
);

pdf.save("business-card.pdf");

});

});

// Load defaults
updateCard();