# Employee Attendance Web App

This is a school project assigned by my teacher. The goal is to create a simple web app that allows employees to log their attendance and view it in a table.  

Currently, the app is **frontend-only**, with the main files being:

- `index.html`
- `styles.css`
- `script.js`

Other files will become relevant once the backend with a database is added.

With every commit, my Raspberry Pi automatically clones the repo and hosts the site.

---

## Setting Up GitHub → Raspberry Pi Workflow

There are multiple ways to do this; here’s how I set it up:

### Step 1: Install Webhook
A webhook listens on a specific port and triggers a script when activated.

```bash
sudo apt install webhook
```
  This listens on a specific port and, when triggered, launches a script you specify.
    sudo apt install webhook

  Now you need to create a config with the scrit, essentially telling it what to do after it is triggered
    sudo nano /etc/webhook.conf
  Paste this in:
  ```json
    [
  {
    "id": "deploy",
    "execute-command": "/usr/bin/git",
    "command-working-directory": "/var/www/html",
    "pass-arguments-to-command": [
      { "source": "string", "name": "pull" }
    ]
  }
]
```

now you run it:
```
  webhook -hooks /etc/webhook.conf -port 9000
```
### Step 2: Forward the webhook with Cloudflare tunnel (cloudflared)
Now you forward the port with cloudflare tunnel like this:
<img width="1612" height="570" alt="image" src="https://github.com/user-attachments/assets/601121e4-5ef6-452c-bd1c-0c1c9d809a0d" />

### Step 3: Workflow
now write a ```.github/workflows/deploy.yml```
```yaml
name: Deploy to Pi

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Pi deploy
        run: |
          curl -X POST //your forwarded address from cloudflare//
```
###Host a Website
and now for the last 3 steps
  Host the website
  ```
    cd /var/www/html
    python3 -m http.server 8765
```
###Forward the site with Cloudflare tunnel (again but this time the actual website)
  Forward this port with cloudflare tunnel and now you have a website

###Most important step
    Feel slightly supperior 


