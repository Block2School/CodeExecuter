# CodeExecuter

> This API execute given code.
>
> Malicious code effects are still undetermined.

## Currently supported languages

- JavaScript (js)
- P̶y̶t̶h̶o̶n̶ (py) # Not supported yet

## Endpoints

### `POST` /execute

| Parameter  | Description                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| "code"     | Should contain the script that needs to be executed                                                                           |
| "language" | Language that the script is written in for example: java, cpp, etc. (Check language above) |
| "input"    | In case the script requires any kind of input for execution, leave empty if no input required                                 |

### Example Body

```json
{
  "code": "console.log('Hello World!')",
  "language": "js",
  "input": ""
}
```

### Example Response

```json
{
    "success": true,
    "timestamp": "2022-09-04T08:33:56.645Z",
    "output": "salut\n",
    "error": "",
    "language": "js",
    "version": "16.13.2"
}
```

### Special thanks

This project is based on the work of [Jeroen Janssens](https://github.com/Jaagrav/CodeX-API)
