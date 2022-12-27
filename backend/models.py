from backend.lib.lib_mysql import select, select_country


# Create your models here.


class Bar:
    def __init__(self):
        pass

    def total_cases(self, date_list, country_count):
        data = select(cmd="国家-当前总确诊人数图", time_interval=date_list, country_count=country_count)
        return data

    def total_deaths(self, date_list, country_count):
        data = select(cmd="国家-当前总死亡人数图", time_interval=date_list, country_count=country_count)
        return data

    def total_tests(self, date_list, country_count):
        data = select(cmd="国家-当前总测试人数图", time_interval=date_list, country_count=country_count)
        return data

    def new_cases_sum(self, date_list, country_count):
        data = select(cmd="国家-期间新增确诊人数图", time_interval=date_list, country_count=country_count)
        return data

    def new_deaths_sum(self, date_list, country_count):
        data = select(cmd="国家-期间新增死亡人数图", time_interval=date_list, country_count=country_count)
        return data


class Funnel:
    def continent_cases(self, date_list):
        data = select(cmd="各个洲当前的确诊人数", time_interval=date_list)
        return data

    def continent_deaths(self, date_list):
        data = select(cmd="各个洲当前的死亡人数", time_interval=date_list)
        return data

    def continent_new_cases(self, date_list):
        data = select(cmd="各洲区间时段确诊人数", time_interval=date_list)
        return data

    def continent_new_deaths(self, date_list):
        data = select(cmd="各洲区间时段死亡人数", time_interval=date_list)
        return data


class Others:
    def countries(self, ):
        data = select(cmd="国家列表")
        return data


class Line:
    def country_new_cases(self, date_list, country):
        data = select_country(cmd="时间区间新增确诊数据", time_interval=date_list, country=country)
        return data

    def country_new_deaths(self, date_list, country):
        data = select_country(cmd="时间区间新增死亡数据", time_interval=date_list, country=country)
        return data

    def country_now_data(self, date_list, country):
        data = select_country(cmd="国家累计数据", time_interval=date_list, country=country)
        return data


class map_pic:
    def map_day_new(self, date_list):
        data = select(cmd="日新增确诊和死亡", time_interval=date_list)
        return data

dt = map_pic().map_day_new(["2020-05-01", "2020-05-01"])
print(dt)
