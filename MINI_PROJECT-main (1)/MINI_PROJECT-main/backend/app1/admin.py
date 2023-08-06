from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group

from .models import User, AdminUser

admin.site.register(User, UserAdmin)
admin.site.register(AdminUser, UserAdmin)
admin.site.unregister(Group)  # Unregister the default Group model
admin.site.register(Group)  # Register your own Group model