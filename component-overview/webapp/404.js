window.pathSegmentsToKeep = (process.env.PUBLIC_URL || '/')
    .split('/')
    .filter(c => !!c).length;
