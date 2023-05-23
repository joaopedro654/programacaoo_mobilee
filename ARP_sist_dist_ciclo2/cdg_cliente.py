#O código do cliente será escrito em Python utilizando a biblioteca de sockets para se conectar ao servidor e enviar mensagens de acordo com o protocolo definido acima. 

#exemplo de código de cliente que implementa o protocolo de comunicação:

import socket

# Definindo a porta do servidor e o endereço de host
HOST = '127.0.0.1'
PORT = 12345

# Cria um socket TCP/IP
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Conecta o socket a um endereço e a porta
client_socket.connect((HOST, PORT))

# Nessa parte ele envia uma mensagem de exemplo ao servidor
message = 'SEND_MESSAGE:alice:Hello, Alice!'
client_socket.sendall(message.encode('utf-8'))

# Recebe a resposta do servidor
response = client_socket.recv(1024).decode('utf-8')

# Processamento da resposta do servidor
response_parts = response.split(':')
response_type = response_parts[0]
response_body = response_parts[1]

# Fecha o socket do cliente
client_socket.close()