import http.server
import socketserver
from time import sleep
from colorama import Fore, Back, Style
import webbrowser

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    sleep(1)
    print(Fore.BLUE + "Endo server is now running, type 'localhost:8080' in your browser to view your project")
    print(Style.RESET_ALL)
    webbrowser.open('http://localhost:8080')
    httpd.serve_forever()
