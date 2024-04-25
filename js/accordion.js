document.querySelector('.accordion-group').addEventListener('click', event => {
    const accordionItem = event.target.closest('.accordion-item');
    if (!accordionItem) return;

    const content = accordionItem.querySelector('.accordion-content');
    const button = accordionItem.querySelector('.button-m');

    content.classList.toggle('show');
    button.classList.toggle('show');

    const icon = accordionItem.querySelector('.icon--chevron');
    icon.classList.toggle('rotated', content.classList.contains('show'));
});

document.querySelector('.accordion-group').addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
        const accordionItem = event.target.closest('.accordion-item');
        if (!accordionItem) return;

        const content = accordionItem.querySelector('.accordion-content');
        const button = accordionItem.querySelector('.button-m');

        content.classList.toggle('show');
        button.classList.toggle('show');

        const icon = accordionItem.querySelector('.icon--chevron');
        icon.classList.toggle('rotated', content.classList.contains('show'));
    }
});