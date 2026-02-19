# Extend official Jekyll image with ImageMagick + pkg-config for rmagick gem
FROM jekyll/jekyll:4.2.2

# Install ImageMagick + libsass (for jekyll-sass-converter 2.x, avoids sass-embedded Docker issues)
USER root
RUN apk add --no-cache imagemagick imagemagick-dev pkgconfig libjpeg-turbo-dev libpng-dev libsass-dev
USER jekyll

WORKDIR /srv/jekyll
