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
# django3.x用
# from django.conf.urls import url
# django4.x用
from django.urls import re_path as url

from backend.views import get_bar

urlpatterns = [

    url("get_bar", get_bar )
]

