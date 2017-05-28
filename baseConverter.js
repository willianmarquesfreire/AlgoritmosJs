function baseConverterNoRecursive(n, base) {
    var str = '', digits = '0123456789ABCDEF', rem;

    while (n > 0) {
        str = digits[Math.floor(n % base)] + str;
        n = Math.floor(n / base);
    }

    return str || 0;

}

function baseConverter(n, base) {
    var digits = '0123456789ABCDEF';
    if (n > 0) {
        return baseConverter(Math.floor(n / base), base) + digits[(n % base)];
    }

    return '';
}