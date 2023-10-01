import Swal from 'sweetalert2'

function showAlert() {
    let timerInterval: number | undefined;

    Swal.fire({
        timer: 500,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer()?.querySelector('b');
            if (b) {
                timerInterval = window.setInterval(() => {
                    b.textContent = Swal.getTimerLeft()?.toString() || "";
                }, 100);
            }
        },
        willClose: () => {
            if (timerInterval !== undefined) {
                window.clearInterval(timerInterval);
            }
        },
        background: "var(--red)"
    })

}

export default function sendForm(formName: string, formData: any): Promise<Response> {
    showAlert();
    let formRequestData = {domain: "staffrent.nl", fromName: formName, data: formData}
    return fetch('https://staffrent.nl/form', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formRequestData)
    })
}