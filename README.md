# teste-SMARKIO
Teste prático de programação para o processo seletivo SMARKIO.

#### Requisitos para executar o projeto localmente:
<ul>
  <li>npm</li>
  <li>mysql</li>
</ul>

### Primeiro passo:

Clonar o projeto do diretório git com o seguinte comando:

#### $ git clone https://github.com/rodrigorcviana/teste-SMARKIO.git

### Segundo passo:

Após baixado o projeto na sua máquina, **abra o terminal e vá no diretório "server" que se encontra dentro do diretório do projeto.**

### Terceiro passo:

Dentro do **diretório "server"** execute o seguinte comando:

#### $ mysql -u <seu_usuário_mysql> -p < initDB.sql

Ao executar o comando será pedido a sua senha do usuário mysql especificado.
Após colocar a senha, será criado um usuário de nome SMARKIO com senha SMARKIO#teste*2021. também será criado um banco de dados de nome SMARKIO.

### Quarto passo:

Para criar as tabelas execute o seguinte comando **dentro do diretório "server"**:

#### $ npx sequelize db:migrate

### Quinto passo:

Execute o comando npm install **dentro do diretório "server"*** para instalar os pacotes necessários para a execução do projeto.

### Sexto passo:

Para rodar o projeto execute o seguinte comando **dentro do diretório server**:

#### $ npm run dev

Ao executar o comando será aberta uma nova aba no navegador com aplicação pronta para uso.


### Adicional:

Dentro da pasta server existe um arquivo .env onde pode ser alterada a app key do ibm watson.
