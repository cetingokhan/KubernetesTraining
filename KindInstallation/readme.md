# Installation


https://github.com/kubernetes-sigs/kind

On Windows:
```
curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.12.0/kind-windows-amd64
move kind-windows-amd64.exe kind.exe
```

Test Cluster
```
kind create cluster
```

To delete your cluster use:
```
kind delete cluster
```

To create a cluster from Kubernetes source:
```
kind create cluster --name k8s-sandbox --config kind-config.yaml
```
