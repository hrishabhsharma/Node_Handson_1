const http = require("http")
const Data = [
    {
        "Ques - Create a route using http module and explain what is node by sending response in HTML and JSON format?": "Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model. A common task for a web server can be to open a file on the server and return the content to the client.",
        "Why Do We Use NodeJs?": {
            "1": "NodeJs is built on Google Chrome's V8 engine, and for this reason its execution time is very fast and it runs very quickly.",
            "2": "There are more than 50,000 bundles available in the Node Package Manager and for that reason developers can import any of the packages any time according to their needed functionality for which a lot of time is saved.",
            "3": "As NodeJs is open-source and it is nothing but a JavaScript framework , so for the developers who are already used to JavaScript, for them starting developing their projects with NodeJs is very easy.",
            "4": "As NodeJs do not need to wait for an API to return data , so for building real time and data intensive web applications, it is very useful. It is totally asynchronous in nature that means it is totally non-blocking.",
            "5": "The loading time for an audio or video is reduced by NodeJs because there is better synchronization of the code between the client and server for having the same code base."
        },
        "Features of NodeJs" : {
            "1": "Asynchronous in Nature and Event driven: The servers made with the NodeJs never waits for the from an API. Without waiting for the data from the API, it directly moves to the next API. So all the APIs of NodeJS are totally non-blocking in nature. In order to receive and track all the responses of the previous API requests, it follows an event driven mechanism. Hence we can say that all the NodeJs API are non-blocking in nature.",
            "2": "Single Threaded Architecture: With event looping, a single threaded architecture is followed by NodeJs and for this architecture makes NodeJs more scalable. In contrast to other servers, limited threads are created by them for processing the requests. Whereas for the event driven mechanism, the NodeJS servers reply in a non-blocking or an asynchronous manner and for this reason NodeJS becomes more scalable. If we compare NodeJs with other traditional servers like Apache HTTP servers, then we can say NodeJs handles a larger number of requests. A single threaded program is followed by NodeJS and this allows NodeJs to process a huge amount of requests.",
            "3": "Compatibility on the cross platforms: Different types of systems like Windows, UNIX, LINUX, MacOS and other mobile devices can use NodeJs. For generating a self-sufficient execution, it can be paired with any appropriate package.",
            "4": "Quick Execution time for code: V8 JavaScript runtime motor is used by NodeJs and this is also used by Google chrome. A wrapper is provided for the JavaScript by the hub and for that reason the runtime motor becomes faster and for this reason inside NodeJs, the preposition process of the requests also become faster.",
            "5": "No Buffering : The data is never buffered in NodeJs application."
        }
        
    }
]
http.createServer((req,res)=>{
    if(req.url == '/nodewithhtml'){
        res.write("<html><body>")
        res.write("<h2>Ques - Create a route using http module and explain what is node by sending response in HTML and JSON format?</h2>")
        res.write("<p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. </br> Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. </br> Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</br>A common task for a web server can be to open a file on the server and return the content to the client.</p>")
        res.write("<h4>Why Do We Use NodeJs?</h4>")
        res.write("<p>There are many reasons for which we prefer using NodeJs for the server side of our application, some of them are discussed in the following:</p>")
        res.write("<ul>")
        res.write("<li>NodeJs is built on Google Chrome's V8 engine, and for this reason its execution time is very fast and it runs very quickly.</li>")
        res.write("<li>There are more than 50,000 bundles available in the Node Package Manager and for that reason developers can import </br> any of the packages any time according to their needed functionality for which a lot of time is saved.</li>")
        res.write("<li>As NodeJs is open-source and it is nothing but a JavaScript framework , so for the developers who are already used to </br> JavaScript, for them starting developing their projects with NodeJs is very easy.</li>")
        res.write("<li>As NodeJs do not need to wait for an API to return data , so for building real time and data intensive web applications, </br> it is very useful. It is totally asynchronous in nature that means it is totally non-blocking.</li>")
        res.write("<li>The loading time for an audio or video is reduced by NodeJs because there is better synchronization of the code between </br> the client and server for having the same code base.</li>")
        res.write("</ul>")
        res.write("<h4>Features of NodeJs</h4>")
        res.write("<ul>")
        res.write("<li>Asynchronous in Nature and Event driven: The servers made with the NodeJs never waits for the from an API. Without waiting </br> for the data from the API, it directly moves to the next API. So all the APIs of NodeJS are totally non-blocking in nature.</br> In order to receive and track all the responses of the previous API requests, it follows an event driven mechanism. Hence we can </br> say that all the NodeJs API are non-blocking in nature.</li>")
        res.write("<li>Single Threaded Architecture: With event looping, a single threaded architecture is followed by NodeJs and for this architecture</br> makes NodeJs more scalable. In contrast to other servers, limited threads are created by them for processing the requests.</br> Whereas for the event driven mechanism, the NodeJS servers reply in a non-blocking or an asynchronous manner and for this</br> reason NodeJS becomes more scalable. If we compare NodeJs with other traditional servers like Apache HTTP servers, then</br> we can say NodeJs handles a larger number of requests. A single threaded program is followed by NodeJS</br> and this allows NodeJs to process a huge amount of requests.</li>")
        res.write("<li>Compatibility on the cross platforms: Different types of systems like Windows, UNIX, LINUX, MacOS and other mobile devices</br> can use NodeJs. For generating a self-sufficient execution, it can be paired with any appropriate package.</li>")
        res.write("<li>Quick Execution time for code: V8 JavaScript runtime motor is used by NodeJs and this is also used by Google chrome. A wrapper</br> is provided for the JavaScript by the hub and for that reason the runtime motor becomes faster and for this reason inside NodeJs,</br> the preposition process of the requests also become faster.</li>")
        res.write("<li>Scalable: Nowadays, scalable software is demanded by most of the companies. One of the most pressing concerns in Software</br> Development is addressed by NodeJs and that is scalability. Concurrent requests can be handled very efficiently using NodeJs.</br> A cluster module is used by NodeJs for managing the load balancing for all the active CPU cores. The most appealing feature</br> of NodeJs is that it can partition the applications horizontally and this partition procedure is mainly achieved by it due to the </br>use of child processes. Using this feature, the distinct app versions are provided to the different target audiences and also for</br> customization it allows them for catering to the client preferences.</li>")
        res.write("<li>No Buffering : The data is never buffered in NodeJs application.</li>")
        res.write("</ul>")
        res.write("</body></html>")
    }
    else if(req.url == '/nodewithjson'){
        const Info = JSON.stringify(Data)
        res.write(Info)
    }
    else{
        res.write("<html><body>")
        res.write("<p>jump to nodewithhtml</p>")
        res.write("<p>OR jump to nodewithjson</p>")
        res.write("</body></html>")
    }
    res.end()
})
.listen(3000 , ()=>{
    console.log("Server is Live Now")
})