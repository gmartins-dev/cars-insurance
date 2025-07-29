# CarsInsurance

Aplicação Angular para gerenciamento de veículos segurados.

## Tecnologias Utilizadas
- Angular 18
- Tailwind CSS
- TypeScript
- Jasmine & Karma (testes unitários)

## Instalação e Execução

1. Instale as dependências:
   ```
   pnpm install
   # ou
   npm install
   ```

2. Rode o servidor de desenvolvimento:
   ```
   ng serve
   ```
   Acesse [http://localhost:4200](http://localhost:4200) no navegador.

## Estrutura de Pastas
- `src/app/components/` — Componentes (VehicleList, AddVehicle)
- `src/app/services/` — Serviços (VehicleService)
- `src/app/models/` — Modelos/interfaces (Vehicle)

## Funcionalidades
- Listagem de veículos segurados
- Adição de novos veículos com validação de formulário
- Navegação entre lista e formulário
- Estilização responsiva com Tailwind CSS

## Testes
Execute os testes unitários com:
```
ng test
```

## Observações
- Todos os campos do formulário são obrigatórios.
- Ano deve ser entre 1900 e o ano atual.
- VIN deve ter exatamente 17 caracteres.

## Referências
- [Angular Docs](https://angular.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---
Desafio técnico para Loovi. Dúvidas: lucas.muryllo@loovi.com.br
