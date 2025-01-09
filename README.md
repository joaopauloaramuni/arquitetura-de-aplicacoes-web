-----

<div align="center">
    <table>
        <tr>
         <td align="center"></td>
        </tr> 
        <tr>
            <td>
                <img alt="newtonpaiva" src="https://github.com/joaopauloaramuni/joaopauloaramuni/blob/main/img/newton-logo.png?raw=true"/>
            </td>
        </tr>
        <tr>
            <td align="center"></td>
        </tr> 
    </table>
</div>

-----

# Repo Arquitetura de Aplicações Web

Disciplina dos cursos de Ciência da Computação, Sistemas de Informação e Análise e Desenvolvimento de Sistemas do Centro Universitário Newton Paiva

- 1°Sem 2024

-----

### Sumário:
- [Aulas em PDF](https://github.com/joaopauloaramuni/arquitetura-de-aplicacoes-web/tree/main/PDF)
- [Atalhos](https://github.com/joaopauloaramuni/arquitetura-de-aplicacoes-web/tree/main/ATALHOS)
- [Trabalhos](https://github.com/joaopauloaramuni/arquitetura-de-aplicacoes-web/tree/main/TRABALHOS)
- [Projetos com Spring Boot](https://github.com/joaopauloaramuni/arquitetura-de-aplicacoes-web/tree/main/PROJETOS)
- [Docker CLI Cheat Sheet](https://github.com/joaopauloaramuni/arquitetura-de-aplicacoes-web/tree/main/DOCKER%20CLI%20CHEAT%20SHEET)

#### Links úteis:
- [IntelliJ IDEA Download](https://www.jetbrains.com/idea/download/)
- [JetBrains Student License](https://www.jetbrains.com/shop/eform/students)
- [Java SE Development Kit 17 Archive Downloads](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Java SE 17 Documentation](https://docs.oracle.com/en/java/javase/17/)
- [Spring Initializr](https://start.spring.io/)
- [Spring Boot Documentation](https://docs.spring.io/spring-boot/documentation.html)
- [PrimeFaces](https://www.primefaces.org/)
- [Mantine](https://mantine.dev/)
- [Insomnia Download](https://insomnia.rest/download)
- [Postman Downloads](https://www.postman.com/downloads/)
- [Draw.io](https://drawio.com/)
- [Astah Free Student License](https://astah.net/products/free-student-license/)
- [PlantUML](https://plantuml.com/)
- [Figma Templates](https://www.figma.com/pt-br/templates/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Fly.io](https://fly.io/)
- [MongoDB Community Edition Download](https://www.mongodb.com/try/download/community)
- [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
- [PostgreSQL Downloads](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- [Banco de Dados - Scripts no GitHub](https://github.com/joaopauloaramuni/banco-de-dados/tree/main/SCRIPTS)
- [Grafana](https://grafana.com/)
- [Mockito](https://site.mockito.org/)

-----

#### Comandos Docker úteis:

#### Comandos Docker úteis:

- [Docker Cheatsheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

```
docker --version

docker build -t minha-aplicacao .
<br>docker build --platform linux/amd64 -t minha-aplicacao .

docker images

docker run -d -p 8080:8080 minha-aplicacao
<br>docker run --platform linux/amd64 -d -p 8080:8080 minha-aplicacao

docker ps

docker stats
```

Sugestão de vídeo: 
- [Docker Tutorial for Beginners [FULL COURSE in 3 Hours]](https://www.youtube.com/watch?v=3c-iBn73dDE)

<table>
<tr>
<td align="center">
Comandos Docker: Guia rápido
</td>
</tr>
<tr>
<td>
docker run: Executa um novo contêiner a partir de uma imagem.
</td>
</tr>
<tr>
<td>
docker ps: Lista os contêineres em execução.
</td>
</tr>
<tr>
<td>
docker ps -a: Lista todos os contêineres, incluindo os que não estão em execução.
</td>
</tr>
<tr>
<td>
docker images: Lista todas as imagens locais disponíveis.
</td>
</tr>
<tr>
<td>
docker rmi: Remove uma ou mais imagens.
</td>
</tr>
<tr>
<td>
docker rm: Remove um ou mais contêineres.
</td>
</tr>
<tr>
<td>
docker build: Cria uma nova imagem a partir de um Dockerfile.
</td>
</tr>
<tr>
<td>
docker pull: Baixa uma imagem do Docker Hub ou de um repositório remoto.
</td>
</tr>
<tr>
<td>
docker push: Envia uma imagem para um repositório remoto no Docker Hub.
</td>
</tr>
<tr>
<td>
docker exec: Executa um comando em um contêiner em execução.
</td>
</tr>
<tr>
<td>
docker logs: Exibe os logs de um contêiner.
</td>
</tr>
<tr>
<td>
docker network: Gerencia redes Docker.
</td>
</tr>
<tr>
<td>
docker volume: Gerencia volumes para persistência de dados.
</td>
</tr>
<tr>
<td>
docker-compose up: Inicia e orquestra múltiplos contêineres definidos no docker-compose.yml.
</td>
</tr>
<tr>
<td>
docker-compose down: Para e remove os contêineres, redes e volumes definidos no docker-compose.yml.
</td>
</tr>
<tr>
<td>
docker stats: Exibe estatísticas em tempo real sobre o uso de recursos de contêineres em execução.
</td>
</tr>
<tr>
<td>
docker inspect: Mostra informações detalhadas sobre um contêiner ou imagem.
</td>
</tr>
<tr>
<td>
docker start: Inicia um contêiner que foi parado.
</td>
</tr>
<tr>
<td>
docker stop: Para um contêiner em execução.
</td>
</tr>
<tr>
<td>
docker restart: Reinicia um contêiner.
</td>
</tr>
<tr>
<td>
docker pause: Pausa um ou mais contêineres em execução.
</td>
</tr>
<tr>
<td>
docker unpause: Retoma um ou mais contêineres que foram pausados.
</td>
</tr>
<tr>
<td>
docker commit: Cria uma nova imagem a partir das alterações em um contêiner.
</td>
</tr>
<tr>
<td>
docker tag: Adiciona uma nova tag a uma imagem existente.
</td>
</tr>
<tr>
<td>
docker login: Faz login em um repositório Docker.
</td>
</tr>
<tr>
<td>
docker logout: Faz logout de um repositório Docker.
</td>
</tr>
<tr>
<td>
docker search: Busca imagens no Docker Hub.
</td>
</tr>
<tr>
<td>
docker pull: Baixa uma imagem do Docker Hub ou de um repositório remoto.
</td>
</tr>
<tr>
<td>
docker cp: Copia arquivos ou diretórios entre o sistema de arquivos do contêiner e o host.
</td>
</tr>
<tr>
<td>
docker volume create: Cria um novo volume Docker.
</td>
</tr>
<tr>
<td>
docker volume rm: Remove um ou mais volumes.
</td>
</tr>
<tr>
<td>
docker network create: Cria uma nova rede Docker.
</td>
</tr>
<tr>
<td>
docker network rm: Remove uma ou mais redes.
</td>
</tr>
<tr>
<td>
docker network ls: Lista todas as redes Docker.
</td>
</tr>
<tr>
<td>
docker history: Mostra o histórico de camadas de uma imagem.
</td>
</tr>
</table>

-----
