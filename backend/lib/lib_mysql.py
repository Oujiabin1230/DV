import json
import os

import pymysql

dir_path=os.path.dirname(os.path.realpath(__file__))

# 打开数据库连接
db = pymysql.connect(host='8.134.93.160',
                     port=33346,
                     user='machine',
                     password='machine346',
                     database='xg',
                     cursorclass=pymysql.cursors.DictCursor)

with open(f"{dir_path}/sql.json", "r") as f:
    sql_json = json.loads(f.read())


def select(cmd, time_interval=None):
    cmd_json = sql_json.get(cmd)
    cursor = db.cursor()
    sql = cmd_json.get("sql").format(time_interval_start=time_interval[0], time_interval_end=time_interval[1])
    cursor.execute(sql)
    rows = cursor.fetchall()
    result = {}
    results = []
    for row in rows:
        for field in cmd_json.get("fields"):
            result[field] = row.get(field)
        results.append(result)
    db.close()
    return results
