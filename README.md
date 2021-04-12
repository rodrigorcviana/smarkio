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

Para rodar o servidor execute o seguinte comando **dentro do diretório server**:

#### $ npm run dev

### Sexto passo:

Neste último passo, **basta abrir o diretório do projeto e abrir o arquivo "index.html" em seu navegador** que a aplicação estará pronta para ser utilizada.
