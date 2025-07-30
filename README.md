# Cars Insurance App 🚗

Aplicação Angular moderna para gerenciamento eficiente de veículos segurados, desenvolvida com as melhores práticas e tecnologias atuais. Implementa um sistema completo de gestão de veículos para seguradoras, seguindo os padrões de design e UX da Loovi Seguros.

## Demo 🎥
https://cars-insurance-two.vercel.app/

## Funcionalidades Principais ✨
- Listagem completa de veículos segurados
- Adição de novos veículos com validação avançada
- Remoção individual de veículos
- Limpeza completa da lista
- Interface responsiva e intuitiva
- Validação em tempo real dos dados
- Sistema de feedback visual para o usuário
- Navegação fluida entre componentes
- Persistência de dados com localStorage
- Design system alinhado com a identidade Loovi Seguros

## Tecnologias Utilizadas 🛠️
- Angular 18 (Framework principal)
  - Signals para gerenciamento de estado
  - Componentes standalone
  - Lazy loading
- TypeScript 5.x (Tipagem estática)
  - Strict mode habilitado
  - Interfaces bem definidas
- Tailwind CSS 3.x (Estilização moderna)
  - Design system customizado
  - Responsividade nativa
  - JIT compilation
- Jasmine & Karma (Testes unitários)
  - Cobertura abrangente
  - Testes assíncronos
- PNPM (Gerenciador de pacotes otimizado)
  - Cache eficiente
  - Instalação rápida
  - Melhor uso de disco

## Pré-requisitos 📋
- Node.js (>= 18.x)
- PNPM ou NPM
- Angular CLI

## Instalação e Execução 💻

1. Clone o repositório:
   ```bash
   git clone https://github.com/gmartins-dev/cars-insurance.git
   cd cars-insurance
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. Rode o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
   Acesse [http://localhost:4200](http://localhost:4200) no navegador.

## Estrutura do Projeto 📁
```
src/
├── app/
│   ├── components/
│   │   ├── vehicle-list/           # Listagem de veículos
│   │   │   ├── vehicle-list.component.ts
│   │   │   ├── vehicle-list.component.html
│   │   │   ├── vehicle-list.component.css
│   │   │   └── vehicle-list.component.spec.ts
│   │   └── add-vehicle/            # Formulário de adição
│   │       ├── add-vehicle.component.ts
│   │       ├── add-vehicle.component.html
│   │       ├── add-vehicle.component.css
│   │       └── add-vehicle.component.spec.ts
│   ├── services/
│   │   ├── vehicle.service.ts      # Gerenciamento de veículos
│   │   └── vehicle.service.spec.ts
│   ├── models/
│   │   └── vehicle.model.ts        # Interface Vehicle
│   └── app.routes.ts               # Configuração de rotas
├── assets/
│   └── logo-loovi-seguros.svg      # Recursos estáticos
└── styles.css                      # Estilos globais
```

## Validações Implementadas ✅

### Formulário de Veículo
- **Campos Obrigatórios:**
  - Marca do veículo
  - Modelo do veículo
  - Ano de fabricação
  - VIN (número do chassi)
  - Placa do veículo

### Regras de Validação
- **VIN (Chassi):**
  - Exatamente 17 caracteres
  - Apenas caracteres alfanuméricos
  - Feedback visual em tempo real

- **Ano do Veículo:**
  - Mínimo: 1900
  - Máximo: ano atual (2025)
  - Apenas números inteiros

- **Marca e Modelo:**
  - Campo de texto livre
  - Mínimo de 2 caracteres
  - Sem caracteres especiais

### Feedback ao Usuário
- Indicadores visuais de erro em tempo real
- Mensagens de erro específicas por campo
- Destaque visual dos campos com erro
- Botão de submit desabilitado quando formulário inválido

## Testes 🧪

### Testes Unitários
Execute os testes unitários:
```bash
ng test
```

### Cobertura de Testes
Para gerar relatório de cobertura:
```bash
ng test --code-coverage
```

### O Que é Testado
- **VehicleService:**
  - Adição de veículos
  - Remoção de veículos
  - Limpeza da lista
  - Listagem de veículos
  - Manipulação do estado
  - Persistência localStorage
  - Carregamento inicial do estado

- **AddVehicleComponent:**
  - Validações de formulário
  - Submissão de dados
  - Integração com service
  - Feedback de sucesso/erro
  - Redirecionamento pós-adição

- **VehicleListComponent:**
  - Renderização da lista
  - Interações do usuário
  - Estados vazios
  - Confirmação de remoção
  - Responsividade da tabela
  - Filtragem dinâmica dos botões

### Boas Práticas de Teste
- Testes unitários isolados
- Mocks de serviços externos
- Testes de edge cases
- Testes de casos de erro
- Testes de componentes standalone
- Testes de integração entre componentes
- Testes de rotas e navegação

## Design System e Identidade Visual 🎨

### Cores Principais
- **Azul Loovi:** `#5968FA` (Header)
- **Verde Bandeira:** `#049B62` (Botões de ação primária)
- **Verde Hover:** `#25D366` (Hover em botões primários)
- **Vermelho Base:** `#B91C1C` (Botões de ação destrutiva)
- **Vermelho Hover:** `#DC2626` (Hover em botões destrutivos)

## Armazenamento e Persistência 💾
- Utilização do localStorage para persistência
- Chave de armazenamento: `'vehicles'`
- Formato: Array de objetos Vehicle
- Carregamento automático ao iniciar
- Sincronização em tempo real

## Acessibilidade ♿
- Contraste adequado de cores
- Elementos interativos claramente identificáveis
- Feedback visual e textual
- Navegação por teclado
- HTML semântico
- Labels e ARIA attributes
- Responsividade em todos os breakpoints

## Convenções de Código �
- Prettier para formatação
- ESLint para linting
- Commits semânticos
- Nomenclatura em camelCase
- Tipagem estrita TypeScript
- Componentes standalone
- Signals para estado (Angular 18)
- RxJS para streams de dados

## Build para Produção �🚀
```bash
ng build --configuration production
```

Os arquivos de build serão gerados no diretório `dist/`.

### Otimizações de Produção
- Tree shaking
- Minificação de código
- Compressão de assets
- Cache busting
- Lazy loading de rotas

## Referências e Documentação 📚
- [Documentação Angular](https://angular.io/docs)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
