import requests


#res = requests.get("http://8.134.93.160:8000/api/total_cases/?start_date=2022-02-10&end_date=2022-02-11&country_count=15")
#print(res.json())

#res = requests.get("http://8.134.93.160:8000/api/total_deaths/?start_date=2022-02-10&end_date=2022-02-11&country_count=15")
#print(res.json())

#res = requests.get("http://8.134.93.160:8000/api/total_tests/?start_date=2022-02-10&end_date=2022-02-11&country_count=15")
#print(res.json())


#res = requests.get("http://8.134.93.160:8000/api/new_cases_sum/?start_date=2022-02-10&end_date=2022-02-14&country_count=15")
#print(res.json())

#res = requests.get("http://8.134.93.160:8000/api/new_deaths_sum/?start_date=2020-01-01&end_date=2021-02-14&country_count=15")
#print(res.json())


#res = requests.get("http://8.134.93.160:8000/api/continent_cases/?start_date=2020-05-04&end_date=2020-05-04")
#print(res.json())

#res = requests.get("http://8.134.93.160:8000/api/continent_deaths/?start_date=2020-05-04&end_date=2020-05-04")
#print(res.json())

#res = requests.get("http://8.134.93.160:8000/api/continent_new_deaths/?start_date=2020-05-04&end_date=2020-05-04")
#print(res.json())

#res = requests.get("http://8.134.93.160:8000/api/continent_new_cases/?start_date=2020-05-04&end_date=2020-05-04")
#print(res.json())

#res = requests.get("http://8.134.93.160:8000/api/countries")
#print(res.json())

#res = requests.get("http://8.134.93.160:8000/api/country_new_cases/?start_date=2020-05-01&end_date=2020-05-10&country=Cuba")
#print(res.json())



#res = requests.get("http://8.134.93.160:8000/api/country_new_deaths/?start_date=2020-05-01&end_date=2020-05-10&country=Cuba")
#print(res.json())

res = requests.get("http://8.134.93.160:8000/api/country_now_data/?start_date=2020-05-01&end_date=2020-05-10&country=Cuba")
print(res.json())




