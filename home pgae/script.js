document.addEventListener('DOMContentLoaded', function () {
    let modalButtons = document.querySelectorAll('.m-btn');
    let modalBody = document.querySelector('.modal-wrapper');
    let modalHeader = document.querySelector('.m-title');
    let modalContent = document.querySelector('.m-content');
    let closebtn = document.querySelector('.close-m-btn');
    let virusLogos = document.querySelectorAll('.virus-logo');
    let contact = document.querySelector('.contact');
    let about = document.querySelector('.about');
    let home = document.querySelector('.home');
    let covidBtn = document.querySelector('.covid-btn');
    let dengueBtn = document.querySelector('.dengue-btn');
    let coldBtn = document.querySelector('.cold-btn');
    let chickenBtn = document.querySelector('.chicken-btn');
    let polioBtn = document.querySelector('.polio-btn');
    let menuBar = document.querySelector('.my-i');
    let dropDown = document.querySelector('.drop-down');
    let getStartbtn = document.querySelector('.get-started');
    let loader = document.querySelector('.loader');



    async function getStartbtnClick() {
        getStartbtn.addEventListener('click', function () {
            window.location.href = 'home.html';
        });
    };
    getStartbtnClick();

    async function contactBtn() {
        contact.addEventListener('click', function () {
            window.location.href = 'contact-us.html';
        });
    };
    contactBtn();
    async function aboutBtn() {
        about.addEventListener('click', function () {
            window.location.href = 'about-us.html';
        });
    };
    aboutBtn();

    async function homeBtn() {
        home.addEventListener('click', function () {
            window.location.href = 'home.html';
        });
    };
    homeBtn();

    async function menubars() {
        let state = "active";
        menuBar.addEventListener('click', function () {
            if (state === "active") {
                dropDown.classList.add('drop-down-active');
                state = "non-active";
            } else {
                dropDown.classList.remove('drop-down-active');
                state = "active";
            };
        });
    };
    menubars();


    async function covidBtnClick() {
        covidBtn.addEventListener('click', function () {
            window.location.href = 'covid.html';
        });
    };
    covidBtnClick();
    async function dengueBtnClick() {
        dengueBtn.addEventListener('click', function () {
            window.location.href = 'dengue.html';
        });
    };
    dengueBtnClick();
    async function coldBtnClick() {
        coldBtn.addEventListener('click', function () {
            window.location.href = 'cold.html';
        });
    };
    coldBtnClick();
    async function chickenBtnClick() {
        chickenBtn.addEventListener('click', function () {
            window.location.href = 'chicken-pox.html';
        });
    };
    chickenBtnClick();
    async function polioBtnClick() {
        polioBtn.addEventListener('click', function () {
            window.location.href = 'polio.html';
        });
    };
    polioBtnClick();




    async function modals() {
        virusLogos.forEach((virusLogo) => {
            let logoType = virusLogo.getAttribute('data-virus');
            virusLogo.addEventListener('click', () => {
                modalBody.classList.add('active');
                modals(logoType);
            })
        });

        modalButtons.forEach(function (modalButton) {
            let virusType = modalButton.getAttribute('data-virus');
            modalButton.addEventListener('click', function () {
                modalBody.classList.add('active');
                console.log('button clicked');
                modals(virusType);
            });
        });

        function modals(virusType, logoType) {
            if (virusType === 'covid' || logoType === 'covid') {
                modalHeader.textContent = 'Precautions of (COVID-19)';
                modalContent.innerHTML = '<ul><li class="chicken-li"><span class="chicken-span">Get vaccinated and boosted. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Isolate if you test positive. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Consider wearing a mask when levels of COVID-19 infections are higher. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Get tested and stay home if you are sick. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Get tested if required by your workplace. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Wear a mask to protect the vulnerable. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Stay at home as much you can & isolate yourself atleast 5 days. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Stay hydrated. ...</span></li></ul>';
            } else if (virusType === 'dengue' || logoType === 'dengue') {
                modalHeader.textContent = 'Precautions of DENGUE VIRUS';
                modalContent.innerHTML = '<ul><li class="chicken-li"><span class="chicken-span">Reduce Mosquito Habitat: ...</span></li><br><li class="chicken-li"><span class="chicken-span">Stay in well-screened houses: ...</span></li><br><li class="chicken-li"><span class="chicken-span">Use Mosquito Repellents: ...</span></li><br><li class="chicken-li"><span class="chicken-span">Wear Protective Clothing: ...</span></li><br><li class="chicken-li"><span class="chicken-span">Sleep Under Mosquito-net: ...</span></li><br><li class="chicken-li"><span class="chicken-span">Do not let Water Stagnate Anywhere. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Keep Your House Airy and Well-Lit. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Time Your Outings...</span></li><br><li class="chicken-li"><span class="chicken-span">Eat healthy and light..</span></li><br><li class="chicken-li"><span class="chicken-span">Stay hydrated....</span></li><br><li class="chicken-li"><span class="chicken-span">Keep yourself cover with the clothes..</span></li><br><li class="chicken-li"><span class="chicken-span">Use mask....</span></li><br><li class="chicken-li"><span class="chicken-span">Say away from everyone.....</span></li></ul>';
            } else if (virusType === 'cold' || logoType === 'cold') {
                modalHeader.textContent = 'Precautions of COLD(The Flue).';
                modalContent.innerHTML = '<ul><li class="chicken-li"><span class="chicken-span">Avoid close contact. Avoid close contact with people who are sick. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Stay home when you are sick. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Cover your mouth and nose. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Clean your hands. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Avoid touching your eyes, nose or mouth. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Practice other good health habits. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Drink plenty of fluids. Water, juice, clear broth or warm lemon water are good choices. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Sip warm liquids. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Rest. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Adjust your rooms temperature and humidity. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Use a saltwater gargle. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Try other throat soothers. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Try saline nasal drops or sprays. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Use a suction bulb for younger children ...</span></li></ul>';
            } else if (virusType === 'chicken-pox' || logoType === 'chicken-pox') {
                modalHeader.textContent = 'precautions of CHICKEN-POX';
                modalContent.innerHTML = '<ul><li class="chicken-li"><span class="chicken-span">A cool bath with added baking soda, aluminum acetate or uncooked oatmeal. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Calamine lotion dabbed on the itchy spots. ...</span></li><br><li class="chicken-li"><span class="chicken-span">A soft, bland diet if chickenpox sores form in the mouth. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Antihistamines such as diphenhydramine (Benadryl) for itching. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Acetaminophen (Tylenol) for a mild fever. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Use Acetaminophen (Tylenol) for Pain and Fever. If you or your child has a high fever or achiness caused by chickenpox, reach for the Tylenol. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Do not Scratch That Itch. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Keep Your Cool. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Stay Hydrated. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Prescription Medications. ...</span></li></ul>';
            } else if (virusType === 'polio' || logoType === 'polio') {
                modalHeader.textContent = 'Precautions of POLIO VIRUS.';
                modalContent.innerHTML = '<ul><li class="chicken-li"><span class="chicken-span">Immunity (protection) against polio in the population through vaccination. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Good hand hygiene and wash hands often with soap and water. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Do not use alcohol based soap or sanitizers. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Do not leave sessions of vaccinations. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Taking care of your diet is must. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Add milk to your rutine for fast recovery. ...</span></li><br><li class="chicken-li"><span class="chicken-span">Excersie daily. ...</span></li></ul>';
            }
        };


        closebtn.addEventListener('click', () => {
            modalBody.classList.remove('active');
        });
    };
    modals();


});
