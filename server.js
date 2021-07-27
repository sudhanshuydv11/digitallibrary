const exps=require("express");
const app=exps();
const port = process.env.PORT || 3000; 
const path = require('path');
app.get('/',function(req,res){
    res.sendFile(__dirname+'/html/project_1.html')
});
app.get('/book',function(req,res){
res.sendFile(__dirname+'/html/grid.html')
});
app.post('/book',function(req,res){
    res.sendFile(__dirname+'/html/grid.html')
});
app.post('/book/hallas',function(req,res){
    res.download(__dirname+"/books/Basic Antennas Understanding Practical Antennas and Design by Joel R. Hallas (z-lib.org).pdf")
})
app.post("/book/s&s",function(req,res){
    res.download(__dirname+"/books/Oppenheim_Signals_and_Systems.pdf");
});
app.post("/book/mmmano",function(req,res){
    res.download(__dirname+'/books/Digital Design With an Introduction to the Verilog HDL by M. Morris Mano, Michael D. Ciletti (z-lib.org).pdf');
});
app.post("/book/shaykin",function(req,res){
    res.download(__dirname+"/books/Communication Systems 4th Edition by Simon Haykin (z-lib.org).pdf");
});
app.post("/book/balanis",function(req,res){
    res.download(__dirname+'/books/Constantine A. Balanis - Antenna Theory_ Analysis and Design, 3rd Edition-Wiley-Interscience (2005).pdf');
});
app.post("/book/oppenheim",function(req,res){
    res.download(__dirname+'/books/Prentice Discrete-Time Digital Signal Processing by Oppenheim, Schafer  Buck (z-lib.org).pdf');
});
app.post("/book/schaum",function(req,res){
    res.download(__dirname+'/books/Schaum_Analog_and_Digital_Communcations - By www.EasyEngineering.net.pdf');
});
app.post("/book/skmitra",function(req,res){
    res.download(__dirname+'/books/Digital Signal Processing A Computer-Based Approach, 2e with DSP Laboratory using MATLAB by Sanjit K Mitra (z-lib.org).pdf');
});
app.post("/book/sadiku",function(req,res){
    res.download(__dirname+'/books/Fundamentals of Electric Circuits by Charles Alexander, Matthew Sadiku (z-lib.org).pdf');
});
app.post("/book/sedrasmith",function(req,res){
    res.download(__dirname+'/books/Adel S. Sedra, Kenneth C. Smith. - Microelectronic Circuits.pdf');
});
app.post("/book/millmangrabel",function(req,res){
    res.download(__dirname+"/books/Microelectronics by Jacob Millman, Arvin Grabel (z-lib.org).pdf");
});
app.post("/book/behzadrazavi",function(req,res){
    res.download(__dirname+'/books/Design of Analog CMOS Integrated Circuits by Behzad Razavi (z-lib.org).pdf');
});
app.post("/book/westeharris",function(req,res){
    res.download(__dirname+'/books/CMOS VLSI Design A Circuits and Systems Perspective (4th Edition) by Neil H. E. Weste, David Money Harris (z-lib.org).pdf');
});
app.use(exps.static(path.join(__dirname+ '/books')));
app.use(exps.static(path.join(__dirname+ '/html')));
app.listen(port,function(){
    console.log("Server is running at "+port);
});


