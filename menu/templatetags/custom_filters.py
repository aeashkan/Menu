from django import template

register = template.Library()

@register.filter
def format_price(value):
    try:
        value = int(value)
        return "{:,}".format(value)
    except (ValueError, TypeError):
        return str(value) 