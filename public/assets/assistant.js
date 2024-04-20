// @ts-nocheck

let audio1 = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3"
);

document.addEventListener('alpine:init', () => {
    Alpine.data('assistant', () => ({
        initialFetch: false,
        message: '',
        messages: [],
        init() {
            // Fetch Previous Messages
        },
        openForm() {
            this.fetchMessages();
            document.getElementById("myForm").style.display = "block";
            audio1.load();
            audio1.play();
        },
        closeForm() {
            document.getElementById("myForm").style.display = "none";
            audio1.load();
            audio1.play();
        },
        async fetchMessages() {
            const response = await fetch("/assistant", {
                method: "GET",
            })

            if (response.status !== 200) {
                return;
            }

            const data = await response.json();

            this.messages = data;

            if (!this.initialFetch) {
                this.initialFetch = true;
            }
        },
        async sendMessage() {
            if (this.message.trim() === "") {
                return;
            }

            const response = await fetch("/assistant", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: this.message,
                }),
            })

            this.message = "";

            await response.json();

            setTimeout(this.fetchMessages, 5000);
        }
    }))
})