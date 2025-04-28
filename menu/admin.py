from django.contrib import admin
from .models import MenuItem, Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon', 'is_active', 'order')
    list_editable = ('is_active', 'order')
    search_fields = ('name',)
    list_filter = ('is_active',)

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'is_active')
    list_editable = ('is_active',)
    search_fields = ('name', 'description')
    list_filter = ('category', 'is_active')
    ordering = ('category__order', 'name')
