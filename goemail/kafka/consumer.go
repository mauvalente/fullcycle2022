package kafka

import ckafka "github.com/confluentinc/confluent-kafka-go/kafka"

type Consumer struct {
	Topics    []string
	ConfigMap *ckafka.ConfigMap
}

func NewConsumer(configMap *ckafka.ConfigMap, topics []string) *Consumer {
	return &Consumer{
		Topics: topics,
		ConfigMap: configMap
	}
}

func (c *Consumer) Consumer(msgChan chan *ckafka.Message) error {
	consumer, err := ckafka.NewConsumer(c.ConfigMap)
	if err != nil {
		panic(err)
	}
	err = consumer.SubscribeTopics(c.Topics, nil)
	if err != nil {
		panic(err)
	}
	for {
		mgs, err := consumer.ReadMessage(-1)
		if err == nil {
			msgChan <- msg
		}
	}
}