#!/usr/bin/env python
from http.server import BaseHTTPRequestHandler, HTTPServer
import os

# Creiamo la classe che riceverà e risponderà alle richieste HTTP
class testHTTPServer_RequestHandler(BaseHTTPRequestHandler):
    # Implementiamo il metodo che risponde alle richieste GET
    def do_GET(self):
        # Impostiamo il percorso del file HTML esterno
        html_file_path = './peluso-sebastiano-units-01-03/03-html-forms/03-astronaut-application-processor/index.html'

        # Mostriamo il percorso completo per il debug
        print(f"Sto cercando il file HTML in: {os.path.abspath(html_file_path)}")

        # Verifica se il file esiste
        if os.path.exists(html_file_path):
            # Leggiamo il contenuto del file HTML
            with open(html_file_path, 'r', encoding='utf-8') as file:
                html_content = file.read()

            # Specifichiamo il codice di risposta
            self.send_response(200)
            # Specifichiamo uno o più header
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            # Scriviamo il contenuto del file HTML nella risposta
            self.wfile.write(bytes(html_content, "utf8"))
        else:
            # Se il file non esiste, restituiamo un errore 404
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(bytes("<html><body><h1>File non trovato</h1></body></html>", "utf8"))
        return

def run():
    print('Avvio del server...')
    # Specifichiamo le impostazioni del server
    # Scegliamo la porta 8081 (per la porta 80 sono necessari i permessi di root)
    server_address = ('127.0.0.1', 8081)
    httpd = HTTPServer(server_address, testHTTPServer_RequestHandler)
    print('Server in esecuzione...')
    httpd.serve_forever()

run()
