from backend.lib.lib_mysql import select


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
