window.addEventListener('DOMContentLoaded', function() {

	let tabs = document.querySelectorAll('.names'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.persons__wrapper');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('names_active');
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('names_active');
    }
    
    hideTabContent();
    

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('names')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
    
    window.addEventListener("scroll", div1);

    function div1() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            document.querySelector(".links__divider_1").style.display = 'block';
        }
    }

    window.addEventListener("scroll", div2);

    function div2() {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            document.querySelector(".links__divider_2").style.display = 'block';
        } 
    }

    window.addEventListener("scroll", div3);

    function div3() {
        if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
            document.querySelector(".links__divider_3").style.display = 'block';
        } 
    }


    

});