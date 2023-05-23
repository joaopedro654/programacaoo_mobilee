#O código do servidor será feito em Python e utilizando a biblioteca de sockets para a comunicação de rede.

#Após o cliente se conectar, o servidor receberá as mensagens do cliente, processará as mensagens e enviará as respostas apropriadas.

import socket

# Define a porta do servidor e o endereço de host
HOST = '127.0.0.1'
PORT = 12345

# Cria um socket TCP/IP
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Liga o socket a um endereço e porta
server_socket.bind((HOST, PORT))

server_socket.listen(5)

# Laço principal do servidor
while True:
    # Aceita uma nova conexão do cliente
    client_socket, client_address = server_socket.accept()

    # Recebe a mensagem do cliente
    message = client_socket.recv(1024).decode('utf-8')

    # Processa a mensagem do cliente
    message_parts = message.split(':')
    message_type = message_parts[0]
    message_body = message_parts[1]

    # Envie uma resposta ao cliente
    response_message = 'Hello, client!'
    client_socket.sendall(response_message.encode('utf-8'))

    # Fecha a conexão com o cliente
    client_socket.close()

# Fecha o socket do servidor
server_socket.close()