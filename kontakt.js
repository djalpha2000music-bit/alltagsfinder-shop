/* Alltagsfinder Kontakt – no server-side collection. Opens a locally composed email draft. */
(()=>{"use strict";const form=document.getElementById("alltagsfinder-kontaktformular");if(!form)return;
const feedback=document.getElementById("contact-feedback");
form.addEventListener("submit",event=>{
 event.preventDefault();
 if(!form.reportValidity()){feedback.textContent="Bitte fülle die Pflichtfelder korrekt aus.";return;}
 const data=new FormData(form);
 const name=String(data.get("name")||"").trim();
 const address=String(data.get("email")||"").trim();
 const topic=String(data.get("thema")||"").trim();
 const message=String(data.get("nachricht")||"").trim();
 if(!name||!address||!topic||message.length<10){feedback.textContent="Bitte prüfe deine Eingaben.";return;}
 const subject="Alltagsfinder – "+topic;
 const body="Name: "+name+"\nAntwortadresse: "+address+"\nAnliegen: "+topic+"\n\nNachricht:\n"+message+"\n\n---\nDiese Anfrage wurde über alltagsfinder-auto.pages.dev/kontakt.html vorbereitet.";
 const link="mailto:djalpha2000.music@gmail.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
 feedback.textContent="Der E-Mail-Entwurf wird geöffnet. Bitte bestätige den Versand in deiner E-Mail-App. Ohne diesen Schritt erreicht uns keine Nachricht.";
 window.location.href=link;
});
})();
