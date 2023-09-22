document.addEventListener("DOMContentLoaded", async () => {
    const adviceContent = document.querySelector(".advice__content");
    const button = document.querySelector(".advice__button");
    let data;

    showAdvice();

    button.addEventListener("click", showAdvice);

    async function request(){
        const url = "https://api.adviceslip.com/advice";
        const response = await fetch(url);
        const data = await response.json();
    
        return data;
    }
    
    async function showAdvice(){
        showSpinner();

        data = await request();

        cleanAdviceContent();

        const adviceNumberEl = document.createElement("p");
        adviceNumberEl.classList.add("advice__number");
        adviceNumberEl.textContent = `ADVICE #${data.slip.id}`;

        const adviceTextEl = document.createElement("h1");
        adviceTextEl.classList.add("advice__text");
        adviceTextEl.textContent = `“${data.slip.advice}”`;

        adviceContent.appendChild(adviceNumberEl);
        adviceContent.appendChild(adviceTextEl);
    }

    function cleanAdviceContent(){
        while(adviceContent.firstChild)
            adviceContent.removeChild(adviceContent.firstChild);
    }

    function showSpinner(){
        cleanAdviceContent();

        adviceContent.innerHTML = `
            <div class="sk-fading-circle">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                <div class="sk-circle8 sk-circle"></div>
                <div class="sk-circle9 sk-circle"></div>
                <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
            </div> 
        `;
    }
});