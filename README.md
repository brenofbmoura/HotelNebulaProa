# 🌌 Hotel Nebula — Banco de Dados NoSQL

Projeto de modelagem e implementação de banco de dados não relacional para a rede de hotéis **Hotel Nebula**, desenvolvido com **MongoDB**.

---

## 📁 Estrutura do repositório

```
hotel-nebula/
├── PARTE1_Modelagem.md     → Modelagem, decisões e exemplos JSON
├── PARTE2_Insercao.js      → Script de criação e inserção de dados
├── PARTE3_Consultas.js     → Consultas de extração e análise
└── README.md
```

---

## 🚀 Como executar

### Pré-requisitos
- MongoDB instalado
- `mongosh` (MongoDB Shell) disponível no terminal

### Passo 1 — Popular o banco
```bash
mongosh PARTE2_Insercao.js
```

### Passo 2 — Executar as consultas
```bash
mongosh PARTE3_Consultas.js
```

---

## 🗂️ Coleções do banco

| Coleção | Descrição |
|---|---|
| `hospedes` | Dados cadastrais dos hóspedes |
| `quartos` | Quartos e suas características |
| `reservas` | Reservas feitas pelos hóspedes |
| `hospedagens` | Check-in/checkout e serviços consumidos |
| `pagamentos` | Pagamentos das hospedagens |
| `funcionarios` | Funcionários do hotel |
| `feedbacks` | Avaliações dos hóspedes |

---

## 🔍 Consultas disponíveis (Parte 3)

- Quartos por características (vista para o mar, banheira, luxo, capacidade)
- Hóspedes com mais de uma reserva
- Faturamento por mês e anual
- Períodos com mais ocupação
- Ranking de avaliações por quarto

---

## 🛠️ Tecnologias

- **MongoDB** — banco de dados não relacional
- **MongoDB Shell (mongosh)** — execução dos scripts
