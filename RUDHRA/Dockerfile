FROM fusuf/whatsasena:latest

RUN git clone https://github.com/prince-rudh/Rudhra2.0 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/prince-rudh/files

CMD ["node", "bot.js"]
