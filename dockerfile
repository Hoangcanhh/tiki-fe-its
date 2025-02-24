# Sử dụng Node.js làm base image
FROM node:14

# Đặt thư mục làm việc
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở port 5000
EXPOSE 5000

# Lệnh để chạy ứng dụng
CMD ["node", "server.js"]