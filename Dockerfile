FROM node:lts as dependencies
WORKDIR /teamup
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /teamup
COPY . .
COPY --from=dependencies /teamup/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /teamup
ENV NODE_ENV production

COPY --from=builder /teamup/public ./public
COPY --from=builder /teamup/package.json ./package.json
COPY --from=builder /teamup/.next ./.next
COPY --from=builder /teamup/node_modules ./node_modules

EXPOSE 2000
CMD ["npm", "start"]