package com.example.SpringCloudServer.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RefreshScope
class ServerHelloController {

    // arquivo config/application.properties
    @Value("${hello.message}")
    private String helloMessage;

    @GetMapping("/hello-server")
    public String getHelloMessageFromConfigServer() {
        return "Mensagem do servidor de configuração: " + helloMessage;
    }
}