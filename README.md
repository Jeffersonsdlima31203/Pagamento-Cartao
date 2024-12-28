# Tenda - Pagamento com Cartão de Crédito

Este README descreve o teste Cypress automatizado para simular a compra de um produto no atacarejo Tenda Atacado utilizando o pagamento via cartão de crédito.

## Pré-requisitos

* Ter o Cypress instalado e configurado.
* Possuir uma conta no atacarejo Tenda Atacado.

## Script de Teste

O script de teste segue a seguinte estrutura:

1. **Acessar a URL do Tenda Atacado:**
   - O teste acessa a URL https://marketplace-alpha.tendaatacado.com.br/.
   - Fecha o modal de boas-vindas.
   - Clica no botão de login.

2. **Realizar Login:**
   - Preenche o e-mail e senha do usuário cadastrado.
   - Clica no botão de entrar.

3. **Selecionar um Produto:**
   - Clica na categoria desejada para navegar pelos produtos.
   - Escolhe um produto e adiciona ao carrinho de compras.

4. **Acessar o Carrinho de Compras:**
   - Clica no ícone do carrinho de compras.
   - Clica no botão para seguir para a finalização da compra.

5. **Selecionar Pagamento com Cartão de Crédito:**
   - Clica no ícone de cartão de crédito para selecionar esta forma de pagamento.

6. **Preencher os Dados do Cartão:**
   - Preenche o número do cartão de crédito.
   - Seleciona o mês e ano de validade.
   - Preenche o código de segurança (CVV).
   - Preenche o nome do titular do cartão.
   - Preenche o CPF do titular do cartão.
   - Confirma o pagamento.

7. **Finalizar a Compra:**
   - Clica no botão para finalizar a compra.


## Observações

* O teste utiliza dados de exemplo para o cartão de crédito. É necessário alterá-los com informações válidas para a execução do teste.
* O script pode ser adaptado para testar outros cenários de pagamento e navegação no Tenda Atacado.

## Manutenção do Teste

* É importante manter o teste atualizado de acordo com as mudanças na plataforma do Tenda Atacado.
* Revisar os seletores CSS utilizados para garantir que o teste continue funcionando corretamente.
