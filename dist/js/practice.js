window.addEventListener('DOMContentLoaded', function() {
    let tabsPractice = document.querySelectorAll('.groups'),
    tabsPracticeContent = document.querySelectorAll('.practiceContent'),
    tabsPracticeParent = document.querySelector('.group__wrapper');

    function hideTabPracticeContent() {
        
        tabsPracticeContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabsPractice.forEach(item => {
            item.classList.remove('groups_active');
        });
    }

    function showTabPracticeContent(i = 0) {
        tabsPracticeContent[i].classList.add('show');
        tabsPracticeContent[i].classList.remove('hide');
        tabsPractice[i].classList.add('groups_active');
    }

    hideTabPracticeContent();


    tabsPracticeParent.addEventListener('click', function(event) {
        const targets = event.target;
        if(targets && targets.classList.contains('groups')) {
            tabsPractice.forEach((item, i) => {
                if (targets == item) {
                    hideTabPracticeContent();
                    showTabPracticeContent(i);
                }
            });
        }
    });
});