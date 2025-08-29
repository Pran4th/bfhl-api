# BFHL API

A REST API for processing an array of inputs and returning numbers, alphabets, special characters, and calculated data.

## Features

- POST `/bfhl` endpoint
- Returns:
  - `is_success` – status of the operation
  - `user_id` – formatted as `full_name_ddmmyyyy`
  - `email` – email ID
  - `roll_number` – college roll number
  - `odd_numbers` – array of odd numbers (as strings)
  - `even_numbers` – array of even numbers (as strings)
  - `alphabets` – array of uppercase alphabets
  - `special_characters` – array of special characters
  - `sum` – sum of all numbers (as string)
  - `concat_string` – reversed alphabets in alternating caps

## Running Locally

1. Clone the repo:
```bash
git clone https://github.com/Pran4th/bfhl-api.git
cd bfhl-api
