$(document).ready(function(){
    $(".booking").click(function(){

      // alert("OK");
    
      var venuename=$(this).data('venuename');
      // console.log (id);
      var Booking ={    
        venuename:venuename
      }
      var itemlist=localStorage.getItem("Booking");
      var itemlistArray;
      if(itemlist==null){
        itemlistArray=[];
      }else{
        itemlistArray=JSON.parse(itemlist);
      }
        itemlistArray.push(Booking); 
      
      var itemString=JSON.stringify(itemlistArray);
      localStorage.setItem("Booking", itemString);
    })
  $(".jewelry").click(function(){

    // alert("OK");

    var jname=$(this).data('jname');
    var jprice=$(this).data('jprice');
    // console.log (jname);
    var Booking ={
      jname:jname, 
      jprice:jprice 
    }

    var itemlist=localStorage.getItem("Booking");
    var itemlistArray;
    // console.log(itemlistArray)
    if(itemlist==null){
      itemlistArray=[];
    }else{
      itemlistArray=JSON.parse(itemlist);
    }
      itemlistArray.push(Booking); 
    // console.log(itemlist);
    
    var itemString=JSON.stringify(itemlistArray);
    localStorage.setItem("Booking", itemString);
  })
  $(".dress").click(function(){                      
    
    // alert("OK");
    var dname=$(this).data('dname');
    var dprice=$(this).data('dprice');
    // console.log (dname);
    var Booking ={
      dname:dname,
      dprice:dprice
    }
    
    var itemlist=localStorage.getItem("Booking");
    var itemlistArray;
    if(itemlist==null){
      itemlistArray=[];
    }else{
      itemlistArray=JSON.parse(itemlist);
    }
      itemlistArray.push(Booking); 
    // console.log(itemlist);
    
    var itemString=JSON.stringify(itemlistArray);
    localStorage.setItem("Booking", itemString);
  })
  $(".bouquet").click(function(){                      
    
    // alert("OK");
    var bname=$(this).data('bname')
    var bprice=$(this).data('bprice')
    // console.log (dname);
    var Booking ={
      bname:bname,
      bprice:bprice
    }
    
    var itemlist=localStorage.getItem("Booking");
    var itemlistArray;
    if(itemlist==null){
      itemlistArray=[];
    }else{
      itemlistArray=JSON.parse(itemlist);
    }
      itemlistArray.push(Booking); 
    // console.log(itemlist);
    
    var itemString=JSON.stringify(itemlistArray);
    localStorage.setItem("Booking", itemString);
  })
  $(".cake").click(function(){                      
    
    // alert("OK");
    var cname=$(this).data('cname')
    var cprice=$(this).data('cprice')
    // console.log (dname);
    var Booking ={
      cname:cname,
      cprice:cprice
    }
    
    var itemlist=localStorage.getItem("Booking");
    var itemlistArray;
    if(itemlist==null){
      itemlistArray=[];
    }else{
      itemlistArray=JSON.parse(itemlist);
    }
      itemlistArray.push(Booking); 
    // console.log(itemlist);
    
    var itemString=JSON.stringify(itemlistArray);
    localStorage.setItem("Booking", itemString);
  })
})