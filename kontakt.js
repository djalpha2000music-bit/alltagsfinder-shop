/* Alltagsfinder Contact: standard native HTML POST to Form.taxi.
 * No preventDefault: the provider's standard confirmation/error page owns delivery feedback.
 */
(()=>{"use strict";const form=document.getElementById("alltagsfinder-kontaktformular");
if(!form)return;
const notice=document.getElementById("contact-feedback");
form.addEventListener("submit",()=>{
  if(notice)notice.textContent="Übertragung an Form.taxi wird gestartet. Bitte warte auf die Bestätigungsseite des Formularanbieters.";
});
})();
