import os
from src.lib.data_base import set_filedata, get_filedata, get_keys

COMMENTS_FILENAME = "forum"




def get_forum_themes():
    return get_keys(COMMENTS_FILENAME)

def  get_theme_info(theme,key):
    info = get_filedata(COMMENTS_FILENAME, theme, {})
    return info.get(key)

def  set_theme_info(theme,key,value):
    info = get_filedata(COMMENTS_FILENAME,theme, {})
    info[key] = value
    set_filedata(COMMENTS_FILENAME, theme, info)