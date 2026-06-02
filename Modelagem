# Hotel Nebula — Parte 1: Origem do Sistema

## Proposta de Modelagem

O banco de dados do Hotel Nebula foi modelado em **MongoDB** (banco não relacional orientado a documentos).
A escolha do modelo não relacional se justifica pela **flexibilidade** dos dados hoteleiros: hóspedes têm perfis variados, quartos possuem características distintas, e serviços consumidos mudam a cada hospedagem.

---

## Coleções definidas

| Coleção | Descrição |
|---|---|
| `hospedes` | Dados cadastrais dos clientes |
| `quartos` | Informações e características dos quartos |
| `reservas` | Registro de reservas feitas pelos hóspedes |
| `hospedagens` | Check-in/check-out e serviços consumidos |
| `pagamentos` | Pagamentos vinculados às hospedagens |
| `funcionarios` | Profissionais que trabalham no hotel |
| `feedbacks` | Avaliações dos hóspedes sobre a estadia |

---

## Decisões de modelagem

### Reserva: referência ou embutido?
Os dados do hóspede na reserva são **referenciados** (`hospede_id`), não embutidos.
**Justificativa:** o hóspede pode atualizar seus dados (telefone, e-mail) e precisamos que isso reflita em todo o sistema. Embutir geraria inconsistência.

### Avaliações: dentro do quarto ou coleção própria?
As avaliações ficam em **coleção própria** (`feedbacks`).
**Justificativa:** avaliações crescem indefinidamente e precisam ser consultadas de forma independente (por período, por nota, por hóspede). Embutir no quarto tornaria o documento gigante e difícil de paginar.

### Serviços consumidos: dentro da hospedagem?
Sim, os serviços ficam **embutidos na hospedagem** como array.
**Justificativa:** os serviços de uma hospedagem são únicos àquele período. Não faz sentido separar — eles raramente são consultados fora do contexto da hospedagem.

### Histórico sem perder flexibilidade?
Usando **datas em todos os documentos** (`criado_em`, `check_in`, `check_out`) e mantendo registros mesmo após checkout, é possível reconstruir o histórico completo filtrando por período.

---

## Esquema das coleções com exemplos JSON

### hospedes
```json
{
  "_id": "ObjectId('665a001')",
  "nome": "Ana Paula Ferreira",
  "email": "ana.paula@email.com",
  "telefone": "+55 11 91234-5678",
  "cpf": "123.456.789-00",
  "nacionalidade": "Brasileira",
  "data_nascimento": "1990-03-15",
  "endereco": {
    "rua": "Rua das Flores, 123",
    "cidade": "São Paulo",
    "estado": "SP",
    "cep": "01310-100"
  },
  "criado_em": "2024-01-10T10:00:00Z"
}
```

### quartos
```json
{
  "_id": "ObjectId('665b001')",
  "numero": 101,
  "tipo": "Luxo",
  "andar": 1,
  "capacidade": 2,
  "preco_diaria": 450.00,
  "status": "disponivel",
  "caracteristicas": ["vista para o mar", "banheira", "ar-condicionado", "frigobar", "varanda"],
  "tamanho_m2": 35,
  "fotos": ["quarto101_a.jpg", "quarto101_b.jpg"],
  "criado_em": "2023-06-01T08:00:00Z"
}
```

### reservas
```json
{
  "_id": "ObjectId('665c001')",
  "hospede_id": "ObjectId('665a001')",
  "quarto_id": "ObjectId('665b001')",
  "check_in_previsto": "2024-04-10",
  "check_out_previsto": "2024-04-15",
  "num_hospedes": 2,
  "status": "confirmada",
  "origem": "site",
  "valor_total_previsto": 2250.00,
  "observacoes": "Hóspede solicitou travesseiro extra",
  "criado_em": "2024-03-20T14:30:00Z"
}
```

### hospedagens
```json
{
  "_id": "ObjectId('665d001')",
  "reserva_id": "ObjectId('665c001')",
  "hospede_id": "ObjectId('665a001')",
  "quarto_id": "ObjectId('665b001')",
  "check_in_real": "2024-04-10T14:00:00Z",
  "check_out_real": "2024-04-15T11:30:00Z",
  "num_diarias": 5,
  "status": "finalizada",
  "servicos_consumidos": [
    {
      "nome": "Café da manhã",
      "quantidade": 2,
      "preco_unitario": 45.00,
      "data": "2024-04-11T08:00:00Z"
    },
    {
      "nome": "Spa",
      "quantidade": 1,
      "preco_unitario": 200.00,
      "data": "2024-04-12T15:00:00Z"
    },
    {
      "nome": "Room Service",
      "quantidade": 3,
      "preco_unitario": 80.00,
      "data": "2024-04-13T20:00:00Z"
    }
  ],
  "valor_diarias": 2250.00,
  "valor_servicos": 530.00,
  "valor_total": 2780.00,
  "criado_em": "2024-04-10T14:00:00Z"
}
```

### pagamentos
```json
{
  "_id": "ObjectId('665e001')",
  "hospedagem_id": "ObjectId('665d001')",
  "hospede_id": "ObjectId('665a001')",
  "valor": 2780.00,
  "metodo": "cartao_credito",
  "parcelas": 2,
  "status": "pago",
  "data_pagamento": "2024-04-15T11:30:00Z",
  "criado_em": "2024-04-15T11:30:00Z"
}
```

### funcionarios
```json
{
  "_id": "ObjectId('665f001')",
  "nome": "Carlos Eduardo Lima",
  "cpf": "987.654.321-00",
  "cargo": "Recepcionista",
  "departamento": "Recepção",
  "email": "carlos.lima@hotelnebula.com",
  "telefone": "+55 21 99876-5432",
  "salario": 2800.00,
  "turno": "manhã",
  "data_admissao": "2022-08-01",
  "ativo": true,
  "criado_em": "2022-08-01T08:00:00Z"
}
```

### feedbacks
```json
{
  "_id": "ObjectId('665g001')",
  "hospede_id": "ObjectId('665a001')",
  "quarto_id": "ObjectId('665b001')",
  "hospedagem_id": "ObjectId('665d001')",
  "nota_geral": 9,
  "nota_limpeza": 10,
  "nota_atendimento": 9,
  "nota_localizacao": 8,
  "nota_custo_beneficio": 8,
  "comentario": "Excelente estadia! O quarto era lindo e o atendimento impecável. A vista para o mar foi incrível. Voltarei com certeza!",
  "recomendaria": true,
  "criado_em": "2024-04-16T09:00:00Z"
}
```
