# Generated by Django 3.2.13 on 2022-10-18 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserFollowing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isfollowing', models.TextField(blank=True, null=True)),
                ('isfollowed', models.TextField(blank=True, null=True)),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True)),
            ],
        ),
    ]
