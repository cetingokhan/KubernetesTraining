# Deployment
Create a self-signed certificate.
```
cd metrics-server
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

Use the `Dockerfile` inside `metrics-server` to build the docker image of the Node webserver.

Apply the manifests from the `manifests` directory.