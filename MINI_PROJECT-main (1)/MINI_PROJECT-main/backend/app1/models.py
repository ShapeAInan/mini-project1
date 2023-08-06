from django.contrib.auth.models import AbstractUser, Group
from djongo import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    groups = models.ManyToManyField(Group, related_name='user_groups')
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        related_name='user_permissions',
        verbose_name='user permissions',
        help_text='Specific permissions for this user.',
        )

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username

class AdminUser(AbstractUser):
    email = models.EmailField(unique=True)
    groups = models.ManyToManyField(Group, related_name='admin_groups')
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        related_name='admin_user_permissions',
        verbose_name='user permissions',
        help_text='Specific permissions for this user.',
        )
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    is_admin = models.BooleanField(default=True)

    def __str__(self):
        return self.username
