const http =require("http")
const port=3561;
const hostname ="localhost"; 
const fs = require('fs');
const aboutcss = fs.readFileSync('about.css')

const contactcss = fs.readFileSync('contact.css')
const coursecss = fs.readFileSync('course.css')

const about = fs.readFileSync('about.html')


const contact = fs.readFileSync('ContactUs.html')
const course = fs.readFileSync('course.html')



const server = http.createServer((req,resp)=>{
    if(req.url=="/"){
   resp.writeHead(200,{"content-type":"text/html",});
   const filecontent=fs.readFileSync('index.html');
   const indexcss = fs.readFileSync('index.css')
   

  resp.write(filecontent)
  resp.write(indexcss)
resp.end()}


else if(req.url=="/about")
{
    resp.writeHead(200,{"content-type":"text/html",});
    const filecontent=fs.readFileSync('about.html');
   resp.write(filecontent)
 resp.end()  
}
else if(req.url=="/contact.html")
{
   return resp.end(contact)
}
else if(req.url=="/course.html")
{
   return resp.end(course)
}
else if( req.url!="/home"&& req.url!="/about" &&req.url!="/course" &&req.url!="/contact" ) {
    return resp.end("<h3> ERROR 404 : PAGE NOT FOUND </H3>")
}

});


server.listen(port,hostname, ()=>{
    console.log("server is working on")
})


