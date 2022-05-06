const express = require('express')
const port = 6443
var https = require('https');
const fs = require('fs')
const app = express()

var currVal = 1

app.get('/apis/custom.metrics.k8s.io/v1beta1/', (req, res) => {
    res.send({
        "status": "healthy"
    })
})

app.get('/update', (req, res) => {
    currVal = req.query.q
    res.send({
        currentVal: currVal
    })
})

app.get('/apis/custom.metrics.k8s.io/v1beta1/namespaces/default/services/my-metrics-exporter/instance', (req, res) => {
    res.send({
        kind: "MetricValueList",
        apiVersion: "custom.metrics.k8s.io/v1beta1",
        metadata: {
            selfLink: "/apis/custom.metrics.k8s.io/v1beta1/"
        },
        items: [
            {
                describedObject: {
                    kind: "Service",
                    namespace: "default",
                    name: "my-metrics-exporter",
                    apiVersion: "/v1beta1"
                },
                metricName: "instance",
                timestamp: new Date(),
                value: currVal
            }
        ]
    })
})

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(port, () => {
    console.log('Listening...')
})
