
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd $DIR

#minification of JS files
find -type f \
    -name "*.js" ! -name "*.min.*" ! -name "vfs_fonts*" \
    -exec echo {} \; \
    -exec /usr/bin/uglifyjs -o {}.min {} \; \
    -exec rm {} \; \
    -exec mv {}.min {} \;

#minification of CSS files
find -type f \
    -name "*.css" ! -name "*.min.*" \
    -exec echo {} \; \
    -exec /usr/bin/uglifycss --output {}.min {} \; \
    -exec rm {} \; \
    -exec mv {}.min {} \;

#minification of HTML files
find -type f \
    -name "*.html" ! -name "*.min.*" \
    -exec echo {} \; \
    -exec /usr/bin/html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true --output {}.min {} \; \
    -exec rm {} \; \
    -exec mv {}.min {} \;
