from backend.lib.lib_mysql import select


# Create your models here.


class Bar:
    def __init__(self):
        pass

    def new_cases(self,date_list):
        data = select(cmd="统计每个国家新增数", time_interval=date_list)
        return data
