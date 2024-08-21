# Formulario
# Pagina
 https://maxwellmoura.github.io/Formulario/
 Formulario Basico com API em JS
# Vendas de Carro

Este projeto é uma aplicação web simples para cadastrar e vender carros. Ele inclui um formulário HTML que permite que os usuários insiram informações sobre um carro e as enviem para um servidor Node.js usando Express. Os dados do carro são armazenados em um arquivo de texto para fins de simplicidade.

## Estrutura do Projeto

- **index.html**: Página principal com o formulário para cadastro de veículos.
- **styles.css**: Arquivo CSS para estilização da página.
- **app.js**: Código backend em Node.js usando Express para gerenciar o envio do formulário e armazenar os dados em um arquivo de texto.

## Tecnologias Utilizadas

- **HTML**: Para estruturar a página web.
- **CSS**: Para estilizar a página web.
- **JavaScript (Node.js)**: Para criar o servidor e manipular os dados do formulário.
- **Express**: Framework Node.js usado para criar a aplicação web.
- **Body-Parser**: Middleware usado para processar dados do corpo da requisição.

## Instruções para Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
2. **Navegue até o diretório do projeto:**
  -  cd vendas-de-carro
3. **Instale as dependências:**
  - npm install
4. **inicie o servidor:**
  - node app.js
5. **Acesse a aplicação:**
  - Abra seu navegador e vá para http://localhost:8080.
## Estrutura de Arquivos

### `index.html`

A página HTML principal que contém o formulário de cadastro de veículos. Inclui os seguintes campos:

- **Título do anúncio**: Campo de texto para o título do anúncio.
- **Preço**: Campo numérico para o preço do veículo.
- **Descrição**: Área de texto para a descrição do veículo.
- **Marca**: Campo de texto para a marca do veículo.
- **Modelo**: Campo de texto para o modelo do veículo.
- **Quilometragem**: Campo numérico para a quilometragem do veículo.
- **Tipo de câmbio**: Botões de rádio para selecionar o tipo de câmbio (Manual ou Automático).
- **Opcionais**: Lista de checkboxes para selecionar os opcionais do veículo.
- **Ano do Veículo**: Campo numérico para o ano do veículo.
- **Fotos do Carro**: Campo de upload de arquivos para adicionar imagens do veículo.

### `styles.css`

Arquivo CSS para estilizar o formulário e a página. Inclui estilos básicos para:

- **Formulário**: Layout e design dos campos e botões.
- **Cabeçalho**: Estilo do cabeçalho da página.
- **Botões**: Estilo dos botões, incluindo efeitos de hover.

### `app.js`

Código backend em Node.js que utiliza Express para:

- **Servir o arquivo HTML**: Quando o usuário acessa a raiz do site.
- **Manipular o envio do formulário**: Recebe os dados do formulário e os armazena em um arquivo de texto (`database.txt`).
- **Verificação de dados**: Garante que todos os campos obrigatórios foram preenchidos antes de salvar os dados.

## Funcionamento

Quando o usuário preenche o formulário e o envia:

1. Os dados são enviados para o servidor usando o método POST.
2. O servidor valida os dados e os formata em uma string.
3. Essa string é então armazenada em um arquivo de texto (`database.txt`).
4. O usuário recebe uma resposta indicando se os dados foram salvos com sucesso ou se ocorreu algum erro.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um _issue_ ou enviar um _pull request_.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.



# Author

👤 **Maxwell Moura**

- Instragram Tec e Meme: [@orc.dev](https://www.instagram.com/orc.dev/)
- Instagram Particular: [@max.wellmoura](https://www.instagram.com/max.wellmoura)
- Github: [@maxwellmoura](https://github.com/maxwellmoura)
- LinkedIn: [@maxwell](https://www.linkedin.com/in/maxwell-moura-80a33a6b/)

## Show your support

Give a ⭐️ if this project helped you!
