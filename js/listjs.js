var weather={
  'Cloudy': 'CLOUDY',
  'Rain' : 'RAIN',
  'Sunny' : 'CLEAR_DAY',
  'Partly Cloudy' : 'PARTLY_CLOUDY_DAY',
  'Mostly Sunny' : 'CLEAR_DAY',
  'Mostly Cloudy' : 'CLOUDY',
  'Breezy' : 'WIND',
  'Scattered Thunderstorms' : 'SLEET',
  'Thunderstorms' : 'RAIN',
  'Scattered Showers' :'SLEET',
  'Showers' : 'SLEET'
};
var city={
  '台北市' : 'Taipei',
  '南京市' : 'Nanjing' ,
  '大阪市' : 'Osaka' ,
  '新北市' : 'New Taipei City',
  '台中市' : 'Taichung',
  '臺南市' : 'Tainan',
  '高雄市' : 'Kaohsiung',
  '基隆市' : 'Keelung',
  '桃園市' : 'Taoyuan',
  '新竹市' : 'Hsinchu ',
  '新竹縣' : 'Hsinchu',
  '苗栗縣' : 'Miaoli',
  '彰化縣' : 'Changhua',
  '南投縣' : 'Nantou',
  '雲林縣' : 'Yunlin' ,
  '嘉義市' : 'Chiayi City' ,
  '嘉義縣' : 'Chiayi',
  '屏東縣' : 'Pingtung',
  '宜蘭縣' : 'Yilan',
  '花蓮縣' : 'Hualien',
  '台東縣' : 'Taitung',
  '澎湖縣' : 'Penghu',
  '金門縣' : 'Kinmen',
  '連江縣' : 'Lianjiang'
};
var weather={
  'Cloudy': 'CLOUDY',
  'Rain' : 'RAIN',
  'Sunny' : 'CLEAR_DAY',
  'Partly Cloudy' : 'PARTLY_CLOUDY_DAY',
  'Mostly Sunny' : 'CLEAR_DAY',
  'Mostly Cloudy' : 'CLOUDY',
  'Breezy' : 'WIND',
  'Scattered Thunderstorms' : 'SLEET',
  'Thunderstorms' : 'RAIN',
  'Scattered Showers' :'SLEET',
  'Showers' : 'SLEET',
  'Clear' :'CLEAR_DAY',
  'Mostly Clear' :'CLEAR_DAY'
};
//change weather
var test=[];
var counter=0;
$(".region1").each(function(){
  var first = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
    var last = '%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
var a = $(this).text();      
console.log("LBJ1"+a);
counter=counter+1;
console.log(city[$(this).text()]);
console.log(first+city[$(this).text()]+last);
$.getJSON(first+city[$(this).text()]+last,function(data){
      var currentTemperature = data.query.results.channel.item.condition.temp  ; // 就可以找到現在溫度
      var getweather=data.query.results.channel.item.condition;
      getweather=getweather['text'];
      // test.push(getweather);
      // console.log("test:"+test);
      console.log("weather:"+getweather);
      //setVariable(a,currentTemperature );
      var id="route1";
      sky(getweather , id);
      console.log(getweather+","+id);
      // start animation!
    }
    )
}
);
//2
$(".region2").each(function(){
  var first = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
    var last = '%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
var a = $(this).text();      
console.log("LBJ2"+a);
counter=counter+1;
console.log(city[$(this).text()]);
console.log(first+city[$(this).text()]+last);
$.getJSON(first+city[$(this).text()]+last,function(data){
      var currentTemperature = data.query.results.channel.item.condition.temp  ; // 就可以找到現在溫度
      var getweather=data.query.results.channel.item.condition;
      getweather=getweather['text'];
      // test.push(getweather);
      // console.log("test:"+test);
      console.log("weather:"+getweather);
      //setVariable(a,currentTemperature );
      var id="route2";
      sky(getweather , id);
      console.log(getweather+","+id);
      // start animation!
    }
    )
}
);
//end of 2
// 3
$(".region3").each(function(){
  var first = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
    var last = '%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
var a = $(this).text();      
console.log("LBJ3"+a);
counter=counter+1;
console.log(city[$(this).text()]);
console.log(first+city[$(this).text()]+last);
$.getJSON(first+city[$(this).text()]+last,function(data){
      var currentTemperature = data.query.results.channel.item.condition.temp  ; // 就可以找到現在溫度
      var getweather=data.query.results.channel.item.condition;
      getweather=getweather['text'];
      // test.push(getweather);
      // console.log("test:"+test);
      console.log("weather:"+getweather);
      //setVariable(a,currentTemperature );
      var id="route3";
      sky(getweather , id);
      console.log(getweather+","+id);
      // start animation!
    }
    )
}
);

