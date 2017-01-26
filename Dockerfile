FROM node:argon

# Install react deps
ADD . /srv/react-cqc

# Run
EXPOSE 3000
CMD cd /srv/react-cqc && npm install && bash run.sh
