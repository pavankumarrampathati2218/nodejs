var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
var data = [
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Mouse.png',price : 1000,producttitle : 'Mouse',stylename : 'Dell',stylenumber:102.23,netquantity : 1,productcode : 123456739,availablesizes:4},
        {name : 'SonyTv.png',price : 50000,producttitle : 'Sony',stylename : 'Sony',stylenumber:102.12,netquantity : 1,productcode : 126456789,availablesizes:30/40},
        {name : 'Cooker.png',price : 5000,producttitle : 'Cooker',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Ironbox.png',price : 2000,producttitle : 'Ironbox',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Watch.png',price : 1000,producttitle : 'Watch',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Washingmechine.png',price : 35000,producttitle : 'Washingmechine',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Applephone.png',price : 350000,producttitle : 'Apple',stylename : 'Apple',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},
        {name : 'Laptop.png',price : 35000,producttitle : 'Laptop',stylename : 'Dell',stylenumber:102.22,netquantity : 1,productcode : 123456789,availablesizes:13/14},

               ]
            var Data = data;
            res.send(JSON.stringify(Data));
});
module.exports = router