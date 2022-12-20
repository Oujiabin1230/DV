import requests


res = requests.get("http://127.0.0.1:8000/api/total_cases/?start_date=2022-02-10&end_date=2022-02-11&country_count=15")
print(res.json())

res = requests.get("http://127.0.0.1:8000/api/total_deaths/?start_date=2022-02-10&end_date=2022-02-11&country_count=15")
print(res.json())

res = requests.get("http://127.0.0.1:8000/api/total_tests/?start_date=2022-02-10&end_date=2022-02-11&country_count=15")
print(res.json())


res = requests.get("http://127.0.0.1:8000/api/new_cases_sum/?start_date=2022-02-10&end_date=2022-02-14&country_count=15")
print(res.json())
