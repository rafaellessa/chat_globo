# Chat Multi Usuários

criar um arquivo _.env_ na pasta raiz
```bash
$ cp -p sample.env .env
```

levantar os containers

```bash
$ docker-compose up -d
```


# Sobre o docker-compose

* _docker-compose.yml_
* _docker-compose.override.yml_ altera o docker compose para adpta-lo ao ambiente de desenvolvimento
* _docker-compose.buildimg.yml_ usado para criar imagem docker com o codigo

Para criar as imagens Docker

```bash
$ docker-compose -f docker-compose.yml -f docker-compose.buildimg.yml build
```
as imagens serão criada com o tag definido em _DOCKER\_IMAGE\_TAG_ ou _latest_ ( default )

Para levantar o ambiente só com as imagens copiar o arquivo _docker-compose.yml_ e o _.env_ em outra pasta e executar o comando

```bash
$ docker-compose up -d
```

# VScode debug

Veja o [VSCODE.md](VSCODE.md)


# Chat Client

acessar o diretorio chat_client e rodar o comando yarn start
```bash
$ cd chat_client && yarn start
```
