package main

import (
	"crypto/tls"
	"encoding/json"
	"fmt"
	"github.com/mauvalente/fullcycle2022/goemail/email"
	"github.com/mauvalente/fullcycle2022/goemail/kafka"
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
	gomail "gopkg.in/mail.v2"
)

func main() {

	var emailCh = make(chan email.Email)
	var msgChan = make(chan *ckafka.Message)

	d := gomail.NewDialer{
		"smtp.mailgun.org",
		587,
		"exemplo@schoolafnet.com",
		"ldksjaldksjadlksajdlksajdlskajdlsakdjk",
	}
	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	es := email.NewMailSender()
	es.From = "exemplo@schoolafnet.com"
	es.Dialer = d

	go es.Send(emailCh)

	configMap := &ckafka.ConfigMap{
		"bootstrap.servers" : "kafka:9094",
		"client.id" : "emailapp",
		"group.id" : "emailapp",
	}

	topics := []string{"emails"}
	consumer := kafka.NewConsumer(configMap, topics)
	go consumer.Consume(msgChan)

	for msg := range msgChan {
		var input email.Email
		json.Unmarshal(msg.Value, &input)
		fmt.Println("Recebendo mensagens")
		emailCh <- input
	}
}