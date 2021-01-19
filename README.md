# Exchange Rates Api (Enye Challenge)

The Exchange rates api is nodejs based Api that gets live currency rates from Exchange Rates Api (https://exchangeratesapi.io/)

## Installation

Install the packages required by running

```bash
npm install
```

## Usage

Make a **GET** request to https://ken-enye-backend.herokuapp.com/api/rates

The following QUERY Parameters are allowed:

- base: The currency with which to compare the other currencies
- currency(optional): A list of Currencies required, separated by commas e.g EUR,USD,GBP

Lowercase parameters are allowed e.g **usd,eur**.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)