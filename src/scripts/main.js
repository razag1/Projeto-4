document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const targetTab = button.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id="${targetTab}"]`);

            if (!tab) {
                return;
            }

            hideAllTabs();
            removeActiveButtons();

            tab.classList.add('info__container__content__box--is-active');
            button.classList.add('info__container__tabs__button--is-active');
        });
    });

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const questionItem = question.parentElement;
            questionItem.classList.toggle('faq__questions__item--is-open');
        });
    });
});

function hideAllTabs() {
    const tabs = document.querySelectorAll('[data-tab-id]');

    tabs.forEach(function (tab) {
        tab.classList.remove('info__container__content__box--is-active');
    });
}

function removeActiveButtons() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach(function (button) {
        button.classList.remove('info__container__tabs__button--is-active');
    });
}
