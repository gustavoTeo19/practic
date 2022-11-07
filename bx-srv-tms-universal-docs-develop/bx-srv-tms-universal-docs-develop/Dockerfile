FROM node:12 as bx-srv-tms-universal-providers

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
# COPY ./package.json /usr/src/app/

# Copying source files
COPY ./ /usr/src/app

#// 172.19.23.253 	ws.bluex.cl
#// 172.19.23.253 	relwebws.bethia.cl
#// 172.19.3.159 	2k3data.bethia.cl


RUN npm install

# Building app
# RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "develop"
