from django.db import models


# Create your models here.


class Book():
    def name(self):
        bookName = "myshell"
        createTime = "2022"
        return {"book": bookName, "createTime": createTime}

    def __unicode__(self):
        return self.bookName

    def __str__(self):
        return self.bookName
