const dialogues = [
    "Pracownik: Dzień dobry! Dziękuję za kontakt z ProgrameX, gdzie specjalizujemy się w rozwiązaniach bazodanowych. Jak mogę pomóc?",
    "Klient: Cześć, nazywam się Elon Mysk. Szukam kogoś, kto mógłby zaprojektować i wdrożyć dla nas bazę danych MySQL. Czy moglibyście mi w tym pomóc?",
    // Dodaj resztę dialogów zgodnie z Twoim przykładem
    "Pracownik: Świetnie, zarezerwowałem nasze spotkanie na jutro o godzinie 5:50. Czy mogę prosić o Pana/Pani adres e-mail, aby wysłać potwierdzenie spotkania i wstępne materiały do przejrzenia?",
    "Klient: Oczywiście, mój adres to ElonMysk618@gmail.com.",
    "Pracownik: Doskonale, wyślę wszystkie informacje niebawem. Czekamy na spotkanie i dziękuję za zainteresowanie naszymi usługami. Do zobaczenia!",
    "Klient: Dziękuję za pomoc. Do zobaczenia."
];
let currentStep = 0;

const dialogueText = document.getElementById("dialogueText");
const prevDialogue = document.getElementById("prevDialogue");
const nextDialogue = document.getElementById("nextDialogue");

const updateDialogue = () => {
    dialogueText.innerText = dialogues[currentStep];
    prevDialogue.disabled = currentStep === 0;
    nextDialogue.disabled = currentStep === dialogues.length - 1;
};

prevDialogue.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateDialogue();
    }
});

nextDialogue.addEventListener("click", () => {
    if (currentStep < dialogues.length - 1) {
        currentStep++;
        updateDialogue();
    }
});

// Inicjalizacja dialogu
updateDialogue();
    