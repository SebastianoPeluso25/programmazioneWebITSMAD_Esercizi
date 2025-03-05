
## Answer

# - What does ?v=1.0 do? 

?v=1.0 at the URL (./css/styles.css?v=1.0) is a query string used to force the browser to reload the CSS file when the version is updated.

Browsers tend to cache static files like CSS, JavaScript, and images to avoid downloading them every time. If you edit styles.css but the browser still has an old cached copy, it may not reload the updated version.

Adding ?v=1.0 makes the browser think of it as a different URL than ?v=1.1, so it downloads the updated file. This is called cache busting.

# - How does the browser cache work?


Your browser's cache stores local copies of files downloaded from a website (CSS, JavaScript, images, etc.) to improve performance and reduce bandwidth consumption.

1. First time loading → The browser downloads the file and stores it in the local cache.

2. Subsequent visits → If the file is still valid (based on HTTP headers such as Cache-Control and Expires), the browser loads it from the cache instead of requesting it again.

3. Cache busting → If the URL changes (?v=1.1), the browser sees a "new" file and downloads it again.

