# 新增一个 urls.py 文件，把我们新增的两个接口添加到路由里
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

from backend.views import total_cases, total_deaths, total_tests, new_cases_sum, new_deaths_sum, continent_cases, \
    continent_deaths, continent_new_deaths, continent_new_cases, countries, country_new_cases,country_new_deaths,\
    country_now_data, map_day_new

urlpatterns = [
    url("total_cases", total_cases),
    url("total_deaths", total_deaths),
    url("total_tests", total_tests),
    url("new_cases_sum", new_cases_sum),
    url("new_deaths_sum", new_deaths_sum),
    url("continent_cases", continent_cases),
    url("continent_deaths", continent_deaths),
    url("continent_new_deaths", continent_new_deaths),
    url("continent_new_cases", continent_new_cases),
    url("countries", countries),
    url("country_new_cases", country_new_cases),
    url("country_new_deaths", country_new_deaths),
    url("country_now_data", country_now_data),
    url("map_day_new", map_day_new),
]
