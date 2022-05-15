FROM fusuf/whatsasena:latest

RUN git clone https://github.com/umarlegend/Devil /root/Devil
WORKDIR /root/Devil/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "bot.js"]
