Arquivo _launch.json_

```json
{
  "configurations": [
    {
      "restart": true,
      "type": "node",
      "request": "attach",
      "name": "API Chat debug",
      "localRoot": "${workspaceRoot}/chat_api/code",
      "remoteRoot": "/app",
      "port": 9235,
      "address": "localhost",
      "protocol": "inspector"
    }
  ]
}
```
