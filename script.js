// Добавь этот скрипт в HTML или отдельный файл
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Остановка стандартного действия формы

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('https://monkfish-app-jhqmo.ondigitalocean.app/send-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке.');
        }
    });
});
