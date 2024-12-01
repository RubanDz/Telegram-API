// document.getElementById('telegramForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Предотвращает стандартную отправку формы

//     // Собираем данные из формы
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Формируем сообщение
//     const telegramMessage = `Новая заявка:\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;





    
//     // Токен бота и Chat ID
//     const token = '8081439320:AAGJmFOuwvllL6q4U9GcZi2gtRocWg3YYu4'; // Замени на свой токен
//     const chatId = '5884865975';          

//     // URL для отправки запроса к Telegram API
//     const url = `https://api.telegram.org/bot${token}/sendMessage`;

//     // Отправка данных с помощью fetch
//     fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             chat_id: chatId,
//             text: telegramMessage,
//             parse_mode: 'HTML'
//         })
//     })
//     .then(response => {
//         if (response.ok) {
//             alert('Сообщение отправлено!');
//         } else {
//             alert('Ошибка при отправке.');
//         }
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//         alert('Ошибка при отправке.');
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('telegramForm').addEventListener('submit', function (event) {
        event.preventDefault();  // Предотвращает отправку формы

        // Собираем данные из формы
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const sufit = document.getElementById('sufit').value;
        const size = document.getElementById('size').value;
        const metr = document.getElementById('metr').value;
        const punkt = document.getElementById('punkt').value;

        // Токен бота и Chat ID
        const token = '8081439320:AAGJmFOuwvllL6q4U9GcZi2gtRocWg3YYu4'; // Замените на свой токен
        const chatId = '5884865975'; // Замените на свой Chat ID

        // Формируем сообщение
        const telegramMessage = `
            Nowa aplikacja:
            Imię: ${name}
            Telefon: ${phone}
            Sufit: ${sufit}
            Powierzchnia pokoju (m²): ${size}
            Metry bieżące (m/b): ${metr}
            Ilość punktów oświetlenia: ${punkt}
        `;

        // URL для отправки запроса к Telegram API
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        // Отправка данных с помощью fetch
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
    });
});
