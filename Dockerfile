FROM jupyter/tensorflow-notebook

USER root

RUN wget -O - https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs

RUN npm install -g ijavascript && \
    ijs --ijs-install=global

RUN chown -R $NB_USER /home/$NB_USER && \
    rm -rf /home/$NB_USER/.local/share/jupyter

USER $NB_USER
