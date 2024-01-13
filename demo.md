# STEPS

### Call my custom action on CY
```
- name: Send notification
  id: send-notification
  uses: ./notify
```

### Create send notification fonction
```
function sendNotification(url, message) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      message
    }
  };

   return fetch(url, options)
    .then(response => response.json())
};
```

```
(async () => {
    await sendNotification(url, message);
})();
```

### Use @actions library
```
const core = require("@actions/core")
```
```
core.setFailed(e)
```
## Add inputs on YAML file
```
inputs:
  url:
    description: ''
    required: true
  message:
    description: ''
    required: true
```

## Add inputs on CI file
```
with:
  url: "https://mock.codes"
  message: "My message"
```

### Get params
```
const message = core.getInput("message");
const url =  core.getInput("url");
```

## ADD output
```
outputs:
  my-output:
    description: 't'
```

```
 core.setOutput("my-output", "send notification action response");
```

### Use secret
```
token:
  description: 'identification token'
  required: false
```

```
token:  ${{ secrets.NOTIFICATION_TOKEN }}
```

### Share my custom action 

### Display notification output
- name: Display send notification output
  run: echo "${{steps.send-notification.outputs.my-output}}"