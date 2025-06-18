


/**
 * Conact Page
 * Validates the user input to send the email
 * @returns not specified
 */
function sendEmail() {
    
    let result = false;

    /* Check valid name input exist */
    const inpName = document.getElementById("contactName").value;
    result = inpName.length >= 3;
    if(!result) {
        return result;
    }

    /* Check valid email input exist */
    let inpEmail = document.getElementById("contact-mail").value;
    result = inpEmail.length >= 3 && inpEmail.includes("@") && inpEmail.includes(".");
    if(!result) {
        return result;
    }

    /* Check valid name input exist */
    let inpMsg = document.getElementById("contact-msg").value;
    result = inpMsg.length >= 3 ; 
    if(!result) {
        return result;
    }

    /** if validation is true replace contact form with success banner */
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