import json  # 引入类

person = {"name": "lala", "age": 23, "is_married": True}
print("序列化之前的数据:", person)  # 序列化之前的数据
json1 = json.dumps(person)  # 序列化操作
print("序列化之后的数据:", repr(json1))  # repr是一个展示对象的函数
person2 = json.loads(json1)  # 反序列化操作
print("反序列化之后的数据:", person2)

import requests

res = requests.get("http://127.0.0.1:8000/api/get_bar/?start_date=2020-02-10&end_date=2020-02-10")
print(res.json())

res = requests.get("http://127.0.0.1:8000/api/get_bar/?start_date=2020-02-10&end_date=2020-02-10")
print(res.json())

