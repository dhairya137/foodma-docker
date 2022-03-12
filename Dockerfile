FROM php:7.3-fpm

RUN apt-get update && apt-get install -y \
    build-essential \
    libzip-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libcurl4-gnutls-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    nano \
    curl \
    libxml2-dev 

RUN docker-php-ext-install pdo pdo_mysql bcmath mbstring xml zip gd tokenizer

RUN curl -o ioncube.tar.gz http://downloads3.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz \
    && tar -xvvzf ioncube.tar.gz \
    && mv ioncube/ioncube_loader_lin_7.3.so `php-config --extension-dir` \
    && rm -Rf ioncube.tar.gz ioncube \
    && docker-php-ext-enable ioncube_loader_lin_7.3

# RUN chown -R www-data.www-data storage
# RUN sudo chown -R www-data.www-data boostrap/cache
# RUN cd /tmp \
# 	&& curl -o ioncube.tar.gz http://downloads3.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz \
#     && tar -xvvzf ioncube.tar.gz -C /usr/local \
#     # && rm -Rf ioncube.tar.gz ioncube \
#     && echo "zend_extension=/usr/local/lib/php/extensions/no-debug-non-zts-20151012/ioncube_loader_lin_7.3.so" > /usr/local/etc/php/conf.d/00_docker-php-ext-ioncube_loader_lin_7.3.ini

# # use own method for ioncube