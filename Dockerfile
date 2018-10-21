FROM ubuntu:16.04
MAINTAINER Rui Wu
LABEL description="This is for programming style checker."

RUN apt-get update \
  && apt-get install -y python3-pip python3-dev \
  && cd /usr/local/bin \
  && ln -s /usr/bin/python3 python \
  && pip3 install --upgrade pip

RUN apt-get install -y pylint


#copy source code
COPY . /programming_checker
WORKDIR /programming_checker
ENV PYTHONPATH /var/www/programming_checker


#install requirements
RUN pip install -r requirements.txt

EXPOSE 5000
ENV CHECKER_PORT 80
ENV CHECKER_HOST 0.0.0.0
EXPOSE ${CHECKER_PORT}

CMD python views.py -p 5000 --threaded