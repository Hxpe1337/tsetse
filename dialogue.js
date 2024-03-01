const dialogues = [
  '<strong>Pracownik:</strong> <i class="fas fa-user-tie"></i> Dzień dobry! Dziękuję za kontakt z ProgrameX, gdzie specjalizujemy się w rozwiązaniach bazodanowych. Jak mogę pomóc?',
  '<strong>Klient:</strong> <i class="fas fa-user"></i> Cześć, nazywam się Elon Mysk. Szukam kogoś, kto mógłby zaprojektować i wdrożyć dla nas bazę danych MySQL. Czy moglibyście mi w tym pomóc?',
  '<strong>Pracownik:</strong> <i class="fas fa-user-tie"></i> Oczywiście, Elon Mysk. Mamy szerokie doświadczenie w projektowaniu i implementacji baz danych MySQL dla różnych branż. Czy mógłby Pan/Pani podzielić się więcej szczegółami na temat swoich potrzeb?',
  '<strong>Klient:</strong> <i class="fas fa-user"></i> Tak, potrzebujemy bazy danych, która poradzi sobie z dużą ilością danych klientów i transakcji. Ważne jest dla nas, aby była ona wydajna i bezpieczna.',
  '<strong>Pracownik:</strong> <i class="fas fa-user-tie"></i> Rozumiem, bezpieczeństwo i wydajność są kluczowe. Nasze rozwiązania bazodanowe MySQL są projektowane z myślą o optymalizacji wydajności i zabezpieczeniach na najwyższym poziomie. Możemy zapewnić szyfrowanie danych w spoczynku i w transmisji, a także zaimplementować zaawansowane procedury backupu i odzyskiwania danych.',
  '<strong>Klient:</strong> <i class="fas fa-user"></i> Brzmi dobrze. A jak wygląda kwestia wsparcia technicznego?',
  '<strong>Pracownik:</strong> <i class="fas fa-user-tie"></i> Oferujemy wsparcie techniczne 24/7 dla wszystkich naszych klientów. Nasz zespół ekspertów jest zawsze gotowy, aby pomóc w rozwiązaniu każdego problemu czy też dostosowaniu systemu do zmieniających się potrzeb biznesowych.',
  '<strong>Klient:</strong> <i class="fas fa-user"></i> To uspokajające. Jakie są koszty takiej usługi?',
  '<strong>Pracownik:</strong> <i class="fas fa-user-tie"></i> Koszt zależy od skali projektu i specyficznych wymagań, ale mogę zapewnić, że oferujemy konkurencyjne ceny. Chętnie przygotuję dla Pana/Pani szczegółową wycenę po lepszym poznaniu wymagań projektu.',
  '<strong>Klient:</strong> <i class="fas fa-user"></i> Czy możemy umówić się na spotkanie, aby omówić to bardziej szczegółowo?',
  '<strong>Pracownik:</strong> <i class="fas fa-user-tie"></i> Z pewnością. Czy pasuje Panu/Pani jutro o 5:50?',
  '<strong>Klient:</strong> <i class="fas fa-user"></i> Tak, to mi pasuje.',
  '<strong>Pracownik:</strong> <i class="fas fa-user-tie"></i> Świetnie, zarezerwowałem nasze spotkanie na jutro o godzinie 5:50. Czy mogę prosić o Pana/Pani adres e-mail, aby wysłać potwierdzenie spotkania i wstępne materiały do przejrzenia?',
  '<strong>Klient:</strong> <i class="fas fa-user"></i> Oczywiście, mój adres to ElonMysk618@gmail.com.',
  '<strong>Pracownik:</strong> <i class="fas fa-user-tie"></i> Doskonale, wyślę wszystkie informacje niebawem. Czekamy na spotkanie i dziękuję za zainteresowanie naszymi usługami. Do zobaczenia!',
  '<strong>Klient:</strong> <i class="fas fa-user"></i> Dziękuję za pomoc. Do zobaczenia.'
];
let currentStep = 0;

const dialogueText = document.getElementById("dialogueText");
const prevDialogue = document.getElementById("prevDialogue");
const nextDialogue = document.getElementById("nextDialogue");

const updateDialogue = () => {
  $(dialogueText).fadeOut(300, function() {
    $(this).html(dialogues[currentStep]).fadeIn(300);
  });

  // Aktualizacja stanu przycisków
  prevDialogue.disabled = currentStep === 0;
  nextDialogue.disabled = currentStep === dialogues.length - 1;

  // Aktualizacja licznika dialogów
  const dialogCounter = document.getElementById("dialogCounter");
  dialogCounter.textContent = `${currentStep + 1}/${dialogues.length}`;
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
