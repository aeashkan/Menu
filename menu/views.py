from django.shortcuts import render, get_object_or_404
from .models import MenuItem, Category

def menu_view(request):
    # دریافت دسته‌بندی‌های فعال
    categories = Category.objects.filter(is_active=True).order_by('order')
    
    # دریافت آیتم‌های فعال
    menu_items = MenuItem.objects.filter(is_active=True).select_related('category')
    
    # گروه‌بندی آیتم‌ها بر اساس دسته‌بندی
    items_by_category = {}
    for category in categories:
        items_by_category[category] = menu_items.filter(category=category)
    
    context = {
        'categories': categories,
        'items_by_category': items_by_category,
    }
    
    return render(request, 'menu/index.html', context)
