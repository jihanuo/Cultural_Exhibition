import os
from src.lib.data_base import set_filedata, get_filedata, get_keys

COMMENTS_FILENAME = "store"

def get_good_list():
    return get_keys(COMMENTS_FILENAME)


def  get_good_info(good,key):
    info = get_filedata("store", good, {})
    return info.get(key)
