from dotenv import load_dotenv
from os import path

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))


