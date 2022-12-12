#新增一个 urls.py 文件，把我们新增的两个接口添加到路由里
# -*- coding: utf-8 -*-
"""
-------------------------------------------------
   File Name ：     urls.py
   Description :
   Author :         FHQI
   date ：          2021-08-19
-------------------------------------------------
"""
from django.conf.urls import url

from backend.views import show_books

urlpatterns = [

    url("show_books", show_books )
]

