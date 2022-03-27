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

# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# WORKDIR /app
# COPY composer.json .
# RUN composer install --no-scripts
# COPY . . 

# CMD php artisan serve --host=0.0.0.0 --port=80
# Run this command after builing this container - docker run -p 8081:80 <image_name>

# Configure this also
# RUN chown -R www-data.www-data storage
# RUN chown -R www-data.www-data vendor
# RUN sudo chown -R www-data.www-data boostrap/cache

# php artisan migrate:fresh 
# php artisan key:generate 

