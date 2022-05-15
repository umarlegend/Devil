{
    "name": "Devil",
    "description": "A simple WhatsApp bot.",
    "logo": "https://i.ibb.co/d7DLjJZ/tdtod.jpg",
    "keywords": ["whatsapp", "simi", "Leon", "Bot", "bot", "api", "ai"],
    "repository": "https://github.com/TOXIC-DEVIL/Leon",
    "website":   "https://api-toxic-devil.herokuapp.com/",
    "success_url": "https://api-toxic-devil.herokuapp.com/",
    "stack": "container",
    "env": {
        "LEON_SESSION": {
            "description": "Enter the copied SESSION here ( Copied code starting with LEON;;;eyJj & ending with 9In0= ).",
            "required": true
        },
        "SUDO": {
            "description": "It gives all the privileges to the users. => 91xxx,0,91xxx,0,91xxx...",
            "required": false
        },
        "LANGUAGE": {
            "description": "Bot languages. Malayalam => ML, Indonesia => ID, English => EN ( Enter any one only )",
            "required": true,
            "value": "EN"
        },
        "ALIVE_LOGO": {
            "description": "The image which should be sent with alive message. You can type 'default' for default image, 'false' for no image ( sends as text ) or you can enter your own image url.",
            "required": true,
            "value": "default"
        },
        "ANTI_LINK": {
            "description": "It makes the bot Antilink.",
            "required": true,
            "value": "false"
        },
        "CHAT_MODE": {
            "description": "If you type false, the bot will works in both group and private chats. Else if you type 'pc', the bot will only work in private chats. Else if you type 'gc', the bot will only works in group chats.",
            "required": true,
            "value": "false"
        },
        "ANTI_SPAM": {
            "description": "It automatically detects whether the message is spamming and removes them if they.",
            "required": true,
            "value": "false"
        },
        "ANTI_EMOJI": {
            "description": "It makes the bot Antiemoji. Restricts emoji.",
            "required": true,
            "value": "false"
        },
        "AUTO_INSTALL": {
            "description": "It automatically installs available external plugins in the bot if this is true.",
            "required": true,
            "value": "true"
        },
        "ERROR_ANALYZER": {
            "description": "If you type 'true', It automatically analyzes the error and brings reason and solution along with the error message.",
            "required": true,
            "value": "true"
        },
        "HANDLERS": {
            "description": "Symbol used infront of a command ( Prefix ). You can enter 'false' if you want no handler, else if you want multi handler, You can type 'multi'. NOTE : ONLY SYMBOL CAN BE USED, DON'T ENTER ANY OTHER LATIN WORDS / ALPHABETS, IF IT HAPPENS BOT WILL NOT WORK.",
            "required": true,
            "value": "^[!.#]"
        },
        "PRIVATE_DELETING_MESSAGE": {
            "description": "if you want to delete the command send by You/User set true else type false.",
            "required": true,
            "value": "false"
        },
        "OWNER_NAME": {
            "description": "Enter the owner name, You must enter your name ( This name will be shown on some commands )",
            "required": false,
            "value": "TOXIC DEVIL"
        },
        "AUTO_BIO": {
            "description": "Set true for auto date, time in biography.",
            "required": true,
            "value": "false"
        },
        "OWNER_NUMBER": {
            "description": "Enter the owner number, You must enter your number, Please don't enter the number with country code ( example : 91 for indian ) Also don't enter space & + on the number ( example : 91996132xxxx for indian ). ( This number will be shown on some commands )",
            "required": false,
            "value": "972528293474"
        },
        "SEND_READ": {
            "description": "The bot reads the incoming messages ( only commands sent by others so privacy is not breaking there ).",
            "required": true,
            "value": "false"
        },
        "HEROKU": {
            "description": "Type 'true' Iff the bot is running in  Heroku Else type 'false'.",
            "required": true,
            "value": "true"
        },
        "HEROKU_API_KEY": {
            "description": "Enter your heroku api key [ You can get it from here : https://dashboard.heroku.com/account Scroll down to end, click reveal button & Copy the API KEY ].",
            "required": true
        },
        "WORK_TYPE": {
            "description": "Bot Working Type. If you use “public”, everyone can use the bot. Else if you use “private”, only you can use your bot.",
            "required": true,
            "value": "private"
        },
        "HEROKU_APP_NAME": {
            "description": "Re-Enter the heroku app name. [ Same name which you have entered on 'app-name' ( above )].",
            "required": true
        },
        "ALIVE_MESSAGE": {
            "description": "Customizable Alive Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        }
    },
    "addons": [{
      "plan": "heroku-postgresql"
    }],
    "buildpacks": [{
      "url": "heroku-community/apt"
      }]
  }
