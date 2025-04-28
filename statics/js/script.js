// داده‌های نمونه منو
const menuData = [
    {
        id: 1,
        name: "اسپرسو",
        description: "قهوه اسپرسو با طعم قوی و غلیظ",
        price: "۴۵,۰۰۰",
        category: "hot",
        image: "{% static 'img/espresso.jpg' %}"
    },
    {
        id: 2,
        name: "کاپوچینو",
        description: "قهوه با شیر و فوم شیر",
        price: "۵۵,۰۰۰",
        category: "hot",
        image: "{% static 'img/cappuccino.jpg' %}"
    },
    {
        id: 3,
        name: "لاته",
        description: "قهوه با شیر بیشتر و فوم کمتر",
        price: "۵۰,۰۰۰",
        category: "hot",
        image: "{% static 'img/latte.jpg' %}"
    },
    {
        id: 4,
        name: "آمریکانو",
        description: "اسپرسو با آب داغ",
        price: "۴۰,۰۰۰",
        category: "hot",
        image: "{% static 'img/americano.jpg' %}"
    },
    {
        id: 5,
        name: "موکا",
        description: "قهوه با شکلات و شیر",
        price: "۶۰,۰۰۰",
        category: "hot",
        image: "{% static 'img/mocha.jpg' %}"
    },
    {
        id: 6,
        name: "آیس کافی",
        description: "قهوه سرد با یخ",
        price: "۵۵,۰۰۰",
        category: "cold",
        image: "{% static 'img/iced-coffee.jpg' %}"
    },
    {
        id: 7,
        name: "آیس لاته",
        description: "لاته سرد با یخ",
        price: "۶۰,۰۰۰",
        category: "cold",
        image: "{% static 'img/iced-latte.jpg' %}"
    },
    {
        id: 8,
        name: "فراپه",
        description: "قهوه سرد با شیر و یخ",
        price: "۶۵,۰۰۰",
        category: "cold",
        image: "{% static 'img/frappe.jpg' %}"
    },
    {
        id: 9,
        name: "چای سیاه",
        description: "چای سیاه با طعم قوی",
        price: "۳۰,۰۰۰",
        category: "tea",
        image: "{% static 'img/black-tea.jpg' %}"
    },
    {
        id: 10,
        name: "چای سبز",
        description: "چای سبز با طعم ملایم",
        price: "۳۵,۰۰۰",
        category: "tea",
        image: "{% static 'img/green-tea.jpg' %}"
    },
    {
        id: 11,
        name: "دمنوش بهارنارنج",
        description: "دمنوش با طعم بهارنارنج",
        price: "۴۰,۰۰۰",
        category: "tea",
        image: "{% static 'img/orange-blossom.jpg' %}"
    },
    {
        id: 12,
        name: "دمنوش نعناع",
        description: "دمنوش با طعم نعناع",
        price: "۳۵,۰۰۰",
        category: "tea",
        image: "{% static 'img/mint-tea.jpg' %}"
    },
    {
        id: 13,
        name: "آبمیوه پرتقال",
        description: "آبمیوه طبیعی پرتقال",
        price: "۴۵,۰۰۰",
        category: "fruit",
        image: "{% static 'img/orange-juice.jpg' %}"
    },
    {
        id: 14,
        name: "آبمیوه هویج",
        description: "آبمیوه طبیعی هویج",
        price: "۴۰,۰۰۰",
        category: "fruit",
        image: "{% static 'img/carrot-juice.jpg' %}"
    },
    {
        id: 15,
        name: "اسموتی توت فرنگی",
        description: "اسموتی با توت فرنگی و شیر",
        price: "۶۵,۰۰۰",
        category: "fruit",
        image: "{% static 'img/strawberry-smoothie.jpg' %}"
    },
    {
        id: 16,
        name: "اسموتی موز",
        description: "اسموتی با موز و شیر",
        price: "۵۵,۰۰۰",
        category: "fruit",
        image: "{% static 'img/banana-smoothie.jpg' %}"
    }
];

// آرایه دسته‌بندی‌ها به ترتیب
const categories = ['hot', 'cold', 'tea', 'fruit'];

// تابع نمایش آیتم‌های منو
function renderMenuItems(selectedCategory) {
    const menuGrid = document.querySelector('.menu-grid');
    menuGrid.innerHTML = '';

    const titles = {
        hot: 'نوشیدنی گرم',
        cold: 'نوشیدنی سرد',
        tea: 'چای و دمنوش',
        fruit: 'میوه‌ای'
    };

    const icons = {
        hot: 'fa-mug-hot',
        cold: 'fa-glass-whiskey',
        tea: 'fa-leaf',
        fruit: 'fa-apple-alt'
    };

    categories.forEach(category => {
        const categoryItems = menuData.filter(item => item.category === category);
        if (categoryItems.length === 0) return;

        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        categorySection.id = `category-${category}`;

        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-section-header';

        const sectionTitle = document.createElement('h2');
        sectionTitle.className = `section-title ${category === selectedCategory ? 'active' : ''}`;
        sectionTitle.innerHTML = `
            <i class="fas ${icons[category]}"></i>
            ${titles[category]}
        `;

        categoryHeader.appendChild(sectionTitle);
        categorySection.appendChild(categoryHeader);

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';

        categoryItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p class="description">${item.description}</p>
                    <p class="price">${item.price} تومان</p>
                </div>
            `;
            itemsGrid.appendChild(menuItem);
        });

        categorySection.appendChild(itemsGrid);
        menuGrid.appendChild(categorySection);
    });

    // اسکرول به بخش انتخاب شده
    if (selectedCategory) {
        const targetSection = document.getElementById(`category-${selectedCategory}`);
        if (targetSection) {
            // محاسبه موقعیت اسکرول با در نظر گرفتن ارتفاع نوار ناوبری
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight - 20;
            
            // اسکرول نرم به موقعیت محاسبه شده
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

function updateActiveButtons(category) {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const categoryNavBtns = document.querySelectorAll('.category-nav-btn');
    
    categoryBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    categoryNavBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // مخفی کردن منو در ابتدا
    const menuItems = document.querySelector('.menu-items');
    menuItems.style.display = 'none';

    // نمایش دسته‌بندی‌ها
    const menuCategories = document.querySelector('.menu-categories');
    menuCategories.style.display = 'grid';

    const categoryBtns = document.querySelectorAll('.category-btn');
    const categoryNavBtns = document.querySelectorAll('.category-nav-btn');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const categoryId = btn.dataset.category;
            
            // نمایش منو
            menuItems.style.display = 'block';
            menuItems.classList.add('active');
            
            // مخفی کردن دسته‌بندی‌ها
            menuCategories.style.display = 'none';
            
            // اسکرول به بخش انتخاب شده
            const targetSection = document.getElementById(`category-${categoryId}`);
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    categoryNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const categoryId = btn.dataset.category;
            const targetSection = document.getElementById(`category-${categoryId}`);
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const st = window.pageYOffset;
        if (st > lastScrollTop) {
            document.querySelector('.navbar').style.transform = 'translateY(-100%)';
        } else {
            document.querySelector('.navbar').style.transform = 'translateY(0)';
        }
        lastScrollTop = st <= 0 ? 0 : st;
    });
}); 