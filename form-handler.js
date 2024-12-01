

// TODO!!! Работает на всех формах





document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.contact-form'); // Все формы на странице

    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 

            // Собираем данные из текущей формы
            const formId = form.id;  // Получаем ID текущей формы
            const name = form.querySelector(`#${formId} input[name="name"]`).value;
            const phone = form.querySelector(`#${formId} input[name="phone"]`).value;
            const message = form.querySelector(`#${formId} textarea[name="message"]`) ? form.querySelector(`#${formId} textarea[name="message"]`).value : "";
            const sufit = form.querySelector(`#${formId} input[name="sufit"]`) ? form.querySelector(`#${formId} input[name="sufit"]`).value : "";
            const size = form.querySelector(`#${formId} input[name="size"]`) ? form.querySelector(`#${formId} input[name="size"]`).value : "";
            const metr = form.querySelector(`#${formId} input[name="metr"]`) ? form.querySelector(`#${formId} input[name="metr"]`).value : "";
            const punkt = form.querySelector(`#${formId} input[name="punkt"]`) ? form.querySelector(`#${formId} input[name="punkt"]`).value : "";

            // Токен бота и Chat ID
            const token = '8081439320:AAGJmFOuwvllL6q4U9GcZi2gtRocWg3YYu4';
            const chatId = '5884865975';

            // Формируем сообщение
            let telegramMessage = `Nowa aplikacja z ${formId}:\nImię: ${name}\nTelefon: ${phone}\n`;
            if (sufit) telegramMessage += `Sufit: ${sufit}\n`;
            if (size) telegramMessage += `Powierzchnia pokoju: ${size} m²\n`;
            if (metr) telegramMessage += `Metry bieżące: ${metr} m/b\n`;
            if (punkt) telegramMessage += `Ilość punktów oświetlenia: ${punkt}\n`;
            if (message) telegramMessage += `Treść wiadomości: ${message}`;

            // URL для отправки данных
            const url = `https://api.telegram.org/bot${token}/sendMessage`;

            // fetch
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                    parse_mode: 'HTML'
                })
            })
            .then(response => {
                if (response.ok) {
                    alert('Wiadomość została wysłana!');
                } else {
                    alert('Błąd przy wysyłaniu.');
                }
            })
            .catch(error => {
                console.error('Błąd:', error);
                alert('Błąd przy wysyłaniu.');
            });

            // Очистить форму 
            form.reset();
        });
    });
});
