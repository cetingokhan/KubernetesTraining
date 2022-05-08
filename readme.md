
#Create Namespaces:
```
kubectl get namespaces

kubectl create namespace dogustek-ns

kubectl get namespaces
```


#Create Pods:
```
kubectl get pods

type create-first-pod.yaml

kubectl create -f create-first-pod.yaml

kubectl --namespace=dogustek-ns get pods

kubectl --namespace=dogustek-ns get pods -o wide
```

#Remove Pod:
```
kubectl --namespace=dogustek-ns delete pod firstpod
```


#Network:
```
ip route


kubectl get pods --all-namespaces -o wide
```

#DNS:
```
kubectl get pods --all-namespaces -o wide
kubectl --namespace=dogustek-ns exec -it firstpod /bin/bash
cat /etc/resolv.conf
```


#ReplicaSet:
```
kubectl --namespace=dogustek-ns create -f replica-sample.yaml

kubectl --namespace=dogustek-ns describe rs/backendapi

kubectl get pods -A

kubectl scale rs/backendapi --replicas=4 -n dogustek-ns

kubectl scale rs/backendapi --replicas=1 -n dogustek-ns
```



#Service:
```
kubectl --namespace=dogustek-ns create -f service-sample.yaml

kubectl --namespace=dogustek-ns describe service my-backendapi

kubectl --namespace=dogustek-ns get pods

#kubectl port-forward service/my-backendapi 65001:65001

kubectl proxy --port=65001

curl -k http://127.0.0.1:65001/api/v1/namespaces/default/services/my-backendapi/proxy/test

docker exec -it <dockerid> bash

curl -k 10.96.2.210:65001/test

kubectl scale rs/mybackendapi -replicas=4

kubectl --namespace=dogustek-ns get pods

curl -k 10.96.2.210:65001/test
```

#Deployment:
```
kubectl create -f deployment-sample.yaml

kubectl create -f service-sample.yaml

-> change version of image on deployment yaml or execute following command

kubectl set image deployment.v1.apps/sampleapiv2-deployment sampleapiv2=cetetorunu/dogusteknolojik8strainingtestapi:v2

kubectl get pods

curl -k 10.96.2.210:65001/test
```





#AutoScale






#SampleContainer
```
docker build -f C:\Personal\KubernetesTraining\K8sTestAPI\K8sTestAPI\K8sTestAPI\Dockerfile -t cetetorunu/dogusteknolojik8strainingtestapi:v1 .
```


