
from http.server import BaseHTTPRequestHandler, HTTPServer
import os
import urllib.parse
import sqlite3


html_file_path = './peluso-sebastiano-units-01-03/03-html-forms/03-astronaut-application-processor/index.html'

        
print(f"Sto cercando il file HTML in: {os.path.abspath(html_file_path)}")


def init_db():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS dataForm (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            second_name TEXT,
            mission TEXT,
            age INTEGER NOT NULL,
            gender TEXT NOT NULL,
            hair TEXT NOT NULL,
            eye_color TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            address TEXT NOT NULL,
            biografy TEXT
        )
    ''')
    conn.commit()
    conn.close()

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        """Gestisce le richieste GET servendo il file HTML."""
        if os.path.exists(html_file_path):
            with open(html_file_path, 'r', encoding='utf-8') as file:
                html_content = file.read()
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(bytes(html_content, "utf8"))
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(bytes("<html><body><h1>File non trovato</h1></body></html>", "utf8"))

    def do_POST(self):
        """Gestisce le richieste POST e salva i dati nel database."""
        if self.path == "/salva":
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode("utf-8")
            form_data = urllib.parse.parse_qs(post_data)
            
            
            name = form_data.get("name", [""])[0]
            second_name = form_data.get("second-name", [""])[0]
            mission = form_data.get("mission", [""])[0]
            age = form_data.get("age", [""])[0]
            gender = form_data.get("gender", [""])[0]
            hair = form_data.get("hair", [""])[0]
            eye_color = form_data.get("eye color", [""])[0]
            email = form_data.get("email", [""])[0]
            phone = form_data.get("phone", [""])[0]
            address = form_data.get("address", [""])[0]
            biografy = form_data.get("biografy", [""])[0]

            
            
            
            conn = sqlite3.connect("database.db")
            cursor = conn.cursor()
            cursor.execute('INSERT INTO dataForm (name, second_name, mission, age, gender, hair, eye_color, email, phone, address, biografy) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',(name, second_name, mission, age, gender, hair, eye_color, email, phone, address, biografy))
            conn.commit()
            conn.close()
            
            # Risposta al client
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Dati salvati con successo!")

# Avvio del server
def run():
    print('Avvio del server...')
    init_db()
    server_address = ('127.0.0.1', 8081)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Server in esecuzione su http://127.0.0.1:8081')
    httpd.serve_forever()

run()
