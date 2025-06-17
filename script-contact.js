

function sendEmail() {
    console.log("reached method");
    
    let result = false;

    /* Check valid name input exist */
    const inpName = document.getElementById("contactName");
    result = inpName.value.length >= 3;

    if(!result) {
        // document.getElementById("form-error-name").classList.toggle("d-none");
        return result;
    }

    /* Check valid email input exist */
    let inpEmail = document.getElementById("contact-mail").value;
    result = inpEmail.length >= 3 && inpEmail.includes("@") && inpEmail.includes(".");

    if(!result) {
        // document.getElementById("form-error-mail").classList.toggle("d-none");
        return result;
    }

    /* Check valid name input exist */
    let inpMsg = document.getElementById("contact-msg").value;
    result = inpMsg.length >= 3 ; 

    if(!result) {
        // document.getElementById("form-error-msg").classList.toggle("d-none");
    }

    if (result) {
        // showContactForm = !result;
        // showEmailSentBanner = result;
        const element = document.getElementById("contact-form").innerHTML = /*html*/`
            <!-- #region Section Email was send -->
            <div id ="email-send-banner" class="email-send-content flex-h ">
                <div class="content flex-h">
                    <div class="flex-h">
                        <p>Deine E-Mail wurde erfolgreich versendet.</p>
                    </div>
                </div>
            </div>
            <!-- #endregion -->
        `;
    }

}