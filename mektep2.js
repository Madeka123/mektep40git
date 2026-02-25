function showSection(id, btn) {
    // 1. Скрываем все секции через класс
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.remove('active'));

    // 2. Снимаем выделение со всех кнопок
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(b => b.classList.remove('active'));

    // 3. Показываем нужную секцию
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }

    // 4. Подсвечиваем активную кнопку
    btn.classList.add('active');
}