//end of 3
//4
$(".region4").each(function(){
  var first = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
    var last = '%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
var a = $(this).text();      
console.log("LBJ4"+a);
counter=counter+1;
console.log(city[$(this).text()]);
console.log(first+city[$(this).text()]+last);
$.getJSON(first+city[$(this).text()]+last,function(data){
      var currentTemperature = data.query.results.channel.item.condition.temp  ; // 就可以找到現在溫度
      var getweather=data.query.results.channel.item.condition;
      getweather=getweather['text'];
      // test.push(getweather);
      // console.log("test:"+test);
      console.log("weather:"+getweather);
      //setVariable(a,currentTemperature );
      var id="route4";
      sky(getweather , id);
      console.log(getweather+","+id);
      // start animation!
    }
    )
}
);
//end of 4
console.log("^___^");
   // sky(getweather);
//end of change weather

//weather icon
////////// var skycons = new Skycons({"color": "white"});

// //////////  skycons.play();
// //////////  skycons.set("#route2", Skycons.CLOUDY);
//end of weather icon

var sky=function(getweather , id){

  var skycons = new Skycons({"color": "white"});

  skycons.play();
  console.log("Sky in");


  if(weather[getweather]=='CLOUDY'){
    skycons.set(id, Skycons.CLOUDY);}
    else if (weather[getweather]=='RAIN'){
     skycons.set(id, Skycons.RAIN);}
     else if (weather[getweather]=='CLEAR_DAY'){
       skycons.set(id, Skycons.CLEAR_DAY);}
       else if (weather[getweather]=='PARTLY_CLOUDY_DAY'){
         skycons.set(id, Skycons.PARTLY_CLOUDY_DAY);}
         else if (weather[getweather]=='CLOUDY'){
           skycons.set(id, Skycons.CLOUDY);}
           else if (weather[getweather]=='WIND'){
             skycons.set(id, Skycons.WIND);}
             else if (weather[getweather]=='SLEET'){
               skycons.set(id, Skycons.SLEET);}



             }


             $('#myModal').on('show.bs.modal', function () {
               $('.all').addClass('blur');
             })

             $('#myModal').on('hide.bs.modal', function () {
               $('.all').removeClass('blur');
             })

             $('#myModal2').on('show.bs.modal', function () {
               $('.all').addClass('blur');
             })

             $('#myModal2').on('hide.bs.modal', function () {
               $('.all').removeClass('blur');
             })

             $(document).ready(function(){
              $("#sport-routes").click(function(){
        // alert("sportttttttttt.");

      });
              $("#nature-routes").click(function(){
        // alert("naturrrrrrre");
        var startroute1=$(".startroute1");
        startroute1.text("木柵");
        var endroute1=$(".endroute1");
        endroute1.text("貓空");

        var startroute2=$(".startroute2");
        startroute2.text("萬里");
        var endroute2=$(".endroute2");
        endroute2.text("金山");

        var startroute3=$(".startroute3");
        startroute3.text("新山馬");
        var endroute3=$(".endroute3");
        endroute3.text("崙山");

        var startroute4=$(".startroute4");
        startroute4.text("武荖坑");
        var endroute4=$(".endroute4");
        endroute4.text("冬山河親水公園");

        var startroute5=$(".startroute5");
        startroute5.text("百果山遊樂區");
        var endroute5=$(".endroute5");
        endroute5.text("鳳山寺");
        
      });
              $("#city-routes").click(function(){
        // alert("Cityyyyyyyy.");
        var startroute1=$(".startroute1");
        startroute1.text("八卦山");
        var endroute1=$(".endroute1");
        endroute1.text("松柏嶺");
        var startroute2=$(".startroute2");
        startroute2.text("南港");
        var endroute2=$(".endroute2");
        endroute2.text("六張犁");
        var startroute3=$(".startroute3");
        startroute3.text("銅鑼");
        var endroute3=$(".endroute3");
        endroute3.text("九湖村");
        var startroute4=$(".startroute4");
        startroute4.text("美麗島大道");
        var endroute4=$(".endroute4");
        endroute4.text("中央公園");
        
      });
            });