# Chatting application

This project was brought to you by **~~REDACTED~~** with great pleasure.

## Objective

Emulate a chat channel using the external API from **~~REDACTED~~** that deals with message storage.

## Usage

### Setup
Step by step commands:
Terminal 1:
```sh
docker-compose up -d
```

Terminal 1 to N:
```sh
$ docker-compose exec chat sh

$ CONV_ID=conversationID yarn chat
```
*I suggest using **~~REDACTED~~** as a conversationID*

With this you will have the everything running

### The good stuff

Using your favorite http request tool, send a **POST** to `http://localhost:3000/conversation/{conversationID}/message`

With the following data:
```json
{
    "name": "Me",
    "message": "hello there"
}
```

## Future work

- List historical messages when connecting to a conversation
- Register a websocket under a name
  - This would add the feature to have unique users only in a channel (but allow lurkers)