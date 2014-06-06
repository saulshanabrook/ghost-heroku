var redirect_paths = {};

function addOriginalPostRedirect(original_path, index, array) {
    var new_path = original_path.split('/').pop();
    redirect_paths[original_path] = new_path;
    redirect_paths[original_path + '/'] = new_path;
};

[
    '/post/87115623064/logging-django-model-instances',
    '/post/83525161085/how-thing-dont-get-made',
    '/post/80761618102/searching-for-gp',
    '/post/79682972771/when-best-practices-arent-best',
    '/post/76280188611/man-club',
    '/post/62641685254/simple-django-logging',
    '/post/58929140187/bradley-manning-and-howard-zinn',
    '/post/51784163098/profiling-django-templates',
    '/post/48125430836/full-traceback-on-django-admin-commands',
    '/post/48051159559/django-cache-with-testing',
].forEach(addOriginalPostRedirect);

module.exports = redirect_paths;